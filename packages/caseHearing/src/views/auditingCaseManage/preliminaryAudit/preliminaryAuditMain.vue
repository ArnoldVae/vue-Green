<template style="background: #f1f1f1">
    <div>
        <div class="cards2">
            <el-row :gutter="20">
                <el-card class="box-card2" v-for="(item,index) in showCases" :key="index">
                    <div class="title_state" v-if="item.caseSource == '1'"><img src="img/corner.png" alt="">
                        <span>直查后通报</span></div>
                    <div class="title_state" v-if="item.caseSource == '2'"><img src="img/corner.png" alt="">
                        <span>下级单位调查</span></div>
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
                        	<!-- <div v-if="item.caseState != '3'" class="card-stateImg" style="background-image: url(img/dqs.png);"></div>-->
                            <el-form-item label="被审查调查人员" class="card-form-item">
                                {{item.personName}}
                            </el-form-item>
                            <el-form-item label="案件受理时间" class="card-form-item">
                                {{item.acceptTime}}
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
                            <el-col :span="8" style="margin: 5px 0" v-show="item.status=='1'">
                                <el-button class="minist-btn" size="mini" round @click="preliminaryAuditPage(item)">初步审核
                                </el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="card-bottom">
                        <img src="img/node.png" style=" position: relative;left: 12%;top: 8%;">
                        <span >当前节点：初步审核</span>
                        <el-button type="primary" size="mini" round @click="showStateLine('初步审核')"> 审理进度 </el-button>

                    </div>


                </el-card>

            </el-row>
        </div>
        <el-dialog title="案件基本情况" :visible.sync="caseSupplementFlag" class="mc-dialog-big" width="100%" top="0">
            <CaseSupplement></CaseSupplement>
        </el-dialog>
        <el-dialog class="mc-dialog-big " title="案件详情" :visible.sync="viewDetailsWindow"  width="100%" top="0">
            <ViewDetailsWindow  v-bind:myData="showTabs" ref="caseReg"></ViewDetailsWindow>
        </el-dialog>
        <el-dialog class="mc-dialog-big" title="初步审核" :visible.sync="preliminaryAuditPageFlag" width="100%" top="0" id="formAudit">
        	<PreliminaryAuditPage @submitEvent = "closeFtn" v-show="centerDialogVisible"></PreliminaryAuditPage>
        	<CaseRegister ref="caseReg" myData="SH" v-show="!centerDialogVisible"></CaseRegister>
            
            <div slot="footer" class="backplane-footer-center" style="text-align: center">
	            <el-button v-show="centerDialogVisible" type="success" >保存</el-button>
	            <el-button  v-show="!centerDialogVisible" type="success" >提交</el-button>
	            <el-button  v-show="centerDialogVisible" @click="centerDialogVisible =!centerDialogVisible">下一步</el-button>
	            <el-button  v-show="!centerDialogVisible" @click="centerDialogVisible =!centerDialogVisible">上一步</el-button>
        	</div>
        </el-dialog>
        <el-dialog class="mc-dialog-medium" :visible.sync="showStateLineFlag" width="98%" top="14%">
            <StateLine ref="stateLine"></StateLine>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import StateLine from "../../pubicMAndC/modal/stateLine.vue";
    import PreliminaryAuditPage from "./modal/preliminaryAuditPage.vue";//初步审核
    import ViewDetailsWindow from "../viewDetailsWindow.vue"; //案件详情
    import CaseRegister from "../../evocatoryRes/modal/caseRegister1.vue"; //案件详情
    @Component({
        name: "formAudit",
        components: { PreliminaryAuditPage, StateLine,ViewDetailsWindow,CaseRegister},
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
        centerDialogVisible:boolean=true
        showTabs ={
    		caseRegister:true, //案件基本情况
    		caseAcceptPage:true  //案件受理
    	};
        showCases = [];
        //case
        allCases: any = [
            {
                caseName: "张xx违纪违法案件",
                status:'1',
                caseState: "2",
                personName: "张某某",
                acceptTime: "2019-02-25 15:31",
                term: "20天",
                termState: "1",
                caseSource:'3'
            },
            {
                caseName: "程xx贪污受贿案件",
                caseState: "1",
                personName: "程某某",
                acceptTime: "2019-02-25 15:31",
                status:'1',
                term: "5天",
                termState: "2",
                caseSource:'1'
            },
            {
                caseName: "刘xx违纪案件",
                caseState: "2",
                personName: "刘某某",
                acceptTime: "2019-02-25 15:31",
                term: "10天",
                status:'1',
                termState: "3",
                caseSource:'2'
            },
            {
                caseName: "李xx犯罪违法案件",
                caseState: "2",
                status:'1',
                personName: "李某某",
                acceptTime: "2019-02-25 15:31",
                term: "15天",
                termState: "4",
                caseSource:'1'
            }
        ];
        waitingSigntCases: any = [];
        unWaitingSigntCases: any = [];
        activeIndex: string = "3";
        caseSupplementFlag: boolean = false
        viewDetailsWindow: boolean = false
        caseAcceptanceFlag: boolean = false
        rollbackRecordFlag: boolean = false
        showStateLineFlag: boolean = false
        preliminaryAuditPageFlag: boolean = false//初步审核

        handleSelect(key) {

            if (key == 1) {
                this.showCases = this.allCases;
            } else if (key == 3) {
                this.showCases = this.waitingSigntCases;
            } else if (key == 4) {
                this.showCases = this.unWaitingSigntCases;
            }
        }
        FatherParam(msg){
            
            this.formAuditFlag = false
        }
        caseSupplement(val) {
            this.caseSupplementFlag = true
        }

        viewDetails(val) {
            this.viewDetailsWindow = true;
                let that=this;
                setTimeout(function(){
                    that.$refs.caseReg.echoDetails(val);
                },1);

        }
        //初步审核方法
        preliminaryAuditPage(val) {
            this.preliminaryAuditPageFlag = true
            let that=this;
            setTimeout(function(){
                that.$refs.caseReg.echoDetails(val);
            },1);
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

            }, 1)
        }
//        案件签收
        caseNote(item){
            this.$confirm('您确定要签收当前案件？ 签收后不可退回!', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '签收成功!'
                });
                item.status=''
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消签收'
                });
            });

        }
//        案件退回
        caseToBack(index,item){
            const h = this.$createElement;
            this.$msgbox({
                title: '退回意见',
                message: h('textarea',{style:'width:386px;height:100px'}),
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true;
                        instance.confirmButtonText = '执行中...';
                        setTimeout(() => {
                            done();
                            setTimeout(() => {
                                instance.confirmButtonLoading = false;
                            }, 300);
                        }, 3000);
                    } else {
                        done();
                    }
                }
            }).then(action => {
                this.$message({
                    type: 'success',
                    message: '案件退回成功 '
                });
                this.showCases.splice(index,1)

            });
        }
		//关闭弹出框方法
		closeFtn(msg){
			console.log(msg);
			this.formAuditFlag = false;
		}
        mounted() {


            this.allCases.forEach(item => {
                if (item.caseState == "3") {
                    this.unWaitingSigntCases.push(item);
                } else {
                    this.waitingSigntCases.push(item);
                }
            });
            this.showCases = this.waitingSigntCases;
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/card2.scss";
    @import "~@/styles/common.scss";
  	#formAudit /deep/ .el-dialog__footer{
    	position: relative;
	    bottom: 0px;
	    background: #fff;
	    width: 94%;
	    margin: 0 auto;
	    top: -55px;
	    z-index: 9999;
	    box-shadow: 0px -4px 3px #4c4c4c12;
    }

</style>