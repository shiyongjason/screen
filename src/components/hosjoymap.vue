<template>
  <div>
    <div v-if="switchname === 'map'">
      <!-- <div class="maptitle">好享家分布图</div> -->
     <div class="serverT1">累计服务家庭数</div>
      <div class="pointNuM">
       <pointnum ></pointnum>
      </div>
      <!--<div class="serverT2">家庭数</div>-->
      <!-- <div class="serverTitle">服务<span>1</span><span>9</span><span>8</span><span>7</span><span>6</span><span>4</span><span>3</span>家庭数</div> -->
      <div class="mainpoint mainpointpos">
        <div class='mainpointflash1'></div>
        <div class='mainpointflash2'></div>
        <div class='maincenter'></div>
      </div>
      <div class="pcol point0pos">
        <p>江苏</p>
      </div>
      <div class="pcol point1pos">
        <p>天津</p>
      </div>
      <div class="pcol point2pos">
      <p>上海</p>
      </div>
      <div class="pcol point3pos">
      <p>浙江</p>
      </div>
      <div class="pcol point4pos">
       <p>福建</p>
      </div>
      <div class="pcol point5pos">
       <p>山东</p>
      </div>
      <div class="pcol point6pos">
      <p>安徽</p>
      </div>
      <div class="pcol point7pos">
       <p>湖北</p>
      </div>
      <div class="pcol point8pos">
      <p>河南</p>
      </div>
      <div class="pcol point9pos">
        <p>陕西</p>
      </div>
      <div class="pcol point10pos">
       <p>四川</p>
      </div>
      <div class="pcol point11pos">
       <p>重庆</p>
      </div>
      <div class="pcol point12pos">
        <p>贵州</p>
      </div>
       <div class="pcol point13pos">
        <p>湖南</p>
      </div>
       <div class="pcol point14pos">
        <p>江西</p>
      </div>
      <div class="pcol point15pos">
        <p>河北</p>
      </div>
       <!-- <div class="pcol point15pos">
        <p>广东</p>
      </div>
       <div class="pcol point16pos">
        <p>广西</p>
      </div> -->
      <div class="pointH1"><i>16</i>个省份,<i>90+</i>城市</div>
      <div class="pointH2"><i>200+</i>子公司</div>
       <div class="pointH3"><i>600+</i>线下网点</div>
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
import player from "../components/player"; // 视频组件
import pointnum from '../components/pointnum' // 地图
export default {
  name: "map",
  props: ["switchname"],
  data () {
    return {}
  },
  components: {
    player,
    pointnum
  }
}
</script>

<style scoped>
.mainpoint,
.point1,
.point2,
.point3,
.point4,
.point5,
.point6,
.point7,
.point8,
.point9,
.point10,
.point11,
.point12 {
  width: 50px;
  height: 50px;
  position: absolute;
}

.pcol {
  position: absolute;
  color: #ffff;
}
.maincenter {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background: #efec68;
  margin-top: 3px;
  margin-left: 3px;
}
.mainpointflash1,
.mainpointflash2 {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 30px;
  background-color: #ffcf49;
}
.mainpointflash1 {
  -webkit-animation: mainpoint 3s linear 1.6s infinite; /* Safari and Chrome */
  animation: mainpoint 3s linear 1.6s infinite;
}
.mainpointflash2 {
  -webkit-animation: mainpoint 3s linear 0.8s infinite; /* Safari and Chrome */
  animation: mainpoint 3s linear 0.8s infinite;
}
.mainpointpos {
  left: 720px;
  top: 430px;
}
.pointcenter1 {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #3ad1fc;
  margin-top: 5px;
  margin-left: 5px;
}
.pointflash4 {
  -webkit-animation: point1 5s linear 1.8s infinite; /* Safari and Chrome */
  animation: point1 5s linear 1.8s infinite;
}
.pointflash3 {
  -webkit-animation: point1 4s linear 1.8s infinite; /* Safari and Chrome */
  animation: point1 4s linear 1.8s infinite;
}
.pointflash2 {
  -webkit-animation: point1 3s linear 2.4s infinite; /* Safari and Chrome */
  animation: point1 3s linear 2.4s infinite;
}
.pointflash1 {
  -webkit-animation: point1 3s linear 2.4s infinite; /* Safari and Chrome */
  animation: point1 3s linear 2.4s infinite;
}
.pointflash1,
.pointflash2,
.pointflash3,
.pointflash4 {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 30px;
  background-color: #7adafc;
}
.point0pos {
  left: 750px;
  top: 402px;
}
.point1pos {
  left: 695px;
  top: 322px;
}
.point2pos {
  left: 767px;
  top: 438px;
}
.point3pos {
  left: 734px;
  top: 467px;
}
.point4pos {
  left: 705px;
  top: 527px;
}
.point5pos {
  left: 680px;
  top: 367px;
}
.point6pos {
  left: 688px;
  top: 445px;
}
.point7pos {
  left: 620px;
  top: 443px;
}
.point8pos {
  left: 630px;
  top: 399px;
}
.point9pos {
  left:569px;
  top: 396px;
}
.point10pos {
  left: 482px;
  top: 449px;
}
.point11pos {
  left: 544px;
  top: 455px;
}
.point12pos {
  left: 544px;
  top: 505px;
}
.point13pos {
  left: 607px;
  top: 488px;
}
.point14pos {
  left: 663px;
  top: 488px;
}
.point15pos {
  left: 655px;
  top:341px;
}
.point16pos {
  left: 561px;
  top: 551px;
}
.pointH1 i,.pointH2 i,.pointH3 i{
  font-size: 38px;
  font-style: normal
}

.pointH1{
  letter-spacing: 3px;
  position: absolute;
  color:#ffff;
  top: 275px;
  right: 70px;
  font-size: 24px
}
.pointH2{
  letter-spacing: 3px;
  position: absolute;
  color:#ffff;
  top: 381px;
  right: 146px;
  font-size: 24px
}
.pointH3{
  letter-spacing: 3px;
  position: absolute;
  color:#ffff;
  top: 485px;
  right:120px;
  font-size: 24px
}
.serverTitle{
  color: #B5CDF0;
  font-size: 30px;
  text-align: center;
  margin-top: 25px
}
.serverTitle span{
  font-size: 65px;
  display: inline-block;
  width: 52px;
  height: 74px;
  margin: 0 30px 0 30px;
  background: url(../assets/spanBg.png) no-repeat center center;

}
.serverT1{
  color: #B5CDF0;
  font-size: 36px;
  position: absolute;
  top: 45px;
  left: 40px;
  letter-spacing: 3px;
}
.serverT2{
  color: #B5CDF0;
  font-size: 36px;
  position: absolute;
  top: 60px;
  right: 175px;
  letter-spacing: 3px;
}
.pointNuM{
  position: absolute;
  top: 25px;
  left: 256px;
  width: 100%;
}
@-webkit-keyframes mainpoint {
  /* Safari and Chrome */
  from {
    opacity: 1;
    -webkit-transform: scale(0);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(3);
  }
}
@-webkit-keyframes point1 {
  /* Safari and Chrome */
  from {
    opacity: 1;
    -webkit-transform: scale(0);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(3);
  }
}
</style>
