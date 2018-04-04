import $api from './api.js'

// 获取报备人群主动性分析
export function getcard () {
  const url = '/dash/getDashReportPosit'
  return $api.get(url)
}

// 获取报备人群增长趋势
export function getcard2 () {
  const url = '/dash/getDashReportGrowTrend'
  return $api.get(url)
}

// 获取报备增长趋势（累计情况）
export function linecard () {
  const url = '/dash/getDashReportGrowTrendTotal'
  return $api.get(url)
}

// 获取业务质量对比分析：带看转化率
export function pie () {
  const url = '/dash/getDashReportSeeRate'
  return $api.get(url)
}

// 获取业务质量对比分析：成交转化率
export function pie2 () {
  const url = '/dash/getDashReportOkRate'
  return $api.get(url)
}

// 获取报备人群业务属性：公司分布
export function pie3 () {
  const url = '/dash/getCompanyDistribution'
  return $api.get(url)
}

// 获取报备人群业务属性：工作年龄分布
export function pie4 () {
  const url = '/dash/getAgeDistribution'
  return $api.get(url)
}

// 获取报备丢失率：占比
export function pie5 () {
  const url = '/dash/getReportLostRate'
  return $api.get(url)
}

// 获取报备丢失率：按日期排序的率值
export function linediu () {
  const url = '/dash/getReportLostRateDaily'
  return $api.get(url)
}
