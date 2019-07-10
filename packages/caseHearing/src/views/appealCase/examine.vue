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
                            <el-form-item label="案件受理时间" class="card-form-item">
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
                <el-button class="minist-btn" size="mini" round @click="viewDetails(item)">查看详情
                </el-button>
              </el-col>
              <el-col :span="8" style="margin: 5px 0" v-if="item.caseState == '1'">
                <el-button class="minist-btn" size="mini" round @click="showExamineModal('01')">申诉复议
                </el-button>
              </el-col>
              <el-col :span="8" style="margin: 5px 0" v-if="item.caseState == '2'">
                <el-button class="minist-btn" size="mini" round @click="showExamineModal('02')">申诉复查
                </el-button>
              </el-col>
              <el-col :span="8" style="margin: 5px 0" v-if="item.caseState == '3'">
                <el-button class="minist-btn" size="mini" round @click="reviewSessionSS(item)">会议审议
                </el-button>
              </el-col>
              <el-col :span="8" style="margin: 5px 0" v-if="item.caseState == '4'">
                <el-button class="minist-btn" size="mini" round @click="submitApprPage=true" >呈报审批
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
    <el-dialog title="案件详情" :visible.sync="viewDetailsWindow" class="mc-dialog-big" width="100%" top="0">
      <ViewDetailsWindow v-bind:myData="showTabs"></ViewDetailsWindow>
    </el-dialog>
    <el-dialog :title="examineTitle" :visible.sync="examineModal" class="mc-dialog-big" width="100%" top="0">
      <ExamineGroup ref="examine"  @closePage="closePage"></ExamineGroup>
    </el-dialog>
    <el-dialog class="mc-dialog-medium"  title="呈报审批" :visible.sync="submitApprPage"  width="30%" top="13%"  center>
            <SubmitApprPage></SubmitApprPage>
             <div slot="footer" class="dialog-footer">
                    <el-button type="success" @click="submitApprPage = false" size="small">保存</el-button>
                    <el-button  @click="submitApprPage = false"  size="small">关闭</el-button>
             </div>
    </el-dialog>
    <el-dialog class="mc-dialog-big" title="会议审议" :visible.sync="reviewSessionSSFlag" width="100%" top="0" style="background: #ffffff">
        <ReviewSessionSS  @closePage="closePage"></ReviewSessionSS>
    </el-dialog>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import ViewDetailsWindow from './viewDetailsWindow.vue';
    import StateLine from "../pubicMAndC/modal/stateLine.vue";
    import ExamineGroup from "../pubicMAndC/modal/examineGroup.vue";
    import SubmitApprPage from "../pubicMAndC/modal/submitApprPage.vue";//呈报审批 
    import ReviewSessionSS from "../pubicMAndC/modal/reviewSessionSS.vue";
    @Component({
        name: "formAudit",
        components: {ViewDetailsWindow, StateLine,ExamineGroup,SubmitApprPage,ReviewSessionSS},
        data() {
            return {
                form: {},
                submitApprPage:false
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
    		caseRegister:true,
    		caseAcceptPage:true,
    		appealReconsideration:true
            
    	};
        reviewSessionSSFlag: boolean = false
        showCases = [];
        //case
        allCases: any = [
            {
                caseName: "张**申诉案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "张某某",//被调查人姓名
                term: "20天",//剩余受理天数
                termState: "1",
                caseState: "1",
                caseSource: "1"//案件来源 1直查 2报批 3司法移送

            },
            {
                caseName: "张**申诉案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "张某某",//申诉人
                term: "3天",//剩余受理天数
                termState: "2",
                caseState: "2",
                caseSource: "1"//案件来源 1直查 2报批 3司法移送


            },
            {
                caseName: "胡**申诉案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "胡某某",//申诉人
                term: "15天",//剩余受理天数
                termState: "4",
                caseState: "3",
                caseSource: "1"//案件来源 1直查 2报批 3司法移送


            },
            {
                caseName: "李**申诉案", //案件名称
                receiveTime:'2019-02-25' ,//案件接收时间
                personName: "李某某",//申诉人
                term: "9天",//剩余受理天数
                termState: "3",
                caseState: "4",
                caseSource: "1"//案件来源 1直查 2报批 3司法移送


            }
        ];
        waitAcceptanceCases: any = [];
        unWaitAcceptanceCases: any = [];
        activeIndex: string = "1";
        examineModal: boolean = false
        viewDetailsWindow: boolean = false
        examineTitle:string="申诉复议"

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
        reviewSessionSS(val){
          this.reviewSessionSSFlag = true
        }
        viewDetails(val){
            this.viewDetailsWindow=true
        }
        showExamineModal(target){
            let that=this;
            this.examineTitle=target=='01'?'申诉复议':'申诉复查'
            this.examineModal=true;
            setTimeout(()=>{
                that.$refs.examine.initModal(target)
            },1)

        }
        	closePage(page){
            if(page=="HYSY"){
                this.reviewSessionSSFlag=false;
            }else{
                this.examineModal=false;
            }
        }
 
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/dialogBox.scss";
  @import "~@/styles/card2.scss";
  @import "~@/styles/common.scss";
  
</style>