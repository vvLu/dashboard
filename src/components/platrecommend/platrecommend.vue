<template>
  <div id="platrecommend">
    <!-- 回访对报备的影响 -->
    <Title class="title1" :title="titles" :titlestyle="titlestyle"/>
    <div class="contents paneltitles">
      <Rpanel class="panellost paneltitle" >
        <div slot="bottom">
          <div><span class="ptitlecolor">主动报备</span>首次报备前未被回访的人群</div>
          <div><span class="ptitlecolor">回访报备</span>回访后产生报备的人群</div>
        </div>
      </Rpanel>
    </div>
    <div class="contents">
      <Rcard class="cardone">
        <div slot="rightslot">
          <div><span class="boldsize">{{card1}}</span>人报备<span class="boldsize">{{card5}}</span>次</div>
          <div> 贡献<span>{{card2}}</span></div>
        </div>
      </Rcard>
      <Rcard  :classstyle="cardones" :title="cardtitle">
        <div slot="rightslot">
          <div><span class="boldsize">{{card3}}</span>人报备<span class="boldsize">{{card6}}</span>次</div>
          <div> 贡献<span>{{card4}}</span></div>
        </div>
      </Rcard>
   </div>
    <!-- 报备人群增长趋势 -->
    <Title class="title1 title2" :title="titles2" :titlestyle="titlestyle"/>
    <div class="contents">
      <Rcard class="cardone">
        <div slot="rightslot">
          <div>近30天新增<span class="colorfont">{{card7}}</span>人</div>
          <div>环比涨幅<span class="colorfont">{{card8}}</span></div>
        </div>
      </Rcard>
      <Rcard  :classstyle="cardones" :title="cardtitle" >
        <div slot="rightslot">
          <div>近30天新增<span class="colorfont2">{{card9}}</span>人</div>
          <div>环比涨幅<span class="colorfont2">{{card10}}</span></div>
        </div>
      </Rcard>
    </div>
     <div class="contents">
      <Chart class="chartstyle" :projectType="projectType2" :chartStyle="chartStyledui"/>
    </div>
    <!-- 业务质量对比 - 带看转化率 -->
    <Title class="title1 title2" :title="titles3" :titlestyle="titlestyle"/>
    <div class="contents">
      <Rpanel class="panel" >
        <div slot="bottom">
          <div class="ptitlecolor">带看率</div>
          <div>总带看次数 / 总报备次数</div>
          <div class="ptitlecolor">主动报备转化率</div>
          <div>主动报备人群的带看次数 / 总报备次数</div>
          <div class="ptitlecolor">回访报备转化率</div>
          <div>回访报备人群的带看次数 / 总报备次数</div>
        </div>
      </Rpanel>
      <Rpanel :title="ptitle1" >
        <div slot="bottom">
          <Chart :chartStyle='chartStyle1' :projectType="projectType3"/>
        </div>
      </Rpanel>
    </div>
    <div class="contents">
      <Rpanel class="panel" :title="ptitle2">
        <div slot="bottom">
          <Chart :chartStyle='chartStyle1' :projectType="projectType4"/>
        </div>
      </Rpanel>
      <Rpanel :title="ptitle3">
        <div slot="bottom">
          <Chart :chartStyle='chartStyle1' :projectType="projectType5"/>
        </div>
      </Rpanel>
    </div>
    <!-- 业务质量对比 - 成交转化率 -->
    <Title class="title1 title2" :title="titles4" :titlestyle="titlestyle"/>
    <div class="contents">
      <Rpanel class="panel" >
        <div slot="bottom">
          <div class="ptitlecolor">成交转化率</div>
          <div>报备后形成认筹、订购、成交的次数在总报备次数占比</div>
          <div>统计按业务节点的重要级别向下覆盖，例如：一个报备成交后，其认筹、订购的次数不重复统计</div>
        </div>
      </Rpanel>
      <Rpanel :title="ptitle4">
        <div slot="bottom">
          <Chart :chartStyle='chartStyle1' :projectType="projectType6"/>
        </div>
      </Rpanel>
    </div>
     <div class="contents">
      <Rpanel class="panel" :title="ptitle2">
        <div slot="bottom">
          <Chart :chartStyle='chartStyle1' :projectType="projectType7"/>
        </div>
      </Rpanel>
      <Rpanel :title="ptitle3">
        <div slot="bottom">
          <Chart :chartStyle='chartStyle1' :projectType="projectType8"/>
        </div>
      </Rpanel>
    </div>
    <!-- 报备人群业务属性 - 公司分布 -->
    <Title class="title1 title2" :title="titles5" :titlestyle="titlestyle"/>
    <div class="contents">
      <Chart class="chartstyle" :projectType="projectType9"/>
    </div>
    <!-- 报备人群业务属性 - 工作年限分布 -->
    <Title class="title1 title2" :title="titles6" :titlestyle="titlestyle"/>
    <div class="contents">
      <Chart class="chartstyle" :projectType="projectType10"/>
    </div>
    <!-- 报备丢失率 -->
     <Title class="title1 title2" :title="titles7" :titlestyle="titlestyle"/>
      <div class="contents">
        <Rpanel class="panellost" >
          <div slot="bottom">
            <div><span class="ptitlecolor">报备丢失率</span>未提交报备次数 / 进入报备页总次数</div>
            <div> <span class="ptitlecolor">报备失败率</span>未报备成功次数 / 提交报备的总次数 </div>
          </div>
        </Rpanel>
      </div>
      <div class="contents">
        <Chart  :projectType="projectType11"/>
      </div>
      <div class="contents">
        <Chart  :projectType="projectType12" :chartStyle='chartStyleline'/>
      </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import Title from '@/common/title.vue/title.vue'
import Rcard from '@/common/cards/recommendcard.vue'
import Rpanel from '@/common/cards/recommendpanel.vue'
import Chart from '@/common/charts/linechart.vue'
import {line} from '@/assets/js/charts.js'
import { getcard, getcard2, linecard, pie, pie2, pie3, pie4, pie5, linediu } from '@/api/platrecommend.js'
export default {
  name: 'platrecommend',
  components: {
    Title,
    Rcard,
    Rpanel,
    Chart
  },
  data () {
    return {
      titles: '回访对报备的影响',
      titles2: '报备人群增长趋势',
      titles3: '业务质量对比 - 带看转化率',
      titles4: '业务质量对比 - 成交转化率',
      titles5: '报备人群业务属性 - 公司分布',
      titles6: '报备人群业务属性 - 工作年限分布',
      titles7: '报备丢失率',
      ptitle1: '总带看率',
      ptitle2: '主动报备人群',
      ptitle3: '回访报备人群',
      ptitle4: '平台成交率',
      chartStyle1: {
        height: '180px'
      },
      titlestyle: {
        background: '#4977E0'
      },
      cardones: {
        background: '#E47B6D'
      },
      // projectType: {},
      projectType2: {},
      projectType3: {},
      projectType4: {},
      projectType5: {},
      projectType6: {},
      projectType7: {},
      projectType8: {},
      projectType9: {},
      projectType10: {},
      projectType11: {},
      projectType12: {},
      chartstyle: 'chartstyle',
      card1: '',
      card2: '',
      card3: '',
      card4: '',
      card5: '',
      card6: '',
      card7: '',
      card8: '',
      card9: '',
      card10: '',
      cardtitle: '回访报备',
      chartStyledui: {
        width: '100%',
        height: '250px'
      },
      chartStyleline: {
        width: '100%',
        height: '300px'
      }
    }
  },
  created () {
    this._getcard()
    this._getcard2()
    this._line()
    this._pie()
    this._pie2()
    this._pie3()
    this._pie5()
    this._linediu()
    // this.projectType9 = line('', 'piep')
  },
  methods: {
    // card
    _getcard () {
      getcard().then((res) => {
        if (res.data.code === 0) {
          this.card1 = res.data.data.posMan
          this.card2 = res.data.data.pos_rate
          this.card3 = res.data.data.addMan
          this.card4 = res.data.data.add_rate
          this.card5 = res.data.data.pos_count
          this.card6 = res.data.data.add_count
          // this.projectType = this.recommendPeople(res.data.data.addMan, res.data.data.posMan)
        }
      })
    },
    // card2
    _getcard2 () {
      getcard2().then((res) => {
        if (res.data.code === 0) {
          this.card7 = res.data.data.rate.posMan
          this.card8 = res.data.data.rate.pos_rate
          this.card9 = res.data.data.rate.addMan
          this.card10 = res.data.data.rate.add_rate
        }
      })
    },
    // line图表
    _line () {
      linecard().then((res) => {
        if (res.data.code === 0) {
          let data = {}
          let legenddata = ['主动报备人数', '回访报备人数']
          let xdata = []
          let seriesdata = []
          let data1 = []
          let data2 = []
          res.data.data.total.add.forEach(function (element) {
            xdata.push(element.name)
            data1.push(element.value)
          }, this)
          res.data.data.total.posit.forEach(function (element) {
            data2.push(element.value)
          }, this)
          seriesdata = [
            {
              name: '主动报备人数',
              itemStyle: {
                normal: {
                  color: '#f7903c'
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(232, 161, 60, 1)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(251, 210, 152, 1)'
                  }], false),
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 10
                }
              },
              type: 'line',
              stack: '总量',
              smooth: true,
              data: data2
            },
            {
              name: '回访报备人数',
              type: 'line',
              stack: '总量',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#f9604b'
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(228, 123, 108, 1)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(253, 200, 192, 1)'
                  }], false),
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 10
                }
              },
              data: data1
            }
          ]
          data.xdata = xdata
          data.legenddata = legenddata
          data.seriesdata = seriesdata
          this.projectType2 = line(data, 'duiline')
        }
      })
    },
    // pie环形图
    _pie () {
      pie().then((res) => {
        if (res.data.code === 0) {
          let datas = {
            itemcolor: '#65ccff',
            formatter: '总带看率',
            data1: '',
            data2: ''
          }
          let datas2 = {
            itemcolor: '#33ff98',
            formatter: '带看率',
            data1: '',
            data2: ''
          }
          let datas3 = {
            itemcolor: '#ff9966',
            formatter: '带看率',
            data1: '',
            data2: ''
          }
          datas.data1 = res.data.data.seeRate.replace('%', '')
          datas.data2 = 100 - datas.data1
          datas2.data1 = res.data.data.posit.replace('%', '')
          datas2.data2 = 100 - datas2.data1
          datas3.data1 = res.data.data.add.replace('%', '')
          datas3.data2 = 100 - datas3.data1
          this.projectType3 = line(datas, 'customizedPie')
          this.projectType4 = line(datas2, 'customizedPie')
          this.projectType5 = line(datas3, 'customizedPie')
        }
      })
    },
    // pie 成交率环形图
    _pie2 () {
      pie2().then((res) => {
        if (res.data.code === 0) {
          let datas = {
            itemcolor: '#65ccff',
            formatter: '平台成交率',
            data1: '',
            data2: ''
          }
          let datas2 = {
            itemcolor: '#33ff98',
            formatter: '主动报备人群',
            data1: '',
            data2: ''
          }
          let datas3 = {
            itemcolor: '#ff9966',
            formatter: '回访报备人群',
            data1: '',
            data2: ''
          }
          datas.data1 = res.data.data.okRate.replace('%', '')
          datas.data2 = 100 - datas.data1
          datas2.data1 = res.data.data.posit.replace('%', '')
          datas2.data2 = 100 - datas2.data1
          datas3.data1 = res.data.data.add.replace('%', '')
          datas3.data2 = 100 - datas3.data1
          this.projectType6 = line(datas, 'customizedPie')
          this.projectType7 = line(datas2, 'customizedPie')
          this.projectType8 = line(datas3, 'customizedPie')
        }
      })
    },
    // pie 饼图 公司分布
    _pie3 () {
      pie3().then((res) => {
        if (res.data.code === 0) {
          let data = {
            legendata: [],
            seriesdata: []
          }
          res.data.data.forEach(function (element) {
            data.legendata.push(element.name)
          }, this)
          data.seriesdata = res.data.data
          this.projectType9 = line(data, 'piep')
        }
      })
      pie4().then((res) => {
        if (res.data.code === 0) {
          let data = {
            legendata: [],
            seriesdata: []
          }
          res.data.data.forEach(function (element) {
            data.legendata.push(element.name)
          }, this)
          data.seriesdata = res.data.data
          this.projectType10 = line(data, 'piep')
        }
      })
    },
    // pie5 饼图 丢失率
    _pie5 () {
      pie5().then((res) => {
        if (res.data.code === 0) {
          let datas = {
            legendata: ['进入报备页', '提交报备', '成功报备'],
            seriesdata: []
          }
          let name1 = '进入报备页' + res.data.data.countNum + '次'
          let name2 = '提交报备' + res.data.data.commitReport + '次,丢失率' + res.data.data.lostRate
          let name3 = '成功报备' + res.data.data.okReport + '次,失败率' + res.data.data.failRate
          datas.seriesdata = [{
            value: 100,
            name: name1
          }, {
            value: 70,
            name: name2
          }, {
            value: 35,
            name: name3
          }]
          this.projectType11 = line(datas, 'loudou')
        }
      })
    },
    // line 报备丢失率
    _linediu () {
      linediu().then((res) => {
        if (res.data.code === 0) {
          let datas = {
            legenddata: ['报备丢失率', '报备失败率'],
            xdata: [],
            data1: [],
            data2: [],
            seriesdata: []
          }
          res.data.data.lost.forEach(function (element) {
            datas.xdata.push(element.name)
            datas.data1.push(element.value.replace('%', ''))
          }, this)
          res.data.data.fail.forEach(function (element) {
            datas.data2.push(element.value.replace('%', ''))
          }, this)
          datas.seriesdata = [{
            name: '报备丢失率',
            type: 'line',
            data: datas.data1,
            lineStyle: {
              normal: {
                width: 3
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: '#2bdfff'
              }
            },
            smooth: true
          }, {
            name: '报备失败率',
            type: 'line',
            data: datas.data2,
            lineStyle: {
              normal: {
                width: 3
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: '#def70b'
              }
            },
            smooth: true
          }]
          this.projectType12 = line(datas, 'line')
        }
      })
    }
  }
}
</script>

<style scoped>
#platrecommend .contents {
  padding: 10px;
  display: flex;
  background: #fff;
}
#platrecommend .contents .cardone {
  margin-right: 10px;
}
.boldsize {
  font-weight: bold;
  font-size: 14px
}
.chartstyle {
  width: 50%;
}
.title2{
  margin-top: 20px;
}
.colorfont{
  font-weight: bold;
  color: rgb(232, 161, 60);
  font-size: 14px
}
.colorfont2{
  font-weight: bold;
  color: #e47b6d;
  font-size: 14px
}
.panel{
  margin-right: 10px;
  font-size: 12px
}
.ptitlecolor{
  color: #5A8ED8
}
#platrecommend .panellost{
  width: 100%;
}
#platrecommend .paneltitle{
  margin-bottom: 0px
}
#platrecommend .paneltitles{
  padding-bottom: 0px
}
</style>
