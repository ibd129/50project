<template>
  <div id="expanding-cards">
    <input type="radio" name="select" id="active1" checked/>
    <label for="active1"></label>
    <input type="radio" name="select"  id="active2"/>
    <label for="active2"></label>
    <input type="radio" name="select" id="active3"/>
    <label for="active3"></label>
    <input type="radio" name="select" id="active4"/>
    <label for="active4"></label>
    <input type="radio" name="select" id="active5"/>
    <label for="active5"></label>
  </div>
</template>

<script>
export default {
  name: 'ExpandingCards',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#expanding-cards{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
input[type="radio"]{
  display: none;
}
label {
  height: 80vh;
  flex: 0.5;
  margin: 10px;
  border-radius: 80px;
  background-position: center;
  background-size: cover;
  transition: all 0.7s ease-in ;
}
input:checked+label{
  flex: 5;
}
label:nth-of-type(1) {
    background-image: url(http://pic21.photophoto.cn/20111120/0020032845797770_b.jpg);
}

label:nth-of-type(2) {
    background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-06-02%2F5ed5e612bd337.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662894919&t=2588684c2e23507a0ce31794722eb521);
}

label:nth-of-type(3) {
    background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-04-24%2F5ea28c03c7eda.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662894869&t=62721931743f5d01aee5f74580d476eb);
}

label:nth-of-type(4) {
    color: orange;
    background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-12-10%2F5def65a250ba9.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662894919&t=926590c8fdcba9c307533f2269fc6c0e);
}

label:nth-of-type(5) {
    background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-02-27%2F5e577f9e5f02b.png&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662894919&t=32518b6175d7e64fbcef8170659e910f);
}

</style>
