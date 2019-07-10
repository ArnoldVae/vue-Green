<template>
    <!-- 领导签批-->
    <div>
            <el-collapse v-model="activeNames" class="collapse" ref="csElCoolapase">
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
                                    <el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.desc" placeholder="请输入内容">
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
                                <el-col :span="14" class="col-title"> <p>领导签批意见</p></el-col>
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

       
        
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
   
    @Component({
        props: ['pageFlag'],
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
                    //父页面调用方法
                    this.$emit('submitEvent', 'LDQP')
                }).catch(() => {

                });
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
        fileList:Array= [{name: '领导签批意见1', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '领导签批意见2', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

        // 附件列表
        visaForm: object = {
            registerFiles: [], // 扫描件

        }

        menuGo(item) {
            item.active = true;
            for (let i = 1; i < 9; i++) {
                document.getElementById('menuName' + i).setAttribute('class', '')
                document.getElementById('eleBtnId' + i).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
            }
            this.subMenuItem.forEach(function (v) {
                if (v.id === item.id) {
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
            for (let i = 0; i < this.visaForm.registerFiles.length; i++) {
                this.visaForm.registerFiles[i].documentname = this.visaForm.registerFiles[i].name
                this.visaForm.registerFiles[i].filesize = this.visaForm.registerFiles[i].size
                this.visaForm.registerFiles[i].documentdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            }
        }

        // 删除附件

        delRegisterFiles(index) {
            this.visaForm.registerFiles.splice(index, 1)
        }
    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>