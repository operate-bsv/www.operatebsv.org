<template>
  <div class="helvetica dark-gray">
    <header class="bb b--light-gray">
      <NavBar />
    </header>

    <main class="pv4 ph3 ph4-l">
      <div class="w-100 mw8 center">
        <h1 class="f2 lh-title">Articles</h1>

        <article v-for="post in $pagination.pages" class="mb4 flex-ns justify-between-ns">
          <div class="w-60-ns w-two-thirds-l pr2-ns pr3-l mb3">
            <a class="db link bg-center cover article-card"
              :href="post.path"
              :style="cardStyles(post)">
              &nbsp;
            </a>
          </div>
          <div class="w-40-ns w-third-l pl2-ns pl3-l pb3">
            <a class="no-underline" :href="post.path">
              <h2 class="mt0 mb1 f3 lh-title link dark-gray hover-hot-pink">{{ post.title }}</h2>
              <p class="mt0 mb3 mb4-l f5 lh-copy link gray hover-hot-pink">
                {{ post.frontmatter.description }}
              </p>
            </a>
            <ul class="list ma0 pa0 f7 f6-l lh-copy gray">
              <li class="dib mr3" v-if="post.frontmatter.date">
                <time :date="pubDateDB(post)" pubdate>
                  <CalendarIcon :size="iconSize" class="dib silver v-mid" />
                  {{ pubDateStr(post) }}
                </time>
              </li>
              <li class="dib mr3" v-if="post.frontmatter.author">
                <AccountBoxIcon :size="iconSize" class="dib silver v-mid" />
                {{ post.frontmatter.author }}
              </li>
            </ul>
          </div>
        </article>

      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import moment from 'moment'
import AccountBoxIcon from 'vue-material-design-icons/AccountBox'
import CalendarIcon from 'vue-material-design-icons/Calendar'
import NavBar from '@theme/components/NavBar.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  data() {
    return {
      iconSize: 20
    }
  },

  mounted() {
    window.addEventListener('resize', e => {
      this.setIconSize(e.target.outerWidth)
    })
    this.setIconSize(window.outerWidth)
  },

  methods: {
    cardStyles(post) {
      return {
        backgroundImage: `url(${ post.frontmatter.card })`,
        backgroundSize: '640px 300px'
      }
    },

    pubDateDB(post) {
      return moment(post.frontmatter.date).format('YYYY-MM-DD')
    },

    pubDateStr(post) {
      return moment(post.frontmatter.date).format('Do MMM YYYY')
    },

    setIconSize(width) {
      if (width < 960) {
        this.iconSize = 16;
      } else {
        this.iconSize = 20;
      }
    }
  },

  components: {
    NavBar,
    Footer,
    AccountBoxIcon,
    CalendarIcon
  }
}
</script>

<style lang="scss">
.article-card {
  min-height: 8rem;
  @media screen and (min-width: 30em) {
    min-height: 14rem;
  }
}
</style>