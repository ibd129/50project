<template>
  <div class="loading"></div>
  <div class="loading-text">{{data.num}}%</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'BlurryLoading',
  setup () {
    const data = reactive({
      num: 0,
      opacity: 1
    })
    // 数字增加
    function numAdd () {
      if (data.num < 100) {
        data.num++
      }
      requestAnimationFrame(numAdd)
    }
    requestAnimationFrame(numAdd)
    return {
      data,
      numAdd
    }
  }
}
</script>

<style>
.loading{
  width: 100%;
  height: 100vh;
  background-image: url(http://pic1.win4000.com/wallpaper/2018-01-12/5a587e14cf639.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.loading-text{
  color: white;
  font-size: 50px;
  position: absolute;
  top:50%;
  left: 50%;
  font-weight: bold;
}
</style>
