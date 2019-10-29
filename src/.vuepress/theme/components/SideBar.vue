<template>
  <aside class="pv4 pv5-l br b--light-gray | sidebar">
    <Affix relative-element-selector="#main"
      style="width: 20rem;"
      :offset="{ top: -40, bottom: 40 }">
      
      <h4 class="ma0 f5">
        <router-link class="relative db ph3 ph4-l pv1 link dark-gray hover-hot-pink side-link"
          :to="$page.path">
          {{ $page.title }}
        </router-link>
      </h4>

      <SideLinks :items="items" />
    </Affix>
  </aside>
</template>

<script>
import { Affix } from 'vue-affix'
import SideLinks from '@theme/components/SideLinks.vue'

export default {
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

  components: {
    Affix,
    SideLinks
  }
}
</script>

<style lang="css">
.sidebar {
  top: 62px;
  width: 20rem;
}
</style>