import {asyncRouterMap} from '@/router'
import permission from './permission';

// 后续菜单数据将从后端获取
const menus = require("./menu.json");

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = {
      ...route
    }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const permission = {
  state: {
    routers: asyncRouterMap,
    permissionRouters: [],
    secondMenus: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.routers = routers
    },
    SET_PERMISSION_ROUTERS: (state, routers) => {
      state.permissionRouters = routers
    },
    SET_SECOND_MENUS: (state, menus) => {
      state.secondMenus = menus
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        const {roles} = data
        let accessedRouters
        if (roles.includes('admin')) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    },
    /**
     * 从后端获取菜单json数据
     * 暂时写死在此页面 menus
     */
    GetPermisionRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        menus.forEach((item,index) => {
          item.active=false
          item.index=index
          if(index<data.currFirstMenuNum){
            item.isOutside = true
          }else{
            item.isOutside = false
          }
          item.children.forEach((target,i) => {
            target['index'] = i
            target['path'] = target.url
            target['meta'] = {
              title: target.title,
              tagTitle: target.tagTitle,
              hidden: target.hidden || false
            }
          })
        });
        commit('SET_PERMISSION_ROUTERS', menus)
        resolve()
      })
    },
    /**
     * 更新菜单
     * @param param0
     * @param data
     */
    SetPermisionRoutes({
      commit
    },data){
      return new Promise(resolve => {
        data.menus.forEach((item,index) => {
          item.index=index
          if(index<data.currFirstMenuNum){
            item.isOutside = true
          }else{
            item.isOutside = false
          }
        });
        commit('SET_PERMISSION_ROUTERS', data.menus)
        resolve()
      })
    }
  }
}

export default permission
