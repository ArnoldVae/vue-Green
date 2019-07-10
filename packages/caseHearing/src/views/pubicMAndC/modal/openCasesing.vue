<!--案件受理页面-审核案件-->
<template style="background: #f1f1f1">
	<div class="body-container-jwjw">
		<div class="body-container">
			<!-- <el-radio-group v-model="tabPosition" style="margin: 20px 0;">
				<el-radio-button label="left">案件受理</el-radio-button>
			</el-radio-group> -->
			<el-collapse v-model="activeNames" name='1' ref="csElCoolapase" >
				<el-collapse-item  name="1">
							 <template slot="title">
								<i class="	header-icon el-icon-info"></i>受理情况
							</template> 
						
						<el-form v-show="tabPosition=='left'" class="form-label-top" :rules="rules" :label-position="labelPosition" :model="formLabelAlign" style="margin-bottom: 30px;">
							<el-row>
								<el-col :span="6">
									<el-form-item label="受理时间：">
										<el-date-picker v-model="formLabelAlign.date" type="date" placeholder="选择日期"></el-date-picker>
									</el-form-item>
								</el-col>
								<el-col :span="12">
									<el-form-item label="审核人：">
										<el-select v-model="formLabelAlign.othersHuman" multiple filterable allow-create default-first-option placeholder="请选择">
											<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
											</el-option>
										</el-select>
									</el-form-item>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="6">
									<el-form-item label="受理期限(天数)：">
										<el-input v-model="formLabelAlign.value2"></el-input>

									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="红色预警期限(天数)：" prop="value4">
										<el-input v-model="formLabelAlign.value4"></el-input>

									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="黄色预警期限(天数)：" prop="value4">
										<el-input v-model="formLabelAlign.value5"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="蓝色预警期限(天数)：" prop="value4">
										<el-input v-model="formLabelAlign.value6"></el-input>

									</el-form-item>
								</el-col>

							</el-row>
							<el-row>
								<el-col :span="18">
									<el-form-item label="领导签批意见：">
										<el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
									</el-form-item>
								</el-col>

							</el-row>
						</el-form>
				</el-collapse-item>
						<el-collapse-item id="menu2" name="2" v-show="tabPosition=='left'" >
							<template slot="title">
								<i class="header-icon el-icon-info"></i>上传材料信息
							</template>
							<div class="my-file-table">
								<div class="item-main" >
									<el-row>
										<el-col :span="14" class="col-title"> <p>领导签批单</p></el-col>
										<el-col :span="3">
											<el-upload
													class="upload-demo"
													action="https://jsonplaceholder.typicode.com/posts/"
													:on-preview="handlePreview"
													:on-remove="handleRemove"
													:before-remove="beforeRemove"
													multiple
													:show-file-list="false"
													:limit="3"
													:on-exceed="handleExceed"
													:file-list="fileList">
												<el-button  size="small"  type="primary"><i class="el-icon-upload"></i> 本地上传</el-button>
											</el-upload>
										</el-col>
										<el-col :span="3">
											<el-upload
													class="upload-demo"
													action="https://jsonplaceholder.typicode.com/posts/"
													:on-preview="handlePreview"
													:on-remove="handleRemove"
													:before-remove="beforeRemove"
													multiple
													:show-file-list="false"
													:limit="3"
													:on-exceed="handleExceed"
													:file-list="fileList">
												<el-button  size="small"  type="success"><i class="el-icon-printer"></i> 扫描上传</el-button>
											</el-upload>
										</el-col>
										<el-col :span="3">
											<el-upload
													class="upload-demo"
													action="https://jsonplaceholder.typicode.com/posts/"
													:on-preview="handlePreview"
													:on-remove="handleRemove"
													:before-remove="beforeRemove"
													multiple
													:show-file-list="false"
													:limit="3"
													:on-exceed="handleExceed"
													:file-list="fileList">
												<el-button  size="small" type="warning"> <i class="el-icon-picture"></i>高拍仪上传</el-button>
											</el-upload>
										</el-col>
									</el-row>
									<el-row v-for="(f,index) in fileList">
										<el-col :span="14" class="text-left"><span>文件{{index+1}}：{{f.name}}</span></el-col>
										<el-col :span="10" >
											<el-button  size="small"><i class="el-icon-download"></i>下载</el-button>
											<el-button  size="small"><i class="el-icon-search"></i>查看</el-button>
											<el-button  size="small" @click="beforeRemove(index)"><i class="el-icon-delete"></i>删除</el-button>
										</el-col>
									</el-row>
									<hr>
								</div>


							</div>
						</el-collapse-item>
			</el-collapse>
			
			<!-- <el-collapse v-show="pageFlag=='total'" class="body-footer">
				<div class="footer-btn-grunp">
					<el-button type="primary" >提交</el-button>
					<el-button type="primary" plain>保存</el-button>
					<el-button>重置</el-button>
				</div>
			</el-collapse>		 -->
		</div>
		<div slot="footer" v-show="pageFlag!='total'" class="body-footer">
			<div class="footer-btn-grunp">
				<el-button type="primary" @click="stateTrans" >提交</el-button>
                      <el-button type="success"  >保存</el-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";

	@Component({
		props:['pageFlag','message'],
		name: "formAudit",
		components: {},
		data() {
			return {
				activeNames: ['1', '2'],
				formLabelAlign: {
					name: true,
					name1: true,
					name2: true,
					name3: true,
					name4: true,
					value2:"30",
					value4:"5",
					value5:"10",
					value6:"15",
					refusalCause:''
				},
				options: [{
					value: '01',
					label: "审理人1"
				}, {
					value: '02',
					label: "审理人2"
				}, {
					value: '03',
					label: "审理人3"
				}],
				refusalCause: [{
					value: '01',
					label: "材料不全"
				}, {
					value: '02',
					label: "事实不清 "
				}, {
					value: '03',
					label: "定性不准"
				}, {
					value: '04',
					label: "证据不足"
				}, {
					value: '05',
					label: "其他"
				}],
				tabPosition: "left"
			};
		},

		created() {
			console.log(this.message);
		},
		mounted() {},
		methods: {
			handlePreview(){
				
			},
			handleRemove(){
				
			},
			beforeRemove(){
				
			},
			handleExceed(){
				
			}
		}
	})
	export default class formAudit extends Vue {
        fileList:Array= [{name: '领导签批单1', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '领导签批单2', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

        // 附件列表
		visaForm: object = {
			registerFiles: [], // 扫描件
			
		};
		rules = {
			name: [{
					required: true,
					message: "请输入活动名称",
					trigger: "blur"
				},
				{
					min: 3,
					max: 5,
					message: "长度在 3 到 5 个字符",
					trigger: "blur"
				}
			],
			value4: [{
					required: true,
					message: "请输入期限天数",
					trigger: "blur"
				},
				{
					min: 1,
					max: 3,
					message: "长度在 1 到 3个字符",
					trigger: "blur"
				}
			],
			value5: [{
					required: true,
					message: "请输入期限天数",
					trigger: "blur"
				},
				{
					min: 3,
					max: 5,
					message: "长度在 3 到 5 个字符",
					trigger: "blur"
				}
			],
			value6: [{
					required: true,
					message: "请输入期限天数",
					trigger: "blur"
				},
				{
					min: 3,
					max: 5,
					message: "长度在 3 到 5 个字符",
					trigger: "blur"
				}
			],
			value7: [{
					required: true,
					message: "请输入期限天数",
					trigger: "blur"
				},
				{
					min: 3,
					max: 5,
					message: "长度在 3 到 5 个字符",
					trigger: "blur"
				}
			]

		};
		labelPosition = "left";

		handleChange() {
			this.activeNames = ['1', '2']

		}

		mounted() {		}
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
	
		// 删除附件
	
		delRegisterFiles(index) {
			this.visaForm.registerFiles.splice(index, 1)
		}
        stateTrans(){
        	this.$confirm('提交后将进入初步审核环节，确定提交？','提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	        	//父页面调用方法
	          this.$emit('submitEvent','aaaaaaa')
	        }).catch(() => {
	                  
		    });
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	@import "~@/styles/common.scss";
	@import "~@/styles/dialogBox.scss";
	/*控制表单项的公有样式*/
	
	@import "~@/styles/commonJWJW.scss";
</style>