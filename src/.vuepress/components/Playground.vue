<template>
  <div>
    <TransactionInspector ref="inspector" class="mb4" />
    <TransactionBuilder @payment="setInspectorTxid" />
  </div>
</template>

<script>
import TransactionInspector from './TransactionInspector.vue'
import TransactionBuilder from './TransactionBuilder.vue'

export default {
  methods: {
    setInspectorTxid(txid) {
      this.$refs.inspector.setTxid(txid)
      this.$scrollTo(this.$refs.inspector.$el, 400, { offset: -120 })
    }
  },

  components: {
    TransactionInspector,
    TransactionBuilder
  }
}
</script>