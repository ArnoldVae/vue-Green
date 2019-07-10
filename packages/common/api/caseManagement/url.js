/**
 * 配置所有接口路径
 */
// const webUrl="http://localhost:18080" //自定义前缀
const webUrl = "" //使用默认前缀
module.exports = {
	getProduct: webUrl + "/getProduct",//例子

	//===============================线索处置全部方法开始===============================
	//获取列表数据
	queryMainList: webUrl + "/queryMainList",
	//获取线索来源options下拉选数据
	queryCodeByType: webUrl + "/queryCodeByType",
	//添加线索处置方法
	addDisposalInforMation: webUrl + "/addDisposalInforMation",
	//获取线索处置类型总数countByDealType
	countByDealType: webUrl + "/countByDealType",
	//===============================线索处置全部方法结束===============================






	//===============================线索受理已处置全部方法开始===============================

	//获取线索受理已处置的列表数据
	getLeadDisEndTableList: webUrl + "/getLeadDisEndTableList",
	//获取线索受理已处置的下拉数据
	getReadyData: webUrl + "/getReadyData",
	//线索受理基本信息
	getCuleAcceptBasicInfo: webUrl + "/getCuleAcceptBasicInfo",
	//===============================线索已处置全部方法结束===============================	

	//===============================线索办理全部方法开始===============================
	//获取本级直查的列表数据
	getHandlingList: webUrl + "/getHandlingList",
	//===============================线索办理全部方法结束===============================	


	//===============================线索分发全部方法开始===============================

	//获取本级直查的列表数据
	getCurrentLevelData: webUrl + "/getCurrentLevelData",
	//获取转下级调查的列表数据
	getSubordinateData: webUrl + "/getSubordinateData",
	//获取转下级调查的列表数据
	getOtherUnitData: webUrl + "/getOtherUnitData",
	//===============================线索分发全部方法结束===============================





	//===============================通报反馈全部方法开始===============================
	//获取初步核实的列表数据
	getPreliminaryVerificationForm: webUrl + "/getPreliminaryVerificationForm",
	//获取调查核实的列表数据
	getInvestigationVerifyForm: webUrl + "/getInvestigationVerifyForm",
	//获取谈话的列表数据
	getTalkForm: webUrl + "/getTalkForm",
	//获取函询的列表数据
	getApplyLetter: webUrl + "/getApplyLetter",
	//获取立案调查的列表数据
	getRegisterInvestigateForm: webUrl + "/getRegisterInvestigateForm",
	//获取侧面了解的列表数据
	getSideUnderstandForm: webUrl + "/getSideUnderstandForm",
	//获取侧面了解的列表数据
	getReadingForm: webUrl + "/getReadingForm",
	//===============================通报反馈全部方法结束===============================
}