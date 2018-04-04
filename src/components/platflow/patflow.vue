<template>
  <div id="platflow">
    <Title :title="titles" />
    <div class="contents">
      <div class="contentCard">
        <Cards :classstyle="cardone" :iconimg="iconimg1">
          <div slot="zidingy">
            今日<span class="boldfont">{{cardnum1}}</span>人操作<span class="boldfont">{{cardnum2}}</span>次
          </div>
        </Cards>
        <Cards :classstyle="cardtwo">
          <div slot="zidingy">
            本月<span class="boldfont">{{cardnum3}}</span>人使用平台
          </div>
        </Cards>
      </div>
      <Chart class="chartmargin" :id="id" :projectType="projectType"/>
      <Tables :tabletitle="tabletitle" :tablecontents="tablecontents1"/>
    </div>
  </div>
</template>

<script>
import Title from '@/common/title.vue/title.vue'
import Cards from '@/common/cards/cards.vue'
import Chart from '@/common/charts/linechart.vue'
import Tables from '@/common/table/table.vue'
import {getcardf, getline, gettable} from '@/api/platflow.js'
import img1 from '@/assets/images/heard.png'
export default {
  name: 'platflow',
  components: {
    Title,
    Cards,
    Chart,
    Tables
  },
  data () {
    return {
      titles: '平台流量',
      cardone: 'cardone',
      cardtwo: 'cardtwo',
      cardthr: 'cardthr',
      cardfo: 'cardfo',
      id: 'line2',
      projectType: {},
      cardnum1: '',
      cardnum2: '',
      cardnum3: '',
      tablecontents1: [],
      iconimg1: img1,
      tabletitle: ['项目(人)', '今日', '昨日', '本周', '上周', '本月', '上月', '总量']
    }
  },
  created () {
    this._getcardf()
    this._getline()
    this._gettable()
  },
  methods: {
    // 获取card数据
    _getcardf () {
      getcardf().then((res) => {
        if (res.data.code === 0) {
          this.cardnum1 = res.data.data.today.flow
          this.cardnum2 = res.data.data.today.count
          this.cardnum3 = res.data.data.sum
        }
      })
    },
    // 获取图表数据
    _getline () {
      getline().then((res) => {
        if (res.data.code === 0) {
          let xdatas = []
          let regst = []
          let rate = []
          let seriesdatas = []
          res.data.data.reverse().forEach(function (element) {
            xdatas.push(element.date)
            regst.push(element.count)
            rate.push(element.flow)
          }, this)
          seriesdatas = [{
            name: '总人数',
            type: 'bar',
            yAxisIndex: 0,
            barWidth: '60%',
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: 'rgb(134, 147, 236)'
              }
            },
            data: regst
          }, {
            name: '总流量',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            lineStyle: {
              normal: {
                width: 3
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: '#D67699'
              }
            },
            data: rate
          }]
          this.getlinechart(xdatas, seriesdatas)
        }
      })
    },
    getlinechart (xdata, seriesdata) {
      this.projectType = {
        title: {
          text: '流量趋势图（日）',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['总人数', '总流量'],
          top: 40,
          left: 'center'
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
          }
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '40px',
          top: 120,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xdata,
          position: 'bottom'
        },
        yAxis: [{
          type: 'value',
          name: '总人数',
          axisLine: {show: false},
          splitLine: {show: false},
          axisTick: {show: false},
          axisLabel: {
            formatter: '{value}'
          }
        }, {
          type: 'value',
          name: '总流量',
          axisLine: {show: false},
          splitLine: {show: false},
          axisTick: {show: false},
          axisLabel: {
            formatter: '{value}'
          }
        }],
        series: seriesdata
      }
    },
    // 获取table
    _gettable () {
      gettable().then((res) => {
        if (res.data.code === 0) {
          this.tablecontents1 = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped>
#platflow{
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  padding-bottom: 15px
}
#platflow .contents{
  padding: 10px
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
.boldfont{
  font-weight: bold;
  font-size: 17px;
  margin: 0 3px
}
.chartmargin{
  margin: 25px 0;
}
</style>
