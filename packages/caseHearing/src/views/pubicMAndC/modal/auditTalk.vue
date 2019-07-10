<template>
	<!-- 审理谈话-审理案件-->
	<div class="body-container-jwjw">
		<div v-bind:class="[pageFlag ? 'body-container' : 'body-container1']">
			<el-collapse v-model="activeNames">
				<el-collapse-item id="menu1" name="1">
					<template slot="title">
						<i class="header-icon el-icon-info"></i>审理谈话情况
						<el-button size="mini" type="primary" plain style="margin-left: 20px;">历次审理谈话记录</el-button>
						<el-button size="mini" type="primary" plain>新增审理谈话</el-button>
					</template>
					<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
						<el-row>
							<el-col :span="6">
								<el-form-item label="谈话时间：" prop="name">
									<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
								</el-form-item>

							</el-col>
							<el-col :span="6">
								<el-form-item label="谈话地点：" prop="name">
									<el-input v-model="form.name"> </el-input>
								</el-form-item>
							</el-col>

							<el-col :span="6">
								<el-form-item label="谈话人：" prop="name">
									<el-input v-model="form.name1"> </el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="24">
								<el-form-item label="谈话简要说明："></el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="24">
								<div class="explainDiv">
									<el-row class="select-row">
										<el-col :span="10">
											<div>
												<span>本人</span>
												<el-select v-model="value" placeholder="请选择">
													<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
													</el-option>
												</el-select>
												<span>违纪事实</span>
											</div>
										</el-col>
										<el-col :span="10">
											<span>本人</span>
											<el-select v-model="value1" placeholder="请选择">
												<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
												</el-option>
											</el-select>
											<span>处置意见</span>
										</el-col>
									</el-row>
									<el-row>
										<el-col :span="24">
											<el-form-item label="备注：" prop="name">
												<el-input type="textarea" :rows="10" v-model="form.desc" placeholder="请输入内容">
												</el-input>
											</el-form-item>
										</el-col>
									</el-row>
								</div>
							</el-col>
						</el-row>
					</el-form>
				</el-collapse-item>

			</el-collapse>
			 <el-collapse v-show="pageFlag!='total'"   v-bind:class="[pageFlag=='audit' ? 'body-footer-center1' : 'body-footer']">
				<div class="footer-btn-grunp">
					<el-button type="primary">提交</el-button>
					<el-button type="success">保存</el-button>
					<el-button >关闭</el-button>
				</div>
			</el-collapse>
		</div>
		<div slot="footer" v-show="!pageFlag" class="body-footer">
			<div class="footer-btn-grunp">
				<el-button type="primary">提交</el-button>
				<el-button type="success">保存</el-button>
				<el-button >关闭</el-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";

	@Component({
		props: ['pageFlag'],
		components: {},
		data() {
			return {
				options: [{
					value: '1',
					label: '同意'
				}, {
					value: '2',
					label: '不同意'
				}],
				options1: [{
					value: '1',
					label: '接受'
				}, {
					value: '2',
					label: '不接受'
				}],
				value: '',
				value1: '',
				formLabelAlign: {
					name: '',
					region: '',
					type: ''
				},

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
					name: [{
						required: true,
						message: '请输入',
						trigger: 'blur'
					}],
				}
			};
		},

		created() {},
		mounted() {},
		methods: {}
	})
	export default class caseSupplement extends Vue {
		isCollapse: boolean = false;
		focusStep(item) {
			this.steps.forEach((el, index) => {
				el.active = false
			});
			item.active = true
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

	}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
	@import "~@/styles/common.scss";
	@import "~@/styles/dialogBox.scss";
	/*控制表单项的公有样式*/
	
	@import "~@/styles/commonJWJW.scss";
	/*auditTalk_vue*/
	/*审理谈话样式*/
	
	.explainDiv {
		border: 1px solid #dcdfe6;
		/deep/.el-col{
			text-align: left;
		}
		/deep/.select-row{
			margin-top: 20px;
			span{
				font-size: 14px;
			}
			input{
			    height: 32px;
				line-height: 1.77777777;
			}
		}
	}
</style>