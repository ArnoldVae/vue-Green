<!--案件执行-审理案件-->
<template>
    <div>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
        >
            <el-menu-item index="1">
                <el-badge class="item" :class="{displayNone : allCases.length==0}">
                    <div class="meau-item">案件执行({{waitAcceptanceCases.length}})</div>
                </el-badge>
            </el-menu-item>
            <el-menu-item index="2">
                <el-badge
                        class="bottom18"
                        :class="{displayNone : unWaitAcceptanceCases.length==0}"
                >
                    <div class="meau-item">案件归档({{unWaitAcceptanceCases.length}})</div>
                </el-badge>
            </el-menu-item>
        </el-menu>
        <div class="cards2">
            <el-row :gutter="20">
                <el-card class="box-card2" v-for="(item,index) in showCases" :key="index">
                    <div class="title_state" v-if="item.caseSource == '1'"><img src="img/corner.png" alt="">
                        <span>直查案件</span></div>
                    <div class="title_state" v-if="item.caseSource == '2'"><img src="img/corner.png" alt="">
                        <span>报批案件</span></div>
                    <div class="title_state" v-if="item.caseSource == '4'"><img src="img/corner.png" alt="">
                        <span>司法移送</span></div>
                    <div slot="header" class="clearfix">
                    <span>
                      <el-button type="primary" style="border: none;margin-left: -10px;height: 24px; width: 24px;" plain size="small" icon="el-icon-document" circle></el-button>
                      {{item.caseName}}
                    </span>
                    </div>
                    <div class="case_content">
                        <el-form ref="form" :model="form" label-width="120px"  >
                            <el-form-item label="被审查调查人员"  class="card-form-item">
                                {{item.personName}}
                            </el-form-item>
                            <el-form-item label="案件受理时间" class="card-form-item" v-if="item.caseState != '2'">
                                {{item.registrationTime}}
                            </el-form-item>
                            <el-form-item label="案件结案时间" class="card-form-item" v-if="item.caseState == '2'">
                                {{item.registrationTime}}
                            </el-form-item>
                            <el-form-item label="剩余受理天数" class="card-form-item" v-if="item.caseState != '2'">
                                {{item.term}}<div class="term_state" v-if="item.termState == '1'">正常</div>
                                <div class="term_state term_state_2" v-if="item.termState == '2'">红色预警</div>
                                <div class="term_state term_state_3" v-if="item.termState == '3'">黄色预警</div>
                                <div class="term_state term_state_4" v-if="item.termState == '4'">蓝色预警</div>
                            </el-form-item>

                        </el-form>

                    </div>
                    <div  class="card-bottom-btn">
                        <el-row >
                           <!-- <el-col :span="8" style="margin: 10px 0"><el-button class="minist-btn" size="mini"  round @click="caseSupplement(item)">补充完善</el-button></el-col>-->
                            <el-col :span="8" style="margin: 10px 0"><el-button class="minist-btn" size="mini"  round @click="caseDetails(item)">查看详情</el-button></el-col>
                            <el-col :span="8" style="margin: 10px 0; " v-if="item.caseState == '1'&&item.caseSource != '4'"><el-button class="minist-btn" style="width: 102px;" size="mini"  round @click="executionFeedbackPage(item)" > 案件执行及反馈</el-button></el-col>
                            <el-col :span="8" style="margin: 10px 0" v-if="item.caseState != '1'"><el-button class="minist-btn" size="mini"  round @click="caseArchivePage(item)">案件归档</el-button></el-col>
                            <el-col :span="8" style="margin: 10px 0" v-if="item.caseSource == '4'"><el-button class="minist-btn" size="mini"  round @click="caseExecutionPage(item)">案件执行</el-button></el-col>
                        </el-row>
                    </div>
                    <div class="card-bottom">
                        <img src="img/node.png" style=" position: relative;left: 12%;top: 8%;">
                       
                        <span v-if="item.caseState=='1'">当前节点：案件执行</span>
                        <el-button v-if="item.caseState=='1'" type="primary" size="mini" round @click="showStateLine('案件执行')" >  审理进度 </el-button>

                        <span v-if="item.caseState!='1'">当前节点：案件归档</span>
                        <el-button v-if="item.caseState!='1'" type="primary" size="mini" round @click="showStateLine('案件归档')" >  审理进度 </el-button>

                    </div>


                </el-card>

            </el-row>
        </div>
        <el-dialog title="案件基本情况"  class="mc-dialog-big" :visible.sync="caseSupplementFlag" width="100%" top="0">
            <CaseSupplement></CaseSupplement>
        </el-dialog>
        <el-dialog class="mc-dialog-big" title="案件执行及反馈" :visible.sync="executionFeedbackPageFlag" width="100%" top="0" style="background: #ffffff">
            <ExecutionFeedbackPage @closePage="closePage"></ExecutionFeedbackPage>
        </el-dialog>
        <el-dialog class="mc-dialog-big" title="案件执行" :visible.sync="caseExecutionPageFlag" width="100%" top="0" style="background: #ffffff">
            <CaseExecutionPage  @closePage="closePage"></CaseExecutionPage>
        </el-dialog>
        <el-dialog class="mc-dialog-medium"  title="案件归档" :visible.sync="caseArchivePageFlag"  width="50%" top="13%"  center>
            <CaseArchivePage></CaseArchivePage>
                <div slot="footer" class="dialog-footer">
                    <el-button type="success" @click="caseArchivePageFlag=false"  size="small">保存</el-button>
                    <el-button size="small" @click="caseArchivePageFlag=false">返回</el-button>
             </div>
        </el-dialog>
        <el-dialog class="mc-dialog-medium" :visible.sync="showStateLineFlag" width="98%" top="14%">
            <StateLine ref="stateLine"></StateLine>
        </el-dialog>
        <el-dialog class="mc-dialog-big jwjw-dialog-big"  title="案件详情" :visible.sync="caseTotalDetailFlag" width="100%" top="0">
            <ViewDetailsWindow  v-bind:myData="showTabs" ref="caseReg"></ViewDetailsWindow>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import CaseSupplement from '../../evocatoryRes/modal/caseRegister1'
    import ExecutionFeedbackPage from "./modal/executionFeedbackPage.vue";//案件执行反馈
    import CaseArchivePage from "../../pubicMAndC/modal/caseArchivePage.vue";//案件归档
    import CaseExecutionPage from "./modal/caseExecutionPage.vue"; //案件执行

    import StateLine from "../../pubicMAndC/modal/stateLine.vue";  //详情 案件轨迹
    import ViewDetailsWindow from "../viewDetailsWindow.vue"; //案件详情
    
    @Component({
        name : "execution",
        components: { CaseSupplement,ExecutionFeedbackPage ,StateLine,CaseArchivePage,ViewDetailsWindow,CaseExecutionPage},
        data() {
            return {
                form:{}
            };
        },

        created() {},
        mounted() {},
        methods: {},
    })
    export default class formAudit extends Vue {
        showTabs = {
				caseRegister:true, //案件基本情况
    		    caseAcceptPage:true,  //案件受理
				firstAuditPage:true,
				trialOpinionPage:true,
				trialSuspendPage:true,
                trialTalkPage:true,
                askForOpinionPage:true,
                collectiveIdeaPage:true,
                meetingDeliberationPage:true
		};
        showCases = [];
        //case
        allCases: any = [
            {
                caseName: "李xx贪污违纪案件",
                caseState: "1",
                personName: "李某某",
                registrationTime: "2019-02-25 15:31",
                link: "会议审议",
                term: "22天",
                termState: "1",
                caseSource:'1'
            },
            {
                caseName: "刘xx违纪案件",
                caseState: "1",
                personName: "刘某某",
                registrationTime: "2019-02-25 15:31",
                term: "2天",
                link: "案件审核",
                termState: "2",
                caseSource:'4'
            },
            {
                caseName: "朱xx违纪案件",
                caseState: "1",
                personName: "朱某某",
                registrationTime: "2019-02-25 15:31",
                term: "9天",
                link: "案件审核",
                termState: "3",
                caseSource:'4'
            },
            {
                caseName: "程xx贪污受贿案件",
                caseState: "2",
                personName: "程某某",
                registrationTime: "2019-02-25 15:31",
                link: "会议审议",
                termState: "0",
                caseSource:'2'
            },
        ];
        waitAcceptanceCases: any = [];
        unWaitAcceptanceCases: any = [];
        activeIndex: string = "1";
        caseSupplementFlag:boolean = false
        caseDetailsFlag:boolean = false
        formAuditFlag:boolean = false
        caseAcceptanceFlag:boolean = false
        rollbackRecordFlag:boolean = false
        executionFeedbackPageFlag:boolean = false
        caseArchivePageFlag:boolean = false
        showStateLineFlag:boolean = false
        caseExecutionPageFlag:boolean = false
        caseTotalDetailFlag:boolean = false
        zhiXingNewFlag:boolean = false
        handleSelect(key) {
            if (key == 1) {
                this.showCases = this.waitAcceptanceCases;
            } else if (key == 2) {
                this.showCases = this.unWaitAcceptanceCases;
            }
        }
//        节点详情
        showStateLine(val) {
            // this.show(val)
            let that = this;

            this.showStateLineFlag = true

            setTimeout(function () {
                that.$refs.stateLine.focusStep(val,'1')

            }, 1)
        }
        caseSupplement(val) {
            this.caseSupplementFlag = true
        }
        caseDetails(item){
            this.caseTotalDetailFlag=true;
            let that=this;
            setTimeout(function(){
                that.$refs.caseReg.echoDetails(item);
            },1);
        }
        executionFeedbackPage(val){
            this.executionFeedbackPageFlag = true
        }
        caseArchivePage(val){
            this.caseArchivePageFlag=true
        }
        caseAcceptance(val){
            this.caseAcceptanceFlag = true
        }
        rollbackRecord(val){
            this.rollbackRecordFlag = true
        }

        /**
         *a案件执行
         */
        caseExecutionPage(item){
            this.caseExecutionPageFlag=true
        }
        mounted() {

            this.allCases.forEach(item => {
                if (item.caseState == "2") {
                    this.unWaitAcceptanceCases.push(item);
                } else {
                    this.waitAcceptanceCases.push(item)
                }
            });
            this.showCases = this.waitAcceptanceCases;
        }
        closePage(page){
			if(page=="AJZX"){
				this.caseExecutionPageFlag=false;
			}else{
				this.executionFeedbackPageFlag=false;

			}
		}
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/card2.scss";
    @import "~@/styles/common.scss";
  .el-menu-demo {
		margin: 5px 20px 0px 20px;
		border-bottom: solid 3px #2F76DD;
		/deep/.el-menu-item {
			font-size: 14px;
			color: #121312;
			height:35px;
			line-height: 35px;
			width: 160px;
		}
		.meau-item {
			font-size: 16px;
		}
		li:after{
			content:"|";
		    position: absolute;
    		right: -2px;
    		color: #dedede;
    		font-size: 17px;
			
		}
		li:last-child:after{
			content:"";
		}
		
		/deep/.el-badge__content {
			top: 15px;
			background-color: red;
		}
		/deep/.el-menu-item.is-active{
			background-color: #2F76DD;
		    border-bottom: 0;
		    border-radius:4px 4px 0 0;
		    color: #ffffff;
		}
    	/deep/.el-menu-item.is-active:after{
			content:"";
		}
	}

</style>