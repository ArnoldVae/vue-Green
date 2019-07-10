import {getUsers,addUser} from '../../../../common/api/user'

export interface StateUser {
  user : User
}

export interface User {
  code?: string, // user编码
  name?: string, // user名称
  age?: number,
  status?: boolean
}

const state : StateUser = {
  user: {}
}

export default {
  //状态
  state,
  //想要修改state下的数据必须通过mutation
  mutations : {
    SET_USER(state : StateUser, user : any) {
      state.user = user
    }
  },
  actions : {
    /**
     * 获取user列表
     * @param param0
     * @param keywords
     */
    GetUsers({
      commit
    }, keywords) {
      return getUsers(keywords).then(res => {
        if (res.code === 200) {
          commit("SET_USER", res.data.userList)
        }
        return res
      }).catch(err => {
        console.log(err)
      })
    },
    AddUser({
      commit
    }, keywords) {
      return addUser(keywords).then(res => {
        if (res.code === 200) {
          commit("SET_USER", res.data.userList)
        }
        return res
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
