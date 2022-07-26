<template>
  <div class="loading"></div>
  <div class="loading-text">{{data.num}}%</div>
</template>

<script>
import { onMounted, reactive } from '@vue/runtime-core'
export default {
  name: 'BlurryLoading',
  setup () {
    const data = reactive({
      opacityNum: 1,
      num: 0
    })
    onMounted(() => {
      setTimeout(() => {
        data.opacityNum = 0
      })
      function numAdd () {
        if (data.num < 100) {
          data.num++
        }
        requestAnimationFrame(numAdd)
      }
      requestAnimationFrame(numAdd)
    })
    return {
      data
    }
  }
}
</script>

<style lang="scss">
    .loading{
        width: 100%;
        height: 100vh;
        background-image: url(http://pic1.win4000.com/wallpaper/2018-01-12/5a587e14cf639.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        animation: filterAn 2s linear;
        @keyframes filterAn {
            from {filter: blur(20px);}
            to {filter: blur(0px);}
        }
    }
    .loading-text{
        width:120px;
        height: 100px;
            font-size: 50px;
            font-weight: bold;
            opacity: v-bind('data.opacityNum');
            transition:opacity 3s;
            position: absolute;
            left: 50%;
            top:50%;
            color: white;
            transform: -50% -50%;
        }
</style>
