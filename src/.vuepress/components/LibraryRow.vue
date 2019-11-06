<template>
  <tr class="bg-animate hover-bg-washed-yellow bt b--light-gray pointer"
    :class="{'bt-0': index === 0 }"
    @click="$router.push({ path: '/library/op/', query: { ref: op.ref } })">
    <td class="pv2 pr2">
      <router-link class="link fw5 blue hover-hot-pink"
        :to="{ path: '/library/op/', query: { ref: op.ref } }"
        @click.native="$event.stopImmediatePropagation()">
        {{ op.name }}
      </router-link>
    </td>
    <td class="dn dtc-l pa2">
      {{ op.meta.version }}
    </td>
    <td class="pa2 mono">
      0x{{ op.ref.toUpperCase() }}
    </td>
    <td class="dn dtc-ns pv2 pl2">
      <span class="mono">{{ op.addr }}</span>
      <span class="dn di-l gray" v-if="op.meta.author">({{ op.meta.author }})</span>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    op: {
      type: Object,
      required: true
    },
    index: true
  },

  computed: {
    rowPadding() {
      return this.index === 0 ? 'pt2' : 'pt1';
    }
  }
}
</script>