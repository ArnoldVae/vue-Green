<template>
    <!-- 步骤条 -->
        <el-card class="box-card">
        	<div slot="header" class="clearfix">
        		<div class="circle-red"></div>
        		<span>张**贪污案</span>	
        		<span class="right-align">已超期5天</span>
        	</div>
        	<div class="text item">
        		<div class="line"></div>
	            <div class="box_content" >
	                <div class="module-item" v-for="(item,index) in allCaseLine" :key="index" :class="{'posivet':index > 5,'btnColor':item.limitTime == '1'}">
						<el-tooltip v-show="item.huiyi" class="item" effect="dark"  placement="top-start">
							<div slot="content" style="text-align: left">
								<span>会议类型：{{item.huiyi}}</span>
								<br>时间：2019-04-14
								<br>用时：9天
							</div>
	                	<button @click="moduleClick"><i class="iconfont" :class="item.icon"></i> {{item.name}}</button>
						</el-tooltip>
						<button v-show="!item.huiyi" @click="moduleClick"><i class="iconfont" :class="item.icon"></i> {{item.name}}</button>
	                	<div class="item-content"> 
	                		<div v-if="item.huiyi !=null "><div class="label-s" >会议类型：</div><span>{{item.huiyi}}</span></div>
	                		<div v-show="item.acceptName != ''"><div class="label-s" >受理人：</div><span>{{item.acceptName}}</span></div>
	                		<div><div class="label-s">时间：</div><span>2019-04-14</span></div>
	                		<div><div class="label-s">用时：</div><span>9天</span></div>
	                		<div v-show="item.acceptName == ''"><div class="label-s" >&nbsp;</div><span></span></div>
	                	</div>
	                </div>
	            </div>
			</div>	      
        </el-card>
    
</template>

<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {},
		props: {
        //    传过来的数据
            paraObj: {
                type: Object,
                default: () => {
                    return {}
                },
             },
            goDetail: {
                type: Function,
                default: () => {}
             },
         },
        data() {
            return {
                stepIndex:1,
                stateValue:'',
                allCaseLine: [
                    {id: 'step01', active: true,icon:'icon-jwjwyemianguifanV_qianshou', name: '签收',acceptName:"刘某某",aceptTime:"2019-04-10",timeOf:'10',limitTime:"0"},
                    {id: 'step02', active: false,icon:"icon-jwjwyemianguifanV_shouli", name: '受理',acceptName:"刘某某",aceptTime:"2019-04-10",timeOf:'10',limitTime:"0"},
                    {id: 'step03', active: false,icon:"icon-jwjwyemianguifanV_chubushenhe", name: '初步审核',acceptName:"刘某某",aceptTime:"2019-04-10",timeOf:'10',limitTime:"0"},
                    {id: 'step04', active: false,icon:"icon-jwjwyemianguifanV_shenliyijian", name: '审理意见',acceptName:"",aceptTime:"2019-04-10",timeOf:'10',limitTime:"0"},
                    {id: 'step05', active: false,icon:"icon-jwjwyemianguifanV_shenlitanhua", name: '审理谈话',acceptName:"",aceptTime:"2019-04-10",timeOf:'10',limitTime:"0"},
                    {id: 'step06', active: false,icon:"icon-jwjwyemianguifanV_chengbaoshenpi", name: '呈报审批',acceptName:"",aceptTime:"2019-04-10",timeOf:'10',limitTime:"0"},
                    {id: 'step07', active: false,icon:"icon-jwjwyemianguifanV_chengbaoshenpi", name: '集体审议',acceptName:"",aceptTime:"2019-04-10",timeOf:'10',limitTime:"0"},
                    {id: 'step08', active: false,icon:"icon-jwjwyemianguifanV_zhengqiuyijian", name: '征求意见',acceptName:"",aceptTime:"2019-04-10",timeOf:'10',limitTime:"0"},
                    {id: 'step08', active: false,icon:"icon-jwjwyemianguifanV_chengbaoshenpi", name: '会议审议（中央全体会议）',acceptName:"",aceptTime:"2019-04-10",timeOf:'10',limitTime:"1",huiyi:'中央全体会议'},
                    {id: 'step08', active: false,icon:"icon-jwjwyemianguifanV_zhengqiuyijian", name: '案件执行反馈',acceptName:"",aceptTime:"2019-04-10",timeOf:'10',limitTime:"1"},
                    {id: 'step08', active: false,icon:"icon-jwjwyemianguifanV_chengbaoshenpi", name: '案件归档',acceptName:"",aceptTime:"2019-04-10",timeOf:'10',limitTime:"1"}

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
    

		moduleClick(){
			this.goDetail()
		}
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
@import "~@/assets/icon/iconfont.css";
    .box_content{
    	min-height: 171px;
	    border-left: 0px;
	    width: 99%;
	    margin: 1% auto 1%;
	   float: right;
	   display: inline-block;
    }
    .line{
    	min-height: 173px;
	    border: 1px solid #292725;
	    border-left: 0px;
	    border-radius: 0px 50px 27px 0px;
	    display: inline-block;
	    position: absolute;
	    z-index: 1;
	    right: 46px;
	    width: 10%;
	    margin-top: 10px;
    }
    .iconfont{
		font-size: 19px;
		cursor: pointer;
    }
	.module-item{
		cursor: pointer;
		position: relative;
	    display: inline-block;
	    float: left;
	    top: -20px;
	    margin-right: 22px;
	}
	.posivet{
		float: right;
	    margin-right: 46px;
	    top: 20px;
	    right: 3px;
	}
	.item-content{
		clear:both;
		position: relative;
    	right: 23px;
		.label-s{
			width: 80px;
		    display: inline-block;
		    text-align: right;
		}
		/deep/ div{
			padding: 3px 0px;
		}
	}
	.module-item /deep/ button{
		padding: 8px 30px;
    	background: #fff;
    	border: 1px solid;
    	z-index: 9;
		position: relative;
		cursor: pointer
	}
	.module-item:nth-child(6):before{
		content: '';
		width: 0px;
	}
	.module-item:last-child:before{
		content: '';
		width: 0px;
	}
	.module-item:before{
		content: '';
		width: 57%;
	    height: 1px;
	    background: #333333;
	    position: absolute;
	    right: -39px;
	    top: 19px;
	}
	.posivet:before{
		left: -76px;
	}
	.btnColor > button{
		color: red;
		border-color: red;
	}
	.btnColor:before{
		background: red;
	}
	/*.btnColor:before{
		content: '';
	    position: absolute;
	    width: 130%;
	    background: red;
	    height: 1px;
	    float: right;
	    right: 0px;
	    z-index: 0;
	}*/
	.box-card /deep/ .el-card__header{
		padding: 14px 20px;
	}
	.circle-red{
		width: 15px;
	    height: 15px;
	    display: inline-block;
	    background: red;
	    margin: 1px 10px;
	    border-radius: 25px;
	    position: relative;
	    top: 2px;
	}
	.right-align{
		float: right;
		position: relative;
		color: red;
	}
</style>