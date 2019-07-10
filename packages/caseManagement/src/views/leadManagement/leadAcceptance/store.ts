/**
 * store 全局状态管理
 * interface 接口
 * mutations 用于修改状态
 * actions 用于调用mutations
 */

import { getLeadDisEndTableList,getReadyData,getCuleAcceptBasicInfo } from '../../../../../common/api/caseManagement/product'


const state = {
//======================线索受理======================
	leadDisEndList:{
	},
	leadSourceOptions:{
	},
	culeAcceptBasicInfo:{}
};
export default {
	//状态
	state,
	//想要修改state下的数据必须通过mutation
  mutations: {
		//线索受理基本信息
		SET_CULEACCEPTBASICINFO(state, culeAcceptBasicInfo: any) {
		  state.culeAcceptBasicInfo = culeAcceptBasicInfo;
		},
		//线索受理已处置
		SET_LEADDISENDTABLELIST(state, leadDisEndList: any) {
		  state.leadDisEndList = leadDisEndList;
		},
		//线索受理已处置下拉选数据
			SET_LEADSOURCEOPTIONS(state, leadSourceOptions: any) {
		  state.leadSourceOptions = leadSourceOptions;
		},

  },
  actions: {

		  /**
		   * 获取线索受理基本信息
		   * @param param0
		   * @param keywords
		   */
				GetCuleAcceptBasicInfo({ commit }, keywords) {
				return 	getCuleAcceptBasicInfo(keywords).then(res => {
				  commit("SET_CULEACCEPTBASICINFO", res.result.countBySource)
				  return res
				}).catch(err => {
				  console.log(err)
				})
			},

		  /**
		   * 获取线索已处置tab数据
		   * @param param0
		   * @param keywords
		   */
			GetDisEndTableList({ commit }, keywords) {
				return getLeadDisEndTableList(keywords).then(res => {
				  commit("SET_LEADDISENDTABLELIST", res.data.tableData)
				  return res
				}).catch(err => {
				  console.log(err)
				})
			},
			  /**
			 * 获取线索已处置下拉选数据
			 * @param param0
			 * @param keywords
			 */
			GetLeadSourceOptions({ commit }, keywords) {
				return getReadyData(keywords).then(res => {
				  commit("SET_LEADSOURCEOPTIONS", res.data.leadSourceOptions)
				  return res
				}).catch(err => {
				  console.log(err)
				})
			},
  }

}

