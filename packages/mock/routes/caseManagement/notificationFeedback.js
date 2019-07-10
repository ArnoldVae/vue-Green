/*
 * 案件监督管理平台\线索管理\线索分发
 */
module.exports = {
    //初步核实数据
    getPreliminaryVerificationForm: {
        resMessage: "success",
        code: 200,
        data: {
            preliminaryVerificationForm: [
                {
                    id: "1", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交", //线索来源
                    nowStatus: "线索分发" //当前状态
                },
                {
                    id: "2", //序号
                    leadNum: "2019XSXS00031SDF", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "李某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交", //线索来源
                    nowStatus: "线索分发" //当前状态
                },
                {
                    id: "3", //序号
                    leadNum: "2019XSXS000DFG31", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "王某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交", //线索来源
                    nowStatus: "线索分发" //当前状态
                }
            ],
        }
    },
    //调查核实数据
    getInvestigationVerifyForm: {
        resMessage: "success",
        code: 200,
        data: {
            investigationVerifyForm: [
                {
                    id: "1", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送", //线索来源
                    nowStatus: "线索分发" //当前状态
                },
                {
                    id: "2", //序号
                    leadNum: "2015XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交", //线索来源
                    nowStatus: "线索分发" //当前状态
                },
                {
                    id: "3", //序号
                    leadNum: "2019XSXS00031SDF", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送", //线索来源
                    nowStatus: "线索分发" //当前状态
                },
                {
                    id: "4", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送", //线索来源
                    nowStatus: "线索分发" //当前状态
                },
                {
                    id: "5", //序号
                    leadNum: "2015XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交", //线索来源
                    nowStatus: "线索分发" //当前状态
                },
                {
                    id: "6", //序号
                    leadNum: "2019XSXS00031SDF", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送", //线索来源
                    nowStatus: "线索分发" //当前状态
                }
            ],
        }
    },
    //谈话数据
    getTalkForm: {
        resMessage: "success",
        code: 200,
        data: {
            talkForm: [
                {
                    id: "1", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交" //线索来源
                },
                {
                    id: "2", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交" //线索来源
                },
                {
                    id: "3", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交" //线索来源
                },
                {
                    id: "4", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交" //线索来源
                }
            ],
        }
    },
    //函询数据
    getApplyLetter: {
        resMessage: "success",
        code: 200,
        data: {
            applyLetter: [
                {
                    id: "1", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                },
                {
                    id: "2", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                },
                {
                    id: "3", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                },
                {
                    id: "4", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                }
            ],
        }
    },
    //立案调查数据
    getRegisterInvestigateForm: {
        resMessage: "success",
        code: 200,
        data: {
            registerInvestigateForm: [
                {
                    id: "1", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交" //线索来源
                },
                {
                    id: "2", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交" //线索来源
                },
                {
                    id: "3", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交" //线索来源
                },
                {
                    id: "4", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "巡视移交" //线索来源
                }
            ],
        }
    },
    //侧面了解数据
    getSideUnderstandForm: {
        resMessage: "success",
        code: 200,
        data: {
            sideUnderstandForm: [
                {
                    id: "1", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                },
                {
                    id: "2", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                },
                {
                    id: "3", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                },
                {
                    id: "4", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                }
            ],
        }
    },
    //侧面了解数据
    getReadingForm: {
        resMessage: "success",
        code: 200,
        data: {
            readingForm: [
                {
                    id: "1", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                },
                {
                    id: "2", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                },
                {
                    id: "3", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                },
                {
                    id: "4", //序号
                    leadNum: "2018XSSCASDI7537", //线索编号
                    leadName: "线索名称:转下级调查-阅处-反馈情况", //线索名称
                    name: "张某某", //姓名
                    position: "部职别1(工作单位)", //部职别
                    acceptedDate: "2019-03-08", //受理时间
                    leadSource: "审计移送" //线索来源
                }
            ],
        }
    },
};

