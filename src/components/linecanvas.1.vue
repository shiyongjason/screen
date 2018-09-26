<template>
  <div>
    <div class="canvaslinetitle">18年月份收入趋势</div>
    <!--<div class="canvaslineicon"></div>-->
    <!--<div class="canvaslinesubtitle">数据统计</div>-->
    <canvas class="canvasline" ref="canvasline" width="622" height="351" ></canvas>
  </div>
</template>

<script>
export default {
  name: 'linecanvas',
  props: ['linedatalist'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ctx: null,
      canvasline: null,
      dataArr: [
      ],
      ydataArr: [
        {ytext: '10K', yvalue: '10000'},
        {ytext: '50K', yvalue: '50000'},
        {ytext: '90K', yvalue: '90000'}
      ],
      cMargin: 0,
      cSpace: 0,
      cHeight: 0,
      cWidth: 0,
      crHeight: 0, // 图表实际高度
      crWidth: 0, // 图表实际宽度
      originX: 0, // x原点
      originY: 0, //  y原点
      tobalDots: 0, // 数据大小dataArr.length
      dotSpace: 0, // 宽度除以tobalDots 每个数据所展示区域的平均大小 x轴
      maxValue: 0,
      totalYNomber: 0,
      ctr: 0,
      numctr: 100,
      speed: 6,
      avgHeight: 0// 平均高度
    }
  },
  mounted () {
    this.dataArr = this.linedatalist
    this.drawLineChart()
  },
  methods: {
  /**
   * 画线表
   */
    drawLineChart () {
      // let ctx = null
      //  获取canvas上下文
      this.canvasline = this.$refs.canvasline
      if (this.canvasline && this.canvasline.getContext) {
        this.ctx = this.canvasline.getContext('2d')
      }
      this.initChartLine()
      this.drawLineLabelMarkers() // 绘制图表轴、标签和标记
      this.drawLineAnimate() // 绘制折线图的动画
    },
    // 图表初始化
    initChartLine () {
      // 图表信息
      this.cMargin = 25 // 图表和title的距离
      this.cSpace = 5 // 整个图表的边距
      // 这里是对高清屏幕的处理，
      // 方法：先将canvas的width 和height设置成本来的两倍
      // 然后将style.height 和 style.width设置成本来的宽高
      // 这样相当于把两倍的东西缩放到原来的 1/2，这样在高清屏幕上 一个像素的位置就可以有两个像素的值
      // 这样需要注意的是所有的宽高间距，文字大小等都得设置成原来的两倍才可以。
      // this.canvasline.width = Math.floor((window.innerWidth - 100) / 2) * 2
      // this.canvasline.width = this.canvasline.width
      // this.canvasline.height = this.canvasline.height
      this.canvasline.style.height = this.canvasline.height + 'px'
      this.canvasline.style.width = this.canvasline.width + 'px'
      this.cHeight = this.canvasline.height
      this.cWidth = this.canvasline.width
      this.originX = this.cMargin + this.cSpace
      this.originY = this.cHeight - this.cHeight / 5
      // this.drawArc(this.originX, this.originY) //  这个方法可以看出设置的原点在什么地方，暂时先注释

      this.crWidth = this.cWidth - this.originX
      this.crHeight = this.cHeight - this.originY
      // 折线图信息
      this.tobalDots = this.dataArr.length
      this.dotSpace = parseInt(this.crWidth / this.tobalDots) //  宽度 -x的原点坐标 = 实际的图标的宽度
      this.maxValue = 0
      // 纵轴最大的值 冒泡排序
      for (let i = 0; i < this.dataArr.length; i++) {
        let dotVal = parseInt(this.dataArr[i].yearvalue)
        if (dotVal > this.maxValue) {
          this.maxValue = dotVal
        }
      }
      // this.maxValue += 50
      this.totalYNomber = this.ydataArr.length + 1 //  纵轴的等分数
      // 运动相关
      this.ctr = 1
      this.numctr = 100
      this.speed = 6

      this.ctx.translate(0.5, 0.5)// 当只绘制1像素的线的时候，坐标点需要偏移，这样才能画出1像素实线
    },
    // 绘制图表轴、标签和标记
    drawLineLabelMarkers () {
      this.ctx.font = '19px Arial'
      this.ctx.lineWidth = 2
      this.ctx.fillStyle = '#54679D'
      this.ctx.strokeStyle = '#2b2e6b'
      // y轴
      // this.drawLine(this.originX, this.originY, this.originX, this.cMargin)
      // x轴
      this.drawLine(this.originX, this.originY, this.crWidth, this.originY)
      // 绘制标记
      this.drawMarkers()
    },
    // 画线的方法
    drawLine (x, y, X, Y) {
      this.ctx.beginPath()
      this.ctx.moveTo(x, y)
      this.ctx.lineTo(X, Y)
      this.ctx.stroke()
      this.ctx.closePath()
    },
    // 绘制标记
    drawMarkers () {
      this.ctx.strokeStyle = '#2b2e6b'
      // 绘制 y 轴 及中间横线
      // let oneVal = parseInt(this.originY / this.totalYNomber)
      this.avgHeight = parseInt(this.originY / this.totalYNomber)
      this.ctx.textAlign = 'left'
      for (let i = 0; i < this.totalYNomber; i++) {
        let xMarker = this.originX
        let yMarker = this.originY - this.avgHeight * i - this.avgHeight / 2 + 5 // 绘制文本的 纵轴坐标 后面的5可以根据具体情况来调整
        let yMarkerLine = this.originY - this.avgHeight * i // 绘制横线的 纵轴坐标
        // this.drawArc(xMarker, yMarker)

        if (!(!this.ydataArr[i])) {
          this.ctx.fillText(this.ydataArr[i].ytext, xMarker, yMarker, 30) // 文字
        }
        if (i > 0) {
          this.drawLine(this.originX, yMarkerLine, this.crWidth, yMarkerLine)
        }
      }
      // 绘制 x 轴 及中间竖线
      this.ctx.textAlign = 'center'
      for (let i = 0; i < this.tobalDots; i++) {
        let markerVal = this.dataArr[i].year
        let xMarker = this.originX + i * this.dotSpace + this.dotSpace / 2
        let yMarker = this.originY + this.avgHeight * 0.70 //  0.7是可调控的，控制x轴文字距离x的距离
        // this.drawArc(xMarker, yMarker)
        this.ctx.fillText(markerVal, xMarker, yMarker) // 文字
      }
    },
    //  绘制折线图
    drawLineAnimate () {
      this.ctx.shadowOffsetX = 3
      this.ctx.shadowOffsetY = 3
      this.ctx.shadowColor = '#000000'
      this.ctx.shadowBlur = 8
      this.ctx.lineWidth = 8
      // this.ctx.strokeStyle = '#EC4881'// "#49FE79";  236 72 129

      //  柱状图渐变色
      let gradient = this.ctx.createLinearGradient(0, 100, 0, 200)
      gradient.addColorStop(0, '#EC4881') // ff9625
      gradient.addColorStop(0.5, '#f25c8c')
      // gradient.addColorStop(0.7, '#ff9625') //ff9625
      gradient.addColorStop(1, '#7B3DE9')
      this.ctx.strokeStyle = gradient
      this.ctx.fill()

      //  连线
      this.ctx.beginPath()
      this.ctx.lineJoin = 'round'
      this.ctx.lineCap = 'round'
      for (let i = 0; i < this.tobalDots; i++) {
        let dotVal = this.dataArr[i].yearvalue
        let barH = parseInt((this.crHeight * 3 - this.avgHeight / 2) * dotVal / 10000) // 210-35= 175 计算在整个高度里面 原有的纵轴和数据的纵轴 的比例 10000=11000 -1000 从1000所在的位置为原点
        let y = this.originY - barH - this.avgHeight / 4 // 17.5是avgHeight的1/4
        let x = this.originX + i * this.dotSpace + this.dotSpace / 2
        if (i === 0) {
          this.ctx.moveTo(x, y)
        } else {
          this.ctx.lineTo(x, y)
        }
      }
      this.ctx.stroke()
      this.ctx.closePath()
    },
    //  绘制圆点
    drawArc (x, y) {
      this.ctx.beginPath()
      this.ctx.arc(x, y, 4, 0, Math.PI * 2)
      this.ctx.fill()
      this.ctx.closePath()
    },
    // 运动的小点
    moveArc () {
      setInterval(() => {
        this.drawLineAnimate()
        console.log(111)
      }, 50)
    }
  }
}
</script>

<style scoped>

</style>
