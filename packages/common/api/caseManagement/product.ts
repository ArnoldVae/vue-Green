/**
 * demo api
 * product
 */
import fetch from '../../../common/fetch'
import url from './url'

/**
 * 获取产品列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
  export function getProducts(keywrods:any) {
  return fetch.post(url.getProducts, keywrods)
}
/**
 * 添加产品
 * 
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function addProduct(keywrods:any) {
  return fetch.post(url.addProduct, keywrods)
  
}
/**
 * 获取产品列表
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function delProduct(keywrods:any) {
  return fetch.post(url.delProduct, keywrods)
}

//获取调查反馈-初步核实数据列表
export function getPreliminaryVerificationForm(keywords: any) {
  return fetch.post(url.getPreliminaryVerificationForm, keywords)
}
//获取调查反馈-调查核实数据列表
export function getInvestigationVerifyForm(keywords: any) {
  return fetch.post(url.getInvestigationVerifyForm, keywords)
}
//获取调查反馈-谈话数据列表
export function getTalkForm(keywords: any) {
  return fetch.post(url.getTalkForm, keywords)
}
//获取调查反馈-函询数据列表
export function getApplyLetter(keywords: any) {
  return fetch.post(url.getApplyLetter, keywords)
}
//获取调查反馈-立案调查数据列表
export function getRegisterInvestigateForm(keywords: any) {
  return fetch.post(url.getRegisterInvestigateForm, keywords)
}
//获取调查反馈-侧面了解数据列表
export function getSideUnderstandForm(keywords: any) {
  return fetch.post(url.getSideUnderstandForm, keywords)
}
//获取调查反馈-阅处数据列表
export function getReadingForm(keywords: any) {
  return fetch.post(url.getReadingForm, keywords)
}
/**
 * 获取线索受理首页
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getCuleAcceptBasicInfo(keywrods : any) {
  return fetch.post(url.getCuleAcceptBasicInfo, keywrods)
}


/**
 * 获取线索已处置tab
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getLeadDisEndTableList(keywrods : any) {
  return fetch.post(url.getLeadDisEndTableList, keywrods)
}

/**
 * 获取线索已处置下拉选
 * @param keywrods
 * @returns {AxiosPromise}
 */
export function getReadyData(keywrods : any) {
  return fetch.post(url.getReadyData, keywrods)
}
//获取数据列表
export function queryMainList(keywrods : any) {
  return fetch.post(url.queryMainList, keywrods)
}

//获取线索来源options下拉选数据
export function queryCodeByType(keywrods : any) {
  return fetch.post(url.queryCodeByType, keywrods)
}

//获取线索处置类型总数countByDealType
export function countByDealType(keywrods : any) {
  return fetch.post(url.countByDealType, keywrods)
}

//添加线索处置方法
export function addDisposalInforMation(keywrods : any) {
  return fetch.post(url.addDisposalInforMation, keywrods)
}
//获取线索分发-本级直查数据列表
export function getCurrentLevelData(keywords: any) {
  return fetch.post(url.getCurrentLevelData, keywords)
}
//获取线索分发-转下级调查数据列表
export function getSubordinateData(keywords: any) {
  return fetch.post(url.getSubordinateData, keywords)
}
//获取线索分发-转其他单位数据列表
export function getOtherUnitData(keywords: any) {
  return fetch.post(url.getOtherUnitData, keywords)
}
//获取线索办理数据
export function getHandlingList(keywords: any) {
  return fetch.post(url.getHandlingList, keywords)
}