import $api from './api.js'

// card
export function getcardf () {
  const url = '/dash/getFlowToday'
  return $api.get(url)
}

// 获取平台日流量统计（最近俩月
export function getline () {
  const url = '/dash/getFlowDaily'
  return $api.get(url)
}

// 获取平台流量详情统计
export function gettable () {
  const url = '/dash/getFlowDetail'
  return $api.get(url)
}
