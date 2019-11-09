const path = require('path')

module.exports = {
  title: 'Operate',
  description: 'On-chain functions. Turing complete Bitcoin. Limitless possibilities.',

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css' }],
    ['script', { src: 'https://unpkg.com/bsv@1.0.0' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://www.operatebsv.org/favicon.png' }]
  ],

  plugins: [
    ['vuepress-plugin-container', {
      type: 'success',
      defaultTitle: {
        '/': 'Success'
      }
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
      defaultTitle: {
        '/': 'Warning'
      }
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
      defaultTitle: {
        '/': 'Danger'
      }
    }],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.side-link',
      headerAnchorSelector: '.header-anchor'
    }],
    ['autometa', {
      site: {
        name   : 'Operate',
        twitter: 'operate_bsv'
      },
      canonical_base: 'https://www.operatebsv.org'
    }]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' },
      { text: 'Library', link: '/library' },
      { text: 'Playground', link: '/playground' },
      { text: 'Articles', link: '/blog' }
    ]
  },

  dest: './dist',

  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '../assets')
      }
    }
  }
}