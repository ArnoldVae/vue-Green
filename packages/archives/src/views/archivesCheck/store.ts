/**
 * store 全局状态管理
 * interface 接口
 * mutations 用于修改状态
 * actions 用于调用mutations
 */


export interface archives {
  id?: string, // id
  caseName?: string, // 承办人
  date?: string, // 年份
  accusedName?: string, // 被调查人
  acceptPerson?: string, // 
  archivesState?: string, // 
  wareState?: string, // 
  virtualArchives?: string // 
}

const state = {
  data:{

  },
  data1:{

  },
}
export default {
  //状态
  state,
  //想要修改state下的数据必须通过mutation
  mutations: {
   
  },
  actions: {
  }
    
}
