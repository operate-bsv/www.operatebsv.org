<template>
  <div class="helvetica dark-gray">
    <header class="bb b--light-gray">
      <NavBar :logo="false" />

      <div class="ph3 ph4-ns pv4 pv5-l">
        <div class="w-100 mw8 center">
          <h1 class="mt0 mb2">
            <img src="~@assets/images/logo-lg.png"
              srcset="~@assets/images/logo-lg@2x.png 2x"
              alt="Operate | BSV" />
          </h1>
          <h2 class="ma0 f3 fw4 lh-title mid-gray">
            {{ $site.description }}
          </h2>
        </div>
      </div>
    </header>

    <main>
      <div class="pv4 pv5-ns ph3 ph4-l bg-washed-blue standfirst">
        <div class="w-100 mw8 center">
          <Content slot-key="standfirst" />
        </div>
      </div>

      <div class="pv4 pv5-ns ph3 ph4-l near-white bg-blue bt bb b--dark-blue">
        <div class="w-100 mw8 center">
          <h2 class="mt3 mb4 mb5-l f5 lh-title white-70 tracked ttu">Features</h2>
          <Content slot-key="features" />
        </div>
      </div>

      <div class="pv4 pv5-ns pv6-l ph3 ph4-l bg-washed-blue bb b--light-gray">
        <div class="w-100 mw8 center">
          <h2 class="mt0 mb4 f5 lh-title mid-gray tracked tc ttu">Start using Operate</h2>
          <p class="ma0 pv3 f5 lh-block tc">
            <router-link class="dib mh3 ph3 ph4-ns pv3 link white bg-animate bg-blue hover-bg-hot-pink br2"
              to="/docs">
              Read the docs
            </router-link>
            <router-link class="dib mh2 ph3 ph4-ns pv3 link white bg-animate bg-blue hover-bg-hot-pink br2"
              to="/library">
              See the Op library
            </router-link>
            <a class="dib mh2 ph3 ph4-ns pv3 link white bg-animate bg-blue hover-bg-hot-pink br2"
              href="http://github.com/operate-bsv">
              View on Github
            </a>
          </p>
        </div>
      </div>
    </main>

    <footer class="ph3 ph4-ns pv4 pt5-l">
      <div class="w-100 mw8 center">
        <NavLinks class="mb4" />
        <div class="pt4 measure-wide bt b--light-gray">
          <p class="mt0 mb3 f7 lh-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at diam quis nunc blandit ornare sed eu massa. Phasellus quis nisl a purus varius gravida ullamcorper at dui.</p>
          <p class="mt5 mb3 f7 lh-copy">&copy; Copyright 2019 Chronos Labs Ltd.</p>
        </div>
      </div>
    </footer>
    
  </div>
</template>

<script>
import NavBar from '@theme/components/NavBar.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  computed: {
    isCustomRoute() {
      return !!this.$route.meta.component;
    }
  },

  components: {
    NavBar,
    NavLinks
  }
}
</script>

<style lang="scss">
.standfirst {
  padding-bottom: 8rem;
  background-image: url('~@assets/images/bg-tape.png');
  background-size: 1200px;
  background-position: right -8rem bottom 4rem;
  background-repeat: no-repeat;

  @media only screen and (min-device-pixel-ratio: 2),
         only screen and (min-resolution: 192dpi),
         only screen and (min-resolution: 2dppx) {
    background-image: url('~@assets/images/bg-tape@2x.png');
  }
  @media screen and (min-width: 60em) {
    background-size: 1600px;
  }
  @media screen and (min-width: 80em) {
    background-position: center bottom 4rem;
  }
  @media screen and (min-width: 100em) {
    padding-bottom: 10rem;
    background-size: 100%;
  }
}
</style>