<template style="background: #f1f1f1">
    <div>
        <div class="cards2">
            <el-row :gutter="20">
                <el-card class="box-card2" v-for="(item,index) in showCases" :key="index">
                    <div class="title_state" v-if="item.caseSource == '1'"><img src="img/corner.png" alt="">
                        <span>直查案件</span></div>
                    <div class="title_state" v-if="item.caseSource == '2'"><img src="img/corner.png" alt="">
                        <span>报批案件</span></div>
                        <div class="title_state" v-if="item.caseSource == '3'"><img src="img/corner.png" alt="">
                        <span>司法移送</span></div>
                    <div slot="header" class="clearfix">
                    <span>
                      <el-button type="primary" style="border: none;margin-left: -10px;height: 24px; width: 24px;" plain
                                 size="small" icon="el-icon-document" circle></el-button>
                      {{item.caseName}}
                    </span>
                    </div>
                    <div class="case_content">
                        <el-form ref="form" :model="form" label-width="120px">
                    	  
                            <el-form-item label="被审查调查人员" class="card-form-item" style="padding-top: 10px">
                                {{item.personName}}
                            </el-form-item>
                            <el-form-item label="案件接收时间" class="card-form-item" style="padding-top: 10px">
                                {{item.receiveTime}}
                            </el-form-item>

                        </el-form>
                    </div>
                    <div class="card-bottom-btn">
                        <el-row>
                            <el-col :span="8" style="margin: 5px 0">
                                <el-button class="minist-btn" size="mini" round @click="caseSupplement(item)">查看详情
                                </el-button>
                            </el-col>
                            <el-col :span="8" style="margin: 5px 0">
                                <el-button class="minist-btn" size="mini" round @click="caseAcceptWindow=true">案件受理
                                </el-button>
                            </el-col>
                        </el-row>
                    </div>


                    <div class="card-bottom">
                        <img src="img/node.png" style=" position: relative;left: 12%;top: 8%;">
                        <span>当前节点：案件受理</span>
                        <el-button type="primary" size="mini" round @click="showStateLine('案件受理')"> 审理进度  </el-button>

                    </div>


                </el-card>

            </el-row>
        </div>
        <el-dialog title="案件详情" :visible.sync="caseSupplementFlag" class="mc-dialog-big" width="100%" top="0">
            <caseRegister ref="caseReg"  v-bind:myData="source" pageFlag="details"></caseRegister>
        </el-dialog>
        <el-dialog class="mc-dialog-medium" :visible.sync="showStateLineFlag" width="98%" top="14%">
            <StateLine ref="stateLine"></StateLine>
        </el-dialog>
        <el-dialog class="mc-dialog-big"  title="案件受理" :visible.sync="caseAcceptWindow" width="100%" top="0" style="background: #ffffff">
            <CaseAcceptWindow @submitEvent="FatherParam"  @closePage="closePage"></CaseAcceptWindow>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import caseRegister from '../../evocatoryRes/modal/caseRegister1';//案件详情
    import StateLine from "../../pubicMAndC/modal/stateLine.vue";

    import CaseAcceptWindow from "./modal/caseAcceptWindow.vue"; //案件受理的弹出窗
  
    @Component({
        name: "formAudit",
        source:{},
        components: {caseRegister, StateLine,CaseAcceptWindow},
        data() {
            return {
                form: {}
            };
        },

        created() {
        },
        mounted() {
        },
        methods: {}
    })
    export default class formAudit extends Vue {
    	showTabs ={
    		caseBasicInfo:true, //案件基本情况
    		firstTrial:true,  //受理情况
    		formAuditFlag:false,
    		fileRecord:false,
    		auditTalk:false,
    		fileRecord:false,
    		takeAdvice:false,
    		deliberations:false,
    		reviewSession:false,
    		caseExecution:false,
    		endingRegist:false
    	};
        showCases = [];
        //case
        allCases: any = [
            {   
                caseName: "张**贪污案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "张某某",//被调查人姓名
                caseState: "1",
                caseSource: "1"//案件来源 1直查 2报批 3司法移送
                
            },
            {
                caseName: "李**贪污案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "李某某",//被调查人姓名
                caseState: "1",
                caseSource: "1"
            },
            {
                caseName: "王**违纪案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "王某某",//被调查人姓名
                caseState: "1",
                caseSource: "2"
            },
            {
                caseName: "宋**违纪案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "宋某某",//被调查人姓名
                caseState: "1",
                caseSource: "3"
            }
        ];
        waitAcceptanceCases: any = [];
        unWaitAcceptanceCases: any = [];
        activeIndex: string = "1";
        caseSupplementFlag: boolean = false
        caseDetailsFlag: boolean = false
        formAuditFlag: boolean = false
        caseAcceptanceFlag: boolean = false
        rollbackRecordFlag: boolean = false
        showStateLineFlag: boolean = false
        caseAcceptWindow: boolean = false

        handleSelect(key) {
            key = Number(key.index) + 1;
            if (key == 1) {
                this.showCases = this.allCases;
            } else if (key == 2) {
                console.log(2);
                this.showCases = this.waitAcceptanceCases;
            } else if (key == 3) {
                this.showCases = this.unWaitAcceptanceCases;
            }
        }

        caseSupplement(val) {
            this.caseSupplementFlag = true;
            this.source="SL";
            let that=this;
            setTimeout(function(){
                that.$refs.caseReg.echoDetails(val);
            },1);
        }

        caseDetails(val) {
            this.caseDetailsFlag = true
        }

        formAudit(val) {
            this.formAuditFlag = true
        }

        caseAcceptance(val) {
            this.caseAcceptanceFlag = true
        }

        rollbackRecord(val) {
            this.rollbackRecordFlag = true
        }

        showStateLine(val) {
            // this.show(val)
            let that = this;

            this.showStateLineFlag = true

            setTimeout(function () {
                that.$refs.stateLine.focusStep(val,'1')

            }, 1)
        }
        FatherParam(msg){
            this.caseAcceptWindow=false
        }

        mounted() {

            this.showCases = this.allCases;
            this.allCases.forEach(item => {
                if (item.caseState == "1") {
                    this.waitAcceptanceCases.push(item);
                } else {
                    this.unWaitAcceptanceCases.push(item);
                }
            });
        }
     closePage(page){
        this.caseAcceptWindow=false;
    }

    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/card2.scss";
    @import "~@/styles/common.scss";


</style>