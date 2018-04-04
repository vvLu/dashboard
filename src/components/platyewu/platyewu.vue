<template>
  <div id="platyewu">
    <Title :title="titles" />
    <div class="contents">
      <div class="contentCard">
        <Cards :classstyle="cardone" :title1='cardtitle1' :titlenum="cardnum1" :iconimg="iconimg1"/>
        <Cards :classstyle="cardtwo" :titlenum="cardnum2" :title2="cardtitle3" :title1='cardtitle2'/>
      </div>
      <div class="contentCard">
        <Cards :classstyle="cardothree" :title1='cardtitle4' :titlenum="cardnum3" :title2='cardtitle5' :iconimg="iconimg2"/>
        <Cards :classstyle="cardofour" :title1='cardtitle6' :titlenum="cardnum4" :title2='cardtitle7' :iconimg="iconimg3"/>
      </div>
      <Cards :classstyle="cardofive"  :title1='cardtitle8' :titlenum="cardnum5" :title2='cardtitle9' :iconimg="iconimg4"/>
      <Tables class="tablemargin" :tablecontents="tablecontents1"/>
    </div>
    <Title :title="titles2" class="titles" />
    <div class="contents content2">
      <div class="title3">项目</div>
      <Chart class="chartstyle" :projectType="projectType"/>
      <Chart  :projectType="projectType2"/>
      <div class="title3 title4">区域</div>
      <Chart class="chartstyle" :projectType="projectType3"/>
      <Chart  :projectType="projectType4"/>
      <div class="title3 title5">物业</div>
      <Chart :chartStyle="chartStylewy" class="chartstyle" :projectType="projectType5"/>
      <Chart :chartStyle="chartStylewy" :projectType="projectType6"/>
    </div>
  </div>
</template>

<script>
import Title from '@/common/title.vue/title.vue'
import Cards from '@/common/cards/cards.vue'
import Chart from '@/common/charts/linechart.vue'
import Tables from '@/common/table/table.vue'
import {line} from '@/assets/js/charts.js'
import {gettable, getcard, getbar} from '@/api/platyewu.js'
import img1 from '@/assets/images/heard.png'
import img2 from '@/assets/images/renchou.png'
import img3 from '@/assets/images/dinggou.png'
import img4 from '@/assets/images/chengjiao.png'
export default {
  name: 'platyewu',
  components: {
    Title,
    Cards,
    Tables,
    Chart
  },
  data () {
    return {
      titles: '平台业务',
      titles2: '项目关注',
      cardone: 'cardone',
      cardtwo: 'cardtwo',
      cardthr: 'cardthr',
      cardothree: 'cardothree',
      cardofour: 'cardofour',
      cardofive: 'cardofive',
      cardfo: 'cardfo',
      projectType: {},
      projectType2: {},
      projectType3: {},
      projectType4: {},
      projectType5: {},
      projectType6: {},
      tablecontents1: [],
      cardtitle1: '今日报备',
      cardnum1: 0,
      cardtitle2: '今日带看',
      cardtitle3: '',
      cardnum2: 0,
      cardtitle4: '今日认筹',
      cardnum3: 0,
      cardtitle5: '',
      cardtitle6: '今日订购',
      cardnum4: 0,
      cardtitle7: '',
      cardtitle8: '今日成交',
      cardnum5: 0,
      cardtitle9: '',
      iconimg1: img1,
      iconimg2: img2,
      iconimg3: img3,
      iconimg4: img4,
      chartStylewy: {
        height: '200px'
      }
    }
  },
  created () {
    setTimeout(() => {
      // this.projectType = line(this.datas, 'bar', '#5196F7', '报备项目', 'TOP20')
      // this.projectType2 = line(this.datas, 'bar', '#ACA9F6', '报备区域', 'TOP20')
      this._gettable()
      this._getcard()
      this._getbar()
    }, 1000)
  },
  methods: {
    // table
    _gettable () {
      gettable().then((res) => {
        if (res.data.code === 0) {
          this.tablecontents1 = res.data.data
        }
      })
    },
    // card
    _getcard () {
      getcard().then((res) => {
        if (res.data.code === 0) {
          this.cardnum1 = res.data.data[0].value
          this.cardnum2 = res.data.data[1].value
          this.cardtitle3 = '带看率' + res.data.data[1].rate
          this.cardnum3 = res.data.data[2].value
          this.cardtitle5 = '认筹率' + res.data.data[2].rate
          this.cardnum4 = res.data.data[3].value
          this.cardtitle7 = '订购率' + res.data.data[3].rate
          this.cardnum5 = res.data.data[4].value
          this.cardtitle9 = '成交率' + res.data.data[4].rate
        }
      })
    },
    // bar
    _getbar () {
      getbar().then((res) => {
        if (res.data.code === 0) {
          let data1 = res.data.data.项目.报备项目.reverse()
          let data2 = res.data.data.项目.浏览项目.reverse()
          let data3 = res.data.data.区域.报备区域.reverse()
          let data4 = res.data.data.区域.浏览区域.reverse()
          let data5 = res.data.data.物业.报备物业.reverse()
          let data6 = res.data.data.物业.浏览物业.reverse()
          this.projectType = line(data1, 'bar', '#5196F7', '报备项目', 'TOP20')
          this.projectType2 = line(data2, 'bar', '#5196F7', '浏览项目', 'TOP20')
          this.projectType3 = line(data3, 'bar', '#939FF8', '报备区域', 'TOP20')
          this.projectType4 = line(data4, 'bar', '#939FF8', '浏览区域', 'TOP20')
          this.projectType5 = line(data5, 'bar', '#F1AB9C', '报备物业', 'TOP5')
          this.projectType6 = line(data6, 'bar', '#F1AB9C', '浏览物业', 'TOP5')
        }
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
#platyewu{
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}
#platyewu .contents{
  padding: 10px;
  background: #fff
}
.contentCard, .contentCardt{
  display: flex
}
.contentCard .one{
  margin-right: 10px
}
.contentCard .cardone{
  margin-right: 10px;
  background: #5197F7;
  box-shadow: 0px 0px 5px #5197F7;
}
.contentCard .cardtwo{
  background: #8793EC;
  box-shadow: 0px 0px 5px #8793EC;
}
.contentCard .cardothree{
  margin-right: 10px;
  background: #ED9A37;
  box-shadow: 0px 0px 5px #ED9A37;
}
.contentCard .cardofour{
  background: #E9577B;
  box-shadow: 0px 0px 5px #E9577B;
}
#platyewu .cardofive{
  background: #60C9B5;
  box-shadow: 0px 0px 5px #60C9B5;
}
.content2{
  position: relative;
}
.content2 .title3,.content2 .title4{
  height: 40px;
  padding: 0 20px;
  background: #5196F7;
  line-height: 40px;
  position: absolute;
  left: 0;
  color: #fff
}
.content2 .title4{
  background: #ACA9F6;
  margin-top: 20px
}
.content2 .title5{
  background: #F1AB9C;
  margin-top: 20px
}
.chartstyle{
  margin-top: 40px;
  margin-bottom: 20px
}
#platyewu .titles{
  margin-top: 20px
}
.tablemargin{
  margin: 30px 0 15px 0
}
</style>
