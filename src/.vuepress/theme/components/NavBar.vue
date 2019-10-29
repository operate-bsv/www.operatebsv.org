<template>
  <div class="flex items-center justify-between ph3 ph4-l | navbar">
    <div class="pt1">
      <router-link to="/" v-if="!$page.frontmatter.home">
        <img src="~@assets/images/logo-sm.png"
          srcset="~@assets/images/logo-sm@2x.png 2x"
          alt="Operate | BSV" />
      </router-link>
    </div>
    <NavLinks />
  </div>
</template>

<script>
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  components: {
    NavLinks
  }
}
</script>

<style lang="scss">
.navbar {
  height: 62px;

  .router-link-active:not(.nav-item-home),
  .router-link-exact-active {
    border-color: #FF41B4;
  }
}
</style>