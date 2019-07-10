module.exports = {
  // 计划书详情入参
  getPlan: {
    id: '0001'
  },
  // 计划书详情反参
  planDetail: {
    code: 1,
    data: {
      id: '001',
      // 被保人信息
      insured: {
        sex: 1,
        age: 18
      },
      // 投保人信息
      applicant: {
        sex: 1,
        age: 18
      },
      // 险种选择
      plan: {
        name: '常青树（多倍版）', // 计划书名称
        firstYearFree: '10000.00', //首年保费
        // 主险/附加险
        risks: [{
          type: '常青树多倍版', // 险种
          coverage: '', //保额
          premium: '', //保费
          payTime: '' //交费期间
        }]
      },
      // 收件人信息
      receiver: {
        name: '', //姓名
        sex: '' //性别
      },
      firstYearFee: 1000.0 //首年总保费
    }
  },
  // 生成计划书入参
  createPlan: {
    imgUrl: '', //图片地址
    insured: '', //被保人
    applicant: '', //投保人
    firstYearFee: 20000.0, //首年总保费
    //险种
    risks: [{
      type: '', // 投保险种
      coverage: '', // 保额
      premiumTime: '', // 报废期、缴费期
      firstYearFee: '', // 首年保费
      clause: {}, //条款
      // 介绍
      items: [{
          title: '岁领取特别关爱金',
          mark: '1万元',
          content: '第五个保单周年日返20%已交保费'
        },
        {
          title: '岁领取特别关爱金',
          mark: '1万元',
          content: '第五个保单周年日返20%已交保费'
        }
      ]
    }],
    // 保单利益
    policyAdvantage: {
      // 利率
      rates: ['3.00%', '4.50%', '6.00%', '5.00%'],
      // 利益演算表
      benifitCalculates: [],
      cashValue: '', //现金价值
      diedCash: '', //身故金
      accValue: '', //账户价值
      liveTotalBenifit: '', //生存总利益
      diedTotalBenifit: '' //身故总利益
    },
    //风险提示
    riskTips: [],
    // 名片
    idCard: {
      name: '球球', //姓名
      imgUrl: '' //头像地址
    }
  },
  // 生成计划书反参
  createPlanResult: {
    code: 200
  },
  // 计划书对比入参
  plan: {
    insured: {
      sex: '1',
      age: '30'
    },
    applicant: {
      sex: '1',
      age: '30'
    },
    selectPlans: [{
        name: '常青树（多倍版）', //计划书名称
        firstYearFree: '10000.00', //首年保费
        risks: [{
          type: '常青树多倍版', //险种
          coverage: '', //保额
          premium: '', //保费
          payTime: '' //缴费期间
        }]
      },
      {
        name: '康惠保重大疾病保险', //计划书名称
        firstYearFree: '10000.00', //首年保费
        risks: [{
          type: '康惠保重疾', //险种
          coverage: '', //保额
          premium: '', //保费
          payTime: '' //缴费期间
        }]
      }
    ]
  },
  // 对比详情
  comparisonDetail: {},
  // 获客接口入参
  user: {
    userId: ''
  },
  // 获客接口出参
  huoke: {
    total: '', //累计获客
    issue: '', //我的发布
    news: [{
        code: '1',
        label: '全部', //tab 标题
        items: [{
            id: '',
            title: '', //标题
            imageUrl: '', //图片
            readNo: '', //阅读量
            date: '', //时间
            stock: '' //库存
          },
          {
            id: '',
            title: '', //标题
            imageUrl: '', //图片
            readNo: '', //阅读量
            date: '', //时间
            stock: '' //库存
          }
        ]
      },
      {
        label: '文库', //tab 标题
        items: [{
            id: '',
            title: '', //标题
            imageUrl: '', //图片
            readNo: '', //阅读量
            date: '', //时间
            stock: '' //库存
          },
          {
            id: '',
            title: '', //标题
            imageUrl: '', //图片
            readNo: '', //阅读量
            date: '', //时间
            stock: '' //库存
          }
        ]
      }
    ]
  },
  //获取消息接口入参
  getNews: {
    code: '1'
  },
  //获取消息接口出参
  news: [{
      id: '',
      title: '', //标题
      imageUrl: '', //图片
      readNo: '', //阅读量
      date: '', //时间
      stock: '' //库存
    },
    {
      id: '',
      title: '', //标题
      imageUrl: '', //图片
      readNo: '', //阅读量
      date: '', //时间
      stock: '' //库存
    }
  ],
  //保单搜索接口入参
  getCustomer: {
    name: ''
  },
  //保单搜索接口出参
  customers: [{
    id: '',
    name: '', //姓名
    policyNo: '', //个人保单
    familyPolicyNo: '', //家庭保单
    familyNo: '' //家庭成员
  }],
  // 新建客户入参
  newCustomer: {
    name: '' //姓名
  },
  // 上传保单
  uploadPolicy: {}
};
