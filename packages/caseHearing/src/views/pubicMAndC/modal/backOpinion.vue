<template>
	<!-- 反馈意见-审核案件-->
	<div class="body-container-jwjw">
		<div class="body-container">
			
					<el-collapse v-model="activeNames">
						<el-collapse-item id="menu1" name="1">
							<template slot="title">
								<i class="header-icon el-icon-info"></i>处分对象基本情况
							</template>
							<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
								<el-row>
									<el-col :span="6">
                                <el-form-item label="姓名：" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="部职别：">
                                    <el-input v-model="form.name1"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="职级：">
                                    <el-input v-model="form.name2"></el-input>
                                </el-form-item>
                            </el-col>
								</el-row>
							
							</el-form>
						</el-collapse-item>

						<el-collapse-item id="menu2" name="2">
							<template slot="title">
								<i class="header-icon el-icon-info"></i>反馈信息
							</template>
                            	<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
								
								<el-row>
									<el-col :span="24" >
										<el-form-item label="反馈意见:" prop="name">
											<el-input type="textarea"  :rows="10" v-model="form.desc" placeholder="请输入内容">
											</el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
						</el-collapse-item>
					</el-collapse>
		</div>
            <div slot="footer" v-show="pageFlag!='total'" class="body-footer">
                <div class="footer-btn-grunp">
                    <el-button type="primary">提交</el-button>
                    <el-button type="success" >保存</el-button>
                    <el-button  >关闭</el-button>
                </div>
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
				
				formLabelAlign: {
					name: '',
					region: '',
					type: ''
				},
				activeNames: ['1', '2', '3', '4', '5', '6', '7', '8'],

				form: {
					name: '张某某',
					name1: '原xx军区xx部副部长',
					name2: '副军级',
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
		menuGo(item) {
		}
	}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
	@import "~@/styles/common.scss";
	@import "~@/styles/dialogBox.scss";
	/*控制表单项的公有样式*/
	
	@import "~@/styles/commonJWJW.scss";

	
</style>