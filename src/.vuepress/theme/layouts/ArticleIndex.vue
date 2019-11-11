<template>
  <div class="helvetica dark-gray">
    <header class="bb b--light-gray">
      <NavBar />
    </header>

    <main class="pv4 ph3 ph4-l">
      <div class="w-100 mw8 center">
        <h1 class="f2 lh-title">Articles</h1>

        <ul>
          <li v-for="post in $pagination.pages">
            <router-link :to="post.path">{{ post.title }}</router-link>
          </li>
        </ul>

      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import NavBar from '@theme/components/NavBar.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
