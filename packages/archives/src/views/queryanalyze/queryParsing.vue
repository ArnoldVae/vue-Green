<template>
<!--简单查询-->
  <div class="query-box-scroll">
    <div class="el-main bg-layout">
            <div class="block search-Item">
                        <el-form :inline="true" :model="keyWords" class="form-label-right-query" ref="keyWords">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="案件名称:" prop="caseName">
                                        <el-input v-model="keyWords.name" placeholder="案件名称"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="姓名:" prop="caseName">
                                        <el-input v-model="keyWords.name" ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="身份证号:" prop="caseName">
                                        <el-input v-model="keyWords.name" ></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="4">
                            <el-form-item label="" prop="caseName">
                                <el-button type="primary" size="mini" @click=search() icon="el-icon-search">查询
                                </el-button>
                                <el-button size="mini" icon="el-icon-refresh" @click="resetForm('formInline')">重置
                                </el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="2">
                            <el-form-item label="" prop="caseName">
                                <el-button v-show='!moreFlag' type="text" size="small" @click="moreFlag=!moreFlag" icon="el-icon-more">高级查询</el-button>
                                <el-button  v-show='moreFlag'type="text" size="small" @click="moreFlag=!moreFlag" icon="el-icon-more">普通查询</el-button>
                            </el-form-item>
                        </el-col>
                            </el-row>
                            <el-row :gutter="20" v-show="moreFlag">
                                <el-col :span="6">  
                                    <el-form-item label="人员类别:" prop="caseName" >
                                        <template>
                                        <el-select v-model="form.personnelCategory" placeholder="请选择">
                                            <el-option
                                            v-for="item in personnelCategory"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        </template>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="党纪处分:" prop="caseName">
                                        <template>
                                        <el-select v-model="form.partyDiscip" placeholder="请选择">
                                            <el-option
                                            v-for="item in partyDiscip"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        </template>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="XXX纪处分:" prop="caseName">
                                        <template>
                                        <el-select v-model="form.militaryDiscip" placeholder="请选择">
                                            <el-option
                                            v-for="item in militaryDiscip"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        </template>
                                    </el-form-item>
                                </el-col>
                                 <el-col :span="6">
                                    <el-form-item label="部职别:" prop="caseName">
                                        <el-input v-model="keyWords.name" ></el-input>
                                    </el-form-item>
                                </el-col>
                                
                                </el-row>
                            <el-row :gutter="20" v-show="moreFlag">
                                <el-col :span="6">  
                                    <el-form-item label="职级:" prop="caseName" >
                                        <template>
                                        <el-select v-model="form.professionRank" placeholder="请选择">
                                            <el-option
                                            v-for="item in professionRank"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        </template>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="违纪行为:" prop="caseName">
                                        <template>
                                        <el-select v-model="form.discipBehavior" placeholder="请选择">
                                            <el-option
                                            v-for="item in discipBehavior"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        </template>
                                    </el-form-item>
                                </el-col>
                                 <el-col :span="6">
                                    <el-form-item label="行业领域:" prop="caseName">
                                        <template>
                                        <el-select v-model="form.industryField" placeholder="请选择">
                                            <el-option
                                            v-for="item in industryField"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        </template>
                                    </el-form-item>
                                </el-col>
                                
                            </el-row>
                            
                             <el-row :gutter="20" v-show="moreFlag">
                               <el-col :span="18" >
                                    <el-form-item label="违纪事实:" prop="caseName">
                                        <template>
                                        <el-select
                                            v-model="form.subDiscipBehavior"
                                            multiple
                                            filterable
                                            allow-create
                                            default-first-option
                                            placeholder="请选择">
                                            <el-option
                                            v-for="item in subDiscipBehavior"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </template>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
            </div>
            <div class="block margin-top">
                <el-row class="title"> 
                    检索列表 
                    <!-- <div class="main-title-btn" >
                        <i class="el-icon-plus"></i>
                        <span>新增</span>
                    </div>     -->
                </el-row>
                <div class="table">
                    <el-table
                        :data="tableData"
                        border
                        height="auto"
                        max-height="100%"
                        :header-cell-class-name="'table-header-bg'"
                        :row-class-name="'table-header-bg1'"
                        :cell-class-name="'tableContent-bg'" >
                        <el-table-column prop="name" label="案件名称" width="160px" align="center"></el-table-column>
                        <el-table-column prop="compellation" label="姓名 " width="100px" align="center"></el-table-column>
                        <el-table-column prop="IDnumber" label="身份证号" width="210px" align="center"></el-table-column>
                        <el-table-column prop="category" label="人员类别" width="90px" align="center"></el-table-column>
                        <el-table-column prop="position" label="部职别" width="80px" align="center"></el-table-column>
                        <el-table-column prop="partyDiscipline" label="党纪处分" width="90px" align="center"></el-table-column>
                        <el-table-column prop="militaryDiscipline" label="XXX纪处分" width="90px" align="center"></el-table-column>
                        <el-table-column prop="rank" label="职级" width="100px" align="center"></el-table-column>
                        <el-table-column prop="disciplinary" label="违纪行为"  align="center"></el-table-column>
                        <el-table-column prop="Industry" label="行业领域"   align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="100px" align="center">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click="detailFlag = true"> 查看详情 </el-button>
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
            <el-dialog class="mc-dialog-big"  title="详情" :visible.sync="detailFlag" width="100%" top="0">
			        <archivesForm v-bind:myData="paramsData"></archivesForm>
			    </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const selectData = require("store/selectData.json");
import archivesForm from "@/views/electronicFiling/modal/description.vue"
@Component({
  name: "demo2",
  components: {
       archivesForm 
  },
  selectData: selectData,
  data() {
    return {
    	 paramsData:"XQ",
       tableData: [
         {
          name: "程xx贪污受贿案件",//案件名称
          compellation: "程某某",//姓名
          IDnumber: "133526188903830027",//身份证号
          category: "XXX官",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "警告",//党纪处分
          militaryDiscipline: "记大过",//XXX纪处分
          rank: "XXX副主席",//职级
          disciplinary: "违反政治纪律行为",//违纪行为
          Industry: "兵员征集、管理"//行业领域
          },{
          name: "李xx贪污受贿案件",//案件名称
          compellation: "李某某",//姓名
          IDnumber: "12026188903830027",//身份证号
          category: "战士",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "严重警告",//党纪处分
          militaryDiscipline: "记过",//XXX纪处分
          rank: "正XXX级",//职级
          disciplinary: "违反组织纪律行为",//违纪行为
          Industry: "工程建设"//行业领域
          },{
         name: "韩xx贪污受贿案件",//案件名称
          compellation: "韩某某",//姓名
          IDnumber: "133526188903830027",//身份证号
          category: "XXX官",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "撤销党内职务",//党纪处分
          militaryDiscipline: "降级",//XXX纪处分
          rank: "副XXX级",//职级
          disciplinary: "违反廉洁纪律行为",//违纪行为
          Industry: "经费管理"//行业领域
          },{
         name: "李xx贪污受贿案件",//案件名称
          compellation: "李某某",//姓名
          IDnumber: "133526188903830027",//身份证号
          category: "XXX官",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "留党察看",//党纪处分
          militaryDiscipline: "撤职",//XXX纪处分
          rank: "正师级",//职级
          disciplinary: "违反工作纪律行为",//违纪行为
          Industry: "物资采购,分配管理"//行业领域
         
          },
         {
         name: "张xx贪污受贿案件",//案件名称
          compellation: "张某某",//姓名
          IDnumber: "133526188903830027",//身份证号
          category: "XXX官",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "开除党籍",//党纪处分
          militaryDiscipline: "开除",//XXX纪处分
          rank: "正战区级",//职级
          disciplinary: "违反组织纪律行为",//违纪行为
          Industry: "士官选取,招生"//行业领域
          
          },{
          name: "程xx贪污受贿案件",//案件名称
          compellation: "程某某",//姓名
          IDnumber: "133526188903830027",//身份证号
          category: "XXX官",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "警告",//党纪处分
          militaryDiscipline: "记大过",//XXX纪处分
          rank: "XXX副主席",//职级
          disciplinary: "违反政治纪律行为",//违纪行为
          Industry: "兵员征集、管理"//行业领域
          },{
           name: "李xx贪污受贿案件",//案件名称
          compellation: "李某某",//姓名
          IDnumber: "133526188903830027",//身份证号
          category: "XXX官",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "撤销党内职务",//党纪处分
          militaryDiscipline: "降级",//XXX纪处分
          rank: "副XXX级",//职级
          disciplinary: "违反廉洁纪律行为",//违纪行为
          Industry: "经费管理"//行业领域
          },{
         name: "张xx贪污受贿案件",//案件名称
          compellation: "张某某",//姓名
          IDnumber: "133526188903830027",//身份证号
          category: "XXX官",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "警告",//党纪处分
          militaryDiscipline: "记大过",//XXX纪处分
          rank: "XXX副主席",//职级
          disciplinary: "违反政治纪律行为",//违纪行为
          Industry: "兵员征集、管理"//行业领域
          },
         {
         name: "李xx贪污受贿案件",//案件名称
          compellation: "李某某",//姓名
          IDnumber: "12026188903830027",//身份证号
          category: "战士",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "严重警告",//党纪处分
          militaryDiscipline: "记过",//XXX纪处分
          rank: "正XXX级",//职级
          disciplinary: "违反组织纪律行为",//违纪行为
          Industry: "工程建设"//行业领域
          },{
         name: "程xx贪污受贿案件",//案件名称
          compellation: "程某某",//姓名
          IDnumber: "133526188903830027",//身份证号
          category: "XXX官",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "撤销党内职务",//党纪处分
          militaryDiscipline: "降级",//XXX纪处分
          rank: "副XXX级",//职级
          disciplinary: "违反廉洁纪律行为",//违纪行为
          Industry: "经费管理"//行业领域
          },{
          name: "李xx贪污受贿案件",//案件名称
          compellation: "李某某",//姓名
          IDnumber: "12026188903830027",//身份证号
          category: "战士",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "严重警告",//党纪处分
          militaryDiscipline: "记过",//XXX纪处分
          rank: "正XXX级",//职级
          disciplinary: "违反组织纪律行为",//违纪行为
          Industry: "工程建设"//行业领域
          },{
          name: "李xx贪污受贿案件",//案件名称
          compellation: "李某某",//姓名
          IDnumber: "12026188903830027",//身份证号
          category: "战士",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "严重警告",//党纪处分
          militaryDiscipline: "记过",//XXX纪处分
          rank: "正XXX级",//职级
          disciplinary: "违反组织纪律行为",//违纪行为
          Industry: "工程建设"//行业领域
          },
          {
         name: "王xx贪污受贿案件",//案件名称
          compellation: "王某某",//姓名
          IDnumber: "133526188903830027",//身份证号
          category: "XXX官",//人员类别
          position: "副XXX长",//部职别
          partyDiscipline: "警告",//党纪处分
          militaryDiscipline: "记大过",//XXX纪处分
          rank: "XXX副主席",//职级
          disciplinary: "违反政治纪律行为",//违纪行为
          Industry: "兵员征集、管理"//行业领域
          },],
        value: '',  
      formLabelWidth: '20%',
      form: {
					militaryDiscip: '', //XXX纪处分
					professionRank: '', //职级
					discipBehavior: '', //人员类别
					industryField: '', //行业领域
					partyDiscip: '', //党纪处分
                    personnelCategory: '', //职级
                    subDiscipBehavior: '' //重大违纪
				},
				rules:{
					
				},
        //下拉数组
                militaryDiscip: selectData.militaryDiscip, //XXX纪处分
				professionRank: selectData.professionRank, //职级
				discipBehavior: selectData.discipBehavior, //人员类别
                industryField: selectData.industryField, //行业领域 
                partyDiscip:   selectData.partyDiscip,//党纪处分
                personnelCategory:selectData.personnelCategory,//人员类别
                subDiscipBehavior:selectData.subDiscipBehavior,//重大违纪
    };
  },
  created() {},
  mounted() {},
  methods: {}
})
export default class Demo extends Vue {
    moreFlag:boolean=false
	detailFlag = false;
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

