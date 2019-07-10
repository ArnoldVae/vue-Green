
<template >
   <div class="el-main evocatory" style="height: 100%;overflow-y: hidden;">
       <!--案件审理-->
       <div style="height: 100%;">
       		<div class="search-container-input"> 
       			<label class="search-lable">检索查询</label>
       			<!--<el-input placeholder="请输入查询内容" v-model="input5" class="input-with-select">-->
       				<div class="searchTime">
       				<el-date-picker
				      v-model="form.value6"
				      type="daterange"
				      range-separator="至"
				      start-placeholder="开始日期"
				      end-placeholder="结束日期">
				    </el-date-picker>
				    <!--<el-select v-model="select" slot="prepend" placeholder="请选择">
				      <el-option label="餐厅名" value="1"></el-option>
				      <el-option label="订单号" value="2"></el-option>
				      <el-option label="用户电话" value="3"></el-option>
				    </el-select>-->
				    <el-button slot="append" icon="el-icon-search"></el-button>
				    </div>
				 </el-input>	
       		</div>
            <!--<div class="header-title">案件登记
                <div class="header-hr"></div>
            </div>-->
            <div class="case-content">
           <el-row >
               <el-col :span="6">
                     <el-card class="box-card" >
                        <el-row slot="header" class="clearfix card-header" style="background: #1A9CFC;">
                               <span class="iconfont">&#xe634;</span> <span>  审理案件  </span>
                        </el-row>
                        <el-row class="case_content" style="">
                            <el-col :span="12" class="case-num" @click.native="goCaseDistributed('0','01')">
                                <div> <span class="num">0</span> 件</div>
                                <div class="name" >已接收</div>
                            </el-col>
                            <el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed('1','01')">
                                <div> <span class="num" >10</span> 件</div>
                                <div class="name">已登记 </div>
                            </el-col>
                        </el-row>
                        <el-row >
                             <div class="card-footer-div" @click="dialogFormVisible2 = true,registerForm('SL','审理案件登记')">
                                <span> <i class="el-icon-plus"></i> 案件登记</span>
                            </div>
                        </el-row>
                    </el-card>
               </el-col>
               <el-col :span="6">
                     <el-card class="box-card" >
                        <el-row slot="header" class="clearfix card-header" style="background: #FA708A;">
                            <span>  <i class="el-icon-document"></i> 审核案件  </span>
                        </el-row>
                        <el-row class="case_content" style="">
                            <el-col :span="12" class="case-num" @click.native="goCaseDistributed('0','02')">
                                <div> <span class="num">0</span> 件</div>
                                <div class="name" > 已接收 </div>
                            </el-col>
                            <el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed('1','02')">
                                <div> <span class="num" >10</span> 件</div>
                                <div class="name"> 已登记 </div>
                            </el-col>
                        </el-row>
                        <el-row >
                             <div class="card-footer-div" @click="dialogFormVisible2 = true,registerForm('SH','审核案件登记')">
                                <span> <i class="el-icon-plus"></i> 案件登记</span>
                            </div>
                        </el-row>
                    </el-card>
               </el-col>
               <el-col :span="6">
                     <el-card class="box-card">
                        <el-row slot="header" class="clearfix card-header" style="background: #FEC051;">
                            <span>  <i class="el-icon-document"></i> 提前介入审理案件  </span>
                        </el-row>
                        <el-row class="case_content" style="">
                            <el-col :span="12" class="case-num" @click.native="goCaseDistributed('0','03')">
                                <div> <span class="num">0</span> 件</div>
                                <div class="name" > 已接收 </div>
                            </el-col>
                            <el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed('1','03')">
                                <div> <span class="num" >10</span> 件</div>
                                <div class="name"> 已登记 </div>
                            </el-col>
                        </el-row>
                        <el-row >
                             <div class="card-footer-div" @click="dialogFormVisible2 = true,registerForm('TQJR','提前介入审理案件登记')">
                                <span> <i class="el-icon-plus"></i> 案件登记</span>
                            </div>
                        </el-row>
                    </el-card>
               </el-col>
               <el-col :span="6">
                     <el-card class="box-card">
                        <el-row slot="header" class="clearfix card-header" style="background: #21D08B;">
                            <span>  <i class="el-icon-document"></i> 申诉案件  </span>
                        </el-row>
                        <el-row class="case_content" style="">
                            <el-col :span="12" class="case-num" @click.native="goCaseDistributed('0','04')">
                                <div> <span class="num">0</span> 件</div>
                                <div class="name" > 已接收 </div>
                            </el-col>
                            <el-col :span="12" class="case-num case-num2" @click.native="goCaseDistributed('1','04')">
                                <div> <span class="num" >10</span> 件</div>
                                <div class="name"> 已登记 </div>
                            </el-col>
                        </el-row>
                        <el-row >
                             <div class="card-footer-div" @click="appalRegisterFlag = true,appalRegister('SSFC')">
                                <span> <i class="el-icon-plus"></i> 案件登记</span>
                            </div>
                        </el-row>
                    </el-card>
               </el-col>
           </el-row>
           
           </div>
       </div>
       <el-dialog :title="title" class="mc-dialog-big" :visible.sync="dialogFormVisible2" width="100%" top="0" id="caseMsg" >
                <case-register v-bind:myData="paramsData" @closePage="closePage"></case-register>
       </el-dialog>
       <el-dialog title="申诉案件登记" class="mc-dialog-big" :visible.sync="appalRegisterFlag" width="100%" top="0" id="caseMsg" >
                <appalRegister v-bind:myData="paramsData"  @closePage="closePage"></appalRegister>
        </el-dialog>

        <el-dialog title="申诉信件登记" :visible.sync="complaintDialogFlag" width="100%" top="0" id="caseMsg" >
             <!-- <case-register></case-register> -->
             <complaint-Letter></complaint-Letter>
        </el-dialog>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Store from './store'
import route from '../../router/index'
import caseRegister from "../modal/caseRegister1.vue";
import appalRegister from "../modal/appalRegister.vue";
import complaintLetter from "../modal/complaintLetter.vue";
@Component({
  components: {
    caseRegister,
    complaintLetter,
    appalRegister
  },
  data() {
    return {
        title:'',
    	paramsData:{},
        dialogFormVisible:false,
        dialogFormVisible2:false,
        dialogFormVisible3:false,
        complaintDialogFlag:false,
        appalRegisterFlag:false,
        caseList:[
            {
                caseTitle:"查看案件",
                caseInc:"el-icon-document",
                sendedCount:1,
                noSendCount:7,
            },
            {
                caseTitle:"报批案件",
                caseInc:"el-icon-tickets",
                sendedCount:2,
                noSendCount:8,
            },
            {
                caseTitle:"备案案件",
                caseInc:"el-icon-goods",
                sendedCount:3,
                noSendCount:9
            },
            {
                caseTitle:"备案案件",
                caseInc:"el-icon-goods",
                sendedCount:3,
                noSendCount:9
            }
        ],
        appealLsit:[
            {
                caseTitle:"申诉信件",
                caseInc:"el-icon-message",
                sendedCount:4,
                noSendCount:5,
            },
            {
                caseTitle:"申诉案件",
                caseInc:"el-icon-star-on",
                sendedCount:7,
                noSendCount:3,
            },
            {
                caseTitle:"申诉事项",
                caseInc:"el-icon-goods",
                sendedCount:10,
                noSendCount:2
            }

        ],

        activeName:{

        },
        form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            type: [],
            resource: '',
            desc: '',
            value6:''
        },
        formLabelWidth: '20%'

    }
  },

  created(){

  },
  mounted(){
  },
  watch :{},
  methods: {
      tapTargetLingt:function (target) {
          this.subMenuItem.forEach(function (v) {
              if(v.id===target){
                  v.active=true

              }else {
                  v.active=false
              }

          })
      },
      handleRemove(file, fileList) {
          this.fileList=fileList;
      },
      handlePreview(file) {
          console.log(file);
      },
      handleExceed(files, fileList) {
          console.log(fileList)
          this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      upSuccess:function (response,file,fileList) {
          this.fileList=fileList;
      },
      beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
      },


      goEd:function () {
          this.$router.push({  //核心语句
              path:'./caseDistributed',   //跳转的路径
          })
      },
      goIng:function () {
          this.$router.push({  //核心语句
              path:'./caseDistributing',   //跳转的路径
          })

      },

      goAnchor(selector) {

      },
      onSubmit:function () {

      },
      next() {
          console.log('aaaaa')
      }


  },

})


export default class petitionLetter extends Vue {
    goCaseDistributing(){
        this.$router.push({name:"caseDistributing"});
    }
    goCaseDistributed(state,caseType){

        this.$router.push({name:"caseDistributed",params: { state:state,case:caseType}})
       

    }
    registerForm(item,title){
        this.paramsData = item;
        this.title=title;
    }
    appalRegister(item){
        this.paramsData = item;
    }
    closePage(page){
        if(page=="SSAJ"){
            this.appalRegisterFlag=false;
        }else{
            this.dialogFormVisible2=false;

        }
    }

}



</script>

<style rel="text/stylesheet" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/card.scss";

.evocatory{
    .text {
        font-size: 14px;
    }
	/deep/.el-date-editor .el-range-separator{
		width: 6%;
	}
    .item {
        margin-bottom: 18px;
    }
    .box-card{
    	width: 90%;
    	height: 98%;
    }
    .el-row {
    	height: 70%;
    	/deep/.el-col-6{
		width: 25%;
    	height: 100%;
		}
	}
    .card-footer-title{
        margin: 0 50px;
        color: #009ABB;
    }
    .card-hearder-title{
        float: left;
    }
    .backgrund-color-blue{
        color: #6085c4;

    }
    .form_select{
        /deep/ input{
            width: 320px;
         }
    }
    .case_card > .el-card__header {
        background: #c2dbf9;

    }
    .caseCardCon{
        height: 132px;
    }
    .caseCardCon >.el-main{
        overflow-y: hidden;
        height: 100%;
    }

    .el-input input{
        width: 94%;
    }
    .el-date-editor{
        margin-left: 3%;
    }

    .el-lable{
        text-align: left;
        margin-left: 1%;
    }
    .title-hr{
        height: 2px;
        background: #E9ECEA;
    }
    .card-footer-div{
        border-top: 1px solid #edeff4;
        width: 110%;
        position: relative;
        color: #5199ee;
        text-align: center;
        margin-left: -15px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        padding-top: 15px;
    }
    .upload-table-div{
        width: 90%;
        height: 50px;
        border: 1px solid #cccccc;
        margin-left: 6%;
        text-align: left;
        padding: 14px;

    }
    .header-title{
        font-size:12px;
        text-align: left;
        padding-left: 2%;
        color: #3F80DC;
        font-weight: bold;
        .header-hr{
            background: #E9ECEA;
            height: 2px;
            margin-top: 4px;
        }
    }
    .search-container-input > .el-input{
    	float: right;
	    margin-right: 40px;

    }

    .search-lable{
	   	float: left;
	    color: #999999;
	    margin-left: 25px;
    }
    .search-container-input{
	    width: 100%;
	    height: 12%;
	    border: 1px solid #d4d3d3;
	    border-radius: 5px;
	    box-shadow: 0px 0px 0px #c1c1c1, 0px 0px 0px #c1c1c1, 0px 1px 3px #c1c1c1, 0px 0px 0px #c1c1c1;
    }
    .case-content{
	    width: 100%;
	    height: 85%;
	    border: 1px solid #e7e7e7;
	    margin: 10px auto;
	    border-radius: 5px;
	    box-shadow: 0px 0px 0px #ffffff, 0px 0px 0px #ffffff, 0px 1px 4px #adabab, 0px 0px 0px #ffffff;
    }
}
@media screen and (min-width: 1900px) { 
	.case-content > .el-row{
		margin-top: 20px;
	}
	 .evocatory .el-row {
	    height: 62%;
	    
	}
	 .evocatory /deep/ .box-card /deep/.el-card__header{
	 	font-size: 30px;
	 	font-weight:100;
	 }
	 .evocatory /deep/ .box-card /deep/.el-card__body{
	 	height: 90%;
	 }
	 .evocatory /deep/ .case_content.el-row{
	 	height: 70%;
	 	padding: 30px 0px 0px 0px;
	 }
	 .case-num {
	    text-align: center;
	    margin: 20px 0px 20px 0px;
	    cursor: pointer;
	    height: 60%;
    	position: relative;
	}
	 .evocatory /deep/ .num{
	 	font-size: 5em;
	 }
	 
	 .evocatory .card-footer-div {
	    padding-top: 26px;
	    font-size: 19px;
	}
	 .search-lable{
	   	float: left;
	    font-size: 30px;
	    color: #999999;
	    margin-left: 25px;
	    margin-top: 25px;
    }
    .search-container-input > .el-input{
    	width: 320px;
    	float: right;
	    margin-right: 40px;
	    margin-top: 25px;
	    /deep/ input{
    		width: 100%;
    	}
	}
	.searchTime{
		float: right;
	    position: relative;
	    top: 27%;
	    right: 2%;
	}
}
@media screen and (max-width: 1370px){
	.case-content > .el-row{
		margin-top: 20px;
	}
	.evocatory /deep/ .box-card /deep/.el-card__body{
	 	height: 88%;
	 }
	.search-container-input > .el-input {
	    width: 289px;
	    float: right;
	    margin-right: 40px;
	    margin-top: 10px;
	    /deep/ input{
    		width: 100%;
    	}
	}
	.case-num {
	    text-align: center;
	    margin: 15px 0px 20px 0px;
	    cursor: pointer;
	    height: 50%;
    	position: relative;
	}
	.case-num .num {
	    font-size: 4em;
	}
	.search-lable{
		font-size: 20px;
		margin-top: 16px;
		top: 16%;
	}
	.searchTime{
		float: right;
	    position: relative;
	    top: 16%;
	    right: 2%;
	}
	.box-card /deep/.el-card__header {
	    font-size: 21px;
	}
}
</style>
