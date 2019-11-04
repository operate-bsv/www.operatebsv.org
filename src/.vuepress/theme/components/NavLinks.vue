<template>
  <ul class="ma0 pa0 list f5 lh-block cf">
    <li class="mr3 mr4-l fw5"
      :class="navItemLiClasses(item)"
      v-for="item in $site.themeConfig.nav">
      <router-link class="pv2 link mid-gray hover-hot-pink bb bw1 b--transparent outline-0"
        :class="navItemAClasses(item)"
        :to="item.link">
        {{ item.text }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    navItemLiClasses(item) {
      if (item.text === 'Home') {
        return 'dn dib-ns';
      } else {
        return 'dib';
      }
    },

    navItemAClasses(item) {
      return `nav-item-${ item.text.toLowerCase() }`
    }
  }
}
</script>

<style lang="scss" scoped>
li:last-child {
  margin-right: 0 !important;
}
</style>