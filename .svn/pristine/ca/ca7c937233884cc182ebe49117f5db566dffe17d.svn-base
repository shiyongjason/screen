<template>
  <div>
    <table cellspacing="0" cellpadding="0">
      <tr>
        <td colspan="3">
          <div class="canvaspietitle">总数据</div>
          <canvas class="canvaspie" ref="canvaspie" width="600" height="247"></canvas>
        </td>
      </tr>
      <tr>
        <td>
          <img src="../assets/icon2.png" class="pieimg1">
          <span class="piespan">{{dataArr[0].datavalue}}个</span>
          <span class="piesubspan">{{dataArr[0].dataitem}}</span>
        </td>
        <td>
          <img src="../assets/icon1.png" class="pieimg1">
          <span class="piespan">{{dataArr[1].datavalue}}个</span>
          <span class="piesubspan">{{dataArr[1].dataitem}}</span>
        </td>
        <td>
          <img src="../assets/icon3.png" class="pieimg1">
          <span class="piespan">{{dataArr[2].datavalue}}个</span>
          <span class="piesubspan">{{dataArr[2].dataitem}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'piecanvas',
  props: ['piecity'],
  data () {
    return {
      ctx: null,
      canvaspie: null,
      dataArr: [{}, {}, {}],
      canvasbj: 'white', // 画布背景
      cWidth: 0,
      cHeight: 0,
      bigBg: 'red', // 大圆背景
      bigRadius: 100, // 大圆半径
      midRadius: 90, // 中圆
      smallRadius: 60, // 小圆半径
      deg: 0.333333333, // 百分比1/3
      skewing: 28 // 偏移
    }
  },
  // mounted () {
  //   console.log('我是子组件')
  //
  //   this.dataArr = this.piecity
  //   this.drawPieChart()
  // },
  watch: {
    piecity: {
      immediate: true,
      handler (val) {
        // 这个组件 我是故意用这种方式来是实现的
        // 也可以参考下其他组件是在父亲页面的html加了一个piecity.length的判断
        // 多种实现的方式吧
        if (val.length !== 0) {
          this.$nextTick(() => {
            this.dataArr = this.piecity
            this.drawPieChart()
          })
        }
      }
    }
  },
  methods: {
    drawPieChart () {
      // 获得canvas上下文
      this.canvaspie = this.$refs.canvaspie
      if (this.canvaspie && this.canvaspie.getContext) {
        this.ctx = this.canvaspie.getContext('2d')
      }
      this.initChartPie()
    },
    //  图表初始化
    initChartPie () {
      this.canvaspie.style.height = this.canvaspie.height + 'px'
      this.canvaspie.style.width = this.canvaspie.width + 'px'
      this.cHeight = this.canvaspie.height
      this.cWidth = this.canvaspie.width

      this.ctx.shadowOffsetX = 3
      this.ctx.shadowOffsetY = 3
      this.ctx.shadowColor = '#000000'
      this.ctx.shadowBlur = 8
      this.ctx.strokeStyle = '#EC4881'// "#49FE79";  236 72 129

      this.ctx.beginPath()
      // 重置画布起点
      this.ctx.translate(this.cWidth / 2, this.cHeight / 2)
      // 转到新起点
      this.ctx.moveTo(0, 0)
      // 画大圆
      // this.ctx.arc(0, 0, this.bigRadius, 0, Math.PI * 2, true)
      this.ctx.arc(0, 0, this.smallRadius, this.skewing, 0.75 * this.deg * 360 * Math.PI / 180 + this.skewing, false)
      this.ctx.closePath()
      this.ctx.fillStyle = '#1FB9E9'
      this.ctx.fill()
      // 开始绘制扇形
      this.ctx.beginPath()
      this.ctx.moveTo(0, 0)
      // 绘制圆弧
      this.ctx.arc(0, 0, this.midRadius, 0.75 * this.deg * 360 * Math.PI / 180 + this.skewing, 1.75 * this.deg * 360 * Math.PI / 180 + this.skewing, false)
      // 闭合路径
      this.ctx.closePath()
      let gradientmid = this.ctx.createLinearGradient(120, 30, 0, 30)
      gradientmid.addColorStop(1, '#7f53ce')
      gradientmid.addColorStop(0, '#4e84ff')
      this.ctx.fillStyle = gradientmid // '#1FB9E9'
      // this.ctx.fillStyle = '#6075F3'
      this.ctx.fill()
      // 开始绘制扇形
      this.ctx.beginPath()
      this.ctx.moveTo(0, 0)
      // 绘制圆弧
      this.ctx.arc(0, 0, this.bigRadius, 1.75 * this.deg * 360 * Math.PI / 180 + this.skewing, 3 * this.deg * 360 * Math.PI / 180 + this.skewing, false)
      // 闭合路径
      this.ctx.closePath()
      let gradientbig = this.ctx.createLinearGradient(120, 30, 0, 30)
      gradientbig.addColorStop(1, '#f25c8c')
      gradientbig.addColorStop(0, '#ff9625')

      this.ctx.fillStyle = gradientbig // '#1FB9E9'
      // this.ctx.fillStyle = '#F2687D'
      this.ctx.fill()
      // 绘制小圆
      this.ctx.beginPath()
      this.ctx.moveTo(0, 0)
      this.ctx.arc(0, 0, 40, 0, Math.PI * 2, true)
      this.ctx.closePath()
      this.ctx.fillStyle = '#16255F'
      this.ctx.fill()
    }
  }
}
</script>

<style scoped>

</style>
