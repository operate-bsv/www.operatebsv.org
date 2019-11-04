<template>
  <div class="helvetica dark-gray">
    <header class="bb b--light-gray">
      <NavBar :logo="false" />

      <div class="ph3 ph4-ns pv4 pv5-l">
        <div class="w-100 mw8 center">
          <h1 class="mt0 mb3 mr4">
            <img src="~@assets/images/logo-lg.png"
              srcset="~@assets/images/logo-lg@2x.png 2x"
              alt="Operate | BSV" />
          </h1>
          <h2 class="mb3 f4 f3-ns fw4 lh-title mid-gray">
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

      <div class="pv4 pv5-ns ph3 ph4-l bg-washed-blue">
        <div class="w-100 mw8 center">
          <h2 class="mt0 mb4 f5 lh-title mid-gray tracked tc ttu">Start using Operate</h2>
          <ul class="flex-ns justify-center-ns ma0 ph0 pv3 list f5 lh-block tc">
            <li class="mb3 mb0-ns">
              <router-link class="dib ph3 mh2-ns pv3 link white bg-animate bg-blue hover-bg-hot-pink br2 cta"
                to="/docs">
                Read the docs
              </router-link>
            </li>
            <li>
              <router-link class="dib ph3 mh2-ns pv3 link white bg-animate bg-blue hover-bg-hot-pink br2 cta"
                to="/library">
                Browse Op library
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </main>

    <Footer />
    
  </div>
</template>

<script>
import NavBar from '@theme/components/NavBar.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  computed: {
    isCustomRoute() {
      return !!this.$route.meta.component;
    }
  },

  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
.standfirst {
  padding-bottom: 8rem;
  background-image: url('~@assets/images/bg-tape.png');
  background-size: 1200px;
  background-position: right -10rem bottom 4rem;
  background-repeat: no-repeat;

  @media only screen and (min-device-pixel-ratio: 2),
         only screen and (min-resolution: 192dpi),
         only screen and (min-resolution: 2dppx) {
    background-image: url('~@assets/images/bg-tape@2x.png');
  }
  @media screen and (min-width: 30em) {
    background-position: right -8rem bottom 4rem;
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

.cta {
  width: 12rem;
}
</style>