<template>
  <footer class="ph3 ph4-l pv4 pt5-l bt b--light-gray">
    <div class="w-100 center"
      :class="widthClass">
      <NavLinks class="mb4" :drop-down="false" />
      <div class="pt4 measure-wide bt b--light-gray">
        <p class="mt0 mb4 f7 lh-copy">Have questions? Need help getting started? Feel free to reach out to us on Twitter, open a Github issue, or find us in <a class="link blue hover-hot-pink" href="https://bitdb.network/atlantis">Atlantis Slack</a>.</p>
        <ul class="dib list ma0 ph0 pt0 pb4 f6 lh-copy bb b--light-gray">
          <li class="dib mr3">
            <a href="https://twitter.com/operate_bsv"
              target="_blank"
              class="link blue hover-hot-pink">
              <TwitterIcon :size="20" class="mr1 v-mid" />
              <span>Follow @operate_bsv</span>
            </a>
          </li>
          <li class="dib mr3">
            <a href="https://github.com/operate-bsv"
              target="_blank"
              class="link blue hover-hot-pink">
              <GithubIcon :size="20" class="mr1 v-mid" />
              <span>View on Github</span>
            </a>
          </li>
        </ul>
        <p class="mt4 mb3 f7 lh-copy">&copy; Copyright 2019-2020 Chronos Labs Ltd.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import NavLinks from '@theme/components/NavLinks.vue'
import TwitterIcon from 'vue-material-design-icons/Twitter'
import GithubIcon from 'vue-material-design-icons/Github'

export default {
  props: {
    narrow: Boolean
  },

  computed: {
    widthClass() {
      return this.narrow ? 'mw7' : 'mw8';
    }
  },

  components: {
    NavLinks,
    TwitterIcon,
    GithubIcon
  }
}
</script>

<style lang="scss">

</style>