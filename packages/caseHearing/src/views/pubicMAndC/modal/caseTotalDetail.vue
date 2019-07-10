<template>
    <!-- 步骤条 -->
            <el-tabs type="border-card" class="jwjw-tabs">
                <el-tab-pane v-if="myData.caseBasicInfo==true" label="案件基本信息">
                    <case-reg pageFlag='total' ref="caseReg" :myData1="source"></case-reg>
                </el-tab-pane>
                <el-tab-pane label="案件受理"  v-if="myData.openCases == true">
                    <OpenCases pageFlag='total'></OpenCases>
                </el-tab-pane>
                <!-- 审核案件 -->
                <el-tab-pane label="案件受理"  v-if="myData.openCasesing == true">
                    <OpenCasesing pageFlag='total'></OpenCasesing>
                </el-tab-pane> 
                <el-tab-pane label="初步审核" v-if="myData.formAuditFlag == true">
                    <FormAuditFlag pageFlag='total'></FormAuditFlag>
                </el-tab-pane>
                <el-tab-pane label="阅卷笔录" v-if="myData.fileRecord == true">
                    <FileRecord pageFlag='total'></FileRecord>
                </el-tab-pane>
                <el-tab-pane label="审理意见" v-if="myData.auditAdvice == true">
                    <AuditAdvice pageFlag='total'></AuditAdvice>
                </el-tab-pane>
                <el-tab-pane label="审理谈话" v-if="myData.auditTalk == true">
                    <AuditTalk pageFlag='total'></AuditTalk>
                </el-tab-pane>
                <!-- 审核案件 -->
                <el-tab-pane label="审核意见" v-if="myData.auditAdvice1 == true">
                    <AuditAdvice1 pageFlag='total'></AuditAdvice1>
                </el-tab-pane> 
                <el-tab-pane label="征求意见" v-if="myData.takeAdvice == true">
                    <TakeAdvice pageFlag='total'></TakeAdvice>
                </el-tab-pane>
                <el-tab-pane label="集体审议" v-if="myData.deliberations == true">
                    <Deliberations pageFlag='total'></Deliberations>
                </el-tab-pane>
                <!-- 提前介入 -->
                <el-tab-pane label="报批领导" v-if="myData.approvalLeader == true">
                    <LeaderShip pageFlag='total'></LeaderShip>
                </el-tab-pane>
                <el-tab-pane label="会议审议" v-if="myData.reviewSession == true">
                    <ReviewSession pageFlag='total'></ReviewSession>
                </el-tab-pane>
                <!-- 审核案件 -->
                <el-tab-pane label="会议审议" v-if="myData.conference == true">
                    <Conference pageFlag='total'></Conference>
                </el-tab-pane>
                <el-tab-pane label="案件执行" v-if="myData.caseExecution == true">
                    <CaseExecution pageFlag='total'></CaseExecution>
                </el-tab-pane>
                <el-tab-pane label="结案登记" v-if="myData.endingRegist == true">
                    <EndingRegist pageFlag='total'></EndingRegist>
                </el-tab-pane>
            </el-tabs>

</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import  CaseReg from '../../evocatoryRes/modal/caseRegister1';//案件基本信息
    import FormAuditFlag from "./caseFormAudit.vue";//初步审核
    import ReviewSession from "./reviewSession.vue";//会议审议
    import Deliberations from "./deliberations.vue";//集体审议
    import FileRecord from "./fileRecord.vue";//阅卷笔录
    import AuditTalk from "./auditTalk.vue";//审理谈话
    import AuditAdvice from "./auditAdvice.vue";//审理意见
    import TakeAdvice from "./takeAdvice.vue";//征求意见
    import AuditAdvice1 from "./auditAdvice-sh.vue";//审核意见-审核
    import CaseExecution from "./caseExecution.vue";//案件执行
    import EndingRegist from "./endingRegist.vue";//结案登记
    import OpenCases from "./openCases.vue";//案件受理-审理
    import OpenCasesing from "./openCasesing.vue";//案件受理-审核
    import Conference from "./conference_SH.vue";//会议审议-审核
    import LeaderShip from "./leaderShip.vue";//报批领导-提前介入
    @Component({
        props:['myData'],
        source:{},
        components: {CaseReg,FormAuditFlag,ReviewSession,Deliberations,FileRecord,AuditTalk,TakeAdvice,CaseExecution,EndingRegist,
                     OpenCases,AuditAdvice,AuditAdvice1,Conference,OpenCasesing,LeaderShip},
        data() {
            return {
                stepIndex:1,

/*                steps: [
                    {id: 'step01', active: true, name: '手动登记'},
                    {id: 'step02', active: false, name: '形式审核'},
                    {id: 'step03', active: false, name: '受理签收'},
                    {id: 'step04', active: false, name: '审核意见'},
                    {id: 'step05', active: false, name: '会议审议'},
                    {id: 'step06', active: false, name: '案件执行'},
                    {id: 'step07', active: false, name: '结案登记'},

                ]*/
            };
        },

        created() {
        },
        mounted() {
            console.log(this.myData)
            this.source="SL";
        },
        methods: {}
    })
    export default class StateLine extends Vue {
        stepIndex : number;
        pageType : string='total'


/*        focusStep(item: string) {
            let a;
            this.steps.forEach((el, index) => {
                if (el.name == item) {
                    a = index;
                }
            });
            this.stepIndex=a;

        }*/
         echoDetails(item){
            let that=this;
            
            setTimeout(function(){
                that.$refs.caseReg.echoDetails(item);
            },1);
         }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
        /*控制表单项的公有样式*/
    @import "~@/styles/commonJWJW.scss";
	.jwjw-tabs{
		
	}

</style>