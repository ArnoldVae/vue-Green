/**
 * demo api
 * product
 */
import fetch from 'common/fetch'
import url from './url'

/**
 * 获取产品列表
 * @param keywords
 * @returns {AxiosPromise}
 */
export function getMenuList(keywords: any) {
  return fetch.post(url.getMenuList, keywords)
}
