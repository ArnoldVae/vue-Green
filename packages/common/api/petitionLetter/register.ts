/**
 * api by nick
 * register
 */
import fetch from 'common/fetch'
import url from './url'

/**
 * 查询页面数据
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getTables(keywrods : any) {
  return fetch.post(url.getTables, keywrods)
}
