<template>
  <footer class="ph3 ph4-l pv4 pt5-l bt b--light-gray">
    <div class="w-100 mw8 center">
      <NavLinks class="mb4" />
      <div class="pt4 measure-wide bt b--light-gray">
        <p class="mt0 mb3 f7 lh-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at diam quis nunc blandit ornare sed eu massa. Phasellus quis nisl a purus varius gravida ullamcorper at dui.</p>
        <p class="mt5 mb3 f7 lh-copy">&copy; Copyright 2019 Chronos Labs Ltd.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  components: {
    NavLinks
  }
}
</script>