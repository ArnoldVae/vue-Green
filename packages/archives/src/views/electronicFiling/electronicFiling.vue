
<template>
    <div class="el-main bg-layout">
        <!--查询条件-->
        <div class="block">
            <el-row class="title"> <i class="el-icon-date">检索查询 </i></el-row>
            <el-form :inline="true" :model="keyWords" ref="keyWords" class="demo-form-inline search">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="案件名称:" prop="caseName">
                            <el-input v-model="formInline.caseName" placeholder="案件名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="提交人:" prop="name">
                            <el-input v-model="formInline.subPerson" placeholder="提交人"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="4">
                        <el-form-item>
                            <el-button type="primary" size="small" @click=search()  icon="el-icon-search">查询</el-button>
                            <el-button  size="small" @click="resetForm('formInline')">重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <!--  查询结果-->
        <div class="block margin-top">
            <el-row class="title"><i class="el-icon-date">检索列表</i></el-row>
                <div class="table">
                <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                          border
                          stripe
                          :height=385
                          :row-class-name="'table-header-bg1'"
                          :header-cell-class-name="'table-header-bg'"
                          :cell-class-name="'tableContent-bg'"
                >
                     <el-table-column  type="selection"  width="35">  </el-table-column>
                    <el-table-column label="序号" type="index" align="center" show-overflow-tooltip width="50">
                    </el-table-column>
                    <el-table-column  v-if="false" prop="id" label="id" width="120" align="center"> </el-table-column>
                    <el-table-column  prop="caseName" label="案件名称" width="200" align="center" show-overflow-tooltip> </el-table-column>
                    <el-table-column  prop="caseNum" label="案件编号" align="center" width="180"> </el-table-column>
                    <el-table-column  prop="caseSource" label="案件来源" align="center"> </el-table-column>
                    <el-table-column  prop="subTime" label="提交时间" align="center" show-overflow-tooltip> </el-table-column>
                    <el-table-column  prop="subPerson" label="提交人" align="center" width="150">  </el-table-column>
                    <el-table-column  prop="fileState" label="归档状态" align="center" > </el-table-column>
                    <el-table-column  fixed="right"  label="操作" align="center" width="120">
                        <template slot-scope="scope">
                            <el-button type="text"  size="medium" @click="dialogFormVisible2 = true">归档</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                    <el-row>
                        <div class="block page-positton">
                            <el-pagination
                                    class="aa"
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage"
                                    :page-sizes="[10, 20, 40, 100]"
                                    small
                                    background
                                    :page-size="pagesize"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="tableData.length">
                            </el-pagination></div></el-row>
            </div>
            <el-dialog class="mc-dialog-big" title="录入信息"  meta="{keepAlive: false}"   :visible.sync="dialogFormVisible2" @showParentComp="eventFromChild" width="100% "top="0" id="caseMsg" >
                <electronic-filing-info  @closeDialog="closeDialog"></electronic-filing-info>
            </el-dialog>

        </div>
    </div>
</template>
<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';
    import Store from '../evocatoryRes/store'
    import ElectronicFilingInfo from "@/views/electronicFiling/modal/electronicFilingInfo.vue";
    @Component({
        components: {ElectronicFilingInfo},
        data() {
            return {
                data: [],
                currentPage:1,
                pagesize:10,
                dialogFormVisible2:false,
                tableData: [{
                    id: '000000000000201900101',
                    caseName: '关于李某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900102',
                    caseName: '关于王某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900103',
                    caseName: '关于张某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900104',
                    caseName: '关于孙某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900105',
                    caseName: '关于孔某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900106',
                    caseName: '关于汪某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900107',
                    caseName: '关于周某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900108',
                    caseName: '关于赵某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900109',
                    caseName: '关于钱某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900110',
                    caseName: '关于葛某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900111',
                    caseName: '关于纪某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900112',
                    caseName: '关于何某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900113',
                    caseName: '关于彰某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900114',
                    caseName: '关于季某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900115',
                    caseName: '关于李某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900116',
                    caseName: '关于李某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900117',
                    caseName: '关于李某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900118',
                    caseName: '关于李某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900119',
                    caseName: '关于李某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900120',
                    caseName: '关于李某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900121',
                    caseName: '关于李某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },{
                    id: '000000000000201900122',
                    caseName: '关于李某某违纪案件',
                    caseNum: '00000000000020190010',
                    caseSource:'上级机关交办的案件',
                    subTime: '2019-02-25 12:01:49',
                    subPerson: '李某某',
                    fileState: '待归档',
                },],
                formInline: {
                    caseName:'',
                    caseNum: '',
                    subTime: '',
                    subPerson: '',
                    subPerson: '',
                    fileState: ''
                },
            }
        },
        created(){},
        mounted(){
            console.log(Store)
            console.log('案件审理档案')
        },
        methods: {
            closeDialog(a){
                this.dialogFormVisible2=false;
            },
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            }
        }
    })
    export default class CaseDistributed extends Vue {
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
<style ref="stylesheet/scss" lang="scss">
    .aa{
    .el-select .el-input input{
        width: 100px ;
    }
    }
</style>
