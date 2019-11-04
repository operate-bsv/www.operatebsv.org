<template>
  <div class="ph3 ph4-ns pv4 bg-near-white">
    <div class="flex items-center f4 f3-ns lh-title fw5">
      <span class="mr2 hot-pink">1.</span>
      <span class="dark-pink">Transaction inspector</span>
    </div>

    <p class="measure-wide mv3 f5 lh-copy">
      Use the transaction inspector to load and execute a transaction. Not every
      transaction will contain a valid tape, but try any Twetch, Bitpaste,
      Bitstagram or WeatherSV transaction.
    </p>

    <div class="relative bg-white">
      <div class="absolute top-0 left-0 bottom-0 flex flex-column justify-center">
        <span class="pa3 f7 silver lh-block">TXID:</span>
      </div>
      <input type="text"
        class="input-reset w-100 pa3 pl5 mono f5 lh-copy gray hover-dark-gray bg-transparent ba bw1 b--transparent outline-0"
        v-model="txid" />
    </div>

    <div v-if="showResult"
      class="language-json mt4"
      :class="{'is-loading': isLoading}">
      <pre class="language-json" style="margin:0;"><code v-html="scriptResult" /></pre> 
    </div>
    <div v-else-if="error" class="flex items-center mt4 pa3 bg-dark-red white">
      <AlertIcon class="f3 mr3" />
      <p class="mv0 f6 lh-copy" style="margin: 0;">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import prism from 'prismjs'
import 'prismjs/components/prism-json'
import AlertIcon from 'vue-material-design-icons/Alert'

export default {
  data() {
    return {
      txid: null,
      error: null,
      result: null,
      isLoading: false
    }
  },

  computed: {
    isValid() {
      return /^[0-9a-f]{64}$/.test(this.txid)
    },

    showResult() {
      return this.isLoading || this.result;
    },

    scriptResult() {
      if (this.result) {
        const code = JSON.stringify(this.result, null, 2);
        return prism.highlight(code, prism.languages.json, 'json');
      }
      
    },
  },

  beforeMount() {
    const query = new URLSearchParams(window.location.search)
    if ( query.has('txid') ) {
      this.txid = query.get('txid')
    }
  },

  watch: {
    txid(val) {
      if (this.isValid) {
        this.loadTx()
        this.result = null
        this.error = null
      }
    }
  },

  methods: {
    loadTx() {
      const url = `https://functions.chronoslabs.net/api/tapes/${ this.txid }`
      this.isLoading = true
      return axios.get(url, { transformResponse: [this.transformResponse] })
        .then(r => {
          this.result = r.data.data
          this.isLoading = false
        })
        .catch(e => {
          this.error = e.message
          this.isLoading = false
        })
    },

    setTxid(txid) {
      this.txid = txid;
    },

    transformResponse(r) {
      const tr = r.replace(/(\d+\.\d{15,}|\d{16,}(\d+)?)(,|\]|})/g, '"$1"$3')
      return JSON.parse(tr)
    }
  },

  components: {
    AlertIcon
  }
}
</script>

<style lang="scss" scoped>
input[type="text"]:focus {
  border-color: #FF41B4;
}
</style>

