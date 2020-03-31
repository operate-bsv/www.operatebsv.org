<template>
  <div>
    <h4 class="ma0 ph3 pl4-l pv1 link dark-gray">
      Documentation
    </h4>

    <ul class="list ma0 pa0 f5 lh-copy fw5">
      <li v-for="item in $site.themeConfig.nav[1].children">
        <router-link class="relative db pv1 ph3 pl4-l link mid-gray hover-hot-pink outline-0 side-link"
          :to="item.path">
          <span class="db pl0">{{ item.title }}</span>
        </router-link>

        <ul class="list ma0 pa0 f5 lh-copy fw4"
          v-if="showSubNav(item.path)">
          <li v-for="item in items">
            <router-link class="relative db pv1 ph3 pl4-l link mid-gray hover-hot-pink outline-0 side-link"
              :to="item.path">
              <span class="db pl2">{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$page.headers.reduce((headers, h, i, source) => {
        if (h.level === 2) {
          headers.push({ ...h, path: '#' + h.slug })
        }
        return headers;
      }, [])
    }
  },

  methods: {
    showSubNav(path) {
      return path.replace(/\W+$/, '') === this.$route.path.replace(/\W+$/, '')
    }
  },
}
</script>

<style lang="scss">
.side-link {
  &:before {
    display: none;
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.4rem;
    background-color: #FF41B4;
  }

  &.router-link-exact-active:before {
    display: block;
  }
}
</style>