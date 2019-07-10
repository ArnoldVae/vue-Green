/**
 * store 全局状态管理
 * interface 接口
 * mutations 用于修改状态
 * actions 用于调用mutations
 */
import {getLimited } from '../../../../../common/api/caseHearing/trialbusiness/processLimited/limited'

export interface StateLimited {
  limited: limited,
}
export interface limited {
  code?: string, // 产品编码
  type?: string, // 产品类型
  name?: string, // 产品名称
  flag?: boolean // 是否常用
}

const state:StateLimited = {
  limited:{

  },
  
}
export default {
  //状态
  state,
  //想要修改state下的数据必须通过mutation
  mutations: {
    SET_LImited(state: StateLimited, limited: any) {
      state.limited = limited
    },
    
  },
  actions: {
    /**
     * 获取产品列表
     * @param param0
     * @param keywords
     */
    GetLimited({ commit }, keywords) {
      return getLimited(keywords).then(res => {
        if (res.caseHearing === 200) {
          commit("SET_LImited", res.data.limitedList)
        }
        return res
      }).catch(err => {
        console.log(err)
      })
  }
    
}
}