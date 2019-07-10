<template >
    <div class="el-main evocatory" style="height: 100%;">
        <div style="height: 100%;">
       		<div class="search-container-input"> 
       				<div class="searchTime">
       					<label >案件名称：</label>
              			<el-input v-model="form.caseName" autocomplete="off" placeholder="请输入"></el-input>
       					<label >姓名：</label>
				    	<el-input v-model="form.caseName" autocomplete="off" placeholder="请输入"></el-input>
				    <el-button class="el-button-tel" slot="append" icon="el-icon-search" style=" margin-left: 5px;padding-left: 20px;"></el-button> 
				   
       				</div>	
       		</div>
            <div class="search-container-input2"> 
        <div class="cards">
        	<div class="menu-item" v-show="muenActive">
            <el-row :gutter="20">
                <el-card class="box-card" v-for="(item,index) in showCases" :key="index">
                    <div class="case_content">
                    	<div class="title_states" v-if="item.caseTitle == '1'"><img  src="img/blue.png" alt=""><div class="span">在库</div></div>
                    	<div class="title_states" v-if="item.caseTitle == '2'"><img  src="img/yellow.png" alt=""><div class="span">已出库</div></div>
                        <el-form ref="form" :model="form" >
                            <el-form-item label="案件名称" class="card-form-item">
                                {{item.personnel}}
                            </el-form-item>
                            <el-form-item label="案件单位" class="card-form-item">
                                {{item.term}}
                            </el-form-item>
                            <el-form-item label="归档时间" class="card-form-item">
                                {{item.registrationTime}}
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="card-bottom-btn">
                       <el-button type="primary" size="mini"  @click="details.dialogFormVisible = true">登记</el-button>
                       <el-button type="primary" size="mini"  @click="onclickRecords(item.personnel)">调阅记录</el-button>
                    </div>

                </el-card>
            </el-row>
            </div>
            <div class="menu-item" v-show="!muenActive">
            </div>
        </div>
        </div>
         <el-dialog class="mc-dialog-medium" title="登记信息"  meta="{keepAlive: false}"   :visible.sync="details.dialogFormVisible" 
         	 width="1200px" height="475px" top="10%" id="caseMsg"
			:close-on-click-modal="false"
			center >
                <fileForDetails v-bind:myData="details"></fileForDetails>
               <div slot="footer" class="dialog-footer">
                	<el-button  type="success" size="small" >保 存</el-button>
					<el-button  size="small" @click="details = false">返回</el-button>
			</div>
            </el-dialog>
            <el-dialog class="mc-dialog-medium" :title="dialogTitleType+'案件历次调阅信息'" :visible.sync="dialogTable" width="80% " 
            	:close-on-click-modal="false" center>
                <!--<div slot="footer" class="dialog-footer">
				<el-button size="small" @click="dialogTable=false">关闭</el-button>
			</div>-->
            	<borwes-Record ref="borwesRecord" ></borwes-Record>
            </el-dialog>
        </div>
    </div>
</template>


<script lang="ts">
     import Vue from "vue";
	 import Component from "vue-class-component";
     import {State, Action, Getter} from "vuex-class"; // 调用接口
     //import Store from '../evocatoryRes/store';
     import fileForDetails from "./modal/fileRegist.vue";
     import borwesRecord from "./modal/browesRecords.vue";
    @Component({
        name: "formAudit",
        components: {fileForDetails,borwesRecord},
        data() {
            return {
        	details:{
        		type:'',
        		dialogFormVisible:false
			},
            form: {},
            isActive:true,
            muenActive:true,
			isTabSelect: false,
			currentPage: 1,
			pagesize: 5,
			dialogTitleType:''
            };
        },

        created() {
        	//this.getAllCases();
        },
        mounted() {
        	//getAllCases();
        },
        methods: {
        	onclick (index) {
	　　　　　　　　 this.isActive = !this.isActive;
				   this.muenActive = !this.muenActive;
	　　　　　　},
        }
    })
    export default class formAudit extends Vue {
    	@Action GetAchives: any;
    	dialogFlag = {
            archiveList:false,
        }
    	getAllCases(): void{
    		//alert(111);
    		this.GetAchives().then(res => {
    			console.log(res.data.productList);
    			this.showCases = res.data.productList;
    		})
    	}
        showCases = [];
        //case
        allCases: any = [
        	{
                caseTitle: "1", //1 在库 2 已出库
                caseState: "1",
                personnel: "刘某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "XXXXXX总政机关",
                termState: "1"
            },
            {
               caseTitle: "1",
                caseState: "1",
                personnel: "李某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "XXXXXX总政机关",
                termState: "1"
            },
            {
                caseTitle: "2",
                caseState: "1",
                personnel: "张某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "XXXXXX总政机关",
                termState: "1"
            },
             {
                caseTitle: "2",
                caseState: "1",
                personnel: "某某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "XXXXXX总政机关",
                termState: "1"
            }
        ];
        
        dialogFormVisible2: boolean = false
        dialogTable :boolean = false
        dialogFormVisible: boolean = false
        handleSelect(key) {
            key = Number(key.index) + 1;
            if (key == 1) {
                this.showCases = this.allCases;
            } else if (key == 2) {
                console.log(2);
               // this.showCases = this.waitAcceptanceCases;
            } else if (key == 3) {
               // this.showCases = this.unWaitAcceptanceCases;
            }
        }


        showStateLine(val) {
            // this.show(val)
            let that = this;

            this.showStateLineFlag = true

            setTimeout(function () {
                that.$refs.stateLine.focusStep(val)

            }, 1)
        }

        mounted() {
            this.showCases = this.allCases;
            this.showCases.forEach(item => {
                if (item.caseState == "1") {
                    //this.waitAcceptanceCases.push(item);
                } else {
                   // this.unWaitAcceptanceCases.push(item);
                }
            });
        }
        
        returnForm() {
			console.log(JSON.stringify(this.$refs.fileForDetails.formInline));
            this.dialogFormVisible2 = false;
            this.dialogFormVisible = false;
		}
        onclickRecords(item){
        	console.log(item);
        	this.dialogTable = true;
        	this.dialogTitleType = item
        }
        
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/mianCards.scss";
    @import "~@/styles/common.scss";

/deep/.mc-dialog-medium .el-dialog--center .el-dialog__body{
	max-height:500px;
}
.cards-content-bt{
padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    width: 60px;
    height: 30px;
}

.title {
    text-align: left;
    font-size: 30px;
    padding-left: 40px;
    color: #000;
    font-weight: 500;
    margin-top: 25px;
    padding-bottom: 10px;
	border-bottom: 1px solid #b9b7b7;
}
.menu-pages{
	float: right;
	font-size: 15px;
}
.menu-btn div{
	display: inline-block;
	padding: 5px;
    border: 1px solid #ECEDF2;
    width: 100px;
    text-align: center;
}
.menu-btn div.active{
	background: #ECEDF2;
}  
 .registInfo{
    /deep/.el-dialog--center{
            width: 1300px!important;
            height: 515px!important;
    }
    
    /deep/.el-dialog__body {
   		overflow: hidden;
   		height: 78%!important;
    }
}  

</style>