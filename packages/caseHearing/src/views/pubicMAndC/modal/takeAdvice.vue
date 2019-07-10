<template style="background: #f1f1f1">
<!-- 征求意见弹窗-审理案件 -->
	<div class="body-container-jwjw">
		<div   v-bind:class="[pageFlag=='review' ? 'body-container1' : 'body-container']">
			<el-collapse v-model="activeNames">
				<el-collapse-item id="menu1" name="1">
					<template slot="title">
						<i class="header-icon el-icon-info"></i>征求意见信息
					</template>
						<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
							<el-row>
								<el-col :span="24">
									<div class="adviceBox" v-for="(item,index) in adviceList" :key="index">
										<div style="text-align:left;">
											<laber v-if="adviceList.length>1">征求意见{{index+1}}</laber>
											<i class="el-icon-close" @click="delAdvice(index)" v-if="index>0"></i>	
										</div>	
											<el-row>
												<el-col :span="6">
													<el-form-item label="征求意见单位：" prop="name0">
														<el-input v-model="form['name'+index]"></el-input>
													</el-form-item>
												</el-col>

												<el-col :span="6">
													<el-form-item label="征求意见时间：">
														<el-date-picker type="date" placeholder="选择日期" v-model="form['date1'+index]"
														style="width: 100%;"></el-date-picker>
													</el-form-item>
												</el-col>

												<el-col :span="6">
													<el-form-item label="是否回复：">
														<el-radio-group v-model="form['resource'+index]">
															<el-radio label="是"></el-radio>
															<el-radio label="否"></el-radio>
														</el-radio-group>
													</el-form-item>
												</el-col>
											</el-row>
											<el-row>
												<el-col :span="24">
													<el-form-item label="征求意见：" prop="name10">
														<el-input type="textarea" :row="3" v-model="form['name1'+index]" placeholder="请输入内容"></el-input>
													</el-form-item>
												</el-col>
											</el-row>
									</div>
								</el-col>
									<el-col :span="24">
										<div class="addAdvice" @click="addAdvice"><div style="font-size: 14px; font-weight: bold;color: #2f76dd;">+新增征求意见</div></div>
									</el-col>
							</el-row>
						</el-form>
				</el-collapse-item>

				<el-collapse-item id="menu2" name="2">
					<template slot="title">
						<i class="header-icon el-icon-info"></i>上传附件
					</template>
					<div class="my-file-table">
						<div class="item-main" >
							<el-row>
								<el-col :span="14" class="col-title"> <p>征求意见单</p></el-col>
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
			 <el-collapse v-show="pageFlag!='total'" v-bind:class="[pageFlag ? 'body-footer-center1' : 'body-footer']">
				<div class="footer-btn-grunp">
					<el-button type="success">保存</el-button>
					<el-button @click="close">关闭</el-button>
				</div>
			</el-collapse>
		</div>
		<!--<div slot="footer" v-show="pageFlag!='total'" class="body-footer">-->
			<!--<div class="footer-btn-grunp">-->
				<!--<el-button type="primary">保存</el-button>-->
				<!--<el-button type="warning" plain>关闭</el-button>-->
			<!--</div>-->
		<!--</div>-->
	</div>

</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	@Component({
        props:['pageFlag'],
		components: {},
		data() {
			return {

				steps: [{
						id: 'step01',
						active: true,
						name: '案件审查/调查基本信息'
					},
					{
						id: 'step02',
						active: false,
						name: '被审查调查人员'
					},
					{
						id: 'step03',
						active: false,
						name: '违纪行为'
					},
					{
						id: 'step04',
						active: false,
						name: '案件审查/调查基本情况'
					},
					{
						id: 'step05',
						active: false,
						name: '涉案款物基本情况'
					},
					{
						id: 'step06',
						active: false,
						name: '潜逃终止情况'
					},
					{
						id: 'step07',
						active: false,
						name: '案件分发信息'
					},
					{
						id: 'step08',
						active: false,
						name: '上传材料信息'
					},
				],
				formLabelAlign: {
					name: '',
					region: '',
					type: ''
				},
				//用于新增征求意见 
              	 adviceList: [{advice: ""}],
				activeNames: ['1', '2', '3', '4', '5', '6', '7', '8'],
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					type: [],
					resource: '',
					desc: ''
				},
				rules: {
					name0: [{
						required: true,
						message: '请输入',
						trigger: 'blur'
					}],
					name10: [{
						required: true,
						message: '请输入',
						trigger: 'blur'
					}],
					name2: [{
						required: true,
						message: '请输入',
						trigger: 'blur'
					}],
					name3: [{
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
				//新增征求意见
              addAdvice() {
                this.adviceList.push({
                    advice:""
                });
            },
               delAdvice(index) {
                this.adviceList.splice(index, 1);
         }
		}
	})
	export default class caseSupplement extends Vue {
        fileList:Array= [{name: '征求意见单1', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '征求意见单2', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

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
		menuGo(item) {
			item.active = true;
			for(let i = 1; i < 9; i++) {
				document.getElementById('menuName' + i).setAttribute('class', '')
				document.getElementById('eleBtnId' + i).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
			}
			this.subMenuItem.forEach(function(v) {
				if(v.id === item.id) {
					v.active = true

				} else {
					v.active = false
				}

			})
			document.getElementById(item.id).scrollIntoView();
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
		close(){
       	 this.$parent.$emit('submitEvent','HYSY');
    	}
		handlePreview(){}
		handleRemove(){}
		beforeRemove(){}
		handleExceed(){}
	}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
	@import "~@/styles/dialogBox.scss";
	@import "~@/styles/common.scss";
	/*控制表单项的公有样式*/
	@import "~@/styles/commonJWJW.scss";



	/*takeAdvice.vue */
     .addAdvice{
        border: 2px dashed rgb(219, 215, 215);
        height: 56px;
        border-radius: 5px;
        background-color: rgb(242, 241, 241);
        cursor: pointer;
        div{
                width: 140px;
                height: 40px;
                margin: 13px auto;
        }
   }
   .adviceBox{
       laber{
               border-left: 5px solid #2f76dd;
               padding: 4px 10px;
               position: relative;
               left: -9px;
               font-family: 'microsoft yahei';
                color: #666;
       }
        padding: 16px;
        border: 1px solid #dcdfe6;
        color: #9e95a6;
		 margin-top: 16px;
   }
    .el-icon-close{
            float: right;
            cursor: pointer;
            font-size: 20px;
    }
  
</style>