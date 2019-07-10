import {asyncRouterMap} from '@/router'

const app = {
  state: {
    routers: asyncRouterMap,
    sidebar: {
      opened: false,
    },
  },
  mutations: {
    CLOSE_SIDEBAR: (state,status) => {
      console.log(status)
      state.sidebar.opened = status
    }
  },
  actions: {
    ToggleSidebar({commit},status) {
      commit('CLOSE_SIDEBAR',status)
    }
  }
}

export default app
