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
    ['@vuepress/blog', {
      directories: [
        {
          id: 'articles',
          dirname: '_articles',
          layout: 'ArticleIndex',
          itemLayout: 'Article',
          path: '/blog/',
          itemPermalink: '/blog/:slug'
        },
      ]
    }],
    ['seo', {
      type($page) {
        return $page.regularPath.startsWith('/_articles') ? 'article' : 'website';
      },
      author($page, $site) {
        return {
          name: 'Libs',
          twitter: '@libitx'
        }
      },
      twitterCard($page) {
        return $page.frontmatter.image ? 'summary_large_image' : 'summary';
      },
      customMeta(add) {
        add('twitter:site', '@operate_bsv')
      }
    }]
  ],

  themeConfig: {
    domain: 'https://www.operatebsv.org',
    author: 'Libs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' },
      { text: 'Library', link: '/library' },
      { text: 'Playground', link: '/playground' },
      { text: 'Articles', link: '/blog' }
    ]
  },

  markdown: {
    externalLinks: {
      target: '_blank', rel: 'noopener' 
    }
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