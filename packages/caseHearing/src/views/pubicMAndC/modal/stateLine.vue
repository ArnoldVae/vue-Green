<template>
    <!-- 步骤条 -->
    <div class="dialog">

        <div class="box my-box">
            <!-- <div class="steps-btn">
                <el-button type="primary" size="small">中止审理</el-button>
                <el-button  size="small">案件退回</el-button>

            </div> -->


            <div class="box_content">
                <el-steps  :class="{'stateClass':stateValue=='2'}" v-bind:active="stepIndex" space="12px" simple>
                    <el-step :title="step.name" v-for="(step ,index) in steps" :key="index" icon="el-icon-edit"></el-step>
                </el-steps>

            </div>

        </div>


    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {},
        props: ['paraObj'],
        data() {
            return {
                stepIndex:1,
                stateValue:'',
                steps: [
                    {id: 'step01', active: true, name: '手动登记/其他部门转入'},
                    {id: 'step02', active: false, name: '案件受理'},
                    {id: 'step03', active: false, name: '初步审核'},
                    {id: 'step04', active: false, name: '审理意见'},
                    {id: 'step05', active: false, name: '呈报审批'},
                    {id: 'step06', active: false, name: '会议审议'},
                    {id: 'step07', active: false, name: '案件执行'},
                    {id: 'step08', active: false, name: '案件归档'},

                ],
                aheadCaseSteps:[
                    {id: 'step01', active: true, name: '手动登记/其他部门转入'},
                    {id: 'step02', active: false, name: '案件受理'},
                    {id: 'step03', active: false, name: '审理意见'},
                    {id: 'step04', active: false, name: '报批领导'},
                    {id: 'step05', active: false, name: '反馈意见'},
                    {id: 'step06', active: false, name: '案件归档'}
                ]
            };
        },

        created() {
            console.log(this.paraObj)
        },
        mounted() {
        },
        methods: {}
    })
    export default class StateLine extends Vue {
        stepIndex : number;
    

        focusStep(item: string, state :string) {
           
            let a;
            if(state=="2"){
                this.stateValue='2';
                this.steps[3].name="审核意见";
                this.steps[5].name="会议审议/领导签批";
                this.steps[6].name="反馈意见";
            }else if(state=="3"){
                this.steps=this.aheadCaseSteps;
            }
            this.steps.forEach((el, index) => {
                if (el.name == item) {
                    a = index;
                }
            });
            this.stepIndex=a;

        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    /*@import "~@/styles/dialogBox.scss";*/

    .el-aside {

    }
	.el-dialog__body{
	}
    .el-main {

    }

    .dialog {
        height: 100%;
    }

    .box {
        background: #fff;
        height: 100%;
        margin-top: -36px;
        margin-right: 18px;
    }

    .steps-btn {
        height: 50px;
        position: relative;
        top: 24%;
        margin-bottom: 10px;

    }

    .steps-btn button {
        float: right;
        margin-right: 4%;
    }

    .box_content {
        margin-top:25px;
        background: white;
        padding: 0 20px;
        height: 72px;

    }

    .box_content button {
        float: right;
    }

    /* 步骤 */
    .steps {
        position: relative;
        margin-bottom: 30px;
        counter-reset: step; /*创建步骤数字计数器*/
    }


    .dialog {
        background: #ffffff;
    }

    .dialog.el-dialog__header {
        padding: 0;
    }
	.el-steps--simple{
		padding: 13px 3%;
		/deep/ .el-step:first-child{
			width: 230px;
		}
	}
    .upList-modal > > > .el-dialog {
        position: relative;
        left: 25%;
        height: 500px;
    }

    /deep/ .el-step.is-simple:not(:last-of-type) .el-step__title {
        font-size: 14px;
    }
	/deep/ .el-step.is-simple:not(:last-of-type):first-child .el-step__title {
        width: 180px;
    }
	.stateClass {
        /deep/ .el-step.is-simple:not(:last-of-type):nth-child(6) .el-step__title {
            width: 126px;
        }
    }
    /deep/ .el-step.is-simple .el-step__title {
        font-size: 14px;
    }


</style>