<template >
    <div class="el-main evocatory" style="height: 100%;">
        <div style="height: 100%;">
       		<div class="search-container-input"> 
       			<!--<lable class="search-lable">检索查询 </lable>-->
       				<div class="searchTime">
       					<label >年度：</label>
       					<el-date-picker
					      v-model="form.value6"
					      type="year"
					      >
					    </el-date-picker>
					    <label style="margin: 10px;">至</label>
					    <el-date-picker
					      v-model="form.value7"
					      type="year"
					      >
					    </el-date-picker>
       					<!--<label >案件名称：</label>
				    	<el-input v-model="form.caseName" autocomplete="off" placeholder="请输入"></el-input>-->
				    <el-button class="el-button-tel" slot="append" icon="el-icon-search" style=" margin-left: 5px;padding-left: 20px;"></el-button> 
       				</div>
       		</div>
            <div class="search-container-input2"> 
            	<!-- 导出excel标签 -->
				<download-excel
					class="export-excel-wrapper"
					:data="tableData"
					:fields="json_fields"
					style="display: none;visibility:hidden;"
					name="移交档案目录.xls"
					id="excelDownload"
				>
					<!-- 隐藏组件,方法模拟点击触发导出excel -->
				</download-excel>
			<div class='custom-toolBar'>
				<template>
					<div class='buttonArr' style="margin: 5px;">
						<!--<el-checkbox class="checkbox" size="medium" v-model="checked3" label="全选" border></el-checkbox>-->
						<el-button type="primary" size="medium" @click="massTransfer('massTransfer')">移交</el-button>
						<el-button type="primary" size="medium" @click="excelDownload()">打印移交目录</el-button>
						<el-button type="primary" size="medium" @click="turnOver('turnOver')">移交记录</el-button>
					</div>
				</template>
			</div>  
        	<div class="block margin-top">
                <div class="table" >
				<el-table
					:data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
					border
                    height="90%"
                    max-height="100%"
                    :header-cell-class-name="'table-header-bg'"
                    :row-class-name="'table-header-bg1'"
                    :cell-class-name="'tableContent-bg'"
					@selection-change="handleSelectionChange"
				>
					<el-table-column type="selection" width="50"></el-table-column>
					<el-table-column type="index" label="序号" width="60"></el-table-column>
					<el-table-column
						prop="year"
						label="年度"
						align="center"
					></el-table-column>
					<el-table-column prop="name" label="姓名" align="center"></el-table-column>
					<el-table-column
						prop="acceptPerson"
						label="部职别"
						align="center"
						min-width="200"
					></el-table-column>
					<el-table-column
						prop="nums"
						label="档号"
						align="center"
						show-overflow-tooltip
					></el-table-column>
					<el-table-column prop="juanshu" label="卷数" align="center"></el-table-column>
					<el-table-column prop="heshu" label="盒数" align="center"></el-table-column>
				</el-table>
					<div class="block page-positton">
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="currentPage"
							:page-sizes="[5, 10, 20, 30]"
							:page-size="pagesize"
							small
							background
							layout="total, sizes, prev, pager, next, jumper"
							:total="tableData.length"
						></el-pagination>
					</div>
				</div>
            </div>
     </div>
         <el-dialog class="mc-dialog-medium dialog_content" title="录入信息"  meta="{keepAlive: false}"   :visible.sync="dialogFormVisible2" 
         	@showParentComp="eventFromChild" width="60% "top="6%" height="575px" id="caseMsg" 
			:close-on-click-modal="false"
			center >
                <electronic-filing-info  @closeDialog="dialogFormVisible2"></electronic-filing-info>
                <div slot="footer" class="dialog-footer">
					<el-button type="primary" size="small" @click="dialogFormVisible2 = false">保 存</el-button>
					<el-button type="primary" size="small" @click="dialogFormVisible2 = false">取 消</el-button>
				</div>
            </el-dialog>
        </div>
		<el-dialog class="mc-dialog-medium" title="移交记录" :visible.sync="dialogFlag.turnOver" width="80% "  
		:close-on-click-modal="false" center>
      <turnOver></turnOver>
    </el-dialog>
    
		<el-dialog class="mc-dialog-medium" title="移交" :visible.sync="dialogFlag.massTransfer" width="60% " top="5%"  id="massTran"
			:close-on-click-modal="false" center>
	      <massTransfer></massTransfer>
	      <div slot="footer" class="dialog-footer">
		      <el-button type="success" size="small" @click="dialogFlag.massTransfer = false">保 存</el-button>
			  <el-button size="small" @click="dialogFlag.massTransfer = false">返回</el-button>
			  <el-button type="primary" size="small" v-print="'#handover'" @click="printDemo">打印移交清单</el-button>
		  </div>
    	</el-dialog>
    	<el-dialog
            class="mc-dialog-big"
            title="打印测试"
            :visible.sync="commonPrintFlag"
            width="100%"
            top="0"
    		>
		      <handoverList @closeCommonPrint="closeCommonPrint" ref="print"></handoverList>
		</el-dialog>
    </div>
	
</template>


<script lang="ts">
     import {Component, Vue} from "vue-property-decorator";
     import Store from '../evocatoryRes/store';
     import ElectronicFilingInfo from "@/views/electronicFiling/modal/fileTransForm.vue";
	 import turnOver from "../modal/turnOver.vue";//移交记录
	 import massTransfer from "../modal/massTransfer.vue";//批量移交
	 import handoverList from "../modal/handoverList.vue";//打印移送清单
     import Print from 'vue-print-nb';
     import "../../../assets/js/jquery-1.4.4.min.js";
     import JsonExcel from 'vue-json-excel';
     Vue.use(Print); //注册
     Vue.component('downloadExcel', JsonExcel);
    @Component({
        name: "fileTrans",
        components: {ElectronicFilingInfo,turnOver,massTransfer,handoverList},
        data() {
            return {
                form: {},
                isActive:true,
                muenActive:true,
				
                tableData: [
				{
					id: '1',
					year: '2019',
					nums: '0011',
					name:'黄某',
					acceptPerson: '陆XXX第xx集团副XXX长（副XXX职）',
					juanshu: '4',
					heshu:'3',
					beizhu:''
				},
				{
					id: '2',
					year: '2010',
					nums: '0013',
					name:'李某某',
					acceptPerson: '陆XXX第xx集团副XXX长（副XXX职）',
					juanshu: '4',
					heshu:'3',
					beizhu:''
				},
				{
					id: '3',
					year: '2010',
					nums: '0014',
					name:'张某某',
					acceptPerson: '陆XXX第xx集团副XXX长（副XXX职）',
					juanshu: '4',
					heshu:'3',
					beizhu:''
				},
				{
					id: '4',
					year: '2010',
					nums: '0010',
					name:'刘某某',
					acceptPerson: '陆XXX第xx集团副XXX长（副XXX职）',
					juanshu: '4',
					heshu:'3',
					beizhu:''
				},
				{
					id: '5',
					year: '2011',
					nums: '0019',
					name:'李某某',
					acceptPerson: '海XXX第xx集团副XXX长（副XXX职）',
					juanshu: '4',
					heshu:'3',
					beizhu:''
				},
				{
					id: '6',
					year: '2009',
					nums: '0013',
					name:'刘某某',
					acceptPerson: '陆XXX第xx集团副XXX长（副XXX职）',
					juanshu: '4',
					heshu:'3',
					beizhu:''
				},
				{
					id: '7',
					year: '2000',
					nums: '0013',
					name:'李某某',
					acceptPerson: 'xx省XXX区政委（副XXX职）',
					juanshu: '4',
					heshu:'3',
					beizhu:''
				},
				{
					id: '8',
					year: '2010',
					nums: '0011',
					name:'李某某',
					acceptPerson: 'xx省XXX区政委（正XXX职）',
					juanshu: '4',
					heshu:'3',
					beizhu:''
				}
			],
			isTabSelect: false,
			isExportExcelFlag: false,
			currentPage: 1,
			pagesize: 5,
			//导出excel json数据
			json_fields: {
				序号:'id',
				年度: 'year',
				姓名: 'name',
				部职别: 'acceptPerson',
				档号: 'nums',
				卷数: 'juanshu',
				盒数: 'heshu',
				备注: 'beizhu'
			},
			json_data: [
				{
					index:1,
					dateTime: '2019',
					nums:'0121',
					personName: '李某某',
					jibie: '陆XXX第xx集团副XXX长（副XXX职）',
					endTime: '1',
					putLocaltion: '1',
					content: ''
				},
				{
					index:2,
					dateTime: '2019',
					nums:'0121',
					personName: '刘某某',
					jibie: 'xx省XXX区政委（正XXX职）',
					endTime: '1',
					putLocaltion: '1',
					content: ''
				}
			],
			json_meta: [
				[
					{
						' key ': ' charset ',
						' value ': ' utf- 8 '
					}
				]
			]
            };
        },

        created() {
        },
        mounted() {
        },
        methods: {
        	onclick (index) {
	　　　　　　　　 this.isActive = !this.isActive;
				   this.muenActive = !this.muenActive;
	　　　　　　},
	//判断tab是否选定
		handleSelectionChange(val) {
			console.log(val);
			if (val.length > 0) {
				this.$data.isTabSelect = true;
			} else {
				this.$data.isTabSelect = false;
			}
		},
		handleSizeChange(val) {
			this.pagesize = val;
			console.log(this.pagesize);
		},
		handleCurrentChange(val) {
			this.currentPage = val;
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		eventFromChild(){
			
		},
		handlePreview(file) {
			console.log(file);
		},
		turnOver(item){
			this.dialogFlag[item] = true
		},
		massTransfer(item){
			this.dialogFlag[item] = true
		},
		//导出移交清单
		excelDownload() {
			//this.$data.tabSelect = true;
			let tabSelect = true;//this.$data.isTabSelect;
			if (tabSelect == true) {
				document.getElementById('excelDownload').click();
				/*this.$message({
					showClose: true,
					message: '移交数据成功',
					type: 'success'
				});*/
			} else {
				/*this.$message({
					showClose: true,
					message: '未选择移交的数据'
				});*/
			}
		},
		/*downLoadFile(){
	        var $eleForm = $("<form method='get'></form>");
	
	        $eleForm.attr("action","./档案移交清单.docx");
	
	        $(document.body).append($eleForm);
	
	        //提交表单，实现下载
	        $eleForm.submit();
	
	    },*/
	   printDemo(){
	        this.commonPrintFlag=true
	        let that=this;
	        setTimeout(()=>{
	            that.$refs.print.goPrint();
	        },1)
    	},
    	closeCommonPrint(){
        	this.commonPrintFlag=false
    	}
        }
    })
    export default class fileTrans extends Vue {
		dialogFlag = {
				turnOver:false,
				massTransfer:false,
  }
        showCases = [];
        //case
        allCases: any = [
            {
                caseTitle: "已移交",
                caseState: "1",
                personnel: "某某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25 15:31",
                term: "**集团XXX",
                termState: "1"
            },
            {
               caseTitle: "待移交",
                caseState: "1",
                personnel: "某某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25 15:31",
                term: "**集团XXX",
                termState: "1"
            },
            {
                caseTitle: "待移交",
                caseState: "1",
                personnel: "某某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25 15:31",
                term: "**集团XXX",
                termState: "1"
            },
             {
                caseTitle: "已移交",
                caseState: "1",
                personnel: "某某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25 15:31",
                term: "**集团XXX",
                termState: "1"
            }
        ];
        
        dialogFormVisible2: boolean = false
        commonPrintFlag:boolean = false
        handleSelect(key) {
            key = Number(key.index) + 1;
            if (key == 1) {
                this.showCases = this.allCases;
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
            this.allCases.forEach(item => {
                
            });
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	@import "~@/styles/queryList.scss";
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/mianCards.scss";
    @import "~@/styles/common.scss";
    
.mc-dialog-medium /deep/ .el-dialog__body{
    padding: 21px 20px 25px;
}  
#massTran {
	/deep/.el-dialog--center{
    	width: 800px!important;
    	height: 528px!important;
	}
	 /deep/.el-dialog__body {
		max-height:430px;
		overflow: hidden;
		height: 88%!important;
	} 
	/deep/ .dialog-footer{
		margin-top: -7px;
	}
}
.el-checkbox{
	position: relative;
    float: right;
    right: -10px;
}
.checkbox{
	margin-right: 10px;
	border: 1px solid #2060e6;
	color: #2060e6;
	position: relative;
    top: -1px;
}
.buttonArr{
	margin-right: 19px ;   
}
.custom-toolBar{
	border: 1px solid;
    height: 11%;
    color: rgb(212, 211, 211);
    margin-bottom: 0px;
    text-align: right;
    width: 100%;
    /* line-height: 1; */
    display: flex;
    /* flex-direction: column-reverse; */
    justify-content: flex-end;
    align-items: center;
}
</style>