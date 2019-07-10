import fetch from '../../fetch'
import url from './url'

/**
 * (统一授权_授权管理)获取授权列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQueryAuthorizations(keywords:any) {
    return fetch.post(url.pageQueryAuthorizations, keywords)
}

/**
 * (统一授权_角色管理)获取角色列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQueryRoles(keywords:any) {
    return fetch.post(url.pageQueryRoles, keywords)
}

/**
 * (统一授权_角色管理)查询系统权限
 */
export function getSystemJurisdiction() {
    return fetch.post(url.getSystemJurisdiction)
}

/**
 * (统一授权_授权状态管理)查询组织机构
 */
export function getOrgTree() {
    return fetch.post(url.getOrgTree)
}

/**
 * (统一授权_授权状态管理)查询授权状态列表
 */
export function pageQueryAuthorizationStatus() {
    return fetch.post(url.pageQueryAuthorizationStatus)
}

/**
 * (统一授权_授权状态管理)查询系统资源
 */
export function getSystemResourceTree() {
    return fetch.post(url.getSystemResourceTree)
}

/**
 * (统一授权_角色管理)检索项"可访问应用"数据
 */
export function getAppSysName() {
    return fetch.post(url.getAppSysName)
}

/**
 * (统一授权_角色管理)新增,编辑角色信息
 */
export function saveOrUpdateRole(keywords:any) {
    return fetch.post(url.saveOrUpdateRole,keywords)
}

/**
 * (统一授权_角色管理)查看,编辑角色弹窗获取角色信息
 */
export function getRoleDetail(keywords:any) {
    return fetch.post(url.getRoleDetail,keywords)
}

/**
 * (统一授权_角色管理)删除角色信息
 */
export function deleteRole(keywords:any) {
    return fetch.post(url.deleteRole,keywords)
}