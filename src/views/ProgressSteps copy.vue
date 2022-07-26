<template>
  <div class="steps-content">
    <div class="progress-steps" >
      <div class="steps"
      :class="steps.activeCount>index ? 'active':''"
      v-for="(item,index) in 4" :key="index">
        {{item}}
        <span :class="steps.activeCount>index+1? 'active2':''"></span>
      </div>
    </div>
    <div class="steps-btn">
      <button :disabled="steps.activeCount>1 ? false : true" class="pre" @click="steps.activeCount--">pre</button>
      <button :disabled="steps.activeCount<4 ? false : true" class="next" @click="steps.activeCount++">next</button>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  name: 'ProgressSteps',
  setup () {
    const steps = reactive({
      activeCount: 1,
      activeColor: 'rgb(69, 236, 66)'
    })
    return {
      steps
    }
  }
}
</script>
<style lang="scss">
.steps-content{
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0;
  .steps-btn{
    display: flex;
    padding-top:30px;
    button{
      width: 4rem;
      height: 2rem;
      margin: 20px;
      background: rgb(56, 173, 227);
      border: none;
      border-radius: 5px;
    }
  }
}
.progress-steps{
  width: 43vw;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  position: relative;
  .steps{
    width: 30px;
    height: 30px;
    border:4px solid #eee;
    background-color: white;
    border-radius:19px;
    text-align: center;
    line-height: 30px;
    align-items: center;
    transition: all 0.7s ease-in;
    span{
      display: block;
      height: 4px;
      width:14vw;
      background-color: #eee;
      z-index: -1;
      position: relative;
      top: -50%;
      transition: all 1s ease-in;
    }
    .active2{
      transition: all 0.7s ease-in;
      background-color: v-bind('steps.activeColor');
    }
  }
  .active{
    border-color: v-bind('steps.activeColor');
    transition: all 1s ease-in;
  }
}
</style>
