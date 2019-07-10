import fetch from '../../fetch'
import url from './url'
// import url from './demourl'

/**
 * 获取数据字典分组
 * @param keywords
 */
export function treeSystemCodeGroup(keywords:any){
    return fetch.post(url.treeSystemCodeGroup, keywords);
}

/**
 * 获取数据字典类型
 * @param keywords
 */
export function getDictionaryTypeTree(keywords:any){
    return fetch.post(url.getDictionaryTypeTree, keywords);
}

/**
 * 获取数据字典信息
 * @param keywords
 */
export function getDictionaryInfoTree(keywords:any){
    return fetch.post(url.getDictionaryInfoTree, keywords);
}
/**
 * 新增数据字典分组
 * @param keywords 
 */
export function addDictionaryGroup(keywords:any){
    return fetch.post(url.addDictionaryGroup, keywords);
}
/**
 * 删除数据字典分组
 * @param keywords 
 */
export function removeDictionaryGroup(keywords:any){
    return fetch.post(url.removeDictionaryGroup, keywords);
}
/**
 * 新增数据字典分类信息
 * @param keywords 
 */
export function addDataDictionaryType(keywords:any){
    return fetch.post(url.addDataDictionaryType, keywords);
}
/**
 * 删除数据字典分类
 * @param keywords 
 */
export function removeDataDictionaryType(keywords:any){
    return fetch.post(url.removeDataDictionaryType, keywords);
}
/**
 * 获取全部字典类型 
 * @param keywords 
 */
export function queryAllPlatSystemCodes(keywords:any){
    return fetch.post(url.queryAllPlatSystemCodes,keywords);
}
/**
 * 获取全部字典
 * @param keywords 
 */
export function querySystemCodeNodesbyType(keywords:any){
    return fetch.post(url.querySystemCodeNodesbyType, keywords);
}
/**
 * 新增数据字典
 * @param keywords 
 */
export function addDictionaryCodeNode(keywords:any){
    return fetch.post(url.addDictionaryCodeNode, keywords);
}
export function removeDictionaryCodeNode(keywords:any){
    return fetch.post(url.removeDictionaryCodeNode, keywords);
}



/**
 * 获取字典列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function pageQueryCodes(keywords:any) {
    return fetch.post(url.pageQueryCodes, keywords)
}
/**
 * 获取字典分组
 * @param keywrods 
 */
export function getCodeGroup(keywords:any){
    return fetch.post(url.getCodeGroup, keywords);
}
/**
 * 获取字典树
 * @param keywords 
 * @param any 
 */
export function getCodeTree(keywords:any){
    return fetch.post(url.getCodeTree, keywords);
}
/**
 * 保存字典类型
 * @param keywords 
 * @param any 
 */
export function addCodeType(keywords:any){
    return fetch.post(url.addCodeType, keywords);
}
/**
 * 保存字典
 * @param keywords 
 * @param any 
 */
export function addCode(keywords:any){
    return fetch.post(url.addCode, keywords);
}
