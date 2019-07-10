/**
 * demo api
 * organ
 */
import fetch from '../../fetch'
import url from './url'

/**
 * 获取机构树
 * @param keywrods
 * @returns {AxiosPromise}
 */
  export function getOrgans(keywrods:any) {
  return fetch.post(url.getOrgans, keywrods)
}

/**
 * 获取机构列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQueryOrgans(keywrods:any) {
  return fetch.post(url.pageQueryOrgans, keywrods)
}
/**
 * 获取机构详情
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getOrgan(keywrods:any) {
  return fetch.post(url.getOrgan, keywrods)
}
/**
 * 获取机构类型
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getOrganTypes(keywrods:any) {
  return fetch.post(url.getOrganTypes, keywrods)
}
/**
 * 获取机构树列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function queryTableGridDataOfOrgans(keywrods:any) {
  return fetch.post(url.queryTableGridDataOfOrgans, keywrods)
}
/**
 * 获取用户列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQueryUsers(keywrods:any) {
  return fetch.post(url.pageQueryUsers, keywrods)
}
/**
 * 添加机构
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function addOrgan(keywrods:any) {
  return fetch.post(url.addOrgan, keywrods)
}
/**
 * 添加用户
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function addOrgUser(keywrods:any) {
  return fetch.post(url.addOrgUser, keywrods)
}
/**
 * 获取最大编码
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getMaxNum(keywrods:any) {
  return fetch.post(url.getMaxNum, keywrods)
}
