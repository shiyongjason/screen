<template>
  <div>
    <div v-if="switchname === 'map'">
      <div class="maptitle">好享家分布图</div>
      <div class="mainpoint mainpointpos">
        <div class='mainpointflash1'></div>
        <div class='mainpointflash2'></div>
        <div class='maincenter'></div>
      </div>
      <div class="point1 point1pos">
        <div class='pointflash1'></div>
        <div class='pointflash2'></div>
        <div class='pointcenter1'></div>
      </div>
      <div class="point2 point2pos">
        <div class='pointflash1'></div>
        <div class='pointflash2'></div>
        <div class='pointcenter1'></div>
      </div>
      <div class="point3 point3pos">
        <div class='pointflash1'></div>
        <div class='pointflash2'></div>
        <div class='pointcenter1'></div>
      </div>
      <div class="point4 point4pos">
        <div class='pointflash1'></div>
        <div class='pointflash2'></div>
        <div class='pointcenter1'></div>
      </div>
      <div class="point5 point5pos">
        <div class='pointflash3'></div>
        <div class='pointflash4'></div>
        <div class='pointcenter1'></div>
      </div>
      <div class="point6 point6pos">
        <div class='pointflash3'></div>
        <div class='pointflash4'></div>
        <div class='pointcenter1'></div>
      </div>
      <div class="point7 point7pos">
        <div class='pointflash3'></div>
        <div class='pointflash4'></div>
        <div class='pointcenter1'></div>
      </div>
      <div class="point8 point8pos">
        <div class='pointflash1'></div>
        <div class='pointflash2'></div>
        <div class='pointcenter1'></div>
      </div>
      <div class="point9 point9pos">
        <div class='pointflash1'></div>
        <div class='pointflash2'></div>
        <div class='pointcenter1'></div>
      </div>
      <div class="point10 point10pos">
        <div class='pointflash3'></div>
        <div class='pointflash4'></div>
        <div class='pointcenter1'></div>
      </div>
      <div class="point11 point11pos">
        <div class='pointflash1'></div>
        <div class='pointflash2'></div>
        <div class='pointcenter1'></div>
      </div>
      <div class="point12 point12pos">
        <div class='pointflash3'></div>
        <div class='pointflash4'></div>
        <div class='pointcenter1'></div>
      </div>
    </div>
    <div v-if="switchname === 'text'">
      111
    </div>
    <div v-if="switchname === 'video'">
      <player></player>
    </div>
  </div>
</template>

<script>
import player from '../components/player' // 视频组件

export default {
  name: 'map',
  props: ['switchname'],
  components: {
    player
  }
}
</script>

<style scoped>
  .mainpoint, .point1,.point2,.point3,.point4,.point5,.point6,.point7,.point8,.point9,.point10,.point11,.point12{
    width:50px;
    height:50px;
    position:absolute;
  }
  .maincenter{
    position:absolute;
    width:10px;
    height:10px;
    border-radius:10px;
    background:#FFC11A;
    margin-top: 5px;
    margin-left: 5px;
  }
  .mainpointflash1,.mainpointflash2{
    position:absolute;
    width: 20px;
    height: 20px;
    border-radius:30px;
    background-color: #ffcf49;
  }
  .mainpointflash1{
    -webkit-animation:mainpoint 3s linear 1.6s infinite;/* Safari and Chrome */
    animation:mainpoint 3s linear 1.6s infinite;
  }
  .mainpointflash2{
    -webkit-animation:mainpoint 3s linear 0.8s infinite;/* Safari and Chrome */
    animation:mainpoint 3s linear 0.8s infinite;
  }
  .mainpointpos{
    left: 750px;
    top: 370px;
  }
  .pointcenter1{
    position:absolute;
    width:10px;
    height:10px;
    border-radius:10px;
    background:#3AD1FC;
    margin-top: 5px;
    margin-left: 5px;
  }
  .pointflash4{
    -webkit-animation:point1 5s linear 1.8s infinite;/* Safari and Chrome */
    animation:point1 5s linear 1.8s infinite;
  }
  .pointflash3{
    -webkit-animation:point1 4s linear 1.8s infinite;/* Safari and Chrome */
    animation:point1 4s linear 1.8s infinite;
  }
  .pointflash2{
    -webkit-animation:point1 3s linear 2.4s infinite;/* Safari and Chrome */
    animation:point1 3s linear 2.4s infinite;
  }
  .pointflash1{
    -webkit-animation:point1 3s linear 2.4s infinite;/* Safari and Chrome */
    animation:point1 3s linear 2.4s infinite;
  }
  .pointflash1,.pointflash2,.pointflash3,.pointflash4{
    position:absolute;
    width: 20px;
    height: 20px;
    border-radius:30px;
    background-color: #7ADAFC;
  }
  .point1pos{
    left: 710px;
    top: 310px;
  }
  .point2pos{
    left: 760px;
    top: 450px;
  }
  .point3pos{
    left: 735px;
    top: 510px;
  }
  .point4pos{
    left: 655px;
    top: 560px;
  }
  .point5pos{
    left: 710px;
    top: 400px;
  }
  .point6pos{
    left: 680px;
    top: 480px;
  }
  .point7pos{
    left: 620px;
    top: 480px;
  }
  .point8pos{
    left: 630px;
    top: 420px;
  }
  .point9pos{
    left: 640px;
    top: 360px;
  }
  .point10pos{
    left: 560px;
    top: 370px;
  }
  .point11pos{
    left: 480px;
    top: 420px;
  }
  .point12pos{
    left: 520px;
    top: 500px;
  }
  @-webkit-keyframes mainpoint{ /* Safari and Chrome */
    from{
      opacity:1;
      -webkit-transform:scale(0);
    }
    to{
      opacity:0;
      -webkit-transform:scale(3);
    }
  }
  @-webkit-keyframes point1{ /* Safari and Chrome */
    from{
      opacity:1;
      -webkit-transform:scale(0);
    }
    to{
      opacity:0;
      -webkit-transform:scale(3);
    }
  }
</style>
