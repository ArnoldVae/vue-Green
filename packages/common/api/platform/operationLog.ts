import fetch from '../../fetch'
import url from './url'

/**
 * 获取审计列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQueryLogs(keywords:any) {
    return fetch.post(url.pageQueryLogs, keywords)
}
/**
 * 获取数据日志审计列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQueryDataLogs(keywords:any) {
    return fetch.post(url.pageQueryDataLogs, keywords)
}
/**
 * 获取组织同步审计列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQueryOrgUnfiyInfos(keywords:any) {
    return fetch.post(url.pageQueryOrgUnfiyInfos, keywords)
}
/**
 * 获取用户同步审计列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQueryUserUnfiyInfos(keywords:any) {
    return fetch.post(url.pageQueryUserUnfiyInfos, keywords)
}
/**
 * 获取系统登录审计列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQuerySysLoginLogs(keywords:any) {
    return fetch.post(url.pageQuerySysLoginLogs, keywords)
}
/**
 * 获取用户登录情况审计列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQueryLoginLogs(keywords:any) {
    return fetch.post(url.pageQueryLoginLogs, keywords)
}
/**
 * 获取本次登录日志列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pagedQueryThisTimeLogs(keywords:any) {
    return fetch.post(url.pagedQueryThisTimeLogs, keywords)
}
/**
 * 获取历次登录日志列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pagedQueryOtherTimeLogs(keywords:any) {
    return fetch.post(url.pagedQueryOtherTimeLogs, keywords)
}
