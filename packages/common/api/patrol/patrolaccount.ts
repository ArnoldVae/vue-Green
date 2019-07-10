/**
 * api by nick
 * register
 */
import fetch from 'common/fetch'
import url from './url'

/**
 * 保存登记
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getList(keywrods : any) {
  debugger
  console.log(JSON.stringify(keywrods) )
  return fetch.post(url.getList, keywrods)
}