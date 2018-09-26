<template>
  <div class="maincontent">
    <div class="mainbg"></div>
    <div class="fheight fl">
      <div class='map' :class="switchname === 'map' ? 'mapbg' : ''" >
        <hosjoymap :switchname="switchname"></hosjoymap>
      </div>
      <div class="flbtm">
        <div class="month fl-item fheight">
          <!-- <linecanvas :linedatalist="linedatalist" v-if="linedatalist.length != 0"></linecanvas> -->
          <linecanvas :toptem="toptem" v-if="toptem.length != 0"></linecanvas>
        </div>
        <div class="homeservice fl-item fheight">
           <company :companydata="companydata"></company>
        </div>
      </div>
    </div>
    <div class="fheight fr">
      <div class="environment fl-item">
        <environment :environmentinfo="environmentinfo" v-if="environmentinfo.length != 0"></environment>
      </div>
      <div class="department fl-item">
        <department :departmentdata="departmentdata" v-if="departmentdata.length != 0"></department>
      </div>
      <!-- <div class="company fl-item">
      <linecanvas :linedatalist="linedatalist" v-if="linedatalist.length != 0"></linecanvas>
      </div> -->
       <div class="company fl-item">

         <homeservice :homeservicedata="homeservicedata" v-if="homeservicedata.length != 0"></homeservice>
       </div>
    </div>
  </div>
</template>

<script>
import linecanvas from '../components/linecanvas.vue' // 输入趋势
import player from '../components/player' // 视频组件
import salehero from '../components/salehero' // 销售英雄榜组件
import environment from '../components/environment' // 环境信息
import homeservice from '../components/homeservice' // 服务的家庭
import department from '../components/department' // 分部销售
import company from '../components/company' // 平台公司
import hosjoymap from '../components/hosjoymap'
import {getCookie, setCookie} from '../utils/utils' // 地图

export default {
  name: 'screen',
  data () {
    return {
      // 单选 可配参数map video text 默认map
      switchname: 'map',
      linedatalist: [], // ping
      saleherolist: [], // 好享家销售英雄榜组件
      environmentinfo: [], // 环境信息
      homeservicedata: [], // 服务的家庭
      companydata: [], // 平台公司top5
      departmentdata: [], // 分部销售top5
      toptem: [] // 平台top10
    }
  },
  components: {
    linecanvas,
    player,
    salehero,
    environment,
    homeservice,
    department,
    company,
    hosjoymap
  },
  mounted () {
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
      console.log(respData)
      this.linedatalist = respData.dataList.linedatalist // 折线图
      this.homeservicedata = respData.dataList.homeservicedata // 服务的家庭
      this.companydata = respData.dataList.companydata // 平台公司top5
      this.departmentdata = respData.dataList.departmentdata // 分部销售top5
      this.saleherolist = respData.dataList.saleherolist // 好享家销售英雄榜组件
      this.switchname = respData.dataList.switchname // 单选 可配参数map video text 默认map
      this.environmentinfo = respData.dataList.environmentinfo // 环境信息
      // // 这个地方用vuex的方式实现的。但是仅仅用到了数据的传递，暂时先注释，对于目前的这一个页面其实用不到
      // // 单基本的list.length的判断 还是需要的。只写了一个折线图，饼图也是一样的
      // this.$store.state.linemodule.linedatalist = respData.dataList.linedatalist
      this.toptem = respData.dataList.toptem
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
