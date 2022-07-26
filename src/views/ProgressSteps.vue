<template>
  <div class="ProgressSteps">
    <div class="stepsContent">
      <div class="stepsText"
       :class="data.activeCount>index ? 'active1' : ''"
        v-for="(item,index) of 4"
         :key="index">
        {{item}}
        <span class="stepsLine"
        :class="data.activeCount>index+1 ? 'active2' : ''"></span>
      </div>
    </div>
    <div class="stepsBtn">
      <button class="pre" :disabled="data.activeCount > 1 ? false : true" @click="data.activeCount--">pre</button>
      <button class="next" :disabled="data.activeCount < 4 ? false : true" @click="data.activeCount++">next</button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'ProgressSteps',
  setup () {
    const data = reactive({
      activeCount: 1
    })
    return {
      data
    }
  }
}
</script>

<style lang="scss">
.ProgressSteps{
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .stepsContent{
    display: flex;
    width: 50vw;
    justify-content: space-between;
    overflow: hidden;
    .active1{
      transition: all 0.8s ease-in;
      border-color: rgb(191, 228, 22)!important;
    }
    .stepsText{
      width: 30px;
      height: 30px;
      background-color: white;
      border: 4px solid #eee;
      border-radius: 19px;
      line-height: 30px;
      transition: all 0.5s ease-in;
      .stepsLine{
        display: block;
        width: 17vw;
        height: 4px;
        background-color: #eee;
        position: relative;
        top:-50%;
        z-index: -1;
        transition: all 0.8s ease-in;
      }
    }
  }
  .stepsBtn{
    margin-top: 30px;
    button{
      border: none;
      padding: 5px;
      margin: 20px;
      width: 40px;
      border-radius: 10%;
      background-color: rgb(191, 228, 22);
    }
  }
}
.active2{
  transition: all 0.5s ease-in;
  background-color: rgb(191, 228, 22)!important;
}
</style>
