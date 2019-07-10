/*
 * 案件监督管理平台\线索管理\线索处置
 */
module.exports = {
	//列表数据
	queryMainList: {
		"code": 200,
		"msg": "成功",
		"innermsg": "",
		"pageIndex": 1,
		"pageSize": 20,
		"allcount": 52,
		"data": {
			//已处置列表
			hasDisposalList: [{
					id: '1', //序号
					clueNo: '2019XSSC249TRIT4', //线索编号
					clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
					personName: '张某某', //姓名
					ministryPositionLevelName: '部职别1(工作单位)', //部职别
					acceptDate: '2019-03-08', //受理时间
					clueSourceName: '审查调查', //线索来源
					dealTypeName: '本级直查', //办理方式
					handleTypeName: '调查核实', //处置方式
					currentActiveName: '线索分发' //当前状态
				},
				{
					id: '2', //序号
					clueNo: '2019XSSCASDI2453', //线索编号
					clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
					personName: '刘某某', //姓名
					ministryPositionLevelName: '部职别1(工作单位)', //部职别
					acceptDate: '2019-03-08', //受理时间
					clueSourceName: '审查调查', //线索来源
					dealTypeName: '转其他单位', //办理方式
					handleTypeName: 'XXXXXX', //处置方式
					currentActiveName: '线索分发' //当前状态
				},
				{
					id: '3', //序号
					clueNo: '2008XSSCHGDG321', //线索编号
					clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
					personName: '孔某某', //姓名
					ministryPositionLevelName: '部职别1(工作单位)', //部职别
					acceptDate: '2019-03-08', //受理时间
					clueSourceName: '审查调查', //线索来源
					dealTypeName: '本级直查', //办理方式
					handleTypeName: '调查核实', //处置方式
					currentActiveName: '线索分发' //当前状态
				},
				{
					id: '4', //序号
					clueNo: '2008XSSC34235YSG', //线索编号
					clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
					personName: '孔某某', //姓名
					ministryPositionLevelName: '部职别1(工作单位)', //部职别
					acceptDate: '2019-03-08', //受理时间
					clueSourceName: '审查调查', //线索来源
					dealTypeName: '转其他单位', //办理方式
					handleTypeName: 'XXXXXX', //处置方式
					currentActiveName: '线索分发' //当前状态
				},
				{
					id: '5', //序号
					clueNo: '2008XSSCASDWG35', //线索编号
					clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
					personName: '孔某某', //姓名
					ministryPositionLevelName: '部职别1(工作单位)', //部职别
					acceptDate: '2019-03-08', //受理时间
					clueSourceName: '审查调查', //线索来源
					dealTypeName: '本级直查', //办理方式
					handleTypeName: '初步核实', //处置方式
					currentActiveName: '调查核实' //当前状态
				},
				{
					id: '6', //序号
					clueNo: '2008XSSCASDWG35', //线索编号
					clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
					personName: '孔某某', //姓名
					ministryPositionLevelName: '部职别1(工作单位)', //部职别
					acceptDate: '2019-03-08', //受理时间
					clueSourceName: '审查调查', //线索来源
					dealTypeName: '本级直查', //办理方式
					handleTypeName: '初步核实', //处置方式
					currentActiveName: '调查核实' //当前状态
				}
			],
			//未处置列表
			notDisposalList: [
				{
					id: '1', //序号
					clueNo: '2018XSSCASDI7537', //线索编号
					clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
					personName: '张某某', //姓名
					happenUnitName: '北部战区', //现隶属单位
					ministryPositionLevelName: '部职别1(工作单位)', //部职别
					acceptDate: '2019-03-08', //受理时间
					clueSourceName: '审查调查' //线索来源
				},
				{
					id: '2', //序号
					clueNo: '2019XSSCASDI8065', //线索编号
					clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
					personName: '刘某某', //姓名
					happenUnitName: '西部战区', //现隶属单位
					ministryPositionLevelName: '部职别1(工作单位)', //部职别
					acceptDate: '2019-03-08', //受理时间
					clueSourceName: '审查调查' //线索来源
				},
				{
					id: '3', //序号
					clueNo: '2019XSSCASDI1324', //线索编号
					clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
					personName: '孔某某', //姓名
					happenUnitName: '南部战区', //现隶属单位
					ministryPositionLevelName: '部职别1(工作单位)', //部职别
					acceptDate: '2019-03-08', //受理时间
					clueSourceName: '审查调查' //线索来源
				},
				{
					id: '4', //序号
					clueNo: '2019XSSCASDI2345', //线索编号
					clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
					personName: '孔某某', //姓名
					happenUnitName: '北部战区', //现隶属单位
					ministryPositionLevelName: '部职别1(工作单位)', //部职别
					acceptDate: '2019-03-08', //受理时间
					clueSourceName: '审查调查' //线索来源
				},
				{
					id: '5', //序号
					clueNo: '2008XSSCASDWG35', //线索编号
					clueName: '线索名称:转下级调查-阅处-反馈情况', //线索名称
					personName: '孔某某', //姓名
					happenUnitName: '西部战区', //现隶属单位
					ministryPositionLevelName: '部职别1(工作单位)', //部职别
					acceptDate: '2019-03-08', //受理时间
					clueSourceName: '审查调查' //线索来源
				}
			]
		}
	},
	//线索来源options下拉选数据
	queryCodeByType: {
		"result": {
			// result
		XSLY:[
				{
					value: '0',
					label: '巡视移交'
				},
				{
					value: '1',
					label: '审计移送'
				},
				{
					value: '2',
					label: '审查调查发现'
				},
				{
					value: '3',
					label: '信访举报'
				},
				{
					value: '4',
					label: 'XXX事检察机关移送'
				},
				{
					value: '5',
					label: '领导批办'
				},
				{
					value: '6',
					label: 'XXXXXX和地方XXX移送'
				},
				{
					value: '7',
					label: '下级单位上报'
				},
				{
					value: '8',
					label: '其他'
				}
			]
		}
	},
	//获取线索处置类型总数countByDealType
	countByDealType: {
		code:0,
		msg:"成功",
		data: {
			result:[
				{
					dealTypeCode: "01",
					dealTypeName: "本级直查",
					disposalNum: 3
				},
				{
					dealTypeCode: "02",
					dealTypeName: "转下级调查",
					disposalNum: 1
				},
				{
					dealTypeCode: "03",
					dealTypeName: "转其他单位",
					disposalNum: 1
				}
			]
		}
	},
	//添加线索处置方法
	addDisposalInforMation: {
		resMessage: "添加数据成功!",
		code: 200,
		data: {
			disposalInforMation:[]
		}
	},
	




};
