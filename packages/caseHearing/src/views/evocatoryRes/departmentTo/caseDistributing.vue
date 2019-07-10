<template>
<div class="box">
    <div class="el-main bg-layout">
        <div class="block">
            <el-collapse v-model="collapseActive">
                    <el-collapse-item name="1">
                        <el-row slot="title" class="title"> 
                            检索查询11
                        </el-row>
                        <el-form :inline="true" :model="keyWords" ref="keyWords" class="form-label-right" style="margin-top: 10px;">
                            <el-row :gutter="20">
                                <el-col :span="7">
                                    <el-form-item label="案件名称:" prop="caseName">
                                        <el-input v-model="keyWords.name" placeholder="案件名称"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="11">
                                    <el-form-item label="转送时间:">
                                        <el-date-picker
                                                v-model="keyWords.registerDate"
                                                type="daterange"
                                                style="width: 80%;position: relative;left: -45px;"
                                                value-format="yyyy-MM-dd"
                                                range-separator="-"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                                    <el-form-item style="position: relative;left: -50px;">
                                        <el-button type="primary" size="small" @click=search()  icon="el-icon-search">查询</el-button>
                                        <el-button  size="small" @click="resetForm('formInline')">重置</el-button>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </el-collapse-item>
            </el-collapse>
        </div>
        <div class="block margin-top">
            <el-row class="title"> 检索结果 </el-row>
            <div class="table">
                
                 <el-table
                        :data="personnel"
                        border
                        height="auto"
                        max-height="100%"
                        :header-cell-class-name="'table-header-bg'"
                        :row-class-name="'table-header-bg1'"
                        :cell-class-name="'tableContent-bg'" >
                    <el-table-column  label="序号" type="index" width="50" align="center"> </el-table-column>
                    <el-table-column  prop="caseName" label="案件名称" width="180" align="center" show-overflow-tooltip> </el-table-column>
                    <el-table-column  prop="number" label="案件编号" align="center"> </el-table-column>
                    <el-table-column  prop="date" label="转送时间" align="center"> </el-table-column>
                    <el-table-column  prop="workUnit" label="转送单位" align="center" show-overflow-tooltip> </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="showItemDetail(scope.row)"> 查看详情 </el-button>
                            <el-button type="text" size="small"> 案件接收 </el-button>
                        </template>
                    <!-- <el-button slot-scope="scope" type="danger" @click="deleteProduct(scope.row.id)">删除</el-button> -->

                    </el-table-column>
                </el-table>
               
                  <!-- 分页 -->
                   <el-row>
                    <div class="block page-positton">
                    <el-pagination
                                :page-sizes="[10, 20, 50, 100]"
                                :page-size="10"
                                small
                                background
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="personnel.length">
                    </el-pagination>
                    </div>
                </el-row>
            </div>
        </div>
    </div>
    <el-dialog title="弹窗测试" class="mc-dialog-medium" :visible.sync="dialogTest" width="100%"  id="caseMsg" >
        <ModalTest ref="modalPara" :personnel="personnel" :selectObj="selectObj" @modify="modifyTest"></ModalTest>
    </el-dialog>

     </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Store from './store';
    import { State, Action, Getter } from "vuex-class";
    import ModalTest from './modal/modalTest'
    @Component({
        components: {ModalTest},
        data() {
            return {
               currentPage:1,
                formLabelWidth: '20%',
            }
        },
       
        
        mounted(){
            this.getPersonnel();
        },
        methods: {}
    })
    export default class CaseDistributing extends Vue {
        //定义数组
        personnel= [];
        dialogTest=false
        selectObj:{}
        collapseActive = ['1']
        //获取数据
        @Action GetPersonnel: any;
        @State $personnel: any;
        // 在实例创建完成后被立即调用
        created() {
            console.log("created");
        }
         // methods - 获取信息列表
        getPersonnel(): void {
            this.GetPersonnel().then(res => {
            this.personnel = res.personnelList;
            });
        }
        $refs: {
            audio: HTMLAudioElement,
            lyricsLines: HTMLDivElement
        }
        // 查询条件初始化
         keyWords:object = {
            name:"",
            registerDate:"",
            // registerStartdate:"",
            // registerEnddate:""
        }
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
        handleCurrentChange(){
            
        }
        search(){
            console.log(this.keyWords)
        }
        showItemDetail(row){

            this.selectObj=row
            // this.show(val)
            let that = this;

            this.dialogTest=true

            setTimeout(function () {
                that.$refs.modalPara.initPara(row)

            }, 1)
        }
        modifyTest(obj){
            this.personnel=obj;
            this.dialogTest=false
            console.log(obj)
        }
        
       
    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/queryList.scss";
</style>