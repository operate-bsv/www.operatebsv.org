<template>
  <div>
    <div v-for="article in articles">
      <h4>
        <router-link :to="article.path">{{ article.title }}</router-link>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$site.pages
        .filter(p => {
          return p.frontmatter.blog && new Date(p.frontmatter.date) <= new Date()
        })
        .sort((a,b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        })
    }
  }
}
</script>