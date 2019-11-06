<template>
  <div class="content__default">
    <h1 class="mb2">
      Op:
      <span v-if="op">
        {{ op.name }}
        <span class="db di-ns f5 f4-ns f3-l">
          <span class="dn di-ns light-silver">&mdash;</span>
          <span class="mono silver">0x{{ op.ref.toUpperCase() }}</span>
        </span>
      </span>
    </h1>
    <router-link class="dib mb4 link f5 mid-gray hover-hot-pink"
      to="/library">
      &laquo; Back to library
    </router-link>

    <template v-if="op">
      <div class="flex-l justify-between-l">
        <div class="">
          <table class="dn dt-ns w-100 mb3 mono f6 lh-block">
            <tr>
              <th class="pr1 fw4 tl silver">TXID</th>
              <td class="pl1 mid-gray">
                <span v-html="$options.filters.truncHash(op.txid)" />
                <a :href="explorerUrl" class="link blue hover-hot-pink" target="_blank">
                  <LinkIcon :size="16" />
                </a>
              </td>
            </tr>
            <tr>
              <th class="pr1 fw4 tl silver">SHA-256</th>
              <td class="pl1 mid-gray" v-html="$options.filters.truncHash(op.hash)"></td>
            </tr>
            <tr>
              <th class="pr1 fw4 tl silver">Address</th>
              <td class="pl1 mid-gray">{{ op.addr }}</td>
            </tr>
          </table>
          <div class="pt1 measure-wide bt b--light-gray content__op"
            v-html="mardownComments" />
        </div>
        
        <div class="dn db-l w5 ml4 ml5-l">
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
                <th class="pa1 dark-gray bg-light-gray tl" colspan="2">Versions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bb b--light-gray" v-for="v in versions">
                <td class="pa1 w4">{{ v.meta ? v.meta.version : 'Unknown' }}</td>
                <td class="pa1 mono">
                  <router-link class="link blue hover-hot-pink"
                    :to="{ path: '/library/op/', query: { ref: v.ref } }">
                    0x{{ v.ref.toUpperCase() }}
                  </router-link>
                </td>
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
import prism from 'prismjs'
import 'prismjs/components/prism-lua'
import markdown from 'markdown-it'
import LinkIcon from 'vue-material-design-icons/OpenInNew'
import api from '../api'

const md = markdown()

export default {
  data() {
    return {
      op: null,
      versions: []
    }
  },

  computed: {
    explorerUrl() {
      return `https://whatsonchain.com/tx/${ this.op.txid }`;
    },

    comments() {
      if (!this.op.fn) return '';
      return this.op.fn
        .replace(/^--\[\[(.+)\]\]--.*/s, '$1')
         .replace(/\$REF/g, `0x${ this.op.ref.toUpperCase() }`)
        .replace(/^@\w+.*$/gm, '')
    },

    mardownComments() {
      return md.render(this.comments)
    },

    code() {
      if (!this.op.fn) return '';
      return this.op.fn
        .replace(/^--\[\[.+\]\]--/s, '')
        .trim()
    },

    highlightedCode() {
      return prism.highlight(this.code, prism.languages.lua, 'lua');
    }
  },

  beforeMount() {
    this.fetchOp()
    this.fetchVersions()
  },

  watch: {
    '$route.query.ref'() {
      this.fetchOp()
      this.fetchVersions()
    }
  },

  methods: {
    fetchOp() {
      return api.getOp(this.$route.query.ref)
        .then(r => {
          this.op = r.data.data;
          this.$page.frontmatter.title = this.op.name;
          window.document.title = this.$title;
        })
        .catch(e => this.$router.push('/library/'))
    },

    fetchVersions() {
      return api.getVersions(this.$route.query.ref)
        .then(r => {
          this.versions = r.data.data;
        })
    }
  },

  filters: {
    truncHash: function(hash) {
      return hash.substr(0, 32) +
        `<span class="dn di-l">${ hash.substr(32, 64) }</span>` +
        '<span class="dn-l">...</span>';
    }
  },

  components: {
    LinkIcon
  }
}
</script>