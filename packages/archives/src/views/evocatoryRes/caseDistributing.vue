<template>
    <div class="el-main bg-layout">
        <div class="block">
            <el-row class="title"> 检索查询 </el-row>
            <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline search">
                <el-row>
                    <el-col :span="5">
                        <el-form-item label="案件名称:" prop="caseName">
                            <el-input v-model="formInline.caseName" placeholder="案件名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="登记日期:">
                            <el-col :span="11">
                                <el-form-item prop="date1">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-form-item prop="date2">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date2" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item>
                            <el-button type="primary" size="small">查询</el-button>
                            <el-button  size="small" @click="resetForm('formInline')">重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="block margin-top">
            <el-row class="title"> 检索结果 </el-row>
            <div class="table">
                <el-table
                        :data="tableData"
                        border
                        :header-cell-class-name="'table-header-bg'"
                        :cell-class-name="'tableContent-bg'"
                        style="padding: '0px 10px 10px',width: 100%">
                    <!-- <el-table-column  type="selection"  width="40">  </el-table-column> -->
                    <el-table-column  prop="id" label="案件编号" width="180" align="center"> </el-table-column>
                    <el-table-column  prop="caseName" label="案件名称" width="180" align="center" show-overflow-tooltip> </el-table-column>
                    <el-table-column  prop="date" label="登记时间" align="center"> </el-table-column>
                    <el-table-column  prop="name" label="被调查人姓名" align="center"> </el-table-column>
                    <el-table-column  prop="acceptDept" label="承办部门" align="center" show-overflow-tooltip> </el-table-column>
                    <el-table-column  prop="acceptPerson" label="承办人" align="center">  </el-table-column>
                    <el-table-column  prop="caseState" label="案件状态" align="center"> </el-table-column>
                    <el-table-column  fixed="right"  label="操作" align="center" width="120">
                        <template slot-scope="scope">
                            <el-button type="text" size="medium"> 查看 </el-button>
                            <el-button type="text" size="medium"> 编辑 </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
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
                    date: '2019-02-25 12:01:49',
                    name: '李某某',
                    acceptDept: '审理一处',
                    acceptPerson: '测试四',
                    caseState: '待受理',
                }, {
                    id: '00000000000020190010',
                    caseName: '测试自办案件01',
                    date: '2019-02-25 12:01:49',
                    name: '李某某',
                    acceptDept: '审理一处',
                    acceptPerson: '测试四',
                    caseState: '待受理',
                }, {
                    id: '00000000000020190010',
                    caseName: '测试自办案件01',
                    date: '2019-02-25 12:01:49',
                    name: '李某某',
                    acceptDept: '审理一处',
                    acceptPerson: '测试四',
                    caseState: '待受理',
                }, {
                    id: '00000000000020190010',
                    caseName: '测试自办案件01',
                    date: '2019-02-25 12:01:49',
                    name: '李某某',
                    acceptDept: '审理一处',
                    acceptPerson: '测试四',
                    caseState: '待受理',
                }],
                formInline: {
                    caseName:'',
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '20%'
            }
        },
        created(){},
        mounted(){
            console.log(Store)
            console.log('信访子系统首页')
        },
        methods: {}
    })
    export default class CaseDistributing extends Vue {
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
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        float: left;
    }
    .card-footer-title{
        margin: 0 50px;
        color: #009ABB;
    }
    .card-hearder-title{
        float: left;
    }
    .backgrund-color-blue{
        color: #6085c4;

    }

    .case_card{
        width: 30%;
        margin-left: 2%;
        margin-top: 2%;
    }
    .card_btn{
        margin-top: -10%;
    }
    .el-collapse-item__header{
        color: #6085c4;
        font-size: 16px;
        font-weight: bold;
    }
    .form_select input{
        width: 514px;
    }
    .bg-layout{
        background:rgb(245, 245, 245);
        height: 100%;
        position: relative;
    }

    .block{
        background: white;
        .title{
            height: 45px;
            line-height: 45px;
            text-align: left;
            padding: 0;
            padding: 0px 20px;
            border: 1.5px solid #EEEEEE;
        }
        .search{
            height: 70px;
            padding: 14px;
            border: 1px solid #EEEEEE;
            border-top: none;
        }
        .table{
            padding:20px
        }
    }
    .el-main{
        .margin-top{
            margin-top:10px
        }
    }
</style>