/**
 * demo api
 * product
 */
import fetch from 'common/fetch'
import url from './url'

/**
 * 获取产品列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getLimited(keywrods : any) {
  console.log(url)
  return fetch.post(url.getLimited, keywrods)
}

