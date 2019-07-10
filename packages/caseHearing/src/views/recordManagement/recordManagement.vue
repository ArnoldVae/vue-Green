<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px"  style="background-color: rgb(238, 241, 246);">
            <el-menu :default-openeds="['1']"
                     @open="handleOpen"
                     @close="handleClose"
            >
                <el-submenu :index='menu.index' v-for="menu in tabList">
                    <template slot="title">
                        <el-badge :value="1" class="item">
                            <i class="el-icon-message"></i>{{menu.title}}
                        </el-badge>
                    </template>
                    <el-menu-item-group >
                        <el-menu-item  v-show="!subMenu.comList" :index='subMenu.index' v-for="subMenu in menu.comList">
                            <i class="el-icon-message"></i>{{subMenu.title}}</el-menu-item>

                    </el-menu-item-group>
                    <el-submenu :index="smallMenu.index" v-show="smallMenu.comList&&smallMenu.comList.length>0" v-for="smallMenu in menu.comList" style="padding-left: 0">
                        <template slot="title">
                            <el-badge :value="1">
                                <i class="el-icon-message"></i>{{smallMenu.title}}
                            </el-badge>

                        </template>
                        <el-menu-item :index="sM.index" v-for="sM in smallMenu.comList" >{{sM.title}}</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>


            <el-main>
                <div class="block">
                    <el-row class="title"> 检索查询 </el-row>
                    <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline search">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="案件名称:" prop="caseName">
                                    <el-input v-model="formInline.caseName" placeholder="案件名称"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14">
                                <el-form-item label="备案时间:">
                                    <el-col :span="24">
                                        <el-date-picker
                                                v-model="value7"
                                                type="daterange"
                                                align="right"
                                                unlink-panels
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期"
                                                :picker-options="pickerOptions2">
                                        </el-date-picker>
                                    </el-col>
                                </el-form-item>
                            </el-col>

                        </el-row>
                        <el-row>
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
                            <el-table-column  type="index" label="序号" width="60" align="center"> </el-table-column>
                            <el-table-column  prop="caseName" label="案件名称" width="250" align="center" show-overflow-tooltip> </el-table-column>
                            <el-table-column  prop="date" label="备案时间" align="center"> </el-table-column>
                            <el-table-column  prop="name" label="备案人" align="center"> </el-table-column>
                            <el-table-column  fixed="right"  label="操作" align="center" width="120">
                                <template slot-scope="scope">
                                    <el-button type="text" size="medium"> 查看 </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <el-row>
                        <div class="block page-positton">
                            <el-pagination
                                    background
                                    @current-change="handleCurrentChange"
                                    :page-size="100"
                                    layout="total, prev, pager, next"
                                    :total="1000">
                            </el-pagination>
                        </div>
                    </el-row>
                </div>
            </el-main>
        </el-container>
    </el-container>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Store from './store'
    import { Submenu } from 'element-ui';
    @Component({
        components: {},
        data() {
            return {

                tabList: [
                    {
                        title: "办公厅",
                        index: "1",
                        comList:[
                            {
                                title:'机构—',
                                index: "1-1",
                            },
                            {
                                title:'机构二',
                                index: "1-2",
                                comList:[
                                    {
                                        title:'机构二==子机构',
                                        index: "1-1-1",
                                    }
                                ]
                            },
                            {
                                title:'机构三',
                                index: "1-3",
                                comList:[
                                    {
                                        title:'机构三---子机构',
                                        index: "1-1-2",
                                    }
                                ]
                            }

                        ]

                    },
                    {
                        title: "联合参谋部",
                        index: "2",
                        comList:[
                            {
                                title:'机构—',
                                index: "2-1",
                            }
                        ]
                    },
                    {
                        title: "政治工作部",
                        index: "3",
                        comList:[
                            {
                                title:'机构—',
                                index: "3-1",
                            }
                        ]
                    },
                    {
                        title: "后勤保障部",
                        index: "4",
                        comList:[
                            {
                                title:'机构—',
                                index: "4-1",
                            }
                        ]
                    },
                    {
                        title: "装备发展部",
                        index: "5",
                        comList:[
                            {
                                title:'机构—',
                                index: "5-1",

                            }
                        ]
                    },
                    {
                        title: "训练管理部",
                        index: "6",
                        comList:[
                            {
                                title:'机构—',
                                index: "6-1",
                            }
                        ]
                    },
                    {
                        title: "国防动员部",
                        index: "7",
                        comList:[
                            {
                                title:'机构—',
                                index: "7-1",
                            }
                        ]
                    },
                    {
                        title: "纪律检查委员会",
                        index: "8",
                        comList:[
                            {
                                title:'机构—',
                                index: "8-1",
                            }
                        ]
                    },
                    {
                        title: "政法委员会",
                        index: "9",
                        comList:[
                            {
                                title:'机构—',
                                index: "9-1",
                            }
                        ]
                    },
                    {
                        title: "科学技术委员会",
                        index: "10",
                        comList:[
                            {
                                title:'机构—',
                                index: "10-1",
                            }
                        ]
                    }
                ],
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value7:'',
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
                formLabelWidth: '20%',
                subMenu:[
                    {name:"办公厅",num:20},
                    {name:"联合参谋部",num:3},
                    {name:"政治工作部",num:9},
                    {name:"后勤保障部",num:4},
                    {name:"装备发展部",num:5},
                    {name:"训练管理部",num:3},
                    {name:"国防动员部",num:2},
                    {name:"纪律检查委员会",num:1},
                    {name:"政法委员会",num:7},
                    {name:"科学技术委员会",num:33},
                ]
            }
        },
        created(){},
        mounted(){
            console.log(Store)
            console.log('信访子系统首页')
        },
        methods: {}
    })
    export default class petitionLetter extends Vue {
        $refs: {
            audio: HTMLAudioElement,
            lyricsLines: HTMLDivElement
        }
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
        handleCurrentChange(){

        }
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        }
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    /deep//deeP/.el-submenu{
        .el-submenu__title{
          padding-right: 40px;
        }

    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
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
            height: 120px;
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
    .page-positton{
        margin: 0px 0px 20px 0px;
        text-align: right;
        padding-right: 8px;
    }
    /deep/.el-badge__content.is-fixed{
        top:20px;
        right: 0;

    }
    /deep/ .el-submenu__icon-arrow{
        right: 2px;
    }
    /deep/ .el-icon-arrow-down:after{
        right: 2px;
    }
    /deep/.el-icon-arrow-down:before{
        margin-left: -2px;
    }
    /deep//deep/.el-date-editor .el-range-separator{
        width: 8%;
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    ::-webkit-scrollbar
    {
        width: 1px;
        height: 1px;
        background-color: #F5F5F5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #f4f4f5;
    }

</style>