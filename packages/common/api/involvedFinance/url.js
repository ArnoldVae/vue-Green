/**
 * 配置所有接口路径
 */
const webUrl="http://localhost:8080"; //自定义前缀
//const webUrl="" //使用默认前缀
module.exports ={
  // ---------登记模块----------
  setRegister:webUrl+"/jwjw_sacw/scdcBasicInfoTemp/saveScdcBasicInfo",
  // ---------查询模块----------
  searchList:webUrl+"/jwjw_sacw/scdcBasicInfoTemp/selectAll",
  // ---------查看模块----------
  showInfoView:webUrl+"/jwjw_sacw/scdcBasicInfoTemp/selectByPrimaryKey",
  // ---------查询下拉框模块----------
  getCodes:"/jwjw_sacw/getCodes",
  // ---------导出excel----------
  exportExcel:webUrl+"/jwjw_sacw/scdcBasicInfoTemp/ExportExcel",
  // ---------定性情况、处置情况下拉框改变事件----------
  dxChange:webUrl+"/jwjw_sacw/scdcBasicInfoTemp/updateByDx",
  // ---------登录校验----------
  login:webUrl+"/jwjw_sacw/personInfo/login",
   // ---------数据导出----------
  exportZip:webUrl+"/jwjw_sacw/scdcBasicInfoTemp/exportZip",
  // ---------用户注册----------
  addPerson:webUrl+"/jwjw_sacw/personInfo/savePersonInfo",
}