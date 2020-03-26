<template>
  <div class="relative pv2" @mouseenter="open=true" @mouseleave="open=false">
    <slot />
    <div class="absolute top-100 z-5 | navdrop">
      <transition name="drop">
        <ul class="ph0 pv2 list f6 lh-block bg-white ba b--light-gray br1"
          v-if="open">
          <li class="fw4 nowrap"
            v-for="item in items">

            <router-link class="db ph3 pv2 link mid-gray hover-hot-pink bl bw1 b--transparent outline-0"
              :to="item.link">
              <MenuIcon :size="16" class="v-mid hot-pink" />
              {{ item.text }}
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      open: false
    }
  },

  computed: {
    openDropdown() {
      return this.open ? 'db' : 'dn';
    }
  }
}
</script>

<style lang="scss" scoped>
.navdrop {
  left: 50%;
  transform: translateX(-50%);

  ul {
    transform-origin: 50% 0;
  }

  .menu-right-icon {
    opacity: 0;
  }
}

.drop-enter-active, .drop-leave-active {
  transition: opacity .3s, transform .15s;
}

.drop-enter, .drop-leave-to {
  transform: translateY(-0.5rem) scale(0.8);
  opacity: 0;
}

.router-link-exact-active {
  border-color: #FF41B4;
}
</style>