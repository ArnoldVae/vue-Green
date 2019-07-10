<template style="background: #f1f1f1">
    <div>
        <div class="cards2">
            <el-row :gutter="20">
                <el-card class="box-card2" v-for="(item,index) in showCases" :key="index">
                    <div class="title_state" v-if="item.caseSource == '1'"><img src="img/corner.png" alt="">
                        <span>信访部门转来</span></div>
                    <div class="title_state" v-if="item.caseSource == '2'"><img src="img/corner.png" alt="">
                        <span>下级部门上报</span></div>
                    <div slot="header" class="clearfix">
                    <span>
                      <el-button type="primary" style="border: none;margin-left: -10px;height: 24px; width: 24px;" plain
                                 size="small" icon="el-icon-document" circle></el-button>
                      {{item.caseName}}
                    </span>
                    </div>
                    <div class="case_content">
                        <el-form ref="form" :model="form" label-width="120px">

                            <el-form-item label="申诉人" class="card-form-item padding-top-10">
                                {{item.personName}}
                            </el-form-item>
                            <el-form-item label="案件接收时间" class="card-form-item">
                                {{item.receiveTime}}
                            </el-form-item>
                            <el-form-item label="剩余受理天数" class="card-form-item">
                                {{item.term}}
                                <div class="term_state" v-if="item.termState == '1'">正常</div>
                                <div class="term_state term_state_2" v-if="item.termState == '2'">红色预警</div>
                                <div class="term_state term_state_3" v-if="item.termState == '3'">黄色预警</div>
                                <div class="term_state term_state_4" v-if="item.termState == '4'">蓝色预警</div>
                            </el-form-item>

                        </el-form>
                    </div>
                    <div class="card-bottom-btn">
                        <el-row>
                            <el-col :span="8" style="margin: 5px 0">
                                <el-button class="minist-btn" size="mini" round @click="appalRegister(item)">查看详情
                                </el-button>
                            </el-col> 
                            <!-- <el-col :span="8" style="margin: 5px 0">
                                <el-button class="minist-btn" size="mini" round @click="caseDetails(item)">查看详情
                                </el-button>
                            </el-col> -->
                            <el-col :span="8" style="margin: 5px 0">
                                <el-button class="minist-btn" size="mini" round @click="fistTrail(item)">案件受理
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
         <el-dialog title="案件详情" :visible.sync="appalRegisterFlag" class="mc-dialog-big" width="100%" top="0">
            <AppalRegister ref="caseReg"  pageFlag="details" ></AppalRegister>
        </el-dialog>

        <el-dialog class="mc-dialog-medium" :visible.sync="showStateLineFlag" width="98%" top="14%">
            <StateLine ref="stateLine"></StateLine>
        </el-dialog>
        <!--案件受理-->
        <el-dialog class="mc-dialog-big"  title="案件受理" :visible.sync="fistTrailModal" width="100%" top="0">
            <FirstTrail @closePage="closePage" ref="caseReg" ></FirstTrail>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import AppalRegister from '../evocatoryRes/modal/appalRegister.vue';
    import StateLine from "../pubicMAndC/modal/stateLine.vue";

    import FirstTrail from "../pubicMAndC/modal/firstTrialModalingNew.vue";

    @Component({
        name: "formAudit",
        components: {AppalRegister, StateLine,FirstTrail},
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
        showCases = [];
        //case
        allCases: any = [
            {
                caseName: "张**申诉案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "张某某",//申诉人
                term: "20天",//剩余受理天数
                termState: "1",
                caseSource: "1"//案件来源 1直查 2报批 3司法移送

            },
            {
                caseName: "李**申诉案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "李某某",//被调查人姓名
                term: "5天",//剩余受理天数
                termState: "2",
                caseSource: "1"
            },
            {
                caseName: "王**申诉案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "王某某",//被调查人姓名
                term: "9天",//剩余受理天数
                termState: "3",
                caseSource: "2"
            },
            {
                caseName: "宋**申诉案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "宋某某",//被调查人姓名
                term: "15天",//剩余受理天数
                termState: "4",
                caseSource: "2"
            }
        ];
        waitAcceptanceCases: any = [];
        unWaitAcceptanceCases: any = [];
        activeIndex: string = "1";
      appalRegisterFlag: boolean = false
        caseDetailsFlag: boolean = false
        formAuditFlag: boolean = false
        caseAcceptanceFlag: boolean = false
        rollbackRecordFlag: boolean = false
        showStateLineFlag: boolean = false
        fistTrailModal: boolean = false

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
        FatherParam(msg){
            console.log(msg)
            this.fistTrailModal=false
        }
        appalRegister(val) {
            this.appalRegisterFlag = true;
            let that=this;
            setTimeout(function(){
                that.$refs.caseReg.echoDetails(val);
            },1);
        }
        fistTrail(val) {
            this.fistTrailModal = true;
            let that=this;
            setTimeout(function(){
                that.$refs.caseReg.echoDetails(val);
            },1);
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
                that.$refs.stateLine.focusStep(val,'2')

            }, 100)


        }
        //关闭弹出框方法
        closePage(){
            this.fistTrailModal = false;
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
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/card2.scss";
    @import "~@/styles/common.scss";
    /*控制表单项的公有样式*/
    @import "~@/styles/commonJWJW.scss";

</style>