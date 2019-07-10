import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'

import product from '@/views/demo/product/store' //模板
import demo from '@/views/demo/store' //demo模板

import dashboard from '@/views/dashboard/store'
import home from '@/views/home/store'
import evocatoryRes from '@/views/evocatoryRes/store'
import manualRegister from '@/views/evocatoryRes/manualRegister/store' //手动登记
import departmentTo from '@/views/evocatoryRes/departmentTo/store'
import supervision from '@/views/supervision/store'//案件监督督导
import intelligentManage from '@/views/intelligentManage/store'//智能辅助管理
import trialbusiness from '@/views/trialbusiness/store'//审理业务设置
import processLimited from '@/views/trialbusiness/processLimited/store'//流程时限设置
import trialDocuments from '@/views/trialDocuments/store'//审理文书设置
import queryStatistics from '@/views/queryStatistics/store'//查询统计
import judicialTransfer from '@/views/judicialTransfer/store'//司法移送
import authorization from '@/views/authorization/store'//案件授权管理
import setup from '@/views/setup/store'//系统设置
import appealCase from '@/views/appealCase/store'//申诉复查管理
import examineCase from '@/views/examineCase/store'//申诉复查管理
import hearCaseManage from '@/views/hearCaseManage/store'//申诉复查管理
import auditingCaseManage from '@/views/auditingCaseManage/store'//申诉复查管理
import caseSupervision from '@/views/caseSupervision/store' //案件监督

import app from './app'
import tagsView from './tagsView'
import permission from './permission'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    $app: app,
    $permission: permission,
    $tagsView: tagsView,

    $product: product, //模板

    $dashboard: dashboard,
    $home: home,
    $evocatoryRes: evocatoryRes,
    $supervision: supervision,
    $manualRegister :manualRegister,
    $intelligentManage: intelligentManage,
    $queryStatistics: queryStatistics,
    $judicialTransfer: judicialTransfer,
    $trialbusiness: trialbusiness,
    $processLimited:processLimited,
    $trialDocuments: trialDocuments,
    $authorization: authorization,
    $setup: setup,
    $appealCase: appealCase,
    $examineCase: examineCase,
    $departmentTo:departmentTo,
    $hearCaseManage:hearCaseManage,
    $auditingCaseManage:auditingCaseManage,
    $caseSupervision:caseSupervision,
    $demo:demo,
  },
  getters
});
