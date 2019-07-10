<template>
    <div class="el-main bg-layout">
      <!-- 弹出表单 -->
        <el-dialog class="mc-dialog-medium" title="借阅登记" lock-scroll :visible.sync="dialogFormVisible"  width="60%" :close-on-click-modal="false" center>
            <el-form :model="form" class="checkDalogForm" :inline="true" label-position="left" label-width="50%">
                <el-row :gutter="20">
                    <el-col :span="8">
                         <el-form-item label="案件标题：" class="caseName"  >
                            <el-input v-model="form.caseName" readonly=true autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="登记人："  class="rightInput" >
                            <el-input v-model="form.name1" readonly=true autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="借阅人(单位)："   >
                            <el-input v-model="form.name2" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="借阅目的："   >
                            <el-select v-model="form.region" placeholder="请选择">
                                <el-option label="目的一" value="shanghai"></el-option>
                                <el-option label="目的二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="借阅卷数：" class="rightInput"  >
                            <el-input v-model="form.name3" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                       <el-form-item label="证件类型："   >
                            <el-select v-model="form.region2" placeholder="请选择">
                                <el-option label="身份证" value="sfz"></el-option>
                                <el-option label="XXX官证" value="jgz"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                         <el-form-item label="证件号码："   >
                            <el-input v-model="form.name4" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="联系电话：" class="rightInput" >
                            <el-input v-model="form.name5" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label="借阅范围："   >
                            <el-select v-model="form.region3" placeholder="请选择">
                                <el-option label="范围一" value="shanghai"></el-option>
                                <el-option label="范围二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="借阅期间："  class="checkDate"  >
                            <el-date-picker v-model="value6" type="daterange" range-separator="-" start-placeholder="开始日期"  end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="审批人：" >
                            <el-input v-model="form.name6" autocomplete="off"></el-input>
                        </el-form-item>
                </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                       <el-form-item label="申请类型："   >
                            <el-radio v-model="radio" label="1">电子</el-radio>
                            <el-radio v-model="radio" label="2">纸质</el-radio>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                          <el-form-item label="复印带走："   class="caseName rightInput"  >
                            <el-radio v-model="radio1" label="1">是</el-radio>
                            <el-radio v-model="radio1" label="2">否</el-radio>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20" v-if="radio == 2">
                    <el-col :span="8">
                       <el-form-item label="审批领导："   >
                            <el-input v-model="form.name9" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="审批意见："   class="caseName rightInput"  >
                            <el-input v-model="form.name10" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                 <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="上传文件：" style="margin-right: 2%;">
                            <el-input v-model="form.name7" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                         <el-form-item label=" " class="rightInput">
                            <el-upload class="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
                                    :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                                <el-button size="small" type="primary">上传文件</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="备注："   class="remarks"  >
                            <el-input v-model="form.name8" class="remarksInput" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>
        <!-- 查询条件 -->
        <div class="block">
            <el-row class="title"> 调阅查询 </el-row>
            <el-form :inline="true" :model="keyWords" ref="keyWords" class="demo-form-inline search">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="案件标题:" prop="caseName">
                            <el-input v-model="keyWords.caseName" placeholder="案件名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="被调查人:" prop="accusedName">
                            <el-input v-model="keyWords.accusedName" placeholder="被调查人"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item>
                            <el-button type="primary" size="small" @click=search()  icon="el-icon-search">查询</el-button>
                            <el-button  size="small" @click="resetForm('keyWords')">重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <!-- 查询结果 -->
        <div class="block margin-top">
            <el-tabs   v-model="tabsName" >
                <el-tab-pane label="调阅列表" name="first">
                    <div class="table">
                        <el-table 
                                :data="tableData"
                                border
                                :height=200
                                :row-class-name="'table-header-bg1'"
                                :header-cell-class-name="'table-header-bg'"
                                :cell-class-name="'tableContent-bg'">
                            <el-table-column  type="index"  label="序号" width="60">  </el-table-column>
                            <el-table-column  prop="date" label="年份" width="100" align="center"> </el-table-column>
                            <el-table-column  prop="caseName" label="案件标题" width="180" align="center" show-overflow-tooltip> </el-table-column>
                            <el-table-column  prop="accusedName" label="被调查人" align="center"> </el-table-column>
                            <el-table-column  prop="unit" label="工作单位及职务" width="140" align="center"> </el-table-column>
                            <el-table-column  prop="acceptPerson" label="承办人" align="center">  </el-table-column>
                            <el-table-column  prop="archivesState" label="档案状态" align="center"> </el-table-column>
                            <el-table-column  prop="wareState" label="在库状态" align="center"> </el-table-column>
                            <el-table-column  prop="virtualArchives" label="电子档案" align="center"> </el-table-column>
                            <el-table-column  fixed="right"  label="操作" align="center" width="120">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="register(scope.$index, scope.row)" > 登记 </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-row>
                            <div class="block page-positton">
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[100, 200, 300, 400]"
                                    :page-size="100"
                                    small
                                    background
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="400">
                                </el-pagination>
                            </div>
                        </el-row>
                    </div>
                 </el-tab-pane>
                 <el-tab-pane label="历次调阅记录" name="second">
                    <div class="table">
                        <el-table 
                                :data="tableData2"
                                border
                                :height=200
                                :row-class-name="'table-header-bg1'"
                                :header-cell-class-name="'table-header-bg'"
                                :cell-class-name="'tableContent-bg'">
                            <el-table-column  type="index"  label="序号" width="60" align="center">  </el-table-column>
                            <el-table-column  prop="caseName" label="案件标题" width="180" align="center" show-overflow-tooltip> </el-table-column>
                            <el-table-column  prop="name1" label="档号" width="220" align="center"> </el-table-column>
                            <el-table-column  prop="name2" label="调阅人" align="center"> </el-table-column>
                            <el-table-column  prop="name3" label="调用时间" align="center">  </el-table-column>
                            <el-table-column  prop="name4" label="调阅类型" align="center"> </el-table-column>
                            <el-table-column  prop="name5" label="登记人" align="center"> </el-table-column>
                            <el-table-column  prop="name6" label="归还时间" align="center"> </el-table-column>
                            <el-table-column  prop="name7" label="接收人" align="center"> </el-table-column>
                        </el-table>
                        <el-row>
                            <div class="block page-positton">
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage2"
                                    :page-sizes="[100, 200, 300, 400]"
                                    :page-size="100"
                                    small
                                    background
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="400">
                                </el-pagination>
                            </div>
                        </el-row>
                    </div>
                 </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Store from './store'
    @Component({
        components: {},
        data() {
            return {
                tableData: [{
                    id: '00000000000020190010',
                    caseName: '测试自办案件01',
                    date: '2019',
                    accusedName: '李某某',
                    unit: 'XX单位',
                    acceptPerson: '测试四',
                    archivesState: '入库档案',
                    wareState: '在库',
                    virtualArchives: '有'
                }, {
                    id: '00000000000020190010',
                    caseName: '测试自办案件02',
                    date: '2019',
                    accusedName: '李某某',
                    unit: 'XX单位',
                    acceptPerson: '测试四',
                    archivesState: '入库档案',
                    wareState: '在库',
                    virtualArchives: '有'
                }, {
                    id: '00000000000020190010',
                    caseName: '测试自办案件03',
                    date: '2019',
                    accusedName: '李某某',
                    unit: 'XX单位',
                    acceptPerson: '测试四',
                    archivesState: '入库档案',
                    wareState: '在库',
                    virtualArchives: '有'
                },{
                    id: '00000000000020190010',
                    caseName: '测试自办案件04',
                    date: '2019',
                    accusedName: '李某某',
                    unit: 'XX单位',
                    acceptPerson: '测试四',
                    archivesState: '入库档案',
                    wareState: '不在库',
                    virtualArchives: '有'
                }, {
                    id: '00000000000020190010',
                    caseName: '测试自办案件05',
                    date: '2019',
                    accusedName: '李某某',
                    unit: 'XX单位',
                    acceptPerson: '测试四',
                    archivesState: '入库档案',
                    wareState: '已销毁',
                    virtualArchives: '无'
                }],
                tableData2:[{
                    caseName:'测试自办案件01',
                    name1:'00000000000020190010',
                    name2:'王某某',
                    name3:'2019-2-1',
                    name4:'纸质',
                    name5:'张某某',
                    name6:'2019-3-1',
                    name7:'刘某某'
                },{
                    caseName:'测试自办案件02',
                    name1:'00000000000020190011',
                    name2:'王某某',
                    name3:'2019-2-1',
                    name4:'电子',
                    name5:'张某某',
                    name6:'2019-3-1',
                    name7:'刘某某'
                },{
                    caseName:'测试自办案件03',
                    name1:'00000000000020190012',
                    name2:'王某某',
                    name3:'2019-2-1',
                    name4:'纸质',
                    name5:'张某某',
                    name6:'2019-3-1',
                    name7:'刘某某'
                },{
                    caseName:'测试自办案件04',
                    name1:'00000000000020190013',
                    name2:'王某某',
                    name3:'2019-2-1',
                    name4:'纸质',
                    name5:'张某某',
                    name6:'2019-3-1',
                    name7:'刘某某'
                },{
                    caseName:'测试自办案件05',
                    name1:'00000000000020190014',
                    name2:'王某某',
                    name3:'2019-2-1',
                    name4:'电子',
                    name5:'张某某',
                    name6:'2019-3-1',
                    name7:'刘某某'
                }],
                keyWords: {
                    caseName:'',
                    accusedName:''
                },
                dialogFormVisible: false,
                form: {
                    caseName:'',
                    name1: '李建国',
                    name2: '',
                    name3: '',
                    name4: '',
                    name5: '',
                    name6: '',
                    name7: '',
                    name8: '',
                    name9: '',
                    name10: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                currentPage2:1,
                currentPage4:1,
                value6: '',
                radio:'1',
                radio1:'1',
                fileList: [],
                tabsName: 'first'
            }
        },
        created(){},
        mounted(){
            console.log(Store)
            console.log('信访子系统首页')
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件,本次选择了 ${files.length} 个文件共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            register(index, row){
                console.log(index, row.caseName);
                this.$data.form.caseName = row.caseName;
                this.$data.dialogFormVisible = true;
            }
        }
    })
    export default class checkRegist extends Vue {
        $refs: {
            audio: HTMLAudioElement,
            lyricsLines: HTMLDivElement
        }
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/queryList.scss";
</style>