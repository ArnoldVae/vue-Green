<template>
    <!-- 领导签批-提前介入-->
    <div >
            <el-collapse class="collapse" v-model="activeNames">
                <el-collapse-item id="menu1" name="1">
                    <template slot="title">
                        <i class="header-icon el-icon-info"></i>领导签批
                    </template>
                     <div class="form-content">
                        <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="批示人：" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="批示时间：" prop="name">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="18">
                                    <el-form-item label="批示意见：" prop="name">
                                        <el-input type="textarea" :autosize="{ minRows: 4}"  v-model="form.desc" placeholder="请输入内容">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                     </div>
                </el-collapse-item>

                <el-collapse-item id="menu2" name="2">
                    <template slot="title">
                        <i class="header-icon el-icon-info"></i>上传领导签批扫描件
                    </template>
                    <div class="form-content" style="padding: 0">
                        <div class="my-file-table">
                            <div class="item-main" >
                                <el-row>
                                    <el-col :span="14" class="col-title"> <p>领导签批扫描件</p></el-col>
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
                    </div>
                </el-collapse-item>
            </el-collapse>
            <div class="backplane-footer-center"  v-if="pageFlag!='details'">
                <el-button type="primary" @click="stateTrans">提交</el-button>
                <el-button type="success" >保存</el-button>
                <el-button @click="close">返回</el-button>
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
                activeNames: ['1', '2', '3'],

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

        created() {
        },
        mounted() {
        },
        methods: {
            stateTrans() {
                this.$confirm('提交后将进入审核结案环节，确定提交？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //调用父页面方法
                    this.$parent.$emit('submitEvent', 'LDQP')
                }).catch(() => {

                });
            },
            close(){
                     this.$parent.$emit('closePage','LDQP')
            },
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
    export default class caseSupplement extends Vue {
        isCollapse: string = 'left'
        fileList:Array= [{name: '领导签批扫描件1', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '领导签批扫描件2', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

        // 附件列表
        visaForm: object = {
            registerFiles: [], // 扫描件

        }


    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
</style>