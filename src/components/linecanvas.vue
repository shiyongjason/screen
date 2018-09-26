<template>
  <div>
    <div class="canvaslinetitle">年度销售增长</div>
    <!--<div class="canvaslineicon"></div>-->
    <!--<div class="canvaslinesubtitle">数据统计</div>-->
    <!--不知道为什么这个预计两个字不能写在柱状图上-->
    <div class="unit">单位：亿</div>
    <div class="estimate">(预计)</div>
    <div id="myChartYearAdd" :style="{width: '100%', height: '320px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'linecanvas',
  props: ['toptem'],
  mounted () {
    this.dataArr = this.toptem
    this.getOption()
  },
  methods: {
    getOption(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChartYearAdd'))
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ['14年', '15年', '16年', '17年', '18年'],
          axisLine: {
            lineStyle: {
              color: '#0177d4'
            }
          },
          axisLabel: {
            color: '#fff',
            fontSize: 14
          }
        },
        yAxis: {
          nameTextStyle: {
            color: '#fff',
            fontSize: 16
          },
          axisLine: {
            show:false,
            lineStyle: {
              color: '#0077cb'
            }
          },
          axisLabel: {
            color: '#fff',
            fontSize: 14
          },
          splitLine: {
            show:true,
            lineStyle: {
              color: '#0077cb'
            }
          },
          interval:10,
          max:50
        },
        series: [
          {
            type: 'bar',
            barWidth: 30,
            itemStyle: {
              normal: {
                label : {
                  color:'#fff',
                  show: true, position: 'top'
                },
                color:new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0.5,
                  color: '#348fff'
                }, {
                  offset: 0.8,
                  color: '#ffcb68'
                }], false)
              }
            },
            data: [1.2000, 5.0800, 11.2000, 22.0000, 35.0000]// 中心数据
          }
        ]})
    }
  }
    // drawLineChart() {
    //   var mytextStyle = {
    //     color: "#000", //文字颜色
    //     fontStyle: "normal", //italic斜体  oblique倾斜
    //     fontWeight: "normal", //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
    //     fontFamily: "sans-serif", //字体系列
    //     fontSize: 14 //字体大小
    //   };
    //   var _boyActual = [ ];
    //   var _boyActuals =[];
    //   var _boyShould = [100, 100, 100, 100, 100, 100, 100, 100];
    //   var _bgshow = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
    //   var _college =[];
    //   for(var n in this.dataArr){
    //     _boyActual.push(this.dataArr[n].value*2+'%');
    //     _college.push(this.dataArr[n].name);
    //      _boyActuals.push(this.dataArr[n].value*10+'%');
    //   }
    //   // 基于准备好的dom，初始化echarts实例
    //   let myChart = this.$echarts.init(document.getElementById("myChartYearAdd"));
    //   // 绘制图表
    //   myChart.setOption({
    //     //  title: { text: '在Vue中使用echarts' },
    //     // backgroundColor: "#020e25",
    //
    //     //    	backgroundColor: 'rgba(0, 68, 183, 1)',
    //     tooltip: {
    //       show: "true",
    //       trigger: "item",
    //       axisPointer: {
    //         // 坐标轴指示器，坐标轴触发有效
    //         type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    //       }
    //     },
    //     grid: {
    //       containLabel: true,
    //       left: "-12%",
    //       right: "10%",
    //       top: "12%",
    //       bottom: "9%"
    //     },
    //     xAxis: {
    //       type: "value",
    //       show: true,
    //       max: 100,
    //       axisLine: {
    //         show: false
    //       },
    //       axisTick: {
    //         show: false
    //       },
    //       axisLabel: {
    //         show: false
    //       },
    //       splitLine: {
    //         show: false
    //       }
    //     },
    //     yAxis: [
    //       {
    //          inverse: true,
    //         type: "category",
    //         position: "left",
    //         data: _college,
    //         axisLine: {
    //           show: false
    //         },
    //         axisTick: {
    //           show: false
    //         },
    //         axisLabel: {
    //           show: true,
    //           color: "#B5CDF0"
    //         },
    //         splitLine: {
    //           show: false
    //         }
    //       },
    //       {
    //          inverse: true,//降序
    //         type: "category",
    //         position: "left",
    //         data: _college,
    //         axisLine: {
    //           show: false
    //         },
    //         axisTick: {
    //           show: false
    //         },
    //         axisLabel: {
    //           show: true,
    //           color: "#B5CDF0"
    //         },
    //         splitLine: {
    //           show: false
    //         }
    //       }
    //     ],
    //     series: [
    //       {
    //         name: "",
    //         type: "bar",
    //         barWidth: 17,
    //         silent: true,
    //         yAxisIndex: 0,
    //         label: {
    //           normal: {
    //             show: true,
    //             color: "#fff",
    //             formatter: function(data) {
    //               return _boyActuals[data.dataIndex];
    //             },
    //             position: "right"
    //           }
    //         },
    //         itemStyle: {
    //           normal: {
    //             color: "#0B2A54",
    //             barBorderRadius: 0
    //           }
    //         },
    //         data: _bgshow
    //       },
    //       {
    //         name: "",
    //         type: "bar",
    //         barWidth: 17,
    //         silent: false,
    //         yAxisIndex: 1,
    //         itemStyle: {
    //           normal: {
    //             barBorderRadius: 0,
    //             color: {
    //               type: "bar",
    //               colorStops: [
    //                 {
    //                   offset: 0,
    //                   color: "#ffb993" // 0% 处的颜色
    //                 },
    //                 {
    //                   offset: 0.5,
    //                   color: "#2e8af3" // 100% 处的颜色
    //                 },
    //                 {
    //                   offset: 1,
    //                   color: "#33b4fe" // 100% 处的颜色
    //                 }
    //               ],
    //               globalCoord: false // 缺省为 false
    //             }
    //           }
    //         },
    //         data: _boyActual.map(function(item, index) {
    //           return parseInt(item);
    //         })
    //       }
    //     ]
    //   });
    // }
}
</script>

<style scoped>
  #myChartYearAdd{
    top:35px;

  }
  .estimate{
    position: absolute;
    right: 55px;
    bottom: 30px;
    font-size: 14px;
    color: #fff;
  }
  .unit{
    position: absolute;
    right: 55px;
    top: 20px;
  }
</style>
