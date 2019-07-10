/**
 * demo api
 * product
 */
import fetch from '../../../fetch'
import url from '../url'
/**
 * 获取demo条目
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getDemoItem(keywrods : any) {
  return fetch.post(url.getDemoItem, keywrods)
}
/**
 * 获取demo条目
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getDemoItemOther(keywrods : any) {
  return fetch.post(url.getDemoItem2, keywrods)
}
