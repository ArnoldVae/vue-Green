<template>
<!--初步审核弹框-审理案件-->
  <div class="backplane">
    <div class="backplane-Content">
	    <el-form class="form-label-top" label-position='top' :model="form">
	    		<el-row :gutter="24">
	    			<el-col :span="24" ref="checkboxDiv">
	    				<el-form ref="form" :model="form" >
		           <el-collapse v-model="activeNames" class="collapse">
					        <el-collapse-item  id="menu1"  name="1" >
					        	<template slot="title">
                        <i class="header-icon el-icon-info"></i>初步审核情况
                    </template>
                    <div class="form-content">
	                    <div class="box-card-add">
	                    	<el-card class="box-card">
													  <div slot="header" class="clearfix">
													    <span>移送审理手续</span>
													  </div>
													  <div>
													  	<el-row :gutter="20" style="margin-left: -35px;">
																<el-col :span="6">
																	<el-form-item label="移送部门 ：" >
	                            			<el-input ></el-input>
					                        </el-form-item>
					                       </el-col>
					                       <el-col :span="6">
																	<el-form-item label="移送人 ：" >
	                            			<el-input ></el-input>
					                        </el-form-item>
					                       </el-col>
					                       <el-col :span="6">
																	<el-form-item label="接收人 ：" >
	                            			<el-input ></el-input>
					                        </el-form-item>
					                       </el-col>
					                       <el-col :span="6">
																	<el-form-item label="接收时间 ：" >
	                            			<el-date-picker type="date" placeholder="选择日期" v-model="form.date11"
	                                                    style="width: 100%;"></el-date-picker>
					                        </el-form-item>
					                       </el-col>
					                    </el-row>
													  </div>
													</el-card>
	                    </div>
						        	<div v-for="(item,index) in checkedBoxs" :key="index" class="box-card-add"><!--数据双重循环绑定 -->
						            	<el-card class="box-card">
													  <div slot="header" class="clearfix">
													    <span>{{item.titleName}}</span>
													  </div>
													  <div v-for="(data,index) in item.children" :key="index">
													  	<el-checkbox v-model="data.value" >{{data.name}}</el-checkbox>
													  </div>
													</el-card>
											</div>
										</div>
									</el-collapse-item>
							 </el-collapse>
							</el-form>
						</el-col>
	       	</el-row>
	    </el-form>
		</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	props:['pageFlag'],
  components: {},
  data() {
    return {
    	labelPosition: 'top',
    	activeNames:['1','2','3'],
			radio: '1',
			checked:'',
      checkedBoxs:[
        {id:'step01',titleName:'报批案件材料',
        children:[
					{id:'001',name:'呈报单位请示',value:'01'},
					{id:'002',name:'呈报单位调查报告',value:'02'},
					{id:'003',name:'审理报告',value:'03'},
					{id:'004',name:'违纪事实材料',value:'04'},
					{id:'005',name:'处分决定稿',value:'05'},
					{id:'006',name:'相关证据材料',value:'06'}
        
        ]},
        {id:'step02',titleName:'直查案件材料',
        children:[
					{id:'001',name:'初核材料',value:'01'},
					{id:'002',name:'审查调查报告',value:'02'},
					{id:'003',name:'违纪事实材料',value:'03'},
					{id:'004',name:'相关证据材料',value:'04'}
        ]}/*,
        {id:'step03',titleName:'移送审理手续',
        children:[
        {id:'001',name:'移送部门',value:'01'},
        {id:'002',name:'初核方案',value:'02'},
        {id:'003',name:'初核报告分管领导批示',value:'03'},
        {id:'004',name:'初核呈批表',value:'04'},
        {id:'005',name:'线索材料',value:'05'},
        {id:'006',name:'初核报告',value:'06'},
        {id:'007',name:'初核方案分管领导批示',value:'07'},
        {id:'008',name:'分管材料分管领导批示',value:'08'}
        ]}*/
      ],
      form:{
      	resource:'1',// 审核结果
      	desc:'',// 审核内容
      	mainPerson:'' ,//主审核人
      	assistAuditor:'',//辅助审核人
      	limitDays:'' , //案件办理期限
      	redDays:'', // 日期预警
      	yellowDays:'',
      	greenDays:'',
      	date11:'',
      	checked:''
			},
			rules: {
								name: [
										{required: true, message: '请输入', trigger: 'blur'}
								],
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
   	//	console.log(this.$refs.checkboxDiv.clientHeight);
   		 //this.conheight.height = window.getComputedStyle(this.$refs.checkboxDiv).height +'px';  height: 1176px;
   },
   stateTrans(){
   	this.$confirm('提交后将进入审理环节，确定提交？','提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	        	//父页面调用方法
	          this.$emit('submitEvent','1212')
	        }).catch(() => {
	                  
		    });
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
    /*控制表单项的公有样式*/
    @import "~@/styles/commonJWJW.scss";
	@media screen and (max-width: 1366px) { 
		.el-col.el-col-8{
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
    width: 100%;
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
    /deep/ .el-checkbox__label{
			font-size: 17px;
		}
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