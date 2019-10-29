<template>
  <div class="helvetica dark-gray">
    <header class="bb b--light-gray">
      <NavBar />
    </header>

    <div class="flex">
      <SideBar />

      <main id="main" class="flex-auto pv4 ph3 ph4-l">
        <div class="w-100 mw7 center">
          <Content/>
        </div>
      </main>
    </div>

  </div>
</template>

<script>
import NavBar from '@theme/components/NavBar.vue'
import SideBar from '@theme/components/SideBar.vue'

export default {
  components: {
    NavBar,
    SideBar
  }
}

</script>

<style lang="scss" scoped>

</style>