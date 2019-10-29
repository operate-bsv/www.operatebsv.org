<template>
  <ul class="ma0 pa0 list f5 lh-block cf">
    <li class="dib ml3 ml4-l fw5" v-for="item in $site.themeConfig.nav">
      <router-link class="pv2 link mid-gray hover-hot-pink bb bw1 b--transparent outline-0"
        :class="navItemClass(item)"
        :to="item.link">
        {{ item.text }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    navItemClass(item) {
      return `nav-item-${ item.text.toLowerCase() }`
    }
  }
}
</script>
