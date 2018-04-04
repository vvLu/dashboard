export function line (data, name, color, title, subtitle) {
  switch (name) {
    case 'line':
      return lines(data)
    case 'customizedPie':
      return customizedPie(data)
    case 'bar':
      return barStack(data, color, title, subtitle)
    case 'pie':
      return getpai(data)
    case 'duiline':
      return duilines(data)
    case 'piep':
      return pie(data)
    case 'qiantaopie':
      return qiantaopie(data)
    case 'loudou':
      return loudou(data)
    default:
      // statements_def
  }
}

// 处理折线图
function lines (data) {
  let legenddata = data.legenddata
  let xdata = data.xdata
  let seriesdata = data.seriesdata
  let title = data.title
  var option = {
    title: {
      text: title,
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
    dataZoom: [{
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
    }],
    legend: {
      data: legenddata,
      top: 50,
      left: 'center'
    },
    grid: {
      left: '3%',
      right: '4%',
      top: 120,
      bottom: '40px',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        position: 'bottom',
        axisTick: {show: false},
        data: xdata
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {show: false},
        axisLine: {
          show: false,
          lineStyle: {
            color: '#666'
          }
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: seriesdata
  }
  return option
}

// 处理堆叠折线
function duilines (data) {
  let legenddata = data.legenddata
  let xdata = data.xdata
  let seriesdata = data.seriesdata
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    dataZoom: [{
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
    }],
    legend: {
      data: legenddata,
      top: 0,
      left: 'center'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '40px',
      top: 20,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        position: 'bottom',
        data: xdata,
        axisTick: {show: false}
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {show: false},
        axisLine: {
          show: false,
          lineStyle: {
            color: '#666'
          }
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: seriesdata
  }
  return option
}

// 处理 环形饼图
function customizedPie (data) {
  let itemcolor = data.itemcolor
  let formatter = data.formatter
  let data1 = data.data1
  let data2 = data.data2
  var option = {
    series: [{
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['95%', '80%'],
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
        value: data1,
        name: '污染来源分析',
        itemStyle: {
          normal: {
            color: itemcolor
          }
        },
        label: {
          normal: {
            formatter: '{d} %',
            fontSize: 16,
            fontWeight: 'bold',
            textStyle: {
              color: '#666'
            }
          }
        }
      }, {
        value: data2,
        name: '占位',
        tooltip: {
          show: false
        },
        itemStyle: {
          normal: {
            color: '#ececec'
          }
        },
        label: {
          normal: {
            textStyle: {
              color: '#666666'
            },
            formatter: formatter
          }
        }
      }]
    }]
  }
  return option
}

// 处理 带有 ‘富文本标签’的 饼图
function getpai (data) {
  var legendata = ['回访新增', '主动报备']
  var color = ['#F09A96', '#97A3F8']
  var seriesfomter = [[
    '{title|{b}}{abg|}',
    ' {weatherHead|回访前未\n报备回访后\n才报备的人}',
    '{hr|}'
  ], [
    '{title|{b}}{abg|}',
    ' {weatherHead|回访前未2\n报备回访后2\n才报备的人2}',
    '{hr|}'
  ]]
  var datas = [{
    'key': '回访新增',
    'count': '11%'
  }, {
    'key': '主动报备',
    'count': '89%'
  }]
  datas.map((res, i) => {
    res.color = color[i]
    res.sFommter = seriesfomter[i]
  })
  var seriesdata = []
  var seriescolors = []
  var option = {
    title: {
      text: '天气情况统计',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: legendata
    },
    //  [
    //       '{title|{b}}{abg|}',
    //       ' {weatherHead|回访前未\n报备回访后\n才报备的人}',
    //       '{hr|}'
    //   ].join('\n'),
    series: [{
      type: 'pie',
      radius: '45%',
      center: ['50%', '50%'],
      selectedMode: 'single',
      data: [{
        value: seriesdata,
        name: legendata,
        itemStyle: {
          normal: {
            color: seriescolors
          }
        },
        label: {
          normal: {
            formatter: seriesfomter.join('\n'),
            fontSize: 10,
            backgroundColor: '#eee',
            borderColor: '#777',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              title: {
                color: '#eee',
                align: 'center'
              },
              abg: {
                backgroundColor: '#333',
                width: '100%',
                align: 'right',
                height: 25,
                borderRadius: [4, 4, 0, 0]
              },
              weatherHead: {
                color: '#333',
                height: 20,
                align: 'left',
                padding: [0, 5, 0, 5]
              },
              hr: {
                borderColor: '#777',
                width: '100%',
                borderWidth: 0.5,
                height: 0
              }
            }
          }
        }
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }
  return option
}

// 处理 柱状图
function barStack (data, color, title, subtitle) {
  var xAxisDataList = []
  var seriesDataList = []
  var itemcolor = color
  data.forEach(function (item) {
    xAxisDataList.push(item.key)
    seriesDataList.push(item.value)
  })
  return {
    title: {
      text: title,
      subtext: subtitle,
      textStyle: {
        color: '#646566'
      },
      subtextStyle: {
        color: '#ACA9F6'
      },
      right: 0
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
    grid: {
      left: '3%',
      right: '4%',
      bottom: '0',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      scale: true,
      position: 'top',
      boundaryGap: false,
      splitLine: {show: false},
      axisLine: {show: false},
      axisTick: {show: false},
      axisLabel: {margin: 2, textStyle: {color: '#aaa'}}
    },
    yAxis: {
      type: 'category',
      nameGap: 10,
      axisLine: {show: false, lineStyle: {color: '#ddd'}},
      axisTick: {show: false, lineStyle: {color: '#ddd'}},
      axisLabel: {interval: 0, textStyle: {color: '#666'}},
      data: xAxisDataList
    },
    series: [{
      type: 'bar',
      barWidth: '40%',
      data: seriesDataList,
      itemStyle: {
        normal: {
          color: itemcolor,
          barBorderRadius: 50
        }
      }
    }]
  }
}

// 饼图
function pie (data) {
  let legendata = data.legendata
  let seriesdata = data.seriesdata
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: 20,
      data: legendata
    },
    series: [
      {
        name: '姓名',
        type: 'pie',
        radius: '52%',
        center: ['50%', '34%'],
        data: seriesdata,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  return option
}

// 嵌套环图
function qiantaopie (data) {
  let legendata = data.legendata
  let seriesdata = data.seriesdata
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      data: legendata
    },
    series: seriesdata
  }
  return option
}

// 漏斗图
function loudou (data) {
  let seriesdata = data.seriesdata
  let legendata = data.legendata
  let title = data.title
  var option = {
    title: {
      text: title,
      left: 'center'
    },
    legend: {
      data: legendata
    },
    calculable: true,
    series: [{
      name: '漏斗图',
      type: 'funnel',
      left: '0%',
      top: 60,
      bottom: 10,
      width: '100%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '90%',
      sort: 'descending',
      gap: 2,
      label: {
        normal: {
          show: true,
          position: 'inside'
        },
        emphasis: {
          textStyle: {
            fontSize: 20
          }
        }
      },
      labelLine: {
        normal: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: '#fff',
          borderWidth: 1
        }
      },
      data: seriesdata
    }]
  }
  return option
}
