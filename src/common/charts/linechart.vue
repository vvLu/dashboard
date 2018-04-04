<template>
    <div class="vue-echarts" :id="id" :style="chartStyle"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'vue-echarts',
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.charts(this.id, this.projectType)
    }, 300)
  },
  watch: {
    projectType: {
      handler: function (val, oldValue) {
        this.charts(this.id, val)
      },
      deep: true
    }
  },
  created () {},
  computed: {},
  beforeUpdata () {
    this.$nextTick(() => {
      this.charts(this.id, this.projectType)
    })
  },
  methods: {
    charts (id, data) {
      const self = this
      if (!id || !data) {
        return
      }
      this.chart = echarts.init(document.getElementById(id))
      this.chart.on('click', function (param) {
        self.$emit('clickEvent', param)
      })
      this.chart.setOption(data)
    }
  },
  // props: ['id', 'projectType', 'chartStyle'],
  props: {
    id: {
      type: String,
      default: function () {
        // 生成一个随机字符串,纯英文的,当不传入ID的时候生成实例,加i确保不会随机到一样的
        let temp = []
        for (let i = 0; i < 6; i++) {
          let randomChar = String.fromCharCode(
            65 + Math.floor(Math.random() * 19) + i
          )
          temp.push(randomChar)
        }
        return temp.reduce((pre, next) => pre + next)
      }
    },
    projectType: {
      type: Object,
      default () {
        return {}
      }
    },
    chartStyle: {
      type: Object,
      default () {
        return {
          width: '100%',
          height: '300px'
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
