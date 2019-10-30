<template>
  <div class="content__default">
    <h1 class="mb2">
      Op:
      <span v-if="op">
        {{ op.name }}
        <span class="f3 light-silver">&mdash;</span>
        <span class="f3 mono green">0x{{ op.ref.toUpperCase() }}</span>
      </span>
      
    </h1>
    <router-link class="dib mb4 link f5 mid-gray hover-hot-pink"
      to="/library">
      &laquo; Back to library
    </router-link>

    <template v-if="op">
      <div class="flex justify-between">
        <div class="mr3 mr4-l">
          <table class="w-100 mb3 mono f6 lh-block">
            <tr>
              <th class="pr1 fw4 tl silver">TXID</th>
              <td class="pl1 mid-gray">
                {{ op.txid }}
                <a :href="explorerUrl" class="link blue hover-hot-pink" target="_blank">
                  <LinkIcon :size="16" />
                </a>
              </td>
            </tr>
            <tr>
              <th class="pr1 fw4 tl silver">SHA-256</th>
              <td class="pl1 mid-gray">{{ op.hash }}</td>
            </tr>
            <tr>
              <th class="pr1 fw4 tl silver">Address</th>
              <td class="pl1 mid-gray">{{ op.address }}</td>
            </tr>
          </table>
          <div class="pt1 measure-wide bt b--light-gray content__op"
            v-html="mardownComments" />
        </div>
        
        <div class="w5 ml3 ml3-l">
          <table class="w-100 mb3 f6 lh-block mid-gray collapse"
            v-if="Object.keys(op.meta).length">
            <thead>
              <tr>
                <th class="pa1 dark-gray bg-light-gray tl" colspan="2">Meta</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bb b--light-gray" v-for="val, key in op.meta">
                <th class="pa1 w4 tl">{{ key }}</th>
                <td class="pa1">{{ val }}</td>
              </tr>
            </tbody>
          </table>
          <table class="w-100 f6 lh-block mid-gray collapse">
            <thead>
              <tr>
                <th class="pa1 dark-gray bg-light-gray tl" colspan="2">Versions (#todo)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bb b--light-gray" v-for="val, key in op.meta">
                <td class="pa1 w4">0.0.1</td>
                <td class="pa1 mono">abcdef</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="language-lua">
        <pre class="language-lua"><code v-html="highlightedCode" /></pre>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import prism from 'prismjs'
import 'prismjs/components/prism-lua'
import markdown from 'markdown-it'
import LinkIcon from 'vue-material-design-icons/OpenInNew'

const md = markdown()

export default {
  data() {
    return {
      op: null
    }
  },

  computed: {
    explorerUrl() {
      return `https://whatsonchain.com/tx/${ this.op.txid }`;
    },

    comments() {
      if (!this.op.script) return '';
      return this.op.script
        .replace(/^--\[\[(.+)\]\]--.*/s, '$1')
         .replace(/\$REF/g, `0x${ this.op.ref.toUpperCase() }`)
        .replace(/^@\w+.*$/gm, '')
    },

    mardownComments() {
      return md.render(this.comments)
    },

    code() {
      if (!this.op.script) return '';
      return this.op.script
        .replace(/^--\[\[.+\]\]--/s, '')
        .trim()
    },

    highlightedCode() {
      return prism.highlight(this.code, prism.languages.lua, 'lua');
    }
  },

  beforeMount() {
    this.fetchOp()
  },

  methods: {
    fetchOp() {
      const url = 'https://functions.chronoslabs.net/api/functions/' + this.$route.query.ref;
      return axios.get(url, { params: { script: true } })
        .then(r => {
          this.op = r.data.data;
          this.$page.frontmatter.title = this.op.name
          window.document.title = this.$title
        })
        .catch(e => this.$router.push('/library/'))
    }
  },

  components: {
    LinkIcon
  }
}
</script>