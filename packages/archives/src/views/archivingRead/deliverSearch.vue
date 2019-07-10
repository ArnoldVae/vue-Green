<template >
    <div class="el-main evocatory" style="height: 100%;">
        <div style="height: 100%;">
       		<div class="search-container-input"> 
       				<div class="searchTime" :model="form">
       					<label >案件名称：</label>
				    	<el-input v-model="form.caseName" autocomplete="off" placeholder="请输入"></el-input>
       					<label >调阅时间：</label>
       					<el-date-picker
					      v-model="form.value6"
					      type="daterange"
					      range-separator="至"
					      start-placeholder="开始日期"
					      end-placeholder="结束日期">
					    </el-date-picker>
				    <el-button class="el-button-tel" slot="append" icon="el-icon-search" style=" margin-left: 5px;padding-left: 20px;"></el-button> 
       				</div>
       		</div>
            <div class="search-container-input2"> 
	        	<div class="block margin-top">
	            <div class="table">
				<el-table
					:data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
					border
					height="95%"
                    max-height="100%"
					:row-class-name="'table-header-bg1'"
					:header-cell-class-name="'table-header-bg'"
					:cell-class-name="'tableContent-bg'"
					@selection-change="handleSelectionChange"
				>
					<el-table-column type="selection" width="50"></el-table-column>
					<el-table-column type="index" label="序号" width="60"></el-table-column>
					<el-table-column
						prop="person"
						label="借阅人"
						align="center"
					></el-table-column>
					<el-table-column
						prop="unit"
						label="借阅单位"
						align="center"
						show-overflow-tooltip
					></el-table-column>
					<el-table-column prop="date" label="借阅时间" align="center"></el-table-column>
					<el-table-column
						prop="caseType"
						label="利用方式"
						align="center"
					></el-table-column>
					<el-table-column prop="acceptPerson" label="经办人" align="center"></el-table-column>
					<el-table-column fixed="right" label="操作" align="center" >
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="details.dialogFormVisible = true,muenActive = true,add('addDetail')">
								新增
							</el-button>
							<el-button type="text" size="small" @click="details.dialogFormVisible = true,muenActive = false,add('XQ')">
								查看详情
							</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-row>
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
				</el-row>
				</div>
        </div>
        </div>

	         <el-dialog class="mc-dialog-medium" title="详细信息"  meta="{keepAlive: false}"   :visible.sync="details.dialogFormVisible" 
         	@showParentComp="eventFromChild" width="1297px" height="475px" top="5%" id="caseMsg" v-if="details.dialogFormVisible"
			:close-on-click-modal="false"
			center >
                <fileForDetails v-bind:myData="details"></fileForDetails>
				<div slot="footer" class="dialog-footer">
                	<el-button  type="success" size="small" >保 存</el-button>
					<el-button  size="small" @click="details.dialogFormVisible = false">返回</el-button>
			</div>
            </el-dialog>
        </div>
    </div>
</template>


<script lang="ts">
     import {Component, Vue} from "vue-property-decorator";
     import Store from '../evocatoryRes/store';
     import fileForDetails from "./modal/fileRegist.vue";
    @Component({
        name: "formAudit",
        components: {fileForDetails},
        data() {
            return {
            	details:{
            		type:'QX',
            		dialogFormVisible:false
				},
                form: {},
                isActive:true,
                muenActive:false,
                tableData: [
				{
					unit: 'xx单位',
					person: '李某某',
					date: '2019-02-18',
					caseType: '电子调阅',
					acceptPerson: '孙某某'
				},
				{
					unit: 'xx单位',
					person: '刘某某',
					date: '2019-02-14',
					caseType: '电子调阅',
					acceptPerson: '孙某某'
				},
				{
					unit: 'xx单位',
					person: '黄某某',
					date: '2019-02-22',
					caseType: '电子调阅',
					acceptPerson: '孙某某'
				},
				{
					unit: 'xx单位',
					person: '李某某',
					date: '2019-01-19',
					caseType: '电子调阅',
					acceptPerson: '孙某某'
				},
				{
					unit: 'xx单位',
					person: '李某某',
					date: '2019-02-12',
					caseType: '电子调阅',
					acceptPerson: '孙某某'
				},
				{
					unit: 'xx单位',
					person: '李某某',
					date: '2019-02-13',
					caseType: '电子调阅',
					acceptPerson: '孙某某'
				},
				{
					unit: 'xx单位',
					person: '李某某',
					date: '2019-02-10',
					caseType: '电子调阅',
					acceptPerson: '孙某某'
				},
				{
					unit: 'xx单位',
					person: '李某某',
					date: '2019-02-15',
					caseType: '电子调阅',
					acceptPerson: '孙某某'
				}
			],
			isTabSelect: false,
			currentPage: 1,
			pagesize: 5,
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
			add(item){
				if(item == 'XQ'){//详情
					this.details.type = 'XQ';
				}
				if(item == 'addDetail'){// 新增
					this.details.type = 'addDatail';
				}
				console.log(this.details.type);
			},
			closeDialog(){
			   this.muenActive = !this.muenActive;
			 this.$refs['fileForDetails123'].resetFields();
			   //this.$refs.fileForDetails = '';//清空数据
			}
        }
    })
    export default class formAudit extends Vue {
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
		handleSizeChange(){
			
		}
		handleCurrentChange(){
			
		}
		eventFromChild(){
			
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
            
        }
        
        returnForm() {

        	this.dialogFormVisible = false;
//      	
        
			//console.log(JSON.stringify(this.$refs.deliveryForm.form));
			this.dialogDelivery = false;
		}
        handleSelectionChange(){
        	
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	@import "~@/styles/queryList.scss";
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/mianCards.scss";
    @import "~@/styles/common.scss";
 /deep/.mc-dialog-medium .el-dialog--center .el-dialog__body{
	max-height:500px;
}
  .mc-dialog-medium .el-dialog--center .el-dialog__footer{
  	
  	border: 0px;
  	/deep/ .dialog-footer{
	text-align: center;
    bottom: 15px;
    position: absolute;
    width: 100%;
	}
}
/*deliverSearch.vue*/
 .registInfo{
  	/deep/.el-dialog--center{
            width: 1300px!important;
             height: 480px!important;
    }
    
    /deep/.el-dialog__body {
   		overflow: hidden;
   		height: 78%!important;
    }
} 
</style>