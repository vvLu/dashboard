import $api from './api.js'

// 注册，关注，取关
export function zhuce () {
  const url = '/dash/getUserInfo'
  return $api.get(url)
}

// 注册量注册率
export function zhucerate () {
  const url = '/dash/getUserregstdaily'
  return $api.get(url)
}

// 注册表格
export function zhucetable () {
  const url = '/dash/getBusiness'
  return $api.get(url)
}
