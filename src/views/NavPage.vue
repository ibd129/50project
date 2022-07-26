<template>
    <nav v-show="data.isShowNav">
      <router-link to="/expandingCards">1.expandingCards</router-link> |
      <router-link to="/progressSteps">2.progressSteps</router-link> |
      <router-link to="/RotatingNavigationPage">3.RotatingNavigationPage</router-link> |
      <router-link to="/HiddenSearch">4.hiddenSearch</router-link> |
      <router-link to="/BlurryLoading">5.BlurryLoading</router-link> |
    </nav>
    <router-view />
</template>

<script>
// @ is an alias to /src
import { reactive } from 'vue'
export default {
  name: 'NavPage',
  setup () {
    const data = reactive({
      isShowNav: true
    })
    function showNav () {
      data.isShowNav = !data.isShowNav
    }
    return {
      data,
      showNav
    }
  }
}
</script>
<style lang="scss">
</style>
