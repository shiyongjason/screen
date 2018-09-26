<template>
  <div>
    <div class="frtitle">好享家销售英雄榜</div>
    <div>
      <ul>
        <li v-for="(item) in saleherolist" :key="item.saleid">
          <div :class=item.salebg>
            <div class="saletop">
              <div class="saletopleft">
                <img  :src=item.saleheader>
              </div>
              <div class="saletopright">
                <div class="saletoprightname">{{item.salename}}</div>
                <div :class="item.saletoprightpos">{{item.salepos}}</div>
                <div :class="item.saletoprighttitle">{{item.saletitle}}</div>
              </div>
            </div>
            <div class="salebottom">
              <div :class=item.salebottomcount>季度销售总量</div>
              <div class="salebottomvalue">{{item.salecount}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'salehero',
  props: ['saleherolist'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
