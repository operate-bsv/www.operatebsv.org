<template>
  <div class="helvetica dark-gray">
    <header class="bb b--light-gray">
      <NavBar />
    </header>

    <main class="pv4 ph3 ph4-l">
      <div class="w-100 mw8 center">
        <component
          :is="$route.meta.component"
          v-if="isCustomRoute" />
        <Content v-else />
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
