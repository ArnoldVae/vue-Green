/**
 * store 全局状态管理
 * interface 接口
 * mutations 用于修改状态
 * actions 用于调用mutations
 */

import { getHandlingList } from '../../../../../common/api/caseManagement/product'


const state = {
//======================线索办理======================
	handlingList:{
	},
};
export default {
	//状态
	state,
	//想要修改state下的数据必须通过mutation
  mutations: {
        //线索办理已办理下拉选数据
            Set_HandlingList(state, handlingList: any) {
                state.handlingList = handlingList;
              },

  },
  actions: {
              /**
			 * 获取线办理数据
			 * @param param0
			 * @param keywords
			 */
			GetHandlingList({ commit }, keywords) {
				return getHandlingList(keywords).then(res => {
				  commit("Set_HandlingList", res.data.handlingList)
				  return res
				}).catch(err => {
				  console.log(err)
				})
			},
  }

}
