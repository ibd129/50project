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
      data.opacity = 0
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

<style lang="scss">
.loading{
  width: 100%;
  height: 100vh;
  background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2012-3-2%2Fenterdesk.com-B526ECADD33DBD367676A93E051BA1EC.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663740174&t=733737d9a98b94a834ef5b9248ad507b);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  animation: 2s filterAn ease-in;
  @keyframes filterAn {
    from {filter:blur(15px)}
    to {filter:blur(0px)}
  }
}
.loading-text{
  color: white;
  font-size: 50px;
  position: absolute;
  top:50%;
  left: 50%;
  font-weight: bold;
  opacity: v-bind('data.opacity');
  transition: opacity 2s ease-in;
}
</style>
