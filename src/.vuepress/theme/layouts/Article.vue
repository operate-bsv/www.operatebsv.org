<template>
  <div class="helvetica dark-gray">
    <header class="bb b--light-gray">
      <NavBar />
    </header>

    <main>
      <article itemscope itemtype="http://schema.org/Article">
        <meta itemprop="url" :content="$site.themeConfig.domain + $page.path">
        <header class="mb5 ph3 ph4-l"
          :class="bannerClasses"
          :style="bannerStyles">
          <div class="w-100 mw7 pv4 center bb b--light-gray">
            <h1 class="mv0 f2 lh-title" itemprop="name">
              <span :class="titleClasses">{{ $page.frontmatter.title }}</span>
            </h1>
            <ul class="mb0 list f6 lh-block gray" :class="metaClasses">
              <li class="dib mr3" v-if="this.$page.frontmatter.date">
                <time :date="pubDateDB" pubdate>
                  <CalendarIcon :size="20" class="dib mr1 silver v-mid" />
                  <span itemprop="datePublished">{{ pubDateStr }}</span>
                </time>
              </li>
              <li class="dib mr3" v-if="$page.frontmatter.author">
                <AccountBoxIcon :size="20" class="dib mr1 silver v-mid" />
                <span itemprop="author">{{ $page.frontmatter.author }}</span>
              </li>
            </ul>
          </div>
        </header>

        <div class="pb4 pb5-l ph3 ph4-l">
          <Content class="w-100 mw7 center" itemprop="articleBody" />
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
      str += this.$page.frontmatter.dark ? ' bg-mid-gray article-banner--dark' : ' article-banner--light';
      return str;
    },

    bannerStyles() {
      if (!this.$page.frontmatter.banner) return;
      return {
        height: '24rem',
        backgroundImage: `url(${ this.$page.frontmatter.banner })`
      }
    },

    titleClasses() {
      if (!this.$page.frontmatter.highlight) return;
      return `dib ph3 pv2 ${ this.$page.frontmatter.highlight }`;
    },

    metaClasses() {
      if (!this.$page.frontmatter.highlight) return 'mt2 pa0';
      return `dib mt0 ph3 pv2 ${ this.$page.frontmatter.highlight }`;
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

.article-banner--light {
  h1, ul {
    text-shadow: 0 0 1rem rgba(#fff, 1);
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
