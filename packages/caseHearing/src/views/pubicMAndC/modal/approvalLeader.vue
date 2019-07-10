<template>
	<!-- 领导签批-->
	<div class="body-container-jwjw">
		<div v-bind:class="[pageFlag&&pageFlag=='total'? 'body-container' : 'body-container1']">
					<el-collapse v-model="activeNames">
						<el-collapse-item id="menu2" name="2">
							<template slot="title">
								<i class="header-icon el-icon-info"></i>领导意见
							</template>
                            	<el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
								<el-row>
									<el-col :span="8" >
										<el-form-item label="报批领导时间:" prop="name">
											<el-date-picker type="date" placeholder="选择日期" v-model="form.date11"
                                                    style="width: 100%;"></el-date-picker>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="24" >
										<el-form-item label="领导意见:" prop="name">
											<el-input type="textarea"  :rows="10" v-model="form.desc" placeholder="请输入内容">
											</el-input>
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
						</el-collapse-item>
					</el-collapse>
					<el-collapse v-show="pageFlag!='total'" v-bind:class="[pageFlag ? 'body-footer-center' : 'body-footer']">
            	<div class="footer-btn-grunp">
									<el-button type="primary" @click="stateTrans">提交</el-button>
					        <el-button type="success" >保存</el-button>
	                <el-button >关闭</el-button>
	            </div>
            </el-collapse>
		</div>
            <div slot="footer" v-show="!pageFlag" class="body-footer">
            <div class="footer-btn-grunp">
							  <el-button type="primary" @click="stateTrans">提交</el-button>
			        	<el-button type="success" >保存</el-button>
                <el-button>关闭</el-button>
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
		methods: {
			stateTrans(){
	        	this.$confirm('提交后将进入反馈意见环节，确定提交？','提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	// 父页 面调用方法
		          this.$parent.$emit('submitEvent','BPLD'); //向上级的上级传参
		        }).catch(() => {
		                  
			    });
			}
		}
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