/**
 * store 全局状态管理
 * interface 接口
 * mutations 用于修改状态
 * actions 用于调用mutations
 */

import { countByDealType, queryMainList, queryCodeByType, addDisposalInforMation, } from '../../../../../common/api/caseManagement/product';

const state = {
	//数据列表
	queryMainList: {},
	//线索来源options下拉选数据
	optionsList: {},
	//获取线索处置类型总数countByDealType
	countByDealType: {},
	//添加线索处置的返回结果
	disposalInforMation: {},
	
};

export default {
	//状态
	state,

	//===================================同步修改state中的数据必须通过mutation===================================
	mutations: {
		//修改state中表格列表数据
		SET_QUERYMAINLIST(state, queryMainList: any) {
			state.queryMainList = queryMainList;
		},
		//修改state中线索来源options下拉选数据
		SET_CLUESOURCEOPTIONS(state, optionsList: any) {
			state.optionsList = optionsList;
		},
		//添加线索处置回显的数据
		ADD_DISPOSALINFORMATION(state, disposalInforMation: any) {
			state.disposalInforMation = disposalInforMation;
		},
		//修改线索处置类型总数countByDealType的数据
		SET_COUNTBYDEALTYPE(state, countByDealType: any) {
			state.countByDealType = countByDealType;
		}
	},

	//===================================异步修改state下的数据必须通过actions的commit方法===================================
	actions: {
		//获取已处置数据列表
		QueryMainList({ commit }, keywords) {
			return queryMainList(keywords)
				.then(res => {
					if(keywords.disposalState == true){
						//已处置
						commit('SET_QUERYMAINLIST', res.data.hasDisposalList);
					}else{
						//未处置
						commit('SET_QUERYMAINLIST', res.data.notDisposalList);
					}
					return res;
				})
				.catch(err => {
					console.log(err);
				});
		},
		//获取线索来源options下拉选数据
		QueryCodeByType({ commit }, keywords) {
			return queryCodeByType(keywords)
				.then(res => {
					commit('SET_CLUESOURCEOPTIONS', res.result.XSLY);
					return res;
				})
				.catch(err => {
					console.log(err);
				});
		},
		//获取线索处置类型总数countByDealType
		CountByDealType({ commit }, keywords) {
			return countByDealType(keywords)
				.then(res => {
					commit('SET_COUNTBYDEALTYPE', res.data.result);
					return res;
				})
				.catch(err => {
					console.log(err);
				});
		},
		//添加线索处置方法
		AddDisposalInforMation({ commit }, keywords) {
			return addDisposalInforMation(keywords)
				.then(res => {
					commit('ADD_DISPOSALINFORMATION', res.data.disposalInforMation);
					return res;
				})
				.catch(err => {
					console.log(err);
				});
		},
	}
};
