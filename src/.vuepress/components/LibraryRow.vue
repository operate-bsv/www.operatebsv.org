<template>
  <tr class="bg-animate hover-bg-washed-yellow bt b--light-gray pointer"
    :class="{'bt-0': index === 0 }"
    @click="$router.push({ name: 'op', params: { ref: fn.ref } })">
    <td class="pv2 pr2">
      <router-link class="link fw5 blue hover-hot-pink"
        :to="{ name: 'op', params: { ref: fn.ref } }"
        @click.native="$event.stopImmediatePropagation()">
        {{ fn.name }}
      </router-link>
    </td>
    <td class="dn dtc-l pa2">
      {{ fn.meta.version }}
    </td>
    <td class="pa2 fira-mono">
      0x{{ fn.ref.toUpperCase() }}
    </td>
    <td class="dn dtc-ns pv2 pl2">
      <span class="fira-mono">{{ fn.address }}</span>
      <span class="gray" v-if="fn.meta.author">({{ fn.meta.author }})</span>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    function: {
      type: Object,
      required: true
    },
    index: true
  },

  data() {
    return {
      fn: this.function
    }
  },

  computed: {
    rowPadding() {
      return this.index === 0 ? 'pt2' : 'pt1';
    }
  }
}
</script>