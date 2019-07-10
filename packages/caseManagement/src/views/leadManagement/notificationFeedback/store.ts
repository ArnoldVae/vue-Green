/**
 * store 全局状态管理
 * interface 接口
 * mutations 用于修改状态
 * actions 用于调用mutations
 */
import { getPreliminaryVerificationForm, getInvestigationVerifyForm, getTalkForm, getApplyLetter, getRegisterInvestigateForm, getSideUnderstandForm, getReadingForm } from '../../../../../common/api/caseManagement/product';

const state = {
    //初步核实对象
    preliminaryVerificationForm: {},
    //调查核实对象
    investigationVerifyForm: {},
    //谈话对象
    talkForm: {},
    //函询对象
    applyLetter: {},
    //立案调查对象
    registerInvestigateForm: {},
    //侧面了解对象
    sideUnderstandForm: {},
    //阅处对象
    readingForm: {},
};

export default {
    //状态
    state,
    //===================================同步修改state中的数据必须通过mutation===================================
    mutations: {
        //修改state中初步核实表格列表数据
        SET_PreliminaryVerificationForm(state, preliminaryVerificationForm: any) {
            state.preliminaryVerificationForm = preliminaryVerificationForm;
        },
        //修改state中调查核实表格列表数据
        SET_InvestigationVerifyForm(state, investigationVerifyForm: any) {
            state.investigationVerifyForm = investigationVerifyForm;
        },
        //修改state中谈话表格列表数据
        SET_TalkForm(state, talkForm: any) {
            state.talkForm = talkForm;
        },
        //修改state中函询表格列表数据
        SET_ApplyLetter(state, applyLetter: any) {
            state.applyLetter = applyLetter;
        },
        //修改state中立案调查表格列表数据
        SET_RegisterInvestigateForm(state, registerInvestigateForm: any) {
            state.registerInvestigateForm = registerInvestigateForm;
        },
        //修改state中侧面了解表格列表数据
        SET_SideUnderstandForm(state, sideUnderstandForm: any) {
            state.sideUnderstandForm = sideUnderstandForm;
        },
        //修改state中阅处表格列表数据
        SET_ReadingForm(state, readingForm: any) {
            state.readingForm = readingForm;
        },
    },
    //===================================异步修改state下的数据必须通过actions的commit方法===================================
    actions: {
        //获取初步核实数据列表
        GetPreliminaryVerificationForm({ commit }, keywords) {
            return getPreliminaryVerificationForm(keywords)
                .then(res => {
                    commit('SET_PreliminaryVerificationForm', res.data.preliminaryVerificationForm);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //获取调查核实数据列表
        GetInvestigationVerifyForm({ commit }, keywords) {
            return getInvestigationVerifyForm(keywords)
                .then(res => {
                    commit('SET_InvestigationVerifyForm', res.data.investigationVerifyForm);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //获取谈话数据列表
        GetTalkForm({ commit }, keywords) {
            return getTalkForm(keywords)
                .then(res => {
                    commit('SET_TalkForm', res.data.talkForm);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //获取函询数据列表
        GetApplyLetter({ commit }, keywords) {
            return getApplyLetter(keywords)
                .then(res => {
                    commit('SET_TalkForm', res.data.applyLetter);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //获取立案调查数据列表
        GetRegisterInvestigateForm({ commit }, keywords) {
            return getRegisterInvestigateForm(keywords)
                .then(res => {
                    commit('SET_RegisterInvestigateForm', res.data.registerInvestigateForm);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //获取侧面了解数据列表
        GetSideUnderstandForm({ commit }, keywords) {
            return getSideUnderstandForm(keywords)
                .then(res => {
                    commit('SET_SideUnderstandForm', res.data.sideUnderstandForm);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //获取阅处数据列表
        GetReadingForm({ commit }, keywords) {
            return getReadingForm(keywords)
                .then(res => {
                    commit('SET_ReadingForm', res.data.readingForm);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                });
        },
    }
};
