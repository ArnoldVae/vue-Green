/**
 * store 全局状态管理
 * interface 接口
 * mutations 用于修改状态
 * actions 用于调用mutations
 */
import { getCurrentLevelData, getSubordinateData, getOtherUnitData } from '../../../../../common/api/caseManagement/product';

const state = {
	//本级直查对象
	currentLevelData: {},
	//转下级调查对象
	subordinateData: {},
	//转其他单位对象
	otherUnitData: {},
};

export default {
	//状态
	state,
	//===================================同步修改state中的数据必须通过mutation===================================
	mutations: {
		//修改state中本级直查表格列表数据
		SET_CurrentLevelData(state, currentLevelData: any) {
			state.currentLevelData = currentLevelData;
		},
		SET_SubordinateData(state, subordinateData: any) {
			state.subordinateData = subordinateData;
		},
		SET_OtherUnitData(state, otherUnitData: any) {
			state.otherUnitData = otherUnitData;
		},
	},
	//===================================异步修改state下的数据必须通过actions的commit方法===================================
	actions: {
		//获取本级直查数据列表
		GetCurrentLevelData({ commit }, keywords) {
			return getCurrentLevelData(keywords)
				.then(res => {
					commit('SET_CurrentLevelData', res.data.currentLevelData);
					return res;
				})
				.catch(err => {
					console.log(err);
				});
		},
		//获取转下级调查数据列表
		GetSubordinateData({ commit }, keywords) {
			return getSubordinateData(keywords)
				.then(res => {
					commit('SET_SubordinateData', res.data.subordinateData);
					return res;
				})
				.catch(err => {
					console.log(err);
				});
		},
		//获取转其他单位数据列表
		GetOtherUnitData({ commit }, keywords) {
			return getOtherUnitData(keywords)
				.then(res => {
					commit('SET_OtherUnitData', res.data.otherUnitData);
					return res;
				})
				.catch(err => {
					console.log(err);
				});
		},
	}
};
