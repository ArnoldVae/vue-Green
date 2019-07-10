/**
 * 配置所有接口路径
 */
const url = "http://localhost:8080/jwjw_platform";
export default { 
    getOrgans: "/getOrgans", //组织管理、人员管理：左侧机构树的加载 url+"/organRelation/getOrgans",//
    pageQueryOrgans : url+"/organRelation/pagedQuery",//"/pageQueryOrgans",//组织管理：列表加载
    getOrganTypes : "/getOrganTypes",//组织管理：编辑窗口中的组织类型的数据加载
    getMaxNum : url+"/organ/getMaxOrgCode",//组织管理：获取最大编码
    queryTableGridDataOfOrgans : "/queryTableGridDataOfOrgans",
    pageQueryUsers : "/pageQueryUsers",//人员管理：列表加载
    addOrgan : "/addOrgan",//组织管理：保存方法
    addOrgUser : "/addOrgUser",//人员管理：保存方法
    //数据字典管理
    treeSystemCodeGroup : url+"/systemcode/querySystemCodeGroup",//查询数据数据字典左侧数据字典分组树
    getDictionaryTypeTree : url+"/systemcode/queryDataDictionaryTypeTree",//查询数据数据字典左侧数据字典分类树
    getDictionaryInfoTree : url+"/systemcode/queryDataDictionaryInfoTree",//查询数据数据字典左侧数据字典树
    addDictionaryGroup : url+"/systemcode/addDictionaryGroup",//新增数据字典分组
    removeDictionaryGroup : url+"/systemcode/removeDictionaryGroup",//删除数据字典分组信息
    getCodeGroup : url+"/systemcode/getCodeByGroup",//数据字典管理：查询项、新增字典类型窗口中的字典分组的数据加载
    addDataDictionaryType : url + "/systemcode/addDataDictionaryType", //新增修改数据字典分类信息
    removeDataDictionaryType : url + "/systemcode/removeDataDictionaryType",//删除数据字典分类信息
    pageQueryCodes : url + "/systemcode/pageQueryCodes",//数据字典管理：列表加载
    queryAllPlatSystemCodes : url + "/systemcode/queryAllPlatSystemCodes",//数据字典管理：列表加载
    querySystemCodeNodesbyType : url + "/systemcode/querySystemCodeNodesbyType",//根据数据字典类型获取全部字典
    addDictionaryCodeNode : url + "/systemcode/addDictionaryCodeNode",//新增数据字典
    removeDictionaryCodeNode : url + "/systemcode/removeDictionaryCodeNode",//删除数据字典
    
    getCodeTree : "/getCodeTree",//数据字典管理：左侧字典树的加载
    addCodeType : "/addCodeType",//数据字典管理：字典类型的保存
    addCode : "/addCode",//数据字典管理：字典的保存
    pageQueryLogs : "/pageQueryLogs",// 综合审计：列表查询
    pageQueryDataLogs : "/pageQueryDataLogs",// 综合审计：查看数据日志
    pageQuerySysLoginLogs : "/pageQuerySysLoginLogs", //应用访问日志
    pageQueryOrgUnfiyInfos : "/pageQueryOrgUnfiyInfos",//同步审计：组织同步审计
    pageQueryUserUnfiyInfos : "/pageQueryUserUnfiyInfos",//同步审计：人员同步审计
    pageQueryLoginLogs : "/pageQueryLoginLogs",//登录情况审计：用户登录情况列表查询
    pagedQueryThisTimeLogs : "/pagedQueryThisTimeLogs",//登录情况审计：查看本次登录日志
    pagedQueryOtherTimeLogs : "/pagedQueryOtherTimeLogs",//登录情况审计：查看历次登录日志
    getSystem: "/getSystem",//应用系统管理：获取系统列表信息
    setSystem: "/setSystem",//应用系统管理：新增系统信息
    delSystem: "/delSystem",//应用系统管理：删除系统信息
    getMenus :  "/getMenuS",//应用系统管理：获取菜单信息
    getTreeMenus : "/getTreeMenu",//应用系统管理：获取菜单树
    getDataBase : "/getDataBase",//应用系统管理：获取数据库信息
    mappingMechanism : "/mappingMechanism",//应用系统管理：组织树信息
    getDataBase : "/getDataBase",//应用系统管理：获取数据库信息
    pageQueryRegions : url+"/platregioninfo/findbycode",//行政区划管理：获取列表数据"/pageQueryRegions"
    getRegionTree : url+"/platregioninfo/getRegionTree",//行政区划管理：获取区域树/getRegionTree
    addRegion : url+"/platregioninfo/insertbycode",//行政区划管理：保存区域"/addRegion"
    IsValidCode:url+"/platregioninfo/IsValidCode",
    //统一授权
    pageQueryAuthorizations : url + "/platPersonInfo/pageQueryPersionListByConstraint",//授权管理列表查询
    pageQueryRoles : url + "/platAuthorityRole/pageQueryRoleListByConstraint",//角色管理列表查询
    getSystemJurisdiction : url + "/platAppSysAssetInfo/getAppSysAndMenus",//角色管理查询系统权限
    getOrgTree : "/getOrgTree",//授权状态管理查询组织机构
    pageQueryAuthorizationStatus : "/pageQueryAuthorizationStatus",//授权状态管理查询授权状态列表
    getSystemResourceTree : "/getSystemResourceTree",//授权状态管理查询系统资源授权
    getAppSysName : url + "/platAppSysAssetInfo/getAppSysName",//角色管理获取检索项"可访问应用"数据
    saveOrUpdateRole : url + "/platAuthorityRole/saveOrUpdateRole",//角色管理模块新增,编辑角色信息
    getRoleDetail : url + "/platAuthorityRole/getRoleDetail",//(统一授权_角色管理)查看,编辑角色弹窗获取角色信息
    deleteRole : url + "/platAuthorityRole/deleteRole"//(统一授权_角色管理)删除角色信息
}