import $api from './api.js'

// 获取平台业务统计情况详情
export function gettable () {
  const url = '/dash/getDashBuinessDetail'
  return $api.get(url)
}

// 获取平台业务统计情况
export function getcard () {
  const url = '/dash/getDashBuiness'
  return $api.get(url)
}

// 获取项目关注(近30日)
export function getbar () {
  const url = '/dash/getDashProAttention'
  return $api.get(url)
}
