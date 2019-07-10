<template>
    <div class="box">
        <div class="el-main bg-layout">
            <div class="block">
                <el-row class="title"> 检索查询 </el-row>
                <el-form :inline="true" :model="keyWords" ref="keyWords" class="demo-form-inline search">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-form-item label="时限类型:" prop="caseName">
                                <el-input v-model="keyWords.name" placeholder="案件名称"></el-input>
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
            <div class="block margin-top">
                <el-row class="title"> 检索结果 </el-row>
                
                <div class="table">
                    
            <el-row>
                        <div style="text-align:left;">
                        <el-button type="primary" size="small" @click="showLimitedForm()">新增</el-button>
                    
                        </div>
                    <el-table
                            :data="limited"
                            border
                            :height=200
                            :header-cell-class-name="'table-header-bg'"
                            :row-class-name="'table-header-bg1'"
                            :cell-class-name="'tableContent-bg'" >
                        <el-table-column  label="序号" type="index" width="50" align="center"> </el-table-column>
                        <el-table-column  prop="limitedType" label="时限类型" width="180" align="center"> </el-table-column>
                        <el-table-column  prop="time" label="办理期限" width="180" align="center" show-overflow-tooltip> </el-table-column>
                        <el-table-column  prop="red" label="红色预警天数" align="center"> </el-table-column>
                        <el-table-column  prop="yellow" label="黄色预警天数" align="center"> </el-table-column>
                        <el-table-column  prop="blue" label="蓝色预警天数" align="center" show-overflow-tooltip> </el-table-column>
                        <el-table-column  fixed="right"  label="是否有效" align="center" width="120">
                            <template >
                                <el-switch v-model="value1"
                                    active-text="是"
                                    inactive-text="否">
                                </el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column  fixed="right"  label="操作" align="center" width="120">
                            <template >
                                <el-button type="text" size="small" @click="showLimitedForm()">修改 </el-button>
                                <el-button type="text" size="small"> 删除 </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    </el-row>
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
            </div>
        </div>
        <el-dialog title="新增时限类型" class="mc-dialog-big limeted_form" :visible.sync="showLimitedFormFlag" width="100%" top="0"  >
            <LimitedForm @qqq="submit1()"></LimitedForm>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Store from './store';
    import { State, Action, Getter } from "vuex-class";
    import LimitedForm from "./modal/limitedForm.vue";
    @Component({
        components: {LimitedForm},
        data() {
            return {
                effect:true,
                value1: true,
                formLabelWidth: '20%',
            }
        },
        created(){},
        mounted(){
            this.getLimited();
        },
        methods: {}
    })
    export default class CaseDistributing extends Vue {
          //定义数组
        limited= [];
      
        //获取数据
        @Action GetLimited: any;
        @State $limited: any;
        // 在实例创建完成后被立即调用
        created() {
            console.log("created");
        }
         // methods - 获取信息列表
        getLimited(): void {
            this.GetLimited().then(res => {
            this.limited = res.limitedList;
            });
        }
        $refs: {
            audio: HTMLAudioElement,
            lyricsLines: HTMLDivElement
        }
        showLimitedFormFlag:boolean = false
        showLimitedForm(){
           this.showLimitedFormFlag=true
        }
        // 查询条件初始化
         keyWords:object = {
            name:"",
            registerDate:"",
            registerStartdate:"",
            registerEnddate:""
        }
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
        handleCurrentChange(){
              
        } 
        search(){
            console.log(this.keyWords)
        }
        submit1(){
            console.log(555556666)
        
        }
    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/queryList.scss";
    .limeted_form{
        width: 40%;
        height: 64%;
        margin: 8% auto;
        /deep/.el-dialog__header {
          width: 40%;
          height: 8%;
        }
        /deep/.el-dialog__title{
              font-size: 20px;
          }
    }
</style>