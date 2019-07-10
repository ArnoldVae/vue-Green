<template>
<!-- 业务查询 -->
  <div class="query-box-scroll">
    <div class="el-main bg-layout">
            <div class="block search-Item">
                        <el-form :inline="true"  class="form-label-right-query" ref="keyWords" :model="formLabelAlign">
                            <!-- 查询表格 -->
                            <el-row :gutter="20">
                               <el-col :span="6">
                                    <el-form-item label="案件类型:" prop="caseName">
                                        <template>
                            <el-select v-model="value" placeholder="请选择" @change="number">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            </template>
                                    </el-form-item>
                                </el-col>
                                 <el-col :span="11">
                            <el-form-item  v-if="value!=''" :label="title">
                            <el-date-picker
                                v-model="value7"
                                type="daterange"
                                align="right"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions2"
                            ></el-date-picker>
                            </el-form-item>
                        </el-col>
                                </el-row>
                        </el-form>
                    
            </div>
            <div class="block margin-top">
                <el-row class="title"> 
                    检索列表 
                </el-row>
                <div class="table">
                    <el-table
                        v-show="value=='1'"
                        :data="tableData"
                        border
                        height="auto"
                        max-height="100%"
                        :header-cell-class-name="'table-header-bg'"
                        :row-class-name="'table-header-bg1'"
                        :cell-class-name="'tableContent-bg'" >
                        <el-table-column prop="name" label="案件标题" align="center"></el-table-column>
                        <el-table-column prop="number" label="案件编号"  align="center"></el-table-column>
                        <el-table-column prop="respondent" label="归档时间"  align="center"></el-table-column>
                        <el-table-column prop="work" label="案件单位" align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" align="center">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" > 查看详情 </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <!-- 调阅 -->
                     <el-table
                        v-show="value=='3'"
                        :data="tableData2"
                        border
                        height="auto"
                        max-height="100%"
                        :header-cell-class-name="'table-header-bg'"
                        :row-class-name="'table-header-bg1'"
                        :cell-class-name="'tableContent-bg'" >
                        <el-table-column prop="name" label="案件标题"  align="center"></el-table-column>
                        <el-table-column prop="number" label="案件编号"  align="center"></el-table-column>
                        <el-table-column prop="time" label="调阅时间"  align="center"></el-table-column>
                        <el-table-column prop="personal" label="调阅人"  align="center"></el-table-column>
                        <el-table-column prop="workUnit" label="案件单位" align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" align="center">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" > 查看详情 </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                  
                    <!-- 移交 -->
                    <el-table
                         v-show="value=='2'"
                        :data="tableData1"
                        border
                        height="auto"
                        max-height="100%"
                        :header-cell-class-name="'table-header-bg'"
                        :row-class-name="'table-header-bg1'"
                        :cell-class-name="'tableContent-bg'" >
                        <el-table-column prop="name" label="案件名称" align="center"></el-table-column>
                        <el-table-column prop="number" label="案件编号"  align="center"></el-table-column>
                        <el-table-column prop="respondent" label="移交时间"  align="center"></el-table-column>
                        <el-table-column prop="work" label="案件单位" align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" align="center">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" > 查看详情 </el-button>
                            </template>
                        </el-table-column>
                    </el-table> 
                    <el-row>
                        <div class="block page-positton">
                            <el-pagination
                                :page-sizes="[10, 20, 50, 100]"
                                :page-size="10"
                                small
                                background
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="tableData.length">
                            </el-pagination>
                        </div>
                        
                                </el-row>
                            </div>
            </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "demo2",
  components: {
        
  },
  data() {
    return {
        radio: '1',
       tableData: [
         {
          name: "李xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "XXX机关",//工作单位
          },{
          name: "王xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "正战区级单位机关",//工作单位
          },{
         name: "张xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "正师级单位机关",//工作单位
          },{
           name: "李xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "正师级单位机关",//工作单位
          },
         {
           name: "张xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "正战区级单位机关",//工作单位
          },{
          name: "张xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "正师级单位机关",//工作单位
          },{
           name: "李xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "XXX机关",//工作单位
          },{
           name: "韩xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "正战区级单位机关",//工作单位
          },
         {
           name: "李xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "XXX机关",//工作单位
          },{
           name: "杜xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "正战区级单位机关",//工作单位
          },{
           name: "李xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "XXX机关",//工作单位
          },{
           name: "李xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "正师级单位机关",//工作单位
          },
          {
          name: "张xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "基层单位",//工作单位
          },], 
          //调阅数组
          tableData2: [
         {
          name: "李xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          time: "2019-02-25 15:31",//提交时间
          personal:"韩某某",
          workUnit: "XXX机关",//工作单位
          },{
          name: "王xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          time: "2019-02-25 15:31",//提交时间
          personal:"韩某某",
          workUnit: "正战区级单位机关",//工作单位
          },
         {
          name: "韩xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          time: "2019-02-25 15:31",//提交时间
          personal:"韩某某",
          workUnit: "副战区级单位机关",//工作单位
          },{
          name: "程xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          time: "2019-02-25 15:31",//提交时间
          personal:"韩某某",
          workUnit: "正师级单位机关",//工作单位
          },{
          name: "韩xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          time: "2019-02-25 15:31",//提交时间
          personal:"韩某某",
          workUnit: "基层单位",//工作单位
          },{
         name: "张xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          time: "2019-02-25 15:31",//提交时间
          personal:"韩某某",
          workUnit: "基层单位",//工作单位
          },
          {
          name: "张xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          time: "2019-02-25 15:31",//提交时间
          personal:"韩某某",
          workUnit: "基层单位",//工作单位
          },],
          //移交数组
          tableData1: [
         {
         name: "韩xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "副战区级单位机关",//工作单位
          },{
         name: "王xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "副战区级单位机关",//工作单位
          },{
         name: "韩xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "基层单位",//工作单位
          },{
         name: "李xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "副战区级单位机关",//工作单位
          },{
          name: "李xx违反纪律案件",//案件标题
          number: "320123455677672",//编号
          respondent: "2019-02-25 15:31",//提交时间
          work: "基层单位",//工作单位
          },],  
          //查询table表格数据
          options: [{
           value: '1',
          label: '归档案件'
          },{
          value: '2',
          label: '移交案件'
          },{
          value: '3',
          label: '调阅案件'
          }],
           value: '1',
           value7 : '',
           title:'归档案件',
      formLabelWidth: '20%'
    };
  },
  created() {},
  mounted() {},
  methods: {}
})
export default class Demo extends Vue {

    number(){
        if(this.value=='1') {
					this.title='归档案件';
				} else if(this.value=='2'){
					this.title='移交案件';
				}else{
                    this.title='调阅案件';
                }
    }
  // 在实例创建完成后被立即调用
  created() {
    console.log("demo created");
  }
   //搜索表单展开项
    collapseActive = ['1']
    //表单对象
    selectForm={}
  // 查询条件初始化
    keyWords:object = {
      name:"",
      registerDate:"",
      registerStartdate:"",
      registerEnddate:""
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/queryList.scss";
  </style>

