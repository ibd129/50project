<template>
  <div class="expanding-cards">
    <input type="radio" name="select" id="active1" checked/>
    <label for="active1" class="panel"></label>
    <input type="radio" name="select"  id="active2"/>
    <label for="active2" class="panel"></label>
    <input type="radio" name="select" id="active3"/>
    <label for="active3" class="panel"></label>
    <input type="radio" name="select" id="active4"/>
    <label for="active4" class="panel"></label>
    <input type="radio" name="select" id="active5"/>
    <label for="active5" class="panel"></label>
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

.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width:60vw;
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  position: relative;
  flex: 0.5;
  transition: all 700ms ease-in;
}
input[type="radio"]{
  display: none;
}
label {
  width: 15vw
}
input:checked+label{
  display: block;
  flex: 5;
}
.panel:nth-child(2){
  background-image: url(http://pic21.photophoto.cn/20111120/0020032845797770_b.jpg);
}

.panel:nth-child(4){
  background-image: url(http://pic1.win4000.com/wallpaper/2019-11-26/5ddcf251e7a79.jpg);
}
.panel:nth-child(6){
  background-image: url(http://pic1.win4000.com/wallpaper/2019-11-27/5dde26e54240f.jpg);
}
.panel:nth-child(8){
  color: orange;
  background-image: url(http://pic1.win4000.com/wallpaper/2019-11-26/5ddcf25149f3d.jpg);
}
.panel:nth-child(10){
  background-image: url(http://pic1.win4000.com/wallpaper/2019-11-26/5ddcf5bfc23b4.jpg);
}
.expanding-cards{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
@media (max-width: 480px) {
  .expanding-cards {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>
