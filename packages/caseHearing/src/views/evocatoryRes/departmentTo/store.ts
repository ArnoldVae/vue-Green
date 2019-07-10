/**
 * store 全局状态管理
 * interface 接口
 * mutations 用于修改状态
 * actions 用于调用mutations
 */
import {getPersonnel } from '../../../../../common/api/caseHearing/evocatoryRes/departmentTo/personnel'

export interface StatePersonnel {
  personnel: personnel,
}
export interface personnel {
  code?: string, // 产品编码
  type?: string, // 产品类型
  name?: string, // 产品名称
  flag?: boolean // 是否常用
}

const state:StatePersonnel = {
  personnel:{

  },
  
}
export default {
  //状态
  state,
  //想要修改state下的数据必须通过mutation
  mutations: {
    SET_PRODUCT1(state: StatePersonnel, personnel: any) {
      state.personnel = personnel
    },
    
  },
  actions: {
    /**
     * 获取产品列表
     * @param param0
     * @param keywords
     */
    GetPersonnel({ commit }, keywords) {
      return getPersonnel(keywords).then(res => {
        if (res.caseHearing === 200) {
          commit("SET_PRODUCT1", res.data.personnelList)
        }
        return res
      }).catch(err => {
        console.log(err)
      })
  }
    
}
}