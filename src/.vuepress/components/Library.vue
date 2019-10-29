<template>
  <div>
    <table class="w-100 f7 f6-ns lh-copy collapse">
      <thead class="bb b--light-gray">
        <tr>
          <th class="pv2 pr2 fw5 tl gray">Function</th>
          <th class="dn dtc-l pa2 fw5 tl gray">Version</th>
          <th class="pa2 fw5 tl gray">Reference</th>
          <th class="dn dtc-ns pv2 pl2 fw5 tl gray">Author</th>
        </tr>
      </thead>
      <tbody class="bb b--light-gray">
        <LibraryRow v-for="(fn, i) in functions"
          :function="fn"
          :index="i" />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import LibraryRow from './LibraryRow.vue'

export default {
  data() {
    return {
      functions: []
    }
  },

  beforeMount() {
    this.fetchFunctions()
  },

  methods: {
    fetchFunctions() {
      return axios.get('https://functions.chronoslabs.net/api/functions')
        .then(r => {
          this.functions = r.data.data;
        })
    }
  },

  components: {
    LibraryRow,
    //FunctionModal
  }
}
</script>