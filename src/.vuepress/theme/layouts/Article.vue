<template>
  <div class="helvetica dark-gray">
    <header class="bb b--light-gray">
      <NavBar />
    </header>

    <main class="">
      <article class="">
        <header class="mb5 ph3 ph4-l"
          :class="bannerClasses"
          :style="bannerStyles">
          <div class="w-100 mw7 pv4 center bb b--light-gray">
            <h1 class="mb2 f2 lh-title">{{ $page.frontmatter.title }}</h1>
            <ul class="list ma0 pa0 f6 lh-block gray">
              <li class="dib mr3" v-if="this.$page.frontmatter.date">
                <time :date="pubDateDB" pubdate>
                  <CalendarIcon :size="20" class="dib mr1 silver v-mid" />
                  {{ pubDateStr }}
                </time>
              </li>
              <li class="dib mr3" v-if="$page.frontmatter.author">
                <AccountBoxIcon :size="20" class="dib mr1 silver v-mid" />
                {{ $page.frontmatter.author }}
              </li>
            </ul>
          </div>
        </header>

        <div class="pb4 pb5-l ph3 ph4-l">
          <Content class="w-100 mw7 center" />
        </div>
        
      </article>
    </main>

    <Footer narrow />
  </div>
</template>

<script>
import moment from 'moment'
import AccountBoxIcon from 'vue-material-design-icons/AccountBox'
import CalendarIcon from 'vue-material-design-icons/Calendar'
import NavBar from '@theme/components/NavBar.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  computed: {
    bannerClasses() {
      if (!this.$page.frontmatter.banner) return;
      let str = 'flex flex-column justify-end bg-center cover article-banner';
      str += this.$page.frontmatter.dark ? ' article-banner--dark' : ' article-banner--light';
      return str;
    },

    bannerStyles() {
      if (!this.$page.frontmatter.banner) return;
      return {
        height: '24rem',
        backgroundImage: `url(${ this.$page.frontmatter.banner })`
      }
    },

    pubDateDB() {
      return moment(this.$page.frontmatter.date).format('YYYY-MM-DD')
    },

    pubDateStr() {
      return moment(this.$page.frontmatter.date).format('Do MMMM YYYY')
    }
  },

  components: {
    AccountBoxIcon,
    CalendarIcon,
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
.article-banner {
  div.bb {
    border: none;
  }
}

.article-banner--dark {
  h1, ul {
    color: #F4F4F4;
  }
  ul {
    color: #EEEEEE;
    span.silver {
      color: #CCCCCC;
    }
  }
  h1, ul {
    text-shadow: 0 0 1rem rgba(#000, 0.6);
  }
}
</style>
