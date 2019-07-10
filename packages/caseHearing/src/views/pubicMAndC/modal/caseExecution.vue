<template>
    <!-- 案件执行-审理案件 -->
    <div class="body-container-jwjw">
        <!-- <div class="openLaw_case">
        <img title="案件法规" src="img/Regulations.png">
      </div> -->
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
                <el-collapse-item id="menu1" name="2">
                    <template slot="title">
                        <i class="header-icon el-icon-info"></i>处分情况
                    </template>
                    <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                        <el-row>
                            <el-col :span="6">
	                            <el-form-item label="党纪处分:">
                                    <el-select v-model="form.partyPunish" placeholder="请选择" class="form_select">
                                        <el-option v-for="(option,index) in partyPunish" :key="index"
                                                v-bind:label="option.value"
                                                v-bind:value="option.code"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                    <el-form-item label="批准时间:">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date9"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="审批权限:">
                                    <el-select v-model="form.auditLimited" placeholder="请选择" class="form_select">
                                        <el-option v-for="(option,index) in auditLimited" :key="index"
                                                v-bind:label="option.value"
                                                v-bind:value="option.code"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="6">
	                            <el-form-item label="军纪处分:">
                                    <el-select v-model="form.armyPunish" placeholder="请选择" class="form_select">
                                        <el-option v-for="(option,index) in armyPunish" :key="index"
                                                v-bind:label="option.value"
                                                v-bind:value="option.code"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                    <el-form-item label="批准时间:">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date10"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="审批权限:">
                                    <el-select v-model="form.auditLimited2" placeholder="请选择" class="form_select">
                                        <el-option v-for="(option,index) in auditLimited2" :key="index"
                                                v-bind:label="option.value"
                                                v-bind:value="option.code"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </el-collapse-item>
                <el-collapse-item id="menu1" name="3">
                    <template slot="title">
                        <i class="header-icon el-icon-info"></i>下达处分批复、决定、通令
                    </template>
                    <el-form   class="form-label-top" label-position='top' label-width="120px"  :model="form" :rules="rules">
                        <el-row >
                            <el-col :span="6">
                                <el-form-item label="下达处分批复时间：" >
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="下达处分通令时间：" >
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="下达处分决定时间：" >
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <!--<div class="my-file-table">
                        <div class="item-main" >
                            <el-row>
                                <el-col :span="14" class="col-title"> <p>处分批复</p></el-col>
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
                    </div>-->

                </el-collapse-item>

                <el-collapse-item id="menu1" name="4">
                    <template slot="title">
                        <i class="header-icon el-icon-info"></i>处分执行情况反馈信息
                    </template>

                    <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                        <el-row>
                            <el-col :span="6">
                                <el-form-item label="处分执行单位：">
                                    <el-input v-model="form.depart"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="送达人：">
                                    <el-input v-model="form.name123"></el-input>
                                </el-form-item>
                            </el-col>

                            <el-col :span="6">
                                <el-form-item label="送达时间：">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date11"
                                                    style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row >
                            <el-tabs v-model="activeName" class="jwjw-el-tabs">
                                <el-tab-pane label="处分执行情况反馈" name="first">
                                   <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-tab-pane>
                                <!--<el-tab-pane label="宣布情况及范围" name="second">-->
                                    <!--<el-input type="textarea" v-model="form.desc1"></el-input>-->
                                <!--</el-tab-pane>-->
                            </el-tabs>
                        </el-row>
                    </el-form>
                </el-collapse-item>
            </el-collapse>
			<el-collapse v-show="pageFlag=='total'" class="body-footer">
				<div class="footer-btn-grunp">
	                <el-button type="primary">提交</el-button>
	                <el-button type="success" >保存</el-button>
	                <el-button>关闭</el-button>
	            </div>
			</el-collapse>
        </div>

        <div slot="footer" v-show="pageFlag!='total'" class="body-footer">
            <div class="footer-btn-grunp">
                <el-button type="primary">提交</el-button>
                <el-button type="success" >保存</el-button>
                <el-button >关闭</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    const selectData = require("store/selectData.json");
    @Component({
        props: ['pageFlag'],
        selectData: selectData,
        components: {},
        data() {
            return {
                activeName: 'first',
                activeNames: ['1', '2', '3', '4', '5', '6', '7', '8'],

                form: {
                    name: '张某某',
                    depart:'',
                    region: '',
                    date1: '',
                    date2: '',
                    date3: '',
                    type: [],
                    resource: '男',
                    desc: '',
                    name1:'原xx军区xx部副部长',
                    name2:'副军级',
                    partyPunish:'',
                    auditLimited:'',
                    auditLimited2:'',
                    armyPunish:''
                },
                auditLimited:[
                                {"code":"01", "value":"中共中央"}, 
                                {"code":"02", "value":"中央军委"},
                                {"code":"03", "value":"军委纪委"},
                                {"code":"04", "value":"大单位"}
                             ],
                auditLimited2:[
                                {"code":"01", "value":"中共中央"}, 
                                {"code":"02", "value":"军委纪委"},
                                {"code":"03", "value":"大单位"}
                             ],
                partyPunish:selectData.partyPunish,//党纪处分
                armyPunish:selectData.armyPunish,//军纪处分
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
        methods: {}
    })
    export default class caseSupplement extends Vue {
        // 附件列表
        visaForm: object = {
            registerFiles: [], // 移送审理案件材料交接登记表
            batchFiles: [] // 案件移送审理呈批表
        }
//       下载
        visaObj={};
       

       
        fileList:Array= [{name: '处分批复', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        fileList2:Array= [{name: '处分决定', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        fileList3:Array= [{name: '处分通令', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        fileList4:Array= [{name: '处分登记表', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

       

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

        setBatchFiles(file, fileList) {
            this.visaForm.batchFiles.push(file)
            const date = new Date()
            for (let i = 0; i < this.visaForm.batchFiles.length; i++) {
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
        handleRemove(file, fileList) {
            console.log(file, fileList);
        }
        handlePreview(file) {
            console.log(file);
        }
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        }
        beforeRemove(index) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.fileList.splice(index,1)
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        }

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/common.scss";
    @import "~@/styles/dialogBox.scss";
    /*控制表单项的公有样式*/
    @import "~@/styles/commonJWJW.scss";
    /deep/.jwjw-el-tabs{
        .el-tabs__header{
            position: relative !important;

        }
    }
    .punishForm{
       .el-row{
            margin-bottom: 0px !important;
        }
        position: relative;
        top: 18px;
        left: -10px;
    }

</style>