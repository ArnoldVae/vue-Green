<template>
<!-- 形式审核 -->
  <div class="dialog">
    <!--<div class="openLaw_case">
      <img title="案件法规" src="img/Regulations.png">
    </div>-->
    <el-main style="width:80%;margin: 0 auto;">
	    <el-form label-position='top' :model="form" :rules="rules">
	    		<el-row :gutter="20">
	    			<el-col :span="15" ref="checkboxDiv"><!--this.$refs.checkboxDiv.offsetHeight-->
	    				<el-form ref="form" :model="form" label-width="80px">
		           <el-collapse v-model="activeNames">
					        <el-collapse-item  id="menu1"  name="1" >
					        	<template slot="title">
                        <i class="header-icon el-icon-info"></i>形式审核情况
                    </template>
					        	<div v-for="item in checkedBoxs" class="box-card-add"><!--数据双重循环绑定 -->
					            	<el-card class="box-card">
												  <div slot="header" class="clearfix">
												    <span>{{item.titleName}}</span>
												  </div>
												  <div v-for="data in item.children">
												  	<el-checkbox v-model="checked" >{{data.name}}</el-checkbox>
												  </div>
												</el-card>
										</div>
									</el-collapse-item>
							 </el-collapse>
							</el-form>
						</el-col>
						<el-col :span="8" :style="conheight">
							<el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
								<el-collapse v-model="activeNames">
								<el-collapse-item  id="menu2"  name="2" >
									<template slot="title">
                        <i class="header-icon el-icon-info"></i>形式审核意见
                    </template>
									<el-row :gutter="20">
											<el-col :span="21">
												<el-form-item label="审议结果:" >
													<el-radio-group v-model="form.resource" @change="onRadioChange">
	                            <el-radio label="1">受理签收</el-radio>
	                            <el-radio label="2">暂缓受理</el-radio>
	                        </el-radio-group>
                        </el-form-item>
											<!--</el-col>
											<el-col :span="21" v-if="form.resource == 1">-->
												<div v-if="form.resource == 1">
												<el-form-item label="主审核人员:" >
													<el-select v-model="form.mainPerson" placeholder="请选择审核人" class="form_select">
											      <el-option label="李某某" value="1">李某某</el-option>
											      <el-option label="刘某某" value="2">刘某某</el-option>
											    </el-select>
                        </el-form-item>
                        <el-form-item label="辅助审核人员:" >
													<el-select v-model="form.assistAuditor" placeholder="请选择审核人" class="form_select">
											      <el-option label="李某某" value="1">李某某</el-option>
											      <el-option label="刘某某" value="2">刘某某</el-option>
											    </el-select>
                        </el-form-item>
                         <el-form-item label="案件办理期限（天）:" >
                            <el-input v-model="form.limitDays"></el-input>
                        </el-form-item>
                        <el-form-item label="红色预警期限（天）:" >
                            <el-input v-model="form.redDays"></el-input>
                        </el-form-item>
                        <el-form-item label="黄色预警期限（天）:" >
                            <el-input v-model="form.yellowDays"></el-input>
                        </el-form-item>
                        <el-form-item label="绿色预警期限（天）:" >
                            <el-input v-model="form.greenDays"></el-input>
                        </el-form-item>
                        <el-form-item label="受理意见:" style="">
                        	<el-input type="textarea" v-model="form.desc" style='min-height: 118px;'></el-input>
                        </el-form-item>
                        </div>
											</el-col>
									</el-row>
								</el-collapse-item>
								</el-collapse>
								
								<!--<el-collapse v-model="activeNames" v-if="form.resource == 1"> 
									<el-collapse-item  id="menu3" title="案件受理" name="3" >
										<el-row :gutter="20" style="padding: 10px;">
											
										</el-row>
									</el-collapse-item>
								</el-collapse>-->
								
							</el-form>
						</el-col>
	       	</el-row>
	    </el-form>
		</el-main>
    <div  class="margin_top_4 margin_left_0" style="text-align: center;margin-top: 0%;">
        <el-button type="primary" >提交</el-button>
        <el-button type="primary" plain>保存</el-button>
        <el-button type="warning" plain>关闭</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  data() {
    return {
    	labelPosition: 'top',
    	activeNames:['1','2','3'],
    	radio: '1',
      checkedBoxs:[
        {id:'step01',titleName:'调查材料',
        children:[
        {id:'001',name:'立案依据',value:'01'},
        {id:'002',name:'处理建议',value:'02'},
        {id:'003',name:'调查方案领导批示',value:'03'},
        {id:'004',name:'违纪人员责任',value:'04'},
        {id:'005',name:'被调查人态度及责任',value:'05'},
        {id:'006',name:'违纪性质',value:'06'},
        {id:'007',name:'调查组人员组成',value:'07'},
        {id:'008',name:'调查组落款',value:'08'},
        {id:'009',name:'其他涉案人员处理',value:'09'},
        {id:'010',name:'被调查人简历',value:'10'},
        {id:'011',name:'调查组成员签名',value:'11'},
        {id:'012',name:'违纪事实',value:'12'},
        {id:'013',name:'处理依据',value:'13'},
        {id:'014',name:'调查方案',value:'14'}
        ]},
        {id:'step02',titleName:'案件受理材料',
        children:[
        {id:'001',name:'调查报告分管领导批示',value:'01'},
        {id:'002',name:'违反党组织案件的党组织意见',value:'02'},
        {id:'003',name:'立案依据',value:'03'},
        {id:'004',name:'被调查人对错误事实见面材料的意见和检讨材料',value:'04'},
        {id:'005',name:'与被调查人见面的错误事实材料',value:'05'},
        {id:'006',name:'全部证据材料',value:'06'},
        {id:'007',name:'调查报告',value:'07'},
        {id:'008',name:'调查组或检查部门对被调查人意见说明',value:'08'}
        ]},
        {id:'step03',titleName:'初核材料',
        children:[
        {id:'001',name:'初核呈批表分管领导批示',value:'01'},
        {id:'002',name:'初核方案',value:'02'},
        {id:'003',name:'初核报告分管领导批示',value:'03'},
        {id:'004',name:'初核呈批表',value:'04'},
        {id:'005',name:'线索材料',value:'05'},
        {id:'006',name:'初核报告',value:'06'},
        {id:'007',name:'初核方案分管领导批示',value:'07'},
        {id:'008',name:'分管材料分管领导批示',value:'08'}
        ]},
        {id:'step04',titleName:'移送审理手续',
        children:[
        {id:'001',name:'移送手续领导批示',value:'01'},
        {id:'002',name:'移送审理登记表',value:'02'},
        {id:'003',name:'承办部门意见',value:'03'},
        {id:'004',name:'违纪人员责任',value:'04'}
        ]},
        {id:'step05',titleName:'立案材料',
        children:[
        {id:'001',name:'立案呈批表',value:'01'},
        {id:'002',name:'纪委常委会监察厅（局）办公会意见（立案机关意见）',value:'02'},
        {id:'003',name:'立案决定书',value:'03'},
        {id:'004',name:'立案呈批报告',value:'04'},
        {id:'005',name:'分管领导批示',value:'05'}
        ]},
      ],
      form:{
      	resource:'1',// 审核结果
      	desc:'',// 审核内容
      	mainPerson:'' ,//主审核人
      	assistAuditor:'',//辅助审核人
      	limitDays:'' , //案件办理期限
      	redDays:'', // 日期预警
      	yellowDays:'',
      	greenDays:''
      	
      }
    };
  },
	
  created() {
  	this.heigth();
  },
  mounted() {
  	
  },
  methods: {
  	onRadioChange(val){
        //console.log(val) // 当radio已被选中时，这个事件不会被触发
        resource = this.val
   },
   heigth(){
   		console.log(this.$refs.checkboxDiv.clientHeight);
   		 //this.conheight.height = window.getComputedStyle(this.$refs.checkboxDiv).height +'px';  height: 1176px;
   }
   
  }
})
export default class caseSupplement extends Vue {
  isCollapse: boolean = false;
  focusStep(item){
    this.checkedBoxs.forEach((el,index) => {
        el.active = false
    });
    item.active = true
  }
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/card.scss";
@import "~@/styles/common.scss";
	@media screen and (max-width: 1366px) { 
		.el-col.el-col-8{
			height: 1176px;
			/deep/ .el-form{
				height: 98%;
				background: #FFFFFF;
				/deep/ .el-collapse{
					height: 100%;
					/deep/ .el-collapse-item.is-active{
						height: 98%;
						}
				}
			}
		}
	}
	@media screen and (min-width: 1900px) { 
		.el-col.el-col-8{
			height: 1100px;
			/deep/ .el-form{
				height: 98%;
				background: #FFFFFF;
				/deep/ .el-collapse{
					height: 100%;
					/deep/ .el-collapse-item.is-active{
						height: 98%;
						/deep/ .el-collapse-item__wrap{
								border-bottom: 1px solid #FFFFFF;
								height: 98%;
							}
						}
				}
			}
		}
	}
	/*.el-select input{
		width: 283px!important;
	}*/
	.el-form-item{
		/deep/ .el-form-item__label{
			font-size: 15px;    font-weight: bold;	/*line-height: 20px;*/
		}
	}
	
	.text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .box-card-add{
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 90%;
    margin-left: 5%;
    margin: 20px auto;
  }
	.box-card{
		/deep/ .el-card__header{
			padding: 10px 20px;
			color: #333333;
	    background: #EFF4FA;
	    font-size: 16px;
	    font-family: 黑体;
	    font-weight: bold; 
	    position: relative;
		}
	}
	.clearfix::before{
		content: "";
    position: absolute;
    width: 4px;
    height: 19px;
    background: #1c51ab;
    border-radius: 3px;
    top: 5px;
    left: -7px;
	 }
	.box-card /deep/.el-card__header {
    color: #333333;
    background: #EFF4FA;
    padding: 8px 20px;
    text-align: left;
   }
	.box-card /deep/.el-card__body{
		min-height: 120px;
    margin-bottom: 15px;
	}
	.el-card__body > div{
		min-width: auto;
    position: relative;
    float: left;
    padding: 5px 20px;
	}
	}
	.el-form-item {
    margin-bottom: 10px;
    margin-left: 30px;
    font-size: 16px;
	}
	.el-textarea{
    /deep/ textarea{
        min-height: 118px!important;
    }
  }
  /*.el-collapse-item{
     /deep/ .el-collapse-item__header{
			        background: #1c51ab;
			        color: white;
			        border-top-left-radius: 6px;
			        border-top-right-radius: 6px;
			        padding-left: 2%;
			
			   }
    }*/
   .el-form-item{
    text-align: left;
   /deep/ .el-form-item__label{
		width: 100%;   	
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
    .el-select{
    	width: 100%;
    }
</style>