import Layout from '@theme/layouts/Layout.vue'
import LibraryOp from './components/LibraryOp.vue'
import VueScrollTo from 'vue-scrollto'

const routes = [
  {
    path: '/library/op/:ref',
    name: 'op',
    components: {
      default: Layout,
      custom: LibraryOp
    },
    meta: {
      component: 'LibraryOp'
    }
  }
]

export default ({ Vue, router, options, siteData }) => {
  Vue.use(VueScrollTo)
  router.addRoutes(routes)
}