<template>
  <div class="helvetica dark-gray">
    <header class="bb b--light-gray">
      <NavBar />
    </header>

    <main class="pv4 ph3 ph4-l">
      <article class="w-100 mw7 center">
        <header class="pb4 mb5 bb b--light-gray">
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
        </header>
        <Content />
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
