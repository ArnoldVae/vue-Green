/**
 * demo api
 * product
 */
import fetch from '../../fetch'
import url from './url'

/**
 * 获取产品列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getArchives(keywrods : any) {
  return fetch.post(url.getArchives, keywrods)
}
/**
 * 添加产品
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function addProduct(keywrods : any) {
  return fetch.post(url.addProduct, keywrods)
}
/**
 * 获取产品列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function delProduct(keywrods : any) {
  return fetch.post(url.delProduct, keywrods)
}
