<template>
  <div class='circle'>
    <!--<div class='circle1'>&nbsp;</div>-->
    <!--<div class='circle2'>&nbsp;</div>-->
    <div class='circle3'>&nbsp;</div>
    <div class='center'></div>
  </div>
  <!--<div class="mainmap">-->
    <!--<div class="dot10"></div>-->
    <!--<div class="point"></div>-->
  <!--</div>-->
</template>

<script>
export default {
  name: 'arcfalsh',
  mounted () {
    console.log(this.$store.state.show)
    this.$store.state.show = true
    console.log(this.$store.state.show)
  }
}
</script>

<style scoped>
  .mainmap{
    position: relative;
    width: 100px;
    height:100px;
    margin: 0 auto;
  }
  .mainmap .point{
    background: #2b94fe;
  }
  .point{
    border-radius: 50%;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -7px 0 0 -7px;

  }
  .dot10{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;

  }
  .dot10:after{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    background: rgba(51,237,183,.4);
    -webkit-box-shadow: 0 1px 3px #33edb7 inset;
    box-shadow: inset 0 1px 3px #33edb7;
    -webkit-animation: point 3s ease-in 3s infinite;
    animation: point 3s ease-in 3s infinite;
  }

  .circle{width:200px;height:200px;position:absolute;top:50%;left:50%;margin:-100px 0 0 -100px;}
  .circle1, .circle2, .circle3, .center{
    position:absolute;
    left:50%;
    top:50%;
    margin:-30px 0 0 -30px;
    width:60px;
    height:60px;
    border-radius:30px;
    background-color:#666666;
  }
  .center{
    position:absolute;
    left:50%;
    top:50%;
    margin:-35px 0 0 -35px;
    width:70px;
    height:70px;
    border-radius:35px;
    background:#111111;/
  text-align:center;
    line-height:70px;
    color:#EAEAEA;
    font-size:16px;
    font-family:'';
  }

  .circle1{
    -webkit-animation:circle 3s linear infinite;
    animation:circle 3s linear infinite;
  }

  .circle2{
    -webkit-animation:circle 3s linear 0.8s infinite;
    animation:circle 3s linear 0.8s infinite;
  }
  .circle3{
    -webkit-animation:circle 3s linear 1.6s infinite;/* Safari and Chrome */
    animation:circle 3s linear 1.6s infinite;
  }
  @-webkit-keyframes circle{ /* Safari and Chrome */
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
