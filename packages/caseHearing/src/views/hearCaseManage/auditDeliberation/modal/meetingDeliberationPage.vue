<template>
	<!-- 会议审议弹窗-审理案件 -->
	<div>
		<el-container>
			<el-aside width="220px" class="el-select-tab">
                        <ul>
                            <li v-for="(menu,index) in subMenuItem" class="line1" :class="{'actives-idiv':menu.active == true}"
                                :key="index" @click="activesClick(menu)">
                                <el-button v-bind:id="menu.eleBtnId"
                                           class="tab-btn" circle size="small"></el-button>
                                <div class="line-conent">
									<span v-bind:id="menu.eleId"  >{{menu.metttingValue}}</span>
									<p>{{menu.results}}</p>
									<p value-format="yyyy-MM-dd">{{menu.date1}}</p>
                                </div>
                            </li>
                        </ul>
			</el-aside>
        <el-main>
		<el-collapse v-model="activeNames" @change="handleChange" class="collapse">
			<el-collapse-item id="menu1" name="1">
				<template slot="title">
					<i class="header-icon el-icon-info"></i>本次会议审议信息
					<el-button size="mini" type="primary" plain @click="addline()" style="position: absolute;right: 68px;top: 37px;">新增</el-button>
				</template>
				<div class="form-content">
					<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
						<el-row :gutter="20">
							<el-col :span="6">
								<el-form-item label="会议时间：" >
									<el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.date1" style="width: 100%;"></el-date-picker>
								</el-form-item>
							</el-col>

							<el-col :span="6">
								<el-form-item label="会议类型：">
									<el-select class="form_select" v-model="form.metttingType" placeholder="请选择" @change="changeValue">
										<el-option v-for="(option,index) in metttingType" :key="index" v-bind:label="option.value" v-bind:value="option.code">
										</el-option>
									</el-select>
									<el-input v-model="form.metttingValue" style="display: none;"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="6">
								<el-form-item label="审议结果：">
									<el-select v-model="form.result" placeholder="请选择" @change="changeVal">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
									<el-input v-model="form.results" style="display: none;"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="6">
								<el-form-item label="是否继续上会：">
									<el-radio-group v-model="form.resource">
										<el-radio label="01"> 是</el-radio>
										<el-radio label="02"> 否</el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="20">
							<el-col :span="6">
								<el-form-item label="是否备案：">
									<el-radio-group v-model="form.fileRecord">
										<el-radio label="01">否</el-radio>
										<el-radio label="02">是</el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
							<el-col :span="6">
								<el-form-item label="是否需要报批：">
									<el-radio-group v-model="form.resource2">
										<el-radio label="01">否</el-radio>
										<el-radio label="02">是</el-radio>
									</el-radio-group>
								</el-form-item>
							</el-col>
							<el-col :span="6" v-if="form.resource2=='02'">
								<el-form-item label="报批单位：">
									<el-select v-model="form.depart" placeholder="请选择" multiple>
										<el-option label="中共中央" value="01"></el-option>
										<el-option label="中央军委" value="02"></el-option>
									</el-select>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="20" v-show="value=='2'">
							<el-col :span="24">
								<el-form-item label="审理意见：">
									<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
									</el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</div>
			</el-collapse-item>

			<el-collapse-item id="menu2" name="2">
				<template slot="title">
					<i class="header-icon el-icon-info"></i>上传材料信息
				</template>
				<div class="form-content" style="padding: 0">
					<div class="my-file-table">
						<div class="item-main">
							<el-row>
								<el-col :span="14" class="col-title">
									<p>会议纪要</p>
								</el-col>
								<el-col :span="3">
									<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :show-file-list="false" :limit="3" :on-exceed="handleExceed" :file-list="fileList">
										<el-button size="small" type="primary"><i class="el-icon-upload"></i> 本地上传</el-button>
									</el-upload>
								</el-col>
								<el-col :span="3">
									<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :show-file-list="false" :limit="3" :on-exceed="handleExceed" :file-list="fileList">
										<el-button size="small" type="success"><i class="el-icon-printer"></i> 扫描上传</el-button>
									</el-upload>
								</el-col>
								<el-col :span="3">
									<el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :show-file-list="false" :limit="3" :on-exceed="handleExceed" :file-list="fileList">
										<el-button size="small" type="warning"> <i class="el-icon-picture"></i>高拍仪上传</el-button>
									</el-upload>
								</el-col>
							</el-row>
							<el-row v-for="(f,index) in fileList">
								<el-col :span="14" class="text-left"><span>文件{{index+1}}：{{f.name}}</span></el-col>
								<el-col :span="10">
									<el-button size="small"><i class="el-icon-download"></i>下载</el-button>
									<el-button size="small"><i class="el-icon-search"></i>查看</el-button>
									<el-button size="small" @click="beforeRemove(index)"><i class="el-icon-delete"></i>删除</el-button>
								</el-col>
							</el-row>
						</div>

					</div>
				</div>
			</el-collapse-item>
		</el-collapse>

		<div class="backplane-footer-center" v-if="pageFlag!='details'">
			<el-button  type="primary" @click="dialogFlag.viewResults=false" v-show="form.resource =='02'">提交</el-button>
			<el-button  type="success" @click="saveForm()" v-show="form.resource =='01'">保存</el-button>
			<el-button  @click="closeForm()" >返回</el-button>

		</div>
		 </el-main>
		
		</el-container>
	</div>

</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import ViewResults from "../../../pubicMAndC/modal/viewResults.vue"; //历次审议记录
	const selectData = require("store/selectData.json");
	// import TakeAdvice from "./takeAdvice.vue"
	// import Deliberations from "./deliberations.vue"
	@Component({
		props: ['pageFlag'],
		selectData: selectData,
		components: {
			ViewResults
		},
		data() {
			return {
				options: [{
					value: '1',
					label: '同意审理意见'
				}, {
					value: '2',
					label: '改变审理意见'
				}],
				value: '',
				textarea: '',
				times:1,
				visaObj: {},
				formLabelAlign: {
					name: '',
					region: '',
					type: ''
				},
				activeNames: ['1', '2', '3', '4', '5', '6', '7', '8'],
				form: {
					metttingType: '01', //会议类型
					metttingValue:'',//会议审议
					result:'2',//审议结果
					results:'',//审议结果文本
					fileRecord: '01',
					name: '',
					region: '',
					date1:"2019-04-15",
					date2: '',
					type: [],
					resource: '01',
					resource1: '01',
					resource2: '01',
					desc: '',
					depart: []
				},
				partyDiscip: selectData.partyDiscip, //党纪处分
				militaryDiscip: selectData.militaryDiscip, //军纪处分
				metttingType: selectData.metttingType, //会议类型
				rules: {
					name: [{
						required: true,
						message: '请输入',
						trigger: 'blur'
					}],
				}
			};
		},

		created() {},
		mounted() {

		},
		methods: {

		}
	})
	export default class caseSupplement extends Vue {
		fileList: Array = [{
			name: '军委纪委书记专题会议纪要',
			url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
		}, {
			name: '中央政治局常务会议纪要',
			url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
		}]
		subMenuItem: Array = [
            {
                metttingValue: "军委纪委书记专题会议",
                metttingType:'01',
                active: true,
                results:"改变审理意见",
                date1:"2019-04-15",
                id: '001',
                eleBtnId: "eleBtnId1",
                eleId: 'menuName1'
            },
            {
                metttingValue: "军委纪委全体会议",
                metttingType:'02',
                active: false,
                results:"同意审理意见",
                date1:"2019-04-14",
                id: '002',
                eleBtnId: "eleBtnId2",
                eleId: 'menuName2'
            },
            {
                metttingValue: "中央军委常务会",
                metttingType:'03',
                active: false,
                results:"同意审理意见",
                date1:"2019-04-12",
                id: '003',
                eleBtnId: "eleBtnId3",
                eleId: 'menuName3'
            },
            {
                metttingValue: "中央政治局常务会",
                metttingType:'04',
                active: false,
                results:"同意审理意见",
                date1:"2019-04-10",
                id: '004',
                eleBtnId: "eleBtnId4",
                eleId: 'menuName4'
            }
        ]

		isCollapse = 'right'
		// 附件列表
		visaForm: object = {
			registerFiles: [], // 移送审理案件材料交接登记表
			batchFiles: [] // 案件移送审理呈批表
		}

		addDisciplineObjList() {
			// this.disciplineObjList.push({
			//     test:""
			// })
		}
		activesClick(item){
			this.subMenuItem.forEach(function(obj){
                obj.active = false;
            });
			item.active = !item.active;
			var id = item.id;
			if(id == '001'){
				this.form.metttingType = '01'; //会议类型
				this.form.result = '2';//审议结果
				this.form.date1 = '2019-04-15';
			}else if(id == '002'){
				this.form.metttingType = '02'; //会议类型
				this.form.result = '1';//审议结果
				this.form.date1 = '2019-04-14';
			}else if(id == '003'){
				this.form.metttingType = '03'; //会议类型
				this.form.result = '1';//审议结果
				this.form.date1 = '2019-04-12';
			}else if(id == '004'){
				this.form.metttingType = '04'; //会议类型
				this.form.result = '1';//审议结果
				this.form.date1 = '2019-04-10';
			}
		}
		
		showFlag: boolean = false;
		dialogFlag = {
			allPrevious: false,
			viewResults: false,
		}
		viewResults(item) {
			this.dialogFlag[item] = true
		}
		allPrevious(item) {
			this.dialogFlag[item] = true
		}
		handleChange(val) {
			this.activeNames = ['1', '2']
		}

		// 获取附件信息
		setRegisterFiles(file, fileList) {
			this.visaForm.registerFiles.push(file)
			const date = new Date()
			for(let i = 0; i < this.visaForm.registerFiles.length; i++) {
				this.visaForm.registerFiles[i].documentname = this.visaForm.registerFiles[i].name
				this.visaForm.registerFiles[i].filesize = this.visaForm.registerFiles[i].size
				this.visaForm.registerFiles[i].documentdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
			}
		}
		setBatchFiles(file, fileList) {
			this.visaForm.batchFiles.push(file)
			const date = new Date()
			for(let i = 0; i < this.visaForm.batchFiles.length; i++) {
				this.visaForm.batchFiles[i].documentname = this.visaForm.batchFiles[i].name
				this.visaForm.batchFiles[i].filesize = this.visaForm.batchFiles[i].size
				this.visaForm.batchFiles[i].documentdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
			}
		}
		// 删除附件
		delBatchFiles(index) {
			this.visaForm.batchFiles.splice(index, 1)
		}
		delRegisterFiles(index) {
			this.visaForm.registerFiles.splice(index, 1)
		}

		stateTrans() {
			this.$confirm('提交后将进入案件执行环节，确定提交？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				//父页面调用方法
				this.$emit('submitEvent', 'HYSY')
			}).catch(() => {

			});
		}
		close() {
			this.$parent.$emit('submitEvent', 'HYSY');
		}
		handlePreview() {}
		handleRemove() {}
		beforeRemove() {}
		handleExceed() {}
		changeValue(valI){
			
			//console.log(id);
			let obj = {};
		      obj = this.metttingType.find((item)=>{
		          return item.code === valI
		      });
		      this.form.metttingValue = obj.value;
		      // this.form.date1 = new Date();
		}
		changeVal(value){
			//console.log(id);
			let obj = {};
		      obj = this.options.find((item)=>{
		          return item.value === value
		      });
		      this.form.results = obj.label;
		      // this.form.date1 = new Date();
		}
		addline(){
			
			  this.form.metttingType = ''; //
			  this.form.metttingName = ''; //会议类型
			  this.form.result = '';//审议结果
			  this.form.results = '';//审议结果
			  this.form.date1 = '';
			var list = {
				metttingType: "",
                metttingName:"",
                results:'',
                result:'',
                date1:"",
                active: true,
                id: '0012'
			}
			
			this.subMenuItem.forEach(function(obj){
                obj.active = false;
            });
			//this.subMenuItem[0] = this.form;
			let id = this.subMenuItem[0].metttingType;
			console.log(id);
			if(id != '' || id == null){//&& id != undefined
			  this.subMenuItem.unshift(list);
		      this.subMenuItem[0] = this.form;
		      this.subMenuItem[0].active = true;
			}
			times++;
			//console.log(this.subMenuItem[0].metttingType);
		}
		saveForm(){
			this.$parent.$emit("closePage","HYSY");
			this.$message({
				type: "success",
				message: "保存成功!"
			});
        }
		
		closeForm(){
			this.$parent.$emit("closePage","HYSY");
		}
	}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
	@import "~@/styles/dialogBox.scss";
	@import "~@/styles/common.scss";
	.backplane .backplane-Content .el-aside{
		position: absolute;
	}
	.actives-idiv{
		/deep/ .el-button.tab-btn{
			background: #3479DA;
			    
		}
		/deep/ .line-conent /deep/ span{
			color: #3479DA;
		}
	}
	.line-conent{
		display: inline-block;
	    float: left;
	    position: relative;
	}
	.el-aside ul li.line1{
		height: 101px;
		top: 0px;
		margin: 0;
    	position: relative;
    	margin-bottom: 10px;
	}
	.line1 /deep/ .el-button{
		float: left;
		top: 0px;
		margin: 6px 10px;
		background: #DEDEDE;
		width: 14px;
		height: 14px;
		padding: 7px;
	}
	.line1:before{
		content: '';
		width: 1px;
	    height: 100%;
	    position: absolute;
	    background: #DEDEDE;
	    left: 17px;
	    top: 10px;
	}
	.line1:last-child:before{
		width: 0px;
	}
</style>