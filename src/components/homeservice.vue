<template>
    <div>
      <div class="homeservicetitle">累计获客渠道占比</div>
      <div class="valuepro">{{dataArr[0].datavalue}}%</div>
      <div class="titlepro">{{dataArr[0].dataitem}}</div>
      <div class="valuecity">{{dataArr[1].datavalue}}%</div>
      <div class="titlecity">{{dataArr[1].dataitem}}</div>
      <div class="valuepoint">{{dataArr[2].datavalue}}%</div>
      <div class="titlepoint">{{dataArr[2].dataitem}}</div>
       <div class="valueonline">{{dataArr[3].datavalue}}%</div>
      <div class="titleponline">{{dataArr[3].dataitem}}</div>
      <img src="../assets/homeservice.png" class="homeserviceimg">
    </div>
</template>

<script>
export default {
  name: 'homeservice',
  props: ['homeservicedata'],
  data () {
    return {
      dataArr: [{}, {}, {}, {}]
    }
  },
  mounted () {
    this.dataArr = this.homeservicedata
  }
}
</script>

<style scoped>
  .homeserviceimg{
    position: absolute;
    margin: auto;
    left:0;
    right:0;
    top:60px;
    bottom:0;
  }
  .titlepro{
    position: absolute;
    left: 140px;
    top: 167px;
    color:#d8e3ff;
  }
  .titlecity{
    position: absolute;
    left: 440px;
    top: 159px;
    color:#d8e3ff;
  }
  .titlepoint{
    position: absolute;
    top: 263px;
    left: 430px;
    color:#d8e3ff;
  }
  .valuepro{
    position: absolute;
    color:#ffffff;
    left: 145px;
    top:139px;
     font-size: 22px
  }
  .valuecity{
    position: absolute;
    color:#ffffff;
    left: 439px;
    top: 133px;
     font-size: 22px
  }
  .valuepoint{
    position: absolute;
    color:#ffffff;
    left: 430px;
    top:235px;
    font-size: 22px
  }
    .valueonline{
    position: absolute;
    color:#ffffff;
    left: 142px;
    top: 235px;
     font-size: 22px
  }
  .titleponline{
    position: absolute;
    top: 261px;
    left: 150px;
    color:#d8e3ff;
  }
</style>
