<template>
  <div class="search">
    <input type="text" placeholder="Search..." :class="data.isHideenSearch ? 'active' : ''"/>
    <span class="search-icon" @click=" data.isHideenSearch = !data.isHideenSearch">🔍</span>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'hiddenSearch',
  setup () {
    const data = reactive({
      isHideenSearch: true
    })
    return {
      data
    }
  }
}
</script>
<style lang="scss">
.search {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: palevioletred;
    .search-icon{
        position: relative;
        left: -38px;
        font-size: 25px;
        user-select: none;
    }
    input{
        width: 200px;
        font-size: 18px;
        padding: 15px;
        border: none;
        outline: none;
        transition: all 0.5s ease-in;
    }
    .active{
        width: 15px;
        transition: all 0.5s ease-in;
    }
}
</style>
