/**
 * store 全局状态管理
 * interface 接口
 * mutations 用于修改状态
 * actions 用于调用mutations
 */
import { getProducts,addProduct,delProduct } from 'common/api/caseHearing/product'

export interface StateProduct {
  product: Product,
  order: Order
}

export interface Product {
  code?: string, // 产品编码
  type?: string, // 产品类型
  name?: string, // 产品名称
  flag?: boolean // 是否常用
}
export interface Order {
  code?: string, // 订单编码
  time?: string, // 下单时间
}

const state: StateProduct = {
  product:{

  },
  order:{

  }
}

export default {
  //状态
  state,
  //想要修改state下的数据必须通过mutation
  mutations: {
    SET_PRODUCT(state: StateProduct, product: any) {
      state.product = product
    },
    SET_ORDER(state: StateProduct, order: any) {
      state.order = order
    }
  },
  actions: {
    /**
     * 获取产品列表
     * @param param0
     * @param keywords
     */
    GetProducts({ commit }, keywords) {
      return getProducts(keywords).then(res => {
        commit("SET_PRODUCT", res.data.productList)
        return res
      }).catch(err => {
        console.log(err)
      })
    },
    /**
     * 添加产品
     * @param param0
     * @param keywords
     */
    AddProduct({ commit }, keywords) {
      return addProduct(keywords).then(res => {
        commit("SET_PRODUCT", res.data.productList)
        return res
      }).catch(err => {
        console.log(err)
      })
    },
    /**
     * 删除产品
     * @param param0
     * @param keywords
     */
    DelProduct({ commit }, keywords) {
      return delProduct(keywords).then(res => {
        commit("SET_PRODUCT", res.data.productList)
        return res
      }).catch(err => {
        console.log(err)
      })
    }
  },
}
