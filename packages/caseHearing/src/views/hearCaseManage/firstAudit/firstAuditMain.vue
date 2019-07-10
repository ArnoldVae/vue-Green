<!--初步审核-审理案件-->
<template style="background: #f1f1f1">
    <div>
        <!--<el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
        >
            <el-menu-item index="3">
                <el-badge :value="waitingSigntCases.length" class="item" :class="{displayNone : allCases.length==0}">
                    <div class="meau-item">待签收</div>
                </el-badge>
            </el-menu-item>
            <el-menu-item index="4">
                <el-badge :value="unWaitingSigntCases.length" class="item" :class="{displayNone : allCases.length==0}">
                    <div class="meau-item">初步审核中</div>
                </el-badge>
            </el-menu-item>

        </el-menu>-->
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
                        	 <!-- <div v-if="item.caseState != '3'" class="card-stateImg" style="background-image: url(img/dqs.png);"></div> -->
                              <!--<div v-if="item.caseState == '1'" class="card-stateImg" style="background-image: url(img/dqs.png);"></div>
                             <div v-if="item.caseState == '2'" class="card-stateImg" style="background-image: url(img/dqs.png);"></div>
                        	<div v-if="item.caseState == '3'" class="card-stateImg" style="background-image: url(img/approved.png);"></div>-->
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
                            <!-- <el-col :span="8" style="margin: 5px 0">
                                <el-button class="minist-btn" size="mini" round @click="caseSupplement(item)">补充完善
                                </el-button>
                            </el-col> -->
                            <el-col :span="8" style="margin: 5px 0">
                                <el-button class="minist-btn" size="mini"  round @click="viewDetails(item)">查看详情
                                </el-button></el-col>
                            <el-col :span="8" style="margin: 5px 0" v-show="item.status =='1'">
                                <el-button class="minist-btn" size="mini" round @click="formAudit(item)">初步审核
                                </el-button>
                            </el-col>
                            <!--<el-col :span="8" style="margin: 5px 0" v-show="item.status=='1'">
                                <el-button class="minist-btn" size="mini" round @click="caseNote(item)">案件签收
                                </el-button>
                            </el-col>-->
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
            <CaseSupplement ></CaseSupplement>
        </el-dialog>
        <el-dialog class="mc-dialog-big jwjw-dialog-big"  title="案件详情" :visible.sync="viewDetailsWindow" width="100%" top="0">
            <ViewDetailsWindow  v-bind:myData="showTabs" ref="caseReg" ></ViewDetailsWindow>
        </el-dialog>
        <el-dialog class="mc-dialog-big" title="初步审核" :visible.sync="firstAuditPage" width="100%" top="0" id="formAudit">
            <FirstAuditPage @submitEvent = closeFtn v-show="centerDialogVisible"></FirstAuditPage>
            <CaseSupplement ref="caseReg" :myData="source" v-show="!centerDialogVisible"></CaseSupplement>
            <div slot="footer" class="backplane-footer-centerl" style="text-align: center">
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
    import CaseSupplement from '../../evocatoryRes/modal/caseRegister1.vue'
    import StateLine from "../../pubicMAndC/modal/stateLine.vue";
    import FirstAuditPage from "./modal/firstAuditPage.vue";
    import ViewDetailsWindow from "../viewDetailsWindow.vue"; //案件详情

    @Component({
        name: "formAudit",
      
        components: {CaseSupplement, FirstAuditPage, StateLine,ViewDetailsWindow},
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
        centerDialogVisible:boolean=true;
        source='SL';
    	showTabs ={
    		caseRegister:true, //案件基本情况
    		caseAcceptPage:true  //案件受理
    		
    	};
        showCases = [];
        //case
        allCases: any = [
            {
                caseName: "刘xx违法违纪案件",
                caseState: "2",
                personName: "刘某某",
                acceptTime: "2019-02-25 15:31",
                status:'1',
                term: "20天",
                termState: "1",
                caseSource:'1'
            },
            {
                caseName: "程xx贪污受贿案件",
                caseState: "1",
                personName: "程某某",
                acceptTime: "2019-02-25 15:31",
                status:'1',
                term: "3天",
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
                term: "14天",
                termState: "4",
                caseSource:'1'
            }
        ];
        waitingSigntCases: any = [];
        unWaitingSigntCases: any = [];
        activeIndex: string = "3";
        caseSupplementFlag: boolean = false
        viewDetailsWindow: boolean = false
        firstAuditPage: boolean = false
        caseAcceptanceFlag: boolean = false
        rollbackRecordFlag: boolean = false
        showStateLineFlag: boolean = false
        fistTrailModal: boolean = false

        handleSelect(key) {

            if (key == 1) {
                this.showCases = this.allCases;
            } else if (key == 3) {
                this.showCases = this.waitingSigntCases;
            } else if (key == 4) {
                this.showCases = this.unWaitingSigntCases;
            }
        }

        caseSupplement(val) {
            this.caseSupplementFlag = true
        }

        viewDetails(val) {
            this.viewDetailsWindow = true
            let that=this;
            setTimeout(function(){
                that.$refs.caseReg.echoDetails(val);
            },1);
        }

        formAudit(val) {
            this.firstAuditPage = true
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
                that.$refs.stateLine.focusStep(val,'1')

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
			
			this.firstAuditPage = false;
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
    .el-menu-demo {
        margin: 5px 20px 0px 20px;
        /deep/.el-menu-item {
            font-size: 14px;
            color: #121312;
        }
        .meau-item {
            font-size: 14px;
        }
        /deep/.el-badge__content {
            top:15px;
            background-color: red;
        }
    }
    .displayNone{
        /deep/.el-badge__content {
            display: none;
        }
    }

    .my-badge-list {
        position: relative;
        top: 62px;
        right: 39.5%;

        .my-badge {
            padding: 2px 5px;
            line-height: 20px;
            text-align: center;
            background-color: red;
            color: white;
            font-size: 4px;
            font-weight: 700;
            border-radius: 50%;
            position: relative;
            bottom: 45px;
            left: -20px;

        }
        /deep/ .be3 {

        }
        /deep/ .be2 {

        }
    }


    // .el-tabs {
    //     margin-left: 3%;
    // }


    .title {
        text-align: left;
        font-size: 16px;
        padding-left: 40px;
        color: #000;
        font-weight: 500;
        margin-top: 8px;
        margin-bottom: 10px;
        margin-left: -21px;
    }


    .displayNone {
        /deep/ .el-badge__content {
            display: none;
        }
        #picture {
            margin-top: 50px;
            margin-left: 50px;
            width: 50px;
            height: 50px;
        }
        /deep/ .badge {
            padding: 2px 5px; /* 不需要定义height与width，添加合适的padding使圆圈随字符长短变化而改变 */
            line-height: 20px;
            text-align: center;
            background-color: red;
            color: white;
            font-size: 12px;
            font-weight: 700;
            border-radius: 50%;
            position: relative;
            bottom: 45px;
            left: -20px;
        }
    }
    .el-collapse-item{
        /deep/.el-collapse-item__header{
            padding-left: 2%;
            font-size: 14px;
            border: 1px solid #dee1e7;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            color: #2f76dd;
        }
    }

</style>