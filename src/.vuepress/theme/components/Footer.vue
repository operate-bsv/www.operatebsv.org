<template>
  <footer class="ph3 ph4-l pv4 pt5-l bt b--light-gray">
    <div class="w-100 mw8 center">
      <NavLinks class="mb4" />
      <div class="pt4 measure-wide bt b--light-gray">
        <ul class="ma0 mb4 ph0 pv3 list f6 fw7 lh-block">
          <li class="dib mb3 mb0-ns mr3-ns">
            <a href="https://twitter.com/operate_bsv"
              target="_blank"
              class="inline-flex items-center dib ph3 pv3 no-underline dark-gray hover-white bg-washed-blue ba br2 b--dark-gray | footer-btn">
              <TwitterIcon :size="21" class="mr2" />
              <span class="db">Follow @operate_bsv</span>
            </a>
          </li>
          <li class="dib">
            <a href="https://github.com/operate-bsv"
              target="_blank"
              class="inline-flex items-center dib ph3 pv3 no-underline dark-gray hover-white bg-washed-blue ba br2 b--dark-gray | footer-btn">
              <GithubIcon :size="21" class="mr2" />
              <span class="db">Check the code</span>
            </a>
          </li>
        </ul>
        <p class="mt0 mb3 f7 lh-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at diam quis nunc blandit ornare sed eu massa. Phasellus quis nisl a purus varius gravida ullamcorper at dui.</p>
        <p class="mt5 mb3 f7 lh-copy">&copy; Copyright 2019 Chronos Labs Ltd.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import NavLinks from '@theme/components/NavLinks.vue'
import TwitterIcon from 'vue-material-design-icons/Twitter'
import GithubIcon from 'vue-material-design-icons/GithubCircle'

export default {
  components: {
    NavLinks,
    TwitterIcon,
    GithubIcon
  }
}
</script>

<style lang="scss">
.footer-btn {
  transition: color .15s ease-in,
              background-color .15s ease-in,
              border-color .15s ease-in;
  &:hover {
    background-color: #FF41B4;
    border-color: transparent;
  }
}
</style>