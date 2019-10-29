<template>
  <ul class="list ma0 pa0 f5 lh-copy" :class="level === 1 ? 'fw5' : 'fw4'">
    <li v-for="item in items">
      <router-link class="relative db pv1 ph3 ph4-l link mid-gray hover-hot-pink outline-0 side-link"
        :to="item.path">
        <span class="db" :class="level === 1 ? 'pl0' : 'pl2'">
          {{ item.title }}
        </span>
        
      </router-link>
      <SideLinks :items="item.children" :level="level + 1"
        v-if="item.children && item.children.length" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SideLinks',

  props: {
    items: {
      type: Array,
      required: true
    },
    level: {
      type: Number,
      default: 1
    }
  },

  computed: {
    levelClasses() {
      switch(this.level) {
        case 1:
          return 'fw5';
        case 2:
          return 'fw4';
      }
    }
  }
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