<template>
  <ul class="ma0 pa0 list f5 lh-block cf">
    <li class="fw5"
      :class="navItemLiClasses(item)"
      v-for="item in $site.themeConfig.nav">

      <NavDropdown
        :items="item.items"
        v-if="dropDown && item.items">
        <router-link class="pv2 link mid-gray hover-hot-pink bb bw1 b--transparent outline-0"
          :class="navItemAClasses(item)"
          :to="item.link"
          v-if="item.link">
          {{ item.text }}
          <MenuIcon class="v-mid" />
        </router-link>
      </NavDropdown>

      <router-link class="pv2 link mid-gray hover-hot-pink bb bw1 b--transparent outline-0"
        :class="navItemAClasses(item)"
        :to="item.link"
        v-else>
        {{ item.text }}
      </router-link>

    </li>
  </ul>
</template>

<script>
import NavDropdown from '@theme/components/NavDropdown.vue'
import MenuIcon from 'vue-material-design-icons/MenuDown'

export default {
  props: {
    dropDown: {
      default: true
    }
  },

  methods: {
    navItemLiClasses(item) {
      if (item.text === 'Home') {
        return 'dn dib-ns mr3 mr4-l';
      } else if (item.text === 'Docs' && this.dropDown) {
        return 'dib mr3';
      } else {
        return 'dib mr3 mr4-l';
      }
    },

    navItemAClasses(item) {
      return `nav-item-${ item.text.toLowerCase() }`
    }
  },

  components: {
    NavDropdown,
    MenuIcon
  }
}
</script>

<style lang="scss" scoped>
li:last-child {
  margin-right: 0 !important;
}

.router-link-active:not(.nav-item-home),
.router-link-exact-active {
  border-color: #FF41B4;
}
</style>