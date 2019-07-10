<template>
        <div class="adapt-height" >
            <el-row class="adapt-height tree-wrapper" >
                <el-col :span="4" class="adapt-height">
                    <z-tree :data=trees :isCheck="true" :on-click= "treeOnClick" ></z-tree>
                </el-col>
                <el-col :span="20"  class="adapt-height">
                    <div class="query-box">
                        <div class="el-main bg-layout">
                            <div class="block search-Item">
                                <el-form :inline="true" :model="keyWords" class="form-label-right-query" ref="keyWords">
                                    <el-row :gutter="20">
                                        <el-col :span="6">
                                            <el-form-item label="输入框一：" prop="caseName">
                                                <el-input v-model="keyWords.name" placeholder="姓名" :required="false"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-form-item label="部职别：" prop="caseName">
                                                <el-date-picker
                                                        v-model="keyWords.date"
                                                        type="daterange"
                                                        start-placeholder="开始日期"
                                                        end-placeholder="结束日期"
                                                        :default-time="['00:00:00', '23:59:59']">
                                                </el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <!--<el-col :span="6">-->
                                        <!--<el-form-item label="职级：" prop="caseName">-->
                                        <!--<el-input v-model="keyWords.name3" placeholder="职级"></el-input>-->
                                        <!--</el-form-item>-->
                                        <!--</el-col>-->
                                        <el-col :span="5">
                                            <el-form-item label="" prop="caseName">
                                                <el-button type="primary" size="mini" @click=search() icon="el-icon-search">查询
                                                </el-button>
                                                <el-button size="mini" icon="el-icon-refresh" @click="resetForm('formInline')">重置
                                                </el-button>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="1">
                                            <el-form-item label="" prop="caseName">
                                                <el-tooltip  v-show='!moreFlag' class="item" effect="dark" content="更多查询项" placement="top-end">
                                                    <el-button type="text" size="small" @click="moreFlag=!moreFlag"> <span class="iconfont iconfont-title ">&#xe673;</span></el-button>

                                                </el-tooltip>
                                                <el-tooltip  v-show='moreFlag' class="item" effect="dark" content="收起查询项" placement="top-end">
                                                    <el-button  type="text" size="small" @click="moreFlag=!moreFlag" ><span class="iconfont iconfont-title ">&#xe671;</span></el-button>
                                                </el-tooltip>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                    <el-row :gutter="20" v-show="moreFlag">
                                        <el-col :span="6">
                                            <el-form-item label="下拉：" prop="caseName">
                                                <el-select v-model="keyWords.region" placeholder="请选择" class="form_select">
                                                    <el-option  label="直查案件" value="1"></el-option>
                                                    <el-option label="报批案件" value="2"></el-option>
                                                    <el-option label="直查后通报下级单位" value="4"></el-option>
                                                    <el-option  label="下级单位调查" value="5"></el-option>
                                                    <el-option label="司法移送案件" value="3"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-form-item label="基本情况：" prop="caseName">
                                                <el-input v-model="keyWords.name6" placeholder="请输入"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-form-item label="基本情况：" prop="caseName">
                                                <el-input v-model="keyWords.name7" placeholder="请输入"></el-input>
                                            </el-form-item>
                                        </el-col>

                                    </el-row>
                                </el-form>
                            </div>
                            <div class="block margin-top" style="margin-top: 10px">
                                <el-row class="title">
                                    检索结果
                                    <span class="title-new-title">新增</span><span class="el-icon-plus"></span>
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
                                        <el-table-column prop="name" label="单位名称" width="180" align="center"></el-table-column>
                                        <el-table-column prop="contacts" label="联系人" width="100" align="center"></el-table-column>
                                        <el-table-column prop="tel" label="联系方式" width="150" align="center"></el-table-column>
                                        <el-table-column prop="address" label="地址" align="center"></el-table-column>
                                        <el-table-column prop="type" label="单位类型" width="180" align="center"></el-table-column>
                                        <el-table-column fixed="right" label="操作" width="140" align="center">
                                            <template slot-scope="scope">
                                                <el-button type="text" size="small" > 检查 </el-button>
                                                <el-button type="text" size="small" > 修改 </el-button>
                                                <el-button type="text" size="small" > 删除 </el-button>
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
                </el-col>
            </el-row>
        </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import zTree from '../../components/tree.vue'
// 暂时先写死模拟的tree数据
const trees = require("./treeJson.json");
@Component({
  name: "demo2",
  components: {
    zTree
  },
  data() {
    return {
        moreFlag:false,
       tableData: [
         {
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },{
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },{
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },{
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },
         {
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },{
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },{
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },{
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },
         {
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },{
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },{
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },{
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },
          {
          name: "某某某单位",
          type: "正军级单位机关",
          code: "7788990",
          address: "上海市普陀区金沙江路 1518 弄",
          contacts: "李志",
          tel: "17899987665"
          },],
      formLabelWidth: '20%'
    };
  },
  created() {},
  mounted() {},
  methods: {}
})
export default class Demo extends Vue {
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
    trees = trees
   // 在实例创建完成后被立即调用
    created() {
        console.log("demo created");
    }
    treeOnClick(event:any, treeId:any, treeNode:any){
        console.log(event)
        console.log(treeId)
        console.log(treeNode)
    }
    demo(){
        let demo1 = this.treeClicked()
        console.log(demo1)
    }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/queryList.scss";
  .tree-wrapper{
      background: RGB(245, 245, 245);padding: 16px 0px;
  }
  .adapt-height{
    position: relative;
    height: 100%;
  }
/deep/.tree-ui .tree-wrapper .tree-position{
    height: 95%;
}
</style>

