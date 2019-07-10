/**
 * demo api
 * product
 */
import fetch from 'common/fetch'
// import url from '../caseHearing/url'
import url from './url'
/**
 * 获取产品列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getPersonnel(keywrods : any) {
  return fetch.post(url.getPersonnel, keywrods)
}

