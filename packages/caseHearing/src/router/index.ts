import Vue from 'vue';
import Router from 'vue-router';
import dashboard from '@/views/dashboard/module.ts'
import home from '@/views/home/module.ts'
import evocatoryRes from '@/views/evocatoryRes/module.ts'
// import departmentTo from '@/views/evocatoryRes/departmentTo/module.ts'
//import manualRegister from '@/views/evocatoryRes/manualRegister/module.ts'
import supervision from '@/views/supervision/module.ts'
import intelligentManage from '@/views/intelligentManage/module.ts'
import queryStatistics from '@/views/queryStatistics/module.ts'
import trialbusiness from '@/views/trialbusiness/module.ts'
import processLimited from '@/views/trialbusiness/processLimited/module.ts'

import trialDocuments from '@/views/trialDocuments/module.ts'
import selfRunCase from '@/views/selfRunCase/module.ts'
import authorization from '@/views/authorization/module.ts'
import judicialTransfer from '@/views/judicialTransfer/module.ts'
import setup from '@/views/setup/module.ts'
import appealCase from '@/views/appealCase/module.ts'
import recordManagement from '@/views/recordManagement/module.ts'
import approvalManagement from '@/views/approvalManagement/module.ts'
import demo from '@/views/demo/module.ts'
import examineCase from '@/views/examineCase/module.ts'
import hearCaseManage from '@/views/hearCaseManage/module.ts'  //审理类型案件模块
import auditingCaseManage from '@/views/auditingCaseManage/module.ts'//审核类案件模块
import aheadOfTimeCase from '@/views/aheadOfTimeCase/module.ts'//提前介入审理模块
import caseSupervision from '@/views/caseSupervision/module.ts' //案件监督督导

/* Layout */
import Layout from '@/views/layout/Layout.vue'

Vue.use(Router);

export const asyncRouterMap = [
  {
    path: '/',
    component: Layout,
    children: [
      //重定向路由必须有，配合多标签刷新当前路由使用
      {
        path: '/redirect/:path*',
        hidden: true,
        meta: {},
        component: () => import ('@/views/layout/redirect/index')
      },
      ...demo,
      ...dashboard,
      ...home,
      ...evocatoryRes,
      ...selfRunCase,  
      ...supervision,
      ...intelligentManage,
      ...queryStatistics,
      ...trialbusiness,
      ...processLimited,
      ...trialDocuments,
      ...authorization,
      ...judicialTransfer,
      ...setup,
      ...appealCase,
      ...recordManagement,
      ...approvalManagement,
      ...examineCase,
      ...hearCaseManage,
      ...auditingCaseManage,
      ...aheadOfTimeCase,
      ...caseSupervision,
      //...manualRegister
    ]
  }
]

export default new Router({base: process.env.BASE_URL, routes: asyncRouterMap});
