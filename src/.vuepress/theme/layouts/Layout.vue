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
