const router = require("koa-router")();
//案件审理管理模块
const CaseHearing = require("./caseHearing/index");
CaseHearing.paramList.forEach((item) => {
  router[item.method](item.webUrl, function (res) {
    this.body = item.para;
  });
})

//暂扣涉案财物--模块
const InvolvedFinance = require("./involvedFinance/index");
InvolvedFinance.paramList.forEach((item) => {
  router.post(item.webUrl, function (res) {
    this.body = item.para;
  });
})
//信访模块
const petitionLetter = require("./petitionLetter/index");
petitionLetter.paramList.forEach((item) => {
  router.post(item.webUrl, function (res) {
    this.body = item.para;
  });
})
//案件监督模块
const caseManagement = require("./caseManagement/index");
caseManagement.paramList.forEach((item) => {
  router.post(item.webUrl, function (res) {
    this.body = item.param;
  });
})


//档案管理
const archivesUrl = require("../../common/api/archives/url"); //档案管理-url-模板
const archivesproduct = require("./archives/product");//档案管理-模块数据-模板


// 队伍建设
const teamManagement = require('./teamManagement/index');
teamManagement.paramList.forEach((item) => {
  router.post(item.webUrl, function (res) {
    console.log(res);
    this.body = item.response;
  });
})

// 巡视巡查
const Poatrol = require('./patrol/index');
Poatrol.paramList.forEach((item) => {
  router.post(item.webUrl, function (res) {
    this.body = item.para;
  });
})

//监督检查
const supervisionUrl = require("./supervision/url") //监督检查-url-模板
const supervisionDemo = require("./supervision/report");//监督检查-模块数据-模板

const platformUrl = require("./platform/url");
const user = require("./user");
const organ = require("./platform/organ");
const systemCode = require("./platform/systemCode");
const operationLog = require("./platform/operationLog");
const region = require("./platform/region");
// const url = require("../../common/api/caseHearing/evocatoryRes/departmentTo/url");
// const url1 = require("../../common/api/caseHearing/trialbusiness/processLimited/url");
const limited = require("./limited");
const personnel = require("./personnel");
const authorizationManagement = require('./platform/authorizationManagement');
const systems = require("./platform/applicationSystem");
const systemMenus = require("./platform/systemMenu");
const systemTreeMenus = require("./platform/systemTreeMenu");
const dataBaseS = require("./platform/dataBaseModule");



// -----------------------档案管理系统获取数据----------------
router.post(archivesUrl.getArchives, function (res) {
  this.body = archivesproduct.getProducts;
});

//--------------------机构--------------------
router.post(platformUrl.getOrgans, function (res) {
  this.body = organ.getOrgans;
})

router.post(platformUrl.pageQueryOrgans, function (res) {
  this.body = organ.pageQueryOrgans;
});
router.post(platformUrl.getOrganTypes, function (res) {
  //organ.pageQueryOrgans.data.push(this.request.body)
  this.body = organ.getOrganTypes;
});
router.post(platformUrl.queryTableGridDataOfOrgans, function (res) {
  this.body = organ.queryTableGridDataOfOrgans;
});
router.post(platformUrl.pageQueryUsers, function (res) {
  //organ.pageQueryOrgans.data.push(this.request.body)
  this.body = organ.pageQueryUsers;
});
router.post(platformUrl.addOrgan, function (res) {
  organ.pageQueryOrgans.result.push(this.request.body);
  organ.pageQueryOrgans.totalcount += 1;
  this.body = organ.pageQueryOrgans;
});
router.post(platformUrl.addOrgUser, function (res) {
  organ.pageQueryUsers.result.push(this.request.body);
  organ.pageQueryUsers.totalcount += 1;
  this.body = organ.pageQueryUsers;
});
//数据字典
router.post(platformUrl.treeSystemCodeGroup, function (res) {
    this.body = systemCode.getCodeGroup;
});
router.post(platformUrl.pageQueryCodes, function (res) {
    this.body = systemCode.pageQueryCodes;
});
router.post(platformUrl.getCodeGroup, function (res) {
  this.body = systemCode.getCodeGroup;
});
router.post(platformUrl.getCodeTree, function (res) {
  this.body = systemCode.getCodeTree;
});
router.post(platformUrl.addCode, function (res) {
  systemCode.pageQueryCodes.result.push(this.request.body);
  systemCode.pageQueryCodes.totalcount += 1;
  this.body = systemCode.pageQueryCodes;
});
//审计
router.post(platformUrl.pageQueryLogs, function (res) {
  this.body = operationLog.pageQueryLogs;
});
router.post(platformUrl.pageQuerySysLoginLogs, function (res) {
  this.body = operationLog.pageQuerySysLoginLogs;
});
router.post(platformUrl.pageQueryLoginLogs, function (res) {
  this.body = operationLog.pageQueryLoginLogs;
});
router.post(platformUrl.pageQueryOrgUnfiyInfos, function (res) {
  this.body = operationLog.pageQueryOrgUnfiyInfos;
});
router.post(platformUrl.pageQueryUserUnfiyInfos, function (res) {
  this.body = operationLog.pageQueryUserUnfiyInfos;
});
router.post(platformUrl.pagedQueryThisTimeLogs, function (res) {
  this.body = operationLog.pagedQueryThisTimeLogs;
});
router.post(platformUrl.pagedQueryOtherTimeLogs, function (res) {
  this.body = operationLog.pagedQueryOtherTimeLogs;
});
router.post(platformUrl.pageQueryRegions, function (res) {
  this.body = region.pageQueryRegions;
});
router.post(platformUrl.getRegionTree, function (res) {
  this.body = region.getRegionTree;
});
router.post(platformUrl.getSystem, function (res) {
  this.body = systems.getSystem;
});

router.post(platformUrl.setSystem, function (res) {
  let that = this
  let flag = true
  systems.getSystem.data.systemList.forEach(function (item, index) {
    if (item.ASSET_NAME === that.request.body.ASSET_NAME) {
      flag = false
      systems.getSystem.data.systemList[index] = that.request.body
    }

  })
  if (flag) {
    systems.getSystem.data.systemList.push(this.request.body)
  }
  this.body = systems.getSystem;
});
router.post(platformUrl.delSystem, function (res) {
  let that = this
  systems.getSystem.data.systemList.forEach(function (item, index) {
    if (item.ASSET_NAME === that.request.body.ASSET_NAME)
      systems.getSystem.data.systemList.splice(index, 1)
  })
  this.body = systems.getSystem;
});
router.post(platformUrl.getTreeMenus, function (res) {
  this.body = systemTreeMenus.getTreeMenus;
})

router.post(platformUrl.getMenus, function (res) {
  this.body = systemMenus.getMenu;
})

router.post(platformUrl.getDataBase, function (res) {
  this.body = dataBaseS.getDataBase;
})

// router.post(url.getPersonnel, function (res) {
//   this.body = personnel.getPersonnel;
// });

//-------------------------监督检查--------------------
router.post(supervisionUrl.getReport, function (res) {
  this.body = supervisionDemo.getReport;
});

// //--------------------流程时限设置-------------------
// router.post(url1.getLimited, function (res) {
//   this.body = limited.getLimited;
// });

//-----------------支撑平台:统一授权------------------------
router.post(platformUrl.pageQueryAuthorizations, function (res) {//授权管理列表查询
  this.body = authorizationManagement.pageQueryAuthorizations;
});
router.post(platformUrl.pageQueryRoles, function (res) {//角色管理列表查询
  this.body = authorizationManagement.pageQueryRoles;
});
router.post(platformUrl.getAppSysName, function (res) {//角色管理查询所有系统名称
  this.body = authorizationManagement.getAppSysName;
});
router.post(platformUrl.getSystemJurisdiction, function (res) {//角色管理查询系统权限
  this.body = authorizationManagement.getSystemJurisdiction;
});
router.post(platformUrl.getOrgTree, function (res) {//授权状态管理查询组织机构
  this.body = authorizationManagement.getOrgTree;
});
router.post(platformUrl.pageQueryAuthorizationStatus, function (res) {//授权状态管理查询授权状态列表
  this.body = authorizationManagement.pageQueryAuthorizationStatus;
});
router.post(platformUrl.getSystemResourceTree, function (res) {//授权状态管理查询系统资源授权
  this.body = authorizationManagement.getSystemResourceTree;
});

// -----------------------档案管理系统获取数据----------------
router.post(archivesUrl.getArchives, function (res) {
  this.body = archivesproduct.getProducts;
});

module.exports = router;

