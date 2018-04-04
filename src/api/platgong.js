import $api from './api.js'

// 获取详情导出及分享（人数和人次及占比）
export function pie () {
  const url = '/dash/getDashDetailExport'
  return $api.get(url)
}

// 获取详情导出及分享：按日期排序的率值
export function lineshare () {
  const url = '/dash/getDashDetailExportDaily'
  return $api.get(url)
}

// 详情使用导出及分享（次数及占比
export function lineshare2 () {
  const url = '/dash/getDashDetailExportCount'
  return $api.get(url)
}
