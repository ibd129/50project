<template>
  <div class="RotatingNavigationPage">
    <div class="rotatingSwtich" @click="data.rotatingState = !data.rotatingState"></div>
    <div class="rotatingNavigation" :class="data.rotatingState ? 'navStyle' : ''">
        <p>首页</p>
        <p>关于</p>
        <p>留言</p>
    </div>
    <div class="main" :class="data.rotatingState ? 'rotatingStyle':''">
        <div class="content">
            <h2>{{data.title}}</h2>
            <h4>{{data.time}}</h4>
            <h5>{{data.content}}</h5>
            <h3>{{data.branchTitle}}</h3>
            <img src="http://www.kuoo8.com/upload/2022-07/16584058233336896.jpg" alt="">
            <h5>{{data.content}}</h5>
        </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'RotatingNavigationPage',
  setup () {
    const data = reactive({
      title: '广东巩固工业经济企稳回升：今年将推动8500家工业企业技术改造',
      time: '2022年07月21日 18:53 21世纪经济报道',
      branchTitle: '开展技改提升产业链竞争力',
      content: '南方财经全媒体记者黄浩博 广州报道 7月21日，广东省工业和信息化厅召开2022年二季度新闻发布会，介绍上半年广东工业和信息化运行情况。数据显示，上半年，广东规上工业增加值同比增长3.5%，比GDP增速（2%）高1.5个百分点，与全国比较看，广东规上工业增加值增速比全国（3.4%）高0.1个百分点，累计增速连续三个月高于全国。同时，工业经济“压舱石”作用不断增强，规上工业增加值占GDP比重为32.1%，比去年同期（30%）提高2.1个百分点；对GDP增长的贡献率达到55.4%，比去年同期（40.7%）高14.7个百分点。“上半年，广东全省工业经济运行总体平稳，工业投资持续较快增长，产业结构不断优化，工业经济运行在合理区间。”广东省工信厅党组成员、副厅长吴东文指出，接下来，广东将针对当前工业企业所急所盼，研究完善稳工业增长有关政策措施，出台“稳工业32条”2.0版，巩固工业生产企稳回升势头。2.25万家规上企业数字化转型。',
      rotatingState: false
    })
    return {
      data
    }
  }
}
</script>

<style lang="scss">
.RotatingNavigationPage{
    background-color: black;
    overflow: hidden;
    .rotatingSwtich{
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: red;
        border-radius: 50%;
        top: 0;
        left: 0;
        z-index: 1;
        transform: translate(-50%, -50%);
    }
    .rotatingNavigation{
        position: absolute;
        bottom: 10vh;
        left: -200px;
        color: wheat;
        font-size: 20px;
        transition: all 0.5s ease-in;
        p:nth-child(2){
            text-indent: 2rem;
        }
        p:nth-child(3){
            text-indent: 4rem;
        }
    }
    .main{
        background-color: wheat;
        overflow: hidden;
        transform-origin: 0% 0%;
        transition: all 0.5s ease-in;
        .content{
            width: 50vw;
            margin: 0 auto;
        }
    }
}
.rotatingStyle{
    transform: rotateZ(-20deg);
    transition: all 0.5s ease-in;
}
.navStyle{
    left: 50px!important;
    transition: all 0.5s ease-in;
}
</style>
