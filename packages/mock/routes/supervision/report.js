module.exports = {
    getDemoList: {
        "code": 0,
        "msg": "成功-from mock",
        "innermsg": "",
        "pageIndex": 1,
        "pageSize": 20,
        "allcount": 52,
        "dataLists": [
            {
              unit: "陆XXX模拟",
              conferenceNum: "3次",
              patrolNum: "2批",
              patrolTime: "2016年4月11日至5月31日",
              patrolPattern: "常规巡视--模拟数据",
              patrolUnit: "单位2",
              transferPatrol: "1次"
            },
            {
              unit: "陆XXX",
              conferenceNum: "3次",
              patrolNum: "2批",
              patrolTime: "2016年4月11日至5月31日",
              patrolPattern: "常规巡视--模拟数据",
              patrolUnit: "单位3",
              transferPatrol: "1次"
            },
            {
              unit: "陆XXX",
              conferenceNum: "3次",
              patrolNum: "2批",
              patrolTime: "2017年1月6日至8月30日",
              patrolPattern: "常规巡视--模拟数据",
              patrolUnit: "单位1",
              transferPatrol: "50次"
            },
            {
              unit: "海XXX",
              conferenceNum: "1次",
              patrolNum: "1批",
              patrolTime: "2017年1月6日至8月30日",
              patrolPattern: "机动式巡视",
              patrolUnit: "单位3",
              transferPatrol: "50次"
            },
            {
              unit: "海XXX",
              conferenceNum: "1次",
              patrolNum: "1批",
              patrolTime: "2017年1月6日至8月30日",
              patrolPattern: "机动式巡视",
              patrolUnit: "单位1",
              transferPatrol: "50次"
            },
            {
              unit: "空XXX",
              conferenceNum: "1次",
              patrolNum: "1批",
              patrolTime: "2017年1月6日至8月30日",
              patrolPattern: "机动式巡视",
              patrolUnit: "单位3",
              transferPatrol: "9次"
            }
          ],
    },
    getReport: {
      "code": 0,
      "msg": "成功-from mock",
      "innermsg": "",
      "pageIndex": 1,
      "pageSize": 20,
      "allcount": 52,
      "data": {
        columns:[
          {
            title: "序号",
            value: "index",
            type: "text",
            width: 30,
            fixed: "left"
          },
          {
            title: "问题类型",
            value: "questionType",
            type: "text",
            width: 150
          },
          {
            title: "是否发生在十九大后",
            value: "afteOccurrence",
            type: "text",
            width: 100
          },
          {
            title: "是否隐形变异",
            value: "isInvisible",
            type: "text",
            width: 100
          },
          {
            title: "违纪人员或单位",
            type: "text",
            children: [
              {
                title: "姓名",
                value: "name",
                type: "text",
                width: 120
              },
              {
                title: "部职别",
                value: "ministryDuty",
                type: "text",
                width: 150
              },
              {
                title: "类别",
                value: "type",
                type: "text",
                width: 100
              },
              {
                title: "职级",
                value: "Rank",
                type: "text",
                width: 100
              },
              {
                title: "是否问责对象",
                value: "isAccountability",
                type: "text",
                width: 100
              }
            ]
          },
          {
            title: "违纪事实",
            value: "violationDiscipline",
            type: "text",
            width: 200
          },
          {
            title: "处理情况",
            type: "text",
            children: [
              {
                title: "第一种形态",
                type: "text",
                children: [
                  {
                    title: "批评教育",
                    value: "criticalEducation",
                    type: "text",
                    width: 100
                  },
                  {
                    title: "检查",
                    value: "inspect",
                    type: "text",
                    width: 60
                  },
                  {
                    title: "通报",
                    value: "bulletin",
                    type: "text",
                    width: 60
                  },
                  {
                    title: "提醒谈话",
                    value: "remindConversation",
                    type: "text",
                    width: 100
                  }
                ]
              },
              {
                title: "第二种形态",
                type: "text",
                children: [
                  {
                    title: "党内警告",
                    value: "innerPartyWarnings",
                    type: "text",
                    width: 100
                  },
                  {
                    title: "党内严重警告",
                    value: "seriousWarningsWithinParty",
                    type: "text",
                    width: 130
                  },
                  {
                    title: "行政警告",
                    value: "administrativeWarning",
                    type: "text",
                    width: 100
                  },
                  {
                    title: "行政严重警告",
                    value: "administrativeSeriousWarning",
                    type: "text",
                    width: 150
                  },
                  {
                    title: "行政记过",
                    value: "administrativeRecord",
                    type: "text",
                    width: 100
                  },
                  {
                    title: "行政记大过",
                    value: "administrativeBigRecord",
                    type: "text",
                    width: 130
                  },
                  {
                    title: "诫勉谈话",
                    value: "admonishingConversation",
                    type: "text",
                    width: 100
                  },
                  {
                    title: "调整岗位",
                    value: "adjustmentPost",
                    type: "text",
                    width: 100
                  },
                  {
                    title: "停职",
                    value: "suspension",
                    type: "text",
                    width: 60
                  },
                  {
                    title: "免职",
                    value: "removalOffice",
                    type: "text",
                    width: 60
                  }
                ]
              },
              {
                title: "第三种形态",
                type: "text",
                children: [
                  {
                    title: "撤销党内职务",
                    value: "withdrawalPartyPosts",
                    type: "text",
                    width: 150
                  },
                  {
                    title: "留党察看",
                    value: "partyObservation",
                    type: "text",
                    width: 100
                  },
                  {
                    title: "降职或降衔",
                    value: "demotionDemotion",
                    type: "text",
                    width: 130
                  },
                  {
                    title: "除名",
                    value: "delisting",
                    type: "text",
                    width: 60
                  },
                  {
                    title: "撤职",
                    value: "dismissal",
                    type: "text",
                    width: 60
                  }
                ]
              },
              {
                title: "第四种形态",
                type: "text",
                children: [
                  {
                    title: "开除党籍",
                    value: "expulsionParty",
                    type: "text",
                    width: 100
                  },
                  {
                    title: "开除XXX籍",
                    value: "expulsionMilitary",
                    type: "text",
                    width: 100
                  },
                  {
                    title: "移送司法",
                    value: "transferJustice",
                    type: "text",
                    width: 100
                  }
                ]
              },
              {
                title: "改组",
                value: "reorganization",
                type: "text",
                width: 60
              },
              {
                title: "解散",
                value: "dissolution",
                type: "text",
                width: 60
              }
            ]
          }
        ],
        tableData:[
          {
            index: 1, //序号
            questionType: "违规花钱报销/滥发津补贴福利", //问题类型
            afteOccurrence: "否", //是否发生在十九大后
            isInvisible: "是", //是否隐形变异
            name: "陈某某", //姓名
            ministryDuty: "XX旅保障部供应科科长（2017年9月转业）", //部职别
            type: "干部", //类别
            Rank: "正营", //职级
            violationDiscipline: "违纪事实", //违纪事实
            handle:['isAccountability','remindConversation'],//处理情况
            //合并规则
            idArr: {
              index: 1, //序号
              questionType: 1, //问题类型
              afteOccurrence: 1, //是否发生在十九大后
              isInvisible: 1, //是否隐形变异
              name: 1, //姓名
              ministryDuty: 1, //部职别
              type: 1, //类别
              Rank: 1, //职级
              isAccountability: 1, //是否问责对象
              violationDiscipline: 1, //违纪事实
              criticalEducation: 1, //批评教育
              inspect: 1, //检查
              bulletin: 1, //通报
              remindConversation: 1, //提醒谈话
              innerPartyWarnings: 1, //党内警告
              seriousWarningsWithinParty: 1, //党内严重警告
              administrativeWarning: 1, //行政警告
              administrativeSeriousWarning: 1, //行政严重警告
              administrativeRecord: 1, //行政记过
              administrativeBigRecord: 1, //行政记大过
              admonishingConversation: 1, //诫勉谈话
              adjustmentPost: 1, //调整岗位
              suspension: 1, //停职
              removalOffice: 1, //免职
              withdrawalPartyPosts: 1, //撤销党内职务
              partyObservation: 1, //留党察看
              demotionDemotion: 1, //降职或降衔
              delisting: 1, //除名
              dismissal: 1, //撤职
              expulsionParty: 1, //开除党籍
              expulsionMilitary: 1, //开除XXX籍
              transferJustice: 1, //移送司法
              reorganization: 1, //改组
              dissolution: 1 //解散
            }
          },
          {
            index: 1, //序号
            questionType: "违规花钱报销/滥发津补贴福利", //问题类型
            afteOccurrence: "否", //是否发生在十九大后
            isInvisible: "是", //是否隐形变异
            name: "陈某某", //姓名
            ministryDuty: "XX旅保障部供应科科长（2017年9月转业）", //部职别
            type: "干部", //类别
            Rank: "正营", //职级
            violationDiscipline: "违纪事实", //违纪事实
            handle:['isAccountability','seriousWarningsWithinParty'],//处理情况
          },
          {
            index: 1, //序号
            questionType: "违规花钱报销/滥发津补贴福利", //问题类型
            afteOccurrence: "否", //是否发生在十九大后
            isInvisible: "是", //是否隐形变异
            name: "陈某某", //姓名
            ministryDuty: "XX旅保障部供应科科长（2017年9月转业）", //部职别
            type: "干部", //类别
            Rank: "正营", //职级
            violationDiscipline: "违纪事实", //违纪事实
            handle:['isAccountability','seriousWarningsWithinParty'],//处理情况
            //合并规则
            idArr: {
              index: 1, //序号
              questionType: 1, //问题类型
              afteOccurrence: 1, //是否发生在十九大后
              isInvisible: 1, //是否隐形变异
              name: 2, //姓名
              ministryDuty: 2, //部职别
              type: 2, //类别
              Rank: 2, //职级
              isAccountability: 2, //是否问责对象
              violationDiscipline: 1, //违纪事实
              criticalEducation: 2, //批评教育
              inspect: 2, //检查
              bulletin: 2, //通报
              remindConversation: 2, //提醒谈话
              innerPartyWarnings: 2, //党内警告
              seriousWarningsWithinParty: 2, //党内严重警告
              administrativeWarning: 2, //行政警告
              administrativeSeriousWarning: 2, //行政严重警告
              administrativeRecord: 2, //行政记过
              administrativeBigRecord: 2, //行政记大过
              admonishingConversation: 2, //诫勉谈话
              adjustmentPost: 2, //调整岗位
              suspension: 2, //停职
              removalOffice: 2, //免职
              withdrawalPartyPosts: 2, //撤销党内职务
              partyObservation: 2, //留党察看
              demotionDemotion: 2, //降职或降衔
              delisting: 2, //除名
              dismissal: 2, //撤职
              expulsionParty: 2, //开除党籍
              expulsionMilitary: 2, //开除XXX籍
              transferJustice: 2, //移送司法
              reorganization: 2, //改组
              dissolution: 2 //解散
            }
          },
          {
            index: 1, //序号
            questionType: "违规花钱报销/滥发津补贴福利", //问题类型
            afteOccurrence: "否", //是否发生在十九大后
            isInvisible: "是", //是否隐形变异
            name: "陈某某", //姓名
            ministryDuty: "XX旅保障部供应科科长（2017年9月转业）", //部职别
            type: "干部", //类别
            Rank: "正营", //职级
            violationDiscipline: "违纪事实", //违纪事实
            handle:['isAccountability','seriousWarningsWithinParty'],//处理情况
            //合并规则
            idArr: {
              index: 1, //序号
              questionType: 1, //问题类型
              afteOccurrence: 1, //是否发生在十九大后
              isInvisible: 1, //是否隐形变异
              name: 3, //姓名
              ministryDuty: 3, //部职别
              type: 3, //类别
              Rank: 3, //职级
              isAccountability: 3, //是否问责对象
              violationDiscipline: 1, //违纪事实
              criticalEducation: 3, //批评教育
              inspect: 3, //检查
              bulletin: 3, //通报
              remindConversation: 3, //提醒谈话
              innerPartyWarnings: 3, //党内警告
              seriousWarningsWithinParty: 3, //党内严重警告
              administrativeWarning: 3, //行政警告
              administrativeSeriousWarning: 3, //行政严重警告
              administrativeRecord: 3, //行政记过
              administrativeBigRecord: 3, //行政记大过
              admonishingConversation: 3, //诫勉谈话
              adjustmentPost: 3, //调整岗位
              suspension: 3, //停职
              removalOffice: 3, //免职
              withdrawalPartyPosts: 3, //撤销党内职务
              partyObservation: 3, //留党察看
              demotionDemotion: 3, //降职或降衔
              delisting: 3, //除名
              dismissal: 3, //撤职
              expulsionParty: 3, //开除党籍
              expulsionMilitary: 3, //开除XXX籍
              transferJustice: 3, //移送司法
              reorganization: 3, //改组
              dissolution: 3 //解散
            }
          },
          {
            index: 1, //序号
            questionType: "违规花钱报销/滥发津补贴福利", //问题类型
            afteOccurrence: "否", //是否发生在十九大后
            isInvisible: "是", //是否隐形变异
            name: "陈某某", //姓名
            ministryDuty: "XX旅保障部供应科科长（2017年9月转业）", //部职别
            type: "干部", //类别
            Rank: "正营", //职级
            violationDiscipline: "违纪事实", //违纪事实
            handle:['isAccountability','seriousWarningsWithinParty'],//处理情况
            //合并规则
            idArr: {
              index: 1, //序号
              questionType: 1, //问题类型
              afteOccurrence: 1, //是否发生在十九大后
              isInvisible: 1, //是否隐形变异
              name: 4, //姓名
              ministryDuty: 0, //部职别
              type: 4, //类别
              Rank: 4, //职级
              isAccountability: 4, //是否问责对象
              violationDiscipline: 1, //违纪事实
              criticalEducation: 4, //批评教育
              inspect: 4, //检查
              bulletin: 4, //通报
              remindConversation: 4, //提醒谈话
              innerPartyWarnings: 4, //党内警告
              seriousWarningsWithinParty: 4, //党内严重警告
              administrativeWarning: 4, //行政警告
              administrativeSeriousWarning: 4, //行政严重警告
              administrativeRecord: 4, //行政记过
              administrativeBigRecord: 4, //行政记大过
              admonishingConversation: 4, //诫勉谈话
              adjustmentPost: 4, //调整岗位
              suspension: 4, //停职
              removalOffice: 4, //免职
              withdrawalPartyPosts: 4, //撤销党内职务
              partyObservation: 4, //留党察看
              demotionDemotion: 4, //降职或降衔
              delisting: 4, //除名
              dismissal: 4, //撤职
              expulsionParty: 4, //开除党籍
              expulsionMilitary: 4, //开除XXX籍
              transferJustice: 4, //移送司法
              reorganization: 4, //改组
              dissolution: 4 //解散
            }
          }
        ]
      },
  },
  };
  