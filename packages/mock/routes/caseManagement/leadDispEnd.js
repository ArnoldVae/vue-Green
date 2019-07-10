module.exports = {

	getLeadDispTableData: {
		code: 200,
		resMessage: "成功",
		pageno: 1,
		pagesize: 20,
		totalcount: 54,
		data: {
			tableData: [{
					id: '1', //序号
					leadNum: '2019XSSC', //线索编号
					leadName: 'SJFD..', //线索名称
					name: '张某某', //姓名
					subjectionOrg: 'A师DF团', //现隶属单位
					departmentLv: '部职别1', //部职别
					acceptedDate: '2019-03-08', //受理时间
					leadSource: '审查调查...', //线索来源
					leadState: '线索分发' //线索状态
				},
				{
					id: '2', //序号
					leadNum: '2019', //线索编号
					leadName: 'LKJL..', //线索名称
					name: '刘某某', //姓名
					subjectionOrg: 'TL师XX团', //现隶属单位
					departmentLv: '部职别2', //部职别
					acceptedDate: '2019-03-08', //受理时间
					leadSource: '审查调查...', //线索来源
					leadState: '初核报告' //线索状态
				},
				{
					id: '3', //序号
					leadNum: '2008XSSC', //线索编号
					leadName: 'DSJA..', //线索名称
					name: '孔某某', //姓名
					subjectionOrg: '某某师某某团', //现隶属单位
					departmentLv: '部职别3', //部职别
					acceptedDate: '2019-03-08', //受理时间
					leadSource: '审查调查...', //线索来源
					leadState: '允与了结' //线索状态
				},
				{
					id: '4', //序号
					leadNum: '2008XSSC', //线索编号
					leadName: 'DSJA', //线索名称
					name: '孔某某', //姓名
					subjectionOrg: '某某师某某团', //现隶属单位
					departmentLv: '部职别3', //部职别
					acceptedDate: '2019-03-08', //受理时间
					leadSource: '审查调查', //线索来源
					leadState: '初核报告' //线索状态
				},
				{
					id: '5', //序号
					leadNum: '2008XSSC', //线索编号
					leadName: 'DSJA', //线索名称
					name: '孔某某', //姓名
					subjectionOrg: '某某师某某团', //现隶属单位
					departmentLv: '部职别3', //部职别
					acceptedDate: '2019-03-08', //受理时间
					leadSource: '审查调查', //线索来源
					leadState: '初核报告' //线索状态
				},
				{
					id: '6', //序号
					leadNum: '2008XSSC', //线索编号
					leadName: 'DSJA', //线索名称
					name: '孔某某', //姓名
					subjectionOrg: '某某师某某团', //现隶属单位
					departmentLv: '部职别3', //部职别
					acceptedDate: '2019-03-08', //受理时间
					leadSource: '审查调查', //线索来源
					leadState: '初核报告' //线索状态
				},
				{
					id: '7', //序号
					leadNum: '2008XSSC', //线索编号
					leadName: 'DSJA', //线索名称
					name: '孔某某', //姓名
					subjectionOrg: '某某师某某团', //现隶属单位
					departmentLv: '部职别3', //部职别
					acceptedDate: '2019-03-08', //受理时间
					leadSource: '审查调查', //线索来源
					leadState: '初核报告' //线索状态
				}
			],
		},
	},

	getReadyData: {
		code: 0,
		resMessage: "数据准备成功",
		data: {
			leadSourceOptions: [{
					value: '1',
					label: '巡视移交'
				},
				{
					value: '2',
					label: '审计移送'
				},
				{
					value: '3',
					label: '审查调查发现'
				},
				{
					value: '4',
					label: '信访举报'
				},
				{
					value: '5',
					label: 'XXX事检察机关移送'
				},
				{
					value: '6',
					label: '领导批办'
				},
				{
					value: '7',
					label: 'XXXXXX和地方XXX移送'
				},
				{
					value: '8',
					label: '下级单位上报'
				},
				{
					value: '9',
					label: '其他'
				}
			],
		}
	}
};
