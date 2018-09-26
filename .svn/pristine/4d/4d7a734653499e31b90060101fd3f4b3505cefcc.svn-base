<template>
  <div class="main">
    <div :class="switchname === 'map' ? 'mapbg' : ''" >
      <div class="fl">
        <ul>
          <li class="fl-item-topmargin">
            <div class="fl-item" >
              <environment :environmentinfo="environmentinfo" v-if="environmentinfo.length != 0"></environment>
            </div>
          </li>
          <li class="fl-item-midmargig">
            <div class="fl-item">
              <linecanvas :linedatalist="linedatalist" v-if="linedatalist.length != 0"></linecanvas>
            </div>
          </li>
          <li class="fl-item-topmargin">
            <div class="fl-item">
              <!--<piecanvas :piecity="piecity" v-if="piecity.length != 0"></piecanvas>-->
              <piecanvas :piecity="piecity"></piecanvas>
            </div>
          </li>
        </ul>
      </div>
      <div class="fr">
        <salehero :saleherolist="saleherolist" v-if="saleherolist.length != 0"></salehero>
        <div>
          <div class="divmap" v-if="switchname === 'map'">
            <div class="divmaptitle">好享家分布图</div>
          </div>
          <div  class="divvideo" v-if="switchname === 'video'">
            <!--<div class="divmaptitle">好享家分布图</div>-->
            <player></player>
          </div>
          <div class="divtext" v-if="switchname === 'text'">
            <span class="divmaptitle">我是欢迎页</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import linecanvas from '../components/linecanvas.vue' // 折线图表
import piecanvas from '../components/piecanvas.vue' // 饼图
import player from '../components/player' // 视频组件
import salehero from '../components/salehero' // 销售英雄榜组件
import environment from '../components/environment' // 环境信息

export default {
  name: 'screen',
  data () {
    return {
      // 单选 可配参数map video text 默认map
      switchname: 'map',
      linedatalist: [], // 折线图
      piecity: [], // 饼图
      saleherolist: [], // 好享家销售英雄榜组件
      environmentinfo: [] // 环境信息
    }
  },
  components: {
    linecanvas: linecanvas,
    piecanvas: piecanvas,
    player: player,
    salehero: salehero,
    environment
  },
  mounted () {
    console.log(this.piecity)
    this.getConfigData()
    // this.testTimeout()
  },
  methods: {
    // 获取配置数据，因为就简单的一些本地json数据配置调用，就怎么方便怎么来
    async getConfigData () {
      let respData = await this.$axios.getconfigdata().catch(function (err) {
        console.log(err)
      })
      respData = JSON.parse(respData) // 读取出来的是json字符串，转换成json对象

      this.linedatalist = respData.dataList.linedatalist // 折线图
      this.piecity = respData.dataList.piecity // 饼图
      this.saleherolist = respData.dataList.saleherolist // 好享家销售英雄榜组件
      this.switchname = respData.dataList.switchname // 单选 可配参数map video text 默认map
      this.environmentinfo = respData.dataList.environmentinfo // 环境信息
      // // 这个地方用vuex的方式实现的。但是仅仅用到了数据的传递，暂时先注释，对于目前的这一个页面其实用不到
      // // 单基本的list.length的判断 还是需要的。只写了一个折线图，饼图也是一样的
      // this.$store.state.linemodule.linedatalist = respData.dataList.linedatalist
    },
    async testTimeout () {
      let respData = await this.$axios.testTimeout().catch(err => {
        console.log(err)
      })
      console.log(respData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
