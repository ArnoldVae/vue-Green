<template>
    <!--中止审理- 审理意见-审理案件 -->
    <div>
            <el-collapse v-model="activeNames" class="collapse">
                <el-collapse-item id="menu2" name="1" >
                    <template slot="title">
                        <i class="header-icon el-icon-info"></i>中止审理
                    </template>
                    <div class="form-content">
                    <el-form class="form-label-top"  label-position='top' :model="form" :rules="rules">
                        <el-row :gutter="20">
                            <el-col :span="6">
                                <el-form-item label="中止时间：">
                                    <el-date-picker type="date" class="input" placeholder="选择日期"
                                                    v-model="form.date2"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="中止审理原因：" prop="name">
                                    <el-select v-model="value10" multiple placeholder="请选择">
                                                                              
                                        <el-option v-for="item in options5" :key="item.value"
                                                   :label="item.label" :value="item.value">
                                                                                
                                        </el-option>
                                                                                
                                    </el-select>
                                        
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
					</div>
                </el-collapse-item>
            </el-collapse>
            <div class="backplane-footer-center">
                <el-button type="primary" @click="stateTrans">提交</el-button>
                 <el-button type="success"  @click="saveForm()">保存</el-button>
			    <el-button  @click="closeForm()">返回</el-button>
            </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        props: ['pageFlag'],
        components: {},
        data() {
            return {
                options5: [{
                    value: '1',
                    label: '关键证据缺失'
                }, {
                    value: '2',
                    label: '发现新的违纪问题线索'
                }, {
                    value: '3',
                    label: '待同案违纪人员一并处理'
                }],
                value10: [],
                isCollapse: "left",
                activeName: 'third',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },

                activeNames: ['1'],

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
                    name: [
                        {required: true, message: '请输入', trigger: 'blur'}
                    ],
                }
            };
        },

        created() {
        },
        mounted() {
        },
        methods: {
            stateTrans() {
                this.$confirm('提交后将进入会议审议环节，确定提交？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //父页面调用方法
                    this.$emit('submitEvent', 'SLYJ')
                }).catch(() => {

                });
            }
        }
    })
    export default class caseSupplement extends Vue {
        isCollapse: boolean = false;

        downLoadFile() {
            var $eleForm = $("<form method='get'></form>");

            $eleForm.attr("action", "img/123.docx");

            $(document.body).append($eleForm);

            //提交表单，实现下载
            $eleForm.submit();

//        window.open('')
        }
         saveForm(){
            this.$parent.$emit("closePage");
            this.$message({
			  type: "success",
			  message: "保存成功!"
			});
        }
		
		closeForm(){
			this.$parent.$emit("closePage");
		}

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>