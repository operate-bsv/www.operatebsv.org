<template>
  <div>
    <table class="w-100 f7 f6-l lh-copy collapse">
      <thead class="bb b--light-gray">
        <tr>
          <th class="pv2 pr2 fw5 tl gray">Op / Function</th>
          <th class="dn dtc-l pa2 fw5 tl gray">Version</th>
          <th class="pa2 fw5 tl gray">Reference</th>
          <th class="dn dtc-ns pv2 pl2 fw5 tl gray">Author</th>
        </tr>
      </thead>
      <tbody class="bb b--light-gray">
        <LibraryRow v-for="(op, i) in ops"
          :op="op"
          :index="i" />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import LibraryRow from './LibraryRow.vue'
import api from '../api'

export default {
  data() {
    return {
      ops: []
    }
  },

  beforeMount() {
    this.fetchOps()
  },

  methods: {
    fetchOps() {
      return api.getOps()
        .then(r => {
          this.ops = r.data.data
            .filter(op => !(op.meta && op.meta.private));
        })
    }
  },

  components: {
    LibraryRow,
    //FunctionModal
  }
}
</script>