<template>
  <div id="home">
    <Title :title="titles" />
    <div class="contents">
      <div class="contentCard">
        <Cards :classstyle="cardone" :titlenum="cardnum1" :title1='cardtitle1' :iconimg="iconimg1"/>
        <Cards :classstyle="cardtwo" :titlenum="cardnum2" :title2="cardtitle3" :title1='cardtitle2'/>
      </div>
      <div class="contentCardt">
        <Cards :classstyle="cardthr" :titlenum="cardnum3" :title1='cardtitle4' :iconimg="iconimg2"/>
        <Cards :classstyle="cardfo" :titlenum="cardnum4" :title2="cardtitle5" :title1='cardtitle6' :iconimg="iconimg3"/>
      </div>
      <Chart class="chartmargin" :id="id" :projectType="projectType"/>
      <Tables  :tablecontents="tablecontents1" />
    </div>
  </div>
</template>

<script>
import Title from '@/common/title.vue/title.vue'
import Cards from '@/common/cards/cards.vue'
import Chart from '@/common/charts/linechart.vue'
import Tables from '@/common/table/table.vue'
import {zhuce, zhucerate, zhucetable} from '@/api/paltuser.js'
import img1 from '@/assets/images/heard.png'
import img2 from '@/assets/images/guanzhu.png'
import img3 from '@/assets/images/quguan.png'
export default {
  name: 'home',
  components: {
    Title,
    Cards,
    Chart,
    Tables
  },
  data () {
    return {
      titles: '平台用户',
      cardone: 'cardone',
      cardtwo: 'cardtwo',
      cardthr: 'cardthr',
      cardfo: 'cardfo',
      id: 'line1',
      cardtitle1: '今日注册',
      cardtitle2: '总注册人数',
      cardtitle3: '',
      cardtitle4: '总关注人数',
      cardtitle6: '总取关人数',
      cardtitle5: '',
      projectType: {},
      cardnum1: 0,
      cardnum2: 0,
      cardnum3: 0,
      cardnum4: 0,
      tablecontents1: [],
      iconimg1: img1,
      iconimg2: img2,
      iconimg3: img3
    }
  },
  created () {
    this._zhuce()
    this._zhucerate()
    this.gettable()
  },
  methods: {
    // 获取table
    gettable () {
      zhucetable().then((res) => {
        if (res.data.code === 0) {
          this.tablecontents1 = res.data.data
        }
      })
    },
    getlinechart (xdata, seriesdata) {
      this.projectType = {
        title: {
          text: '平台用户趋势图（日）',
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
          top: 40,
          left: 'center',
          data: ['注册量', '注册率']
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
          axisTick: {show: false},
          position: 'bottom'
        },
        yAxis: [{
          type: 'value',
          name: '注册量',
          axisTick: {show: false},
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}'
          }
        }, {
          type: 'value',
          name: '注册率%',
          axisTick: {show: false},
          axisLine: {
            show: false
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
    },
    // 图表
    _zhucerate () {
      zhucerate().then((res) => {
        if (res.data.code === 0) {
          let xdatas = []
          let regst = []
          let rate = []
          let seriesdatas = []
          res.data.data.reverse().forEach(function (element) {
            xdatas.push(element.date)
            regst.push(element.regst)
            rate.push(element.rate.replace('%', ''))
          }, this)
          seriesdatas = [{
            name: '注册量',
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
            name: '注册率',
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
    // 获取注册数量
    _zhuce () {
      let that = this
      zhuce().then((res) => {
        if (res.data.code === 0) {
          that.cardnum1 = res.data.data[0].today
          that.cardnum2 = res.data.data[0].total
          that.cardtitle3 = '注册率' + res.data.data[0].rate
          that.cardnum2 = res.data.data[0].total
          that.cardnum4 = res.data.data[1].total
          that.cardnum3 = res.data.data[2].total
          that.cardtitle5 = '取关率' + res.data.data[1].rate
        }
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
#home{
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  padding-bottom: 15px
}
#home .contents{
  padding: 10px;
}
.contentCard, .contentCardt{
  display: flex;
}
.contentCard .one{
  margin-right: 10px;
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
.contentCardt .cardthr{
  margin-right: 10px;
  background: #B48FE9;
  box-shadow: 0px 0px 5px #B48FE9;
}
.contentCardt .cardfo{
  background: #F1AB9C;
  box-shadow: 0px 0px 5px #F1AB9C;
}
.chartmargin{
  margin: 15px 0;
}
</style>
