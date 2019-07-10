import fetch from '../../fetch'
import url from './url'

/**
 * 获取区域列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQueryRegions(keywords:any) {
    return fetch.post(url.pageQueryRegions, keywords)
}
/**
 * 获取区域树
 * @param keywords 
 * @param any 
 */
export function getRegionTree(keywords:any){
    return fetch.post(url.getRegionTree, keywords);
}
/**
 * 保存区域
 * @param keywords 
 * @param any 
 */
export function addRegion(keywords:any){
    return fetch.post(url.addRegion, keywords);
}

export function IsValidCode(keywords:any){
    return fetch.post(url.IsValidCode, keywords);
}