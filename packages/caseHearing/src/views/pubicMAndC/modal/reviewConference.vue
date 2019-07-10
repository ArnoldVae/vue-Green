<template style="background: #f1f1f1">
    <!-- 会议审议 -->
    <div class="body-container-jwjw" >
        <div  v-bind:class="[pageFlag? 'body-container1' : 'body-container']" >
            <el-collapse v-model="activeNames">
                <el-collapse-item id="menu1" name="1">
                    <template slot="title">
                        <i class="header-icon el-icon-info"></i>本次会议审议信息
                        <el-button size="mini" type="primary" plain>查看历次审议记录</el-button>
                    </template>
                    <div class="form-content">
                        <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="会议时间:" prop="name">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>

                                <el-col :span="8">
                                    <el-form-item label="会议类型:">
                                        <el-select class="form_select" v-model="form.metttingType" placeholder="请选择">
                                            <el-option v-for="(option,index) in metttingType" :key="index"
                                                       v-bind:label="option.value"
                                                       v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="党纪处分:">
                                        <el-select class="form_select" v-model="form.partyDiscip" placeholder="请选择">
                                            <el-option v-for="(option,index) in partyDiscip" :key="index"
                                                       v-bind:label="option.value"
                                                       v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="军纪处分:">
                                        <el-select class="form_select" v-model="form.militaryDiscip" placeholder="请选择">
                                            <el-option v-for="(option,index) in militaryDiscip" :key="index"
                                                       v-bind:label="option.value"
                                                       v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>

                            </el-row>

                        </el-form>
                    </div>
                </el-collapse-item>

                <el-collapse-item id="menu1" name="2">
                    <template slot="title">
                        <i class="header-icon el-icon-info"></i>上传附件
                    </template>
                    <div class="tab-content">

                        <h3>会议纪要</h3>

                        <el-row>
                            <div class="dev_show_table">
                                <el-row>
                                    <el-col :span="12" :offset="12" style="text-align: right;">
                                        <el-upload multiple :on-change="setRegisterFiles" :action="''" ref="changeFile"
                                                   :auto-upload="false" :file-list="visaForm.registerFiles"
                                                   :show-file-list="false" :data="visaObj">
                                            <el-button type="text" size="small" class="font-size-14"><i
                                                    class="el-icon-upload2">&nbsp;</i>上传
                                            </el-button>
                                        </el-upload>
                                    </el-col>
                                </el-row>
                                <el-table highlight-current-row border
                                          :data="visaForm.registerFiles"
                                          size="small"
                                          :header-cell-style="{background:'#f3f3f3', 'text-align': 'center', color: '#666',fontSize:'13px',height:'35px',border:'0.5px solid #e5e5e5',padding:'6px 0',fontWeight:'500'}">
                                    <el-table-column type="index" label="序号" align="center" width="50"/>
                                    <el-table-column show-overflow-tooltip prop="documentname" label="附件"
                                                     header-align="center" align="center"/>
                                    <el-table-column prop="documentdate" align="center" label="上传时间" width="150px">
                                        <template slot-scope="scope">
                                            {{ scope.row.documentdate | formatDate }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="" align="center" label="操作" width="150px">
                                        <template slot-scope="scope">
                                            <el-button-group class="button_group">
                                                <el-row :gutter="20">
                                                    <el-col :span="8">
                                                        <el-button type="text" size="small"
                                                                   @click="delRegisterFiles(scope.$index)">删除
                                                        </el-button>
                                                    </el-col>
                                                </el-row>
                                            </el-button-group>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-row>

                    </div>
                </el-collapse-item>
            </el-collapse>


        </div>
        <div slot="footer"   v-bind:class="[pageFlag ? 'body-footer-center1' : 'body-footer']">
            <div class="footer-btn-grunp">
                <el-button type="primary" @click="stateTrans">提交</el-button>
                <el-button type="success" >保存</el-button>
                <el-button >关闭</el-button>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Deliberations from "./deliberations.vue"


    const selectData = require("store/selectData.json");
    @Component({
        props: ['pageFlag'],
        selectData: selectData,
        components: {Deliberations},
        data() {
            return {
                visaObj: {},
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                activeNames: ['1', '2', '3', '4', '5', '6', '7', '8'],
                form: {
                    metttingType: '',//会议类型
                    partyDiscip: '',//党纪处分
                    militaryDiscip: '',//军纪处分
                    fileRecord: '01',
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '01',
                    resource1: '01',
                    resource2: '01',
                    desc: '',
                    depart: []
                },
                partyDiscip: selectData.partyDiscip,//党纪处分
                militaryDiscip: selectData.militaryDiscip,//军纪处分
                metttingType: selectData.metttingType,//会议类型
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
                this.$confirm('提交后将进入审核结案环节，确定提交？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //父页面调用方法
                    this.$emit('submitEvent')
                }).catch(() => {

                });
            }
        }
    })
    export default class caseSupplement extends Vue {
        isCollapse:string='left'
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

        showFlag: boolean = false;
        dialogFlag = {
            allPrevious: false,

        }

        allPrevious(item) {
            this.dialogFlag[item] = true
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

        stateTrans() {
            this.$confirm('提交后将进入审核结案环节，确定提交？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //父页面调用方法
                this.$emit('submitEvent', 'HYSY')
            }).catch(() => {

            });
        }
    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/common.scss";
    /*控制表单项的公有样式*/
    @import "~@/styles/commonJWJW.scss";

    .shenli {
        margin: auto;
        height: 65%;
        width: 45%;
        /deep/ .el-dialog__header {
            background: #fff;
            padding: 0px;
            width: 45%;
            z-index: 999;
        }

        .el-dialog {

            margin-left: 20%;
        }
        /deep/ .el-dialog__body {
            background: #f7f7f7 !important;

        }
    }
</style>