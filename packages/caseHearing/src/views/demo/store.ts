/**
 * store 全局状态管理
 * interface 接口
 * mutations 用于修改状态
 * actions 用于调用mutations
 */
import {getDemoItem,getDemoItemOther} from 'common/api/caseHearing/demo/demo'
export interface StateItem {
    item: item,
}
export interface item {
    code?: string, // 产品编码
    type?: string, // 产品类型
    name?: string, // 产品名称
    flag?: boolean // 是否常用
}

const state: StateItem = {
    item: {},
}
export default {
    //状态
    state,
    //想要修改state下的数据必须通过mutation
    mutations: {
        GET_DENOITEM(state: StateItem, item: any) {
            item.item = item
        },
         GET_DENOITEM2(state: StateItem, item: any) {
            item.item = item
        },
    },
    actions: {
        /**
         * 获取产品列表
         * @param param0
         * @param keywords
         */
        GetItems({commit}, keywords) {
            console.log(getDemoItem)
            return getDemoItem(keywords).then(res => {
                commit("GET_DENOITEM", res)
                return res
            }).catch(err => {
                console.log(err)
            })
        },
         /**
         * 获取demo列表
         * @param param0
         * @param keywords
         */
        GetItems2({commit}, keywords) {
            console.log('调用store')
            console.log(getDemoItemOther)
            return getDemoItemOther(keywords).then(res => {
                commit("GET_DENOITEM2", res)
                return res
            }).catch(err => {
                console.log(err)
            })
        },

    }

}
