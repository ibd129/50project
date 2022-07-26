<template>
  <div class="HiddenSearch">
    <input type="text" placeholder="Search..."
    :class="data.isHiddenSearch ? 'active':''" />
    <span @click="data.isHiddenSearch= !data.isHiddenSearch">🔍</span>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'HiddenSearch',
  setup () {
    const data = reactive({
      isHiddenSearch: true
    })
    return {
      data
    }
  }
}
</script>

<style lang="scss">
  .HiddenSearch{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
    input{
      width: 200px;
      border: none;
      outline: none;
      padding: 15px;
      font-size: 18px;
      transition: all 0.5s ease-in;
      user-select: none;
    }
    span{
      position: relative;
      left: -38px;
      font-size: 25px;
      user-select: none;
    }
    .active{
    width: 15px;
    transition: all 0.5s ease-in;
  }
  }
</style>
