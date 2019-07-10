<template>
	<div class="el-main evocatory" style="height: 100%;">
		<div style="height: 100%;">
			<div class="search-container-input"> 
       				<div class="searchTime">
       					<label >案件名称：</label>
              			<el-input v-model="form.caseName" autocomplete="off" placeholder="请输入"></el-input>
       					<label >提交时间：</label>
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
				<div class='custom-toolBar'>
					 <template>
					<div class='buttonArr'>
					<el-button type="primary" size="small"  @click="showFile">切换列表</el-button>
					<el-button type="primary" size="small"  @click="fileAchive(item)">档案归档</el-button>
					</div>
					</template>
        </div>    
				<div class="cards" >
					<div class="menu-item" v-show="isCollapse=='left'">
						<el-row :gutter="20">
							<el-card class="box-card" v-for="(item,index) in showCases" :key="index">
								<div class="case_content">
									<div class="title_states" v-if="item.caseTitle == '1'"><img  src="img/yellow.png" alt=""><div class="span">待归档</div></div>
                    				<div class="title_states" v-if="item.caseTitle == '2'"><img  src="img/blue.png" alt=""><div class="span">归档中</div></div>
									<el-form ref="form" :model="form">
										<el-form-item label="案件名称" class="card-form-item">
											{{item.personnel}}
										</el-form-item>
										<el-form-item label="案件单位" class="card-form-item">
											{{item.term}}
										</el-form-item>
										<el-form-item label="提交时间" class="card-form-item">
											{{item.registrationTime}}
										</el-form-item>
									</el-form>
								</div>
								
								<div class="card-bottom-btn">
									<el-button type="primary" size="mini"  @click="fileAchive(item)">档案归档</el-button>
								</div>

							</el-card>
						</el-row>
					</div>
					         <div v-show="isCollapse=='right'" >
                    	<ArchiveList pageFlag="audit"></ArchiveList>
                   	</div>
					</div>
					</div>
					
				
			</div>
			<el-dialog class="mc-dialog-big" title="录入信息" meta="{keepAlive: false}" :visible.sync="dialogFormVisible2"  width="100% " top="0" id="caseMsg">
				<electronic-filing-info ref="caseReg"></electronic-filing-info>
			</el-dialog>
		</div>
	
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
     import Store from '../../evocatoryRes/store';
	 import ElectronicFilingInfo from "@/views/electronicFiling/modal/electronicFilingInfo.vue";
	 import ArchiveList from './modal/archiveList.vue';
	@Component({
		name: "formAudit",
		components: {
			ElectronicFilingInfo,ArchiveList
		},
		data() {
			return {
				form: {
					caseName:'',
					value6:''
				},
				isActive: true,
				muenActive: true,
				isCollapse: "left",
				tableData: [{
						id: '00000000000020190010',
						caseName: '自办案件01',
						date: '2019-02-1',
						accusedName: '李某某',
						acceptPerson: '孙某某'
					},
					{
						id: '00000000000020190306',
						caseName: '自办案件02',
						date: '2019-03-16',
						accusedName: '赵某某',
						acceptPerson: '张某某'
					},
					{
						id: '00000000000020190223',
						caseName: '自办案件03',
						date: '2019-02-23',
						acceptPerson: '刘某某'
					},
					{
						id: '00000000000020190010',
						caseName: '自办案件04',
						date: '2019-02-25',
						accusedName: '李某某',
						acceptPerson: '王某某'
					},
					{
						id: '00000000000020190122',
						caseName: '自办案件05',
						date: '2019-03-22',
						accusedName: '吴某某',
						acceptPerson: '王某某'
					},
					{
						id: '00000000000020190122',
						caseName: '自办案件06',
						date: '2019-03-22',
						accusedName: '吴某某',
						acceptPerson: '王某某'
					},
					{
						id: '00000000000020190122',
						caseName: '自办案件07',
						date: '2019-03-22',
						accusedName: '吴某某',
						acceptPerson: '王某某'
					},
					{
						id: '00000000000020190122',
						caseName: '自办案件08',
						date: '2019-03-22',
						accusedName: '吴某某',
						acceptPerson: '王某某'
					}
				],
				isTabSelect: false,
				isExportExcelFlag: false,
				currentPage: 1,
				//导出excel json数据
				json_fields: {
					案件名称: 'name',
					档号: 'fileId',
					年份: 'yea',
					结案时间: 'endTime',
					库存位置: 'putLocaltion',
					入库时间: 'putinTime'
				},
				json_data: [{
					name: '测试自办案件01',
					fileId: '00000000000020190010',
					yea: '2019',
					endTime: '2019/3/2',
					putLocaltion: '某某机关',
					putinTime: '2019/2/1'
				}],
				json_meta: [
					[{
						' key ': ' charset ',
						' value ': ' utf- 8 '
					}]
				]
			};
		},

		created() {},
		mounted() {},
		methods: {
			onclick(index) {　　　　　　　　
				this.isActive = !this.isActive;
				this.muenActive = !this.muenActive;　　　　　　
			},
			//判断tab是否选定
			handleSelectionChange(val) {
				console.log(val);
				if(val.length > 0) {
					this.$data.isTabSelect = true;
				} else {
					this.$data.isTabSelect = false;
				}
			},
			//导出移交清单
			excelDownload() {
				let tabSelect = this.$data.isTabSelect;
				if(tabSelect == true) {
					document.getElementById('excelDownload').click();
					this.$message({
						showClose: true,
						message: '移交数据成功',
						type: 'success'
					});
				} else {
					this.$message({
						showClose: true,
						message: '未选择移交的数据'
					});
				}
			},
		}
	})
	export default class formAudit extends Vue {
		// isCollapse: boolean = false;
		showFile(){
			if(this.isCollapse =='left'){
					this.isCollapse ='right'
			}else{
				this.isCollapse ='left'
			}
			
		}
		showCases = [];
		//case
		allCases: any = [{
				caseTitle: "1", //1 归档中 ，2 待归档
				caseState: "1",
				personnel: "某某某违反组织纪律",
				number: "320123455677672",
				registrationTime: "2019-02-23",
				term: "**集团XXX",
				termState: "1"
			},
			{
				caseTitle: "1",
				caseState: "1",
				personnel: "某某某违反组织纪律",
				number: "320123455677672",
				registrationTime: "2019-02-25",
				term: "**集团XXX",
				termState: "1"
			},
			{
				caseTitle: "2",
				caseState: "1",
				personnel: "某某某违反组织纪律",
				number: "320123455677672",
				registrationTime: "2019-02-25",
				term: "**集团XXX",
				termState: "1"
			},
			{
				caseTitle: "2",
				caseState: "1",
				personnel: "某某某违反组织纪律",
				number: "320123455677672",
				registrationTime: "2019-02-25",
				term: "**集团XXX",
				termState: "1"
			}
		];

		dialogFormVisible2: boolean = false
		handleSelect(key) {
			key = Number(key.index) + 1;
			if(key == 1) {
				this.showCases = this.allCases;
			} 
		}

		showStateLine(val) {
			// this.show(val)
			let that = this;

			this.showStateLineFlag = true

			setTimeout(function() {
				that.$refs.stateLine.focusStep(val)

			}, 1)
		}

		mounted() {
			this.showCases = this.allCases;
			this.allCases.forEach(item => {
				
			});
		}
		fileAchive(item){
				this.dialogFormVisible2=true;
				  let that=this;
            setTimeout(function(){
                that.$refs.caseReg.echoDetails(item);
            },1);
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	@import "~@/styles/dialogBox.scss";
	@import "~@/styles/mianCards.scss";
	@import "~@/styles/common.scss";
.buttonArr{
margin-right: 19px ;   
}
.custom-toolBar{
	border: 1px solid;
    height: 9%;
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