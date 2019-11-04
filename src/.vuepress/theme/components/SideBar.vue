<template>
  <aside class="pv5 br b--light-gray | sidebar">
    <component
      :is="affixComponent"
      v-if="affixComponent"
      relative-element-selector="#main"
      class="sidebar-affix"
      :offset="{ top: -40, bottom: 60 }">
      
      <h4 class="ma0 f5">
        <router-link class="relative db ph3 pl4-l pv1 link dark-gray hover-hot-pink side-link"
          :to="$page.path">
          {{ $page.title }}
        </router-link>
      </h4>
      <SideLinks :items="items" />

    </component>
    <div v-else>

      <h4 class="ma0 f5">
        <router-link class="relative db ph3 pl4-l pv1 link dark-gray hover-hot-pink side-link"
          :to="$page.path">
          {{ $page.title }}
        </router-link>
      </h4>
      <SideLinks :items="items" />
      
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

  computed: {
    items() {
      return this.$page.headers.reduce((headers, h, i, source) => {
        if (h.level === 2) {
          headers.push({ ...h, path: '#' + h.slug, children: [] })
        } else if (headers[headers.length-1]) {
          headers[headers.length-1].children.push({ ...h, path: '#' + h.slug })
        }
        return headers;
      }, [])
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