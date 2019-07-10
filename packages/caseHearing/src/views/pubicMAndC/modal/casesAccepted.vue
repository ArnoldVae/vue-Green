<!--案件受理-不予受理-审理案件-->
<template >
	<div class="body-container-jwjw">
        <div class="body-container">
            <el-collapse v-model="activeNames">
                <el-collapse-item id="menu2" name="1" >
                    <template slot="title">
                        <i class="header-icon el-icon-info"></i>不予受理
                    </template>
                    <el-form class="form-label-top" label-position='top' :model="formLabelAlign" :rules="rules">
                        <el-row>
                            <el-col :span="12">
								<el-form-item label="不予受理原因：">
										<el-select v-model="form.refusalCause" multiple  placeholder="请选择">
											<el-option v-for="item in refusalCause" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>									
								</el-form-item>
							</el-col>
                        </el-row>
                    </el-form>

                </el-collapse-item>
            </el-collapse>
			<el-collapse v-show="pageFlag=='total'" class="body-footer">
				<div class="footer-btn-grunp">
					<el-button type="primary" >提交</el-button>
					<el-button type="success" >保存</el-button>
					<el-button>重置</el-button>
				</div>
			</el-collapse>		 
        </div>
        <div slot="footer" v-show="pageFlag!='total'" class="body-footer">
			<div class="footer-btn-grunp">
				<el-button type="primary" @click="stateTrans" >提交</el-button>
                      <el-button type="success">保存</el-button>
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
				form: {
					refusalCause:''
				},
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
				}]
			};
		},

		created() {
			console.log(this.message);
		},
		mounted() {},
		methods: {}
	})
	export default class formAudit extends Vue {
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

		handleChange() {
			this.activeNames = ['1', '2']

		}

		mounted() {	}
	
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