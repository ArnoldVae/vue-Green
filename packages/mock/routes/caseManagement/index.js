// //案件监督管理-url-模板
const caseManagementUrl = require("../../../common/api/caseManagement/url.js");

//本级列表直查-模块数据-模板
const caseManagementdemo = require("./leadDistributed");

//案件监督管理-线索管理-线索处置-数据模块
const caseManagementLeadManagementLeadDispose = require("./leadDispose.js");

//案件监督管理-线索管理-线索受理已处置-数据模块
const caseManagementLeadManagementLeadDisEnd = require("./leadDispEnd.js");

//案件监督管理-线索管理-线索受理数据
const caseManagementLeadManagementLeadAccept = require("./leadAccept.js");

//案件监督管理-通报反馈-初步核实-数据模块
const notificationFeedback = require("./notificationFeedback.js");

//案件监督管理-线索办理-数据模块
const dispose = require("./dispose.js");

//---------------------------------------
module.exports={
    paramList:[ {
            //本级直查 模拟请求url地址
            webUrl: caseManagementUrl.getCurrentLevelData,
            //对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
            param: caseManagementdemo.getCurrentLevelData
        },
        //  ------------------------------------------------------  
        {
            //转下级调查 模拟请求url地址
            webUrl: caseManagementUrl.getSubordinateData,
            //对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
            param: caseManagementdemo.getSubordinateData,
        },    
        //---------------------------------------------------------
        {
        webUrl: caseManagementUrl.getOtherUnitData,
        //对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
        param: caseManagementdemo.getOtherUnitData    
        },
        {
			//已处置列表数据
			webUrl:caseManagementUrl.queryMainList,
			param:caseManagementLeadManagementLeadDispose.queryMainList
		},
		{
			//线索来源options下拉选数据
			webUrl:caseManagementUrl.queryCodeByType,
			param:caseManagementLeadManagementLeadDispose.queryCodeByType
		},
		{	
			//添加线索处置方法
			webUrl:caseManagementUrl.addDisposalInforMation,
			param:caseManagementLeadManagementLeadDispose.addDisposalInforMation
		},
		{
			//获取线索处置类型总数countByDealType
			webUrl:caseManagementUrl.countByDealType,
			param:caseManagementLeadManagementLeadDispose.countByDealType
        },
        {
			//common模块对应的url.js文件中对应的 模拟请求url地址
			webUrl:caseManagementUrl.getLeadDisEndTableList,
			//对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
			param:caseManagementLeadManagementLeadDisEnd.getLeadDispTableData
		},
		{
			//common模块对应的url.js文件中对应的 模拟请求url地址
			webUrl:caseManagementUrl.getReadyData,
			//对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
			param:caseManagementLeadManagementLeadDisEnd.getReadyData
        },
        {
			//common模块对应的url.js文件中对应的 模拟请求url地址
			webUrl:caseManagementUrl.getCuleAcceptBasicInfo,
			//对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
			param:caseManagementLeadManagementLeadAccept.getCuleAcceptBasicInfo
        },
        {
            //common模块对应的url.js文件中对应的 模拟请求url地址
            webUrl: caseManagementUrl.getPreliminaryVerificationForm,
            //对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
            param: notificationFeedback.getPreliminaryVerificationForm
        },
        {
            //common模块对应的url.js文件中对应的 模拟请求url地址
            webUrl: caseManagementUrl.getInvestigationVerifyForm,
            //对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
            param: notificationFeedback.getInvestigationVerifyForm
        },
        {
            //common模块对应的url.js文件中对应的 模拟请求url地址
            webUrl: caseManagementUrl.getTalkForm,
            //对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
            param: notificationFeedback.getTalkForm
        },
        {
            //common模块对应的url.js文件中对应的 模拟请求url地址
            webUrl: caseManagementUrl.getApplyLetter,
            //对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
            param: notificationFeedback.getApplyLetter
        },
        {
            //common模块对应的url.js文件中对应的 模拟请求url地址
            webUrl: caseManagementUrl.getRegisterInvestigateForm,
            //对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
            param: notificationFeedback.getRegisterInvestigateForm
        },
        {
            //common模块对应的url.js文件中对应的 模拟请求url地址
            webUrl: caseManagementUrl.getSideUnderstandForm,
            //对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
            param: notificationFeedback.getSideUnderstandForm
        },
        {
            //common模块对应的url.js文件中对应的 模拟请求url地址
            webUrl: caseManagementUrl.getReadingForm,
            //对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
            param: notificationFeedback.getReadingForm
        },
        {
            //common模块对应的url.js文件中对应的 模拟请求url地址
            webUrl: caseManagementUrl.getHandlingList,
            //对应上面请求url所需要用到的当前目录中 原始数据js文件 中对应的对象名
            param: dispose.getHandlingList
        },
	]
}