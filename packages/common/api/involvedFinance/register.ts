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
export function setRegister(keywrods : any) {
  return fetch.post(url.setRegister, keywrods)
}   

/**
 * 查询列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function searchList(keywrods : any) {
  return fetch.post(url.searchList, keywrods)
}   
/**
 * 查询详情
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function showInfoView(keywrods : any) {
  return fetch.post(url.showInfoView, keywrods)
}
/**
 * 查询下拉框数据
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getCodes(keywrods : any) {
  return fetch.post(url.getCodes, keywrods)
}
/**
 * 导出excel
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function exportExcel(keywrods : any) {
  return fetch.post(url.exportExcel, keywrods)
}
/**
 * 定性情况下拉框改变事件
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function dxChange(keywrods : any) {
  return fetch.post(url.dxChange, keywrods)
}
/**
 * 登录校验
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function login(keywrods : any) {
  return fetch.post(url.login, keywrods)
}
/**
 * 数据导出
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function exportZip(keywrods : any) {
  return fetch.post(url.exportZip, keywrods)
}
/**
 * 用户注册
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function addPerson(keywrods : any) {
  return fetch.post(url.addPerson, keywrods)
}