<template>
  <div id="platgoneng">
   <Title class="title1" :title="titles" />
      <div class="contents">
        <Rpanel class="panel" >
          <div slot="bottom" class="bottom">
            <div><span class="ptitlecolor">导出使用率</span>使用导出功能人数 / 进入详情页人数</div>
            <div><span class="ptitlecolor">分享率</span>分享成功人数 / 进入详情页人数</div>
          </div>
        </Rpanel>
      </div>
      <div class="contents">
        <Chart  :projectType="projectType1"/>
      </div>
      <div class="contents">
        <Chart  :projectType="projectType4"/>
      </div>
      <div class="contents">
        <Chart  :projectType="projectType2"/>
      </div>
      <div class="contents" >
        <Chart class="three" :projectType="projectType3"/>
      </div>
  </div>
</template>

<script>
import Title from '@/common/title.vue/title.vue'
import Rpanel from '@/common/cards/recommendpanel.vue'
import Chart from '@/common/charts/linechart.vue'
import { line } from '@/assets/js/charts.js'
import { pie, lineshare, lineshare2 } from '@/api/platgong.js'
export default {
  name: 'platgoneng',
  components: {
    Title,
    Rpanel,
    Chart
  },
  data () {
    return {
      titles: '导出功能使用情况',
      ptitle1: '带看转化率',
      chartStyle1: {
        height: '180px'
      },
      projectType1: {},
      projectType2: {},
      projectType3: {},
      projectType4: {},
      chartStyle: {
        height: '300px'
      }
    }
  },
  created () {
    this._pie()
    this._lineshare()
    this._lineshare2()
  },
  methods: {
    // 导出使用率
    _pie () {
      pie().then((res) => {
        if (res.data.code === 0) {
          let datas = {
            legendata: ['进入报备页', '提交报备', '成功报备'],
            seriesdata: []
          }
          datas.title = '导出使用的人数对用户的影响'
          let name1 = res.data.data.queryMan + '人进入详情页'
          let name2 = res.data.data.exportMan + '人使用导出功能，使用率' + res.data.data.exportRate
          let name3 = res.data.data.shareMan + '人分享成功，分享率' + res.data.data.shareRate
          datas.seriesdata = [{
            value: 100,
            name: name1,
            itemStyle: {
              normal: {
                color: '#9f58f3'
              }
            }
          }, {
            value: 70,
            name: name2,
            itemStyle: {
              normal: {
                color: '#df58f3'
              }
            }
          }, {
            value: 35,
            name: name3,
            itemStyle: {
              normal: {
                color: '#58cbf3'
              }
            }
          }]
          this.projectType1 = line(datas, 'loudou')
        }
      })
    },
    // 分享成功率
    _lineshare () {
      lineshare().then((res) => {
        if (res.data.code === 0) {
          let datas = {
            legenddata: ['导出使用率', '分享使用率', '分享成功率'],
            xdata: [],
            data1: [],
            data2: [],
            data3: [],
            seriesdata: []
          }
          res.data.data.exportRate.forEach(function (element) {
            datas.xdata.push(element.name)
            datas.data1.push(element.value.replace('%', ''))
          }, this)
          res.data.data.shareRate.forEach(function (element) {
            datas.data2.push(element.value.replace('%', ''))
          }, this)
          datas.seriesdata = [{
            name: '导出使用率',
            type: 'line',
            lineStyle: {
              normal: {
                width: 3
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: '#10f7fd'
              }
            },
            data: datas.data1,
            smooth: true
          }, {
            name: '分享使用率',
            type: 'line',
            lineStyle: {
              normal: {
                width: 3
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: '#be80fb'
              }
            },
            data: datas.data2,
            smooth: true
          }]
          datas.title = '导出功能使用趋势图(日)'
          this.projectType2 = line(datas, 'line')
          let datas2 = {
            legenddata: ['总浏览次数', '项目浏览次数', '详情导出次数'],
            xdata: [],
            data1: [],
            data2: [],
            data3: [],
            seriesdata: []
          }
          res.data.data.projBrowerNum.forEach(function (element) {
            datas2.xdata.push(element.name)
            datas2.data2.push(element.value)
          }, this)
          res.data.data.exportNum.forEach(function (element) {
            datas2.data3.push(element.value)
          }, this)
          datas2.seriesdata = [{
            name: '项目浏览次数',
            type: 'line',
            lineStyle: {
              normal: {
                width: 3
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: '#f37b0a'
              }
            },
            data: datas2.data2,
            smooth: true
          }, {
            name: '详情导出次数',
            type: 'line',
            lineStyle: {
              normal: {
                width: 3
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: '#2fad0b'
              }
            },
            yAxisIndex: 1,
            data: datas2.data3,
            smooth: true
          }]
          this.projectType3 = this.getlinechart(datas2.xdata, datas2.seriesdata)
        }
      })
    },
    // 导出使用次数
    _lineshare2 () {
      lineshare2().then((res) => {
        if (res.data.code === 0) {
          let datas = {
            legendata: ['进入报备页', '提交报备', '成功报备'],
            seriesdata: []
          }
          datas.title = '导出使用的次数对流量的影响'
          let name1 = res.data.data.queryNum + '次进入详情页'
          let name2 = res.data.data.exportNum + '次使用导出功能，使用率' + res.data.data.exportRate
          let name3 = res.data.data.shareNum + '次分享成功，分享率' + res.data.data.shareRate
          datas.seriesdata = [{
            value: 100,
            name: name1,
            itemStyle: {
              normal: {
                color: '#fb8704'
              }
            }
          }, {
            value: 70,
            name: name2,
            itemStyle: {
              normal: {
                color: '#fbc104'
              }
            }
          }, {
            value: 35,
            name: name3,
            itemStyle: {
              normal: {
                color: '#f37676'
              }
            }
          }]
          this.projectType4 = line(datas, 'loudou')
        }
      })
    },
    getlinechart (xdata, seriesdata) {
      var option = {
        title: {
          text: '导出功能与项目详情对比图',
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
          data: ['项目浏览次数', '详情导出次数'],
          top: 50
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
          top: 120,
          bottom: '40px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xdata,
          axisTick: {show: false},
          position: 'bottom'
        },
        yAxis: [{
          type: 'value',
          name: '项目浏览次数',
          axisTick: {show: false},
          axisLine: {
            show: false,
            lineStyle: {
              color: '#666'
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}'
          }
        }, {
          type: 'value',
          name: '详情导出次数',
          axisTick: {show: false},
          axisLine: {
            show: false,
            lineStyle: {
              color: '#666'
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}'
          }
        }],
        series: seriesdata
      }
      return option
    }
  }
}
</script>

<style scoped>
#platgoneng .contents {
  padding: 10px;
  display: flex;
  background: #fff;
}
#platgoneng .contents .cardone {
  margin-right: 10px;
}
.boldsize {
  font-weight: bold;
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
}
#platgoneng .panel{
  width: 100%
}
.ptitlecolor{
  color: #5A8ED8
}
.three{
  margin: 15px 0
}
#platgoneng .bottom{
  font-size: 12px
}
</style>
