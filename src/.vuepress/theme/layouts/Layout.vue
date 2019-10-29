<template>
  <div class="helvetica dark-gray">
    <header class="bb b--light-gray">
      <NavBar />

      <div class="ph3 ph4-ns pv4 pv5-l" v-if="$page.frontmatter.home">
        <div class="w-100 mw8 center">
          <h1 class="mt0 mb2">
            <img src="~@assets/images/logo-lg.png"
              srcset="~@assets/images/logo-lg@2x.png 2x"
              alt="Operate | BSV" />
          </h1>
          <h2 class="ma0 f3 fw4 lh-title mid-gray">
            An extensible OP_RETURN meta programming protocol.
          </h2>
        </div>
      </div>
    </header>

    <main class="pv4 ph3 ph4-l">
      <div class="w-100 mw8 center">
        <component
          :is="$route.meta.component"
          v-if="isCustomRoute" />
        <Content />
      </div>
    </main>
    
  </div>
</template>

<script>
import NavBar from '@theme/components/NavBar.vue'

export default {
  computed: {
    isCustomRoute() {
      return !!this.$route.meta.component;
    }
  },

  components: {
    NavBar
  }
}

</script>

<style lang="scss">
.main {
  margin-left: 20rem;
}
</style>