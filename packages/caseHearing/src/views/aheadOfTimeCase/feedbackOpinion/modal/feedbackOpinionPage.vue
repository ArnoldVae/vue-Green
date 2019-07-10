<template>
	<!-- 反馈意见-审核案件-->
	<div class="backplane">
		 <div class="backplane-Content">
			<el-collapse class="collapse" v-model="activeNames">
				<el-collapse-item id="menu1" name="1">
					<template slot="title">
						<i class="header-icon el-icon-info"></i>处分对象基本情况
					</template>
					<div class="form-content">
						<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
							<el-row :gutter="20">
								<el-col :span="6">
									<el-form-item label="姓名：" prop="name">
										<el-input v-model="form.name" disabled></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="12">
                                                <el-form-item label="部职别：" prop="name1">
                                                    <el-input placeholder="请输入内容" v-model="form.name1" disabled >
                                                        <el-select v-model="form.departGrade" slot="prepend" placeholder="请选择" style=" width: 400px;" disabled>
                                                            <el-option v-for="(option,index) in transDepart" :key="index"
                                                                   v-bind:label="option.value"
                                                                   v-bind:value="option.code">
                                                            </el-option>
                                                        </el-select>
                                                    </el-input>
                                                </el-form-item>
                                            </el-col>
								<el-col :span="6">
									<el-form-item label="职级：" >
										<el-input v-model="form.name2" disabled></el-input>
									</el-form-item>
								</el-col>
							</el-row>
						
						</el-form>
					</div>
				</el-collapse-item>
				<el-collapse-item id="menu2" name="2">
					<template slot="title">
						<i class="header-icon el-icon-info"></i>反馈信息
					</template>
					<div class="form-content">
							<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
								<el-row :gutter="20">
									<el-col :span="18" >
										<el-form-item label="反馈意见:" prop="name">
											<el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.desc" placeholder="请输入内容">
											</el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
					</div>
				</el-collapse-item>
			</el-collapse>
		 </div>
		<div class="backplane-footer-center">
			<el-button type="primary">提交</el-button>
			<el-button type="success" >保存</el-button>
			<el-button  @click="close">返回</el-button>
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
				activeNames: ['1', '2', '3', '4', '5', '6', '7', '8'],

				form: {
					name: '张某某',
					name1: '副部长',
					name2: '副军级',
					departGrade:'军委办公厅',
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
		methods: {
			close(){
                     this.$emit('submitEvent')
            }
		}
	})
	export default class caseSupplement extends Vue {
		menuGo(item) {
		}
	}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
</style>