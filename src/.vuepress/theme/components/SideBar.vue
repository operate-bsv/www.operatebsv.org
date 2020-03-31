<template>
  <aside class="pv5 br b--light-gray | sidebar">
    <component
      :is="affixComponent"
      v-if="affixComponent"
      relative-element-selector="#main"
      class="sidebar-affix"
      :offset="{ top: -40, bottom: 60 }">
      
      <SideLinks />

    </component>
    <div v-else>

      <SideLinks />
      
    </div>
  </aside>
</template>

<script>
import SideLinks from '@theme/components/SideLinks.vue'

export default {
  data() {
    return {
      affixComponent: null
    }
  },

  mounted() {
    import('vue-affix').then(module => {
      this.affixComponent = module.Affix
    })
  },

  components: {
    SideLinks
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: none;
  top: 62px;

  @media screen and (min-width: 40em) {
    display: block;
    flex: 0 0 16rem;
  }

  @media screen and (min-width: 60em) {
    flex: 0 0 20rem;
  }
}

.sidebar-affix {
  width: 16rem;

  @media screen and (min-width: 60em) {
    width: 20rem;
  }
}
</style>