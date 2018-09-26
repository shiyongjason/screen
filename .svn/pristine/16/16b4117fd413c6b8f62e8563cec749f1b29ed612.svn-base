<template>
  <div>
   <div id="dataNums" ref="dataNums"> </div>
  </div>
</template>

<script>
import {getStore, setStore} from '../utils/utils'

export default {
  name: '',
  data () {
    return {
      deVal: 136176
    }
  },
  mounted () {
    this.deVal = getStore('homeservicecount')
    if (!this.deVal) {
      this.deVal = 136176
    }
    this.pointNum(this.deVal)
    setInterval(() => {
      this.deVal = parseInt(this.deVal) + parseInt(Math.ceil(Math.random() * 5))
      console.log(this.deVal)
      setStore('homeservicecount', parseInt(this.deVal))
      // this.deVal = getCookie('homeservicecount')
      this.pointNum(this.deVal)
    },1800000 )   //1800000
  },
  methods: {
    pointNum (deVal) {
     $('#dataNums').rollNumDaq({
          deVal: deVal
      })
    }
  }
}
</script>
<style>
.dataNums .tt span{width:100%;height:100%; font:bold 54px/75px "Arial";color:#ddf0ff;}
.dataNums .tt {position: absolute; top: 0;  left: 0; width: 100%;  height: 100%;}
.dataBoc {position: relative; width: 100%; height: 72px; overflow: hidden;}
.dataOne{ width:52px; height:110px; margin: 0px 3px; text-align: center; background: url(../assets/spanBg.png) no-repeat center center}
.dataNums{position: absolute; text-align:center;    top: -10px;    left: 44px;}
.inrow>li{margin: 0 20px 0 20px;}
.inrow>li,.inrow span{display:inline-block;*display:inline;*zoom:1;font-size:30px;letter-spacing:normal;word-spacing:normal;}
</style>
