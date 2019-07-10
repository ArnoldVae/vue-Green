<template>
  <!-- 此模块对应：归档调阅===>调阅出库 -->
  <div class="el-main bg-layout">
    <!-- 弹出的对话框 -->
    <el-dialog
      title="详细信息"
      center
      :visible.sync="deliverDetailVisible"
      class="mc-dialog-medium"
      :close-on-click-modal="false"
      width="60%"
    >
      <el-form
        :model="deliverDetails"
        ref="deliverDetails"
        class="checkDalogForm"
        :inline="true"
        label-position="left"
        style="text-align:left"
      >
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form-item label="案件标题：" class="deliverDetailsCaseName">
              <el-input v-model="deliverDetails.caseName" autocomplete="off" disabled="disabled"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="登记人：" class="deliverDetailsBooker">
              <el-input v-model="deliverDetails.booker" autocomplete="off" disabled="disabled"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="借阅人(单位)：" class="deliverDetailsBorrowerName">
              <el-input
                v-model="deliverDetails.borrowerName"
                autocomplete="off"
                disabled="disabled"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="借阅目的:" class="deliverDetailsPurpose">
              <el-select
                v-model="deliverDetails.purpose"
                placeholder="请选择"
                class="deliverDetailsPurpose"
              >
                <el-option label="警示教育" value="jingshijiaoyu"></el-option>
                <el-option label="学习借鉴" value="xuexijiejian"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="借阅卷数：" class="deliverDetailsBorrowNum">
              <el-input v-model="deliverDetails.borrowNum" autocomplete="off" disabled="disabled"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="借阅范围:" class="deliverDetailsBorrowRange">
              <el-select
                v-model="deliverDetails.borrowRange"
                placeholder="请选择"
                class="deliverDetailsBorrowRange"
              >
                <el-option label="全部" value="quanbu"></el-option>
                <el-option label="秘密" value="mimi"></el-option>
                <el-option label="机密" value="jimi"></el-option>
                <el-option label="绝密" value="juemi"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="归还期限:"
              v-model="deliverDetails.returnDate"
              class="deliverDetailsReturnDate"
            >
              <el-input v-model="deliverDetails.returnDate" autocomplete="off" disabled="disabled"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item
              label="申请类型:"
              v-model="deliverDetails.requestType"
              class="deliverDetailsRequestType"
            >
              <el-radio disabled v-model="radio1" label="纸质档案">纸质档案</el-radio>
              <el-radio disabled v-model="radio1" label="电子档案">电子档案</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="复印带走"
              v-model="deliverDetails.isCopied"
              class="deliverDetailsIsCopied"
            >
              <el-radio disabled v-model="radio2" label="是">是</el-radio>
              <el-radio disabled v-model="radio2" label="否">否</el-radio>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24 ">
            <el-form-item
              label="档案位置"
              v-model="deliverDetails.docLocation"
              class="deliverDetailsDocLocation"
            >
              <el-input v-model="deliverDetails.docLocation" autocomplete="off" disabled="disabled"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="备注:" v-model="deliverDetails.remark" class="deliverDetailsRemark">
              <el-input v-model="deliverDetails.remark" autocomplete="off" disabled="disabled"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div align="center" slot="footer" class="dialog-footer">
        <el-button type="primary" @click="deliverDetailVisible = false;clearForm()">出 库</el-button>
        <el-button @click="deliverDetailVisible = false;clearForm()">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 查询模块 -->
    <div class="block">
      <el-row class="title">调阅查询</el-row>
      <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline search">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="案件标题:" prop="caseName">
              <el-input v-model="formInline.caseName" placeholder="案件名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="被调查人:" prop="accusedName">
              <el-input v-model="formInline.accusedName" placeholder="被调查人姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <!-- @click.native="getFormData()" -->
              <el-button type="primary" size="small" icon="el-icon-search">查询</el-button>
              <el-button size="small" @click="resetForm('formInline')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <button @click="getFormData">123123</button>
    <!-- 表格模块 -->
    <div class="block margin-top">
      <el-row class="title">调阅列表</el-row>
      <div class="table">
        <el-table
          :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          border
          :row-class-name="'table-header-bg1'"
          :header-cell-class-name="'table-header-bg'"
          :cell-class-name="'tableContent-bg'"
          :default-sort="{prop: 'serialNum', order: 'ascending'}"
          stripe
          style="overflow:auto"
          :height="212"
        >
          <!-- <el-table-column  type="selection"  width="40">  </el-table-column> -->
          <el-table-column
            label
            type="selection"
            align="center"
            show-overflow-tooltip
            width="50"
            sortable
          ></el-table-column>
          <el-table-column
            label="序号"
            type="index"
            align="center"
            show-overflow-tooltip
            width="50"
            sortable
          ></el-table-column>
          <el-table-column
            prop="caseName"
            label="案件名称"
            width="180"
            align="center"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column prop="documentNum" label="档号" align="center"></el-table-column>
          <el-table-column prop="borrowerName" label="借阅人（单位）" align="center"></el-table-column>
          <el-table-column prop="borrowDate" label="借阅时间" align="center"></el-table-column>
          <el-table-column prop="borrowTerm" label="借阅期限" align="center"></el-table-column>
          <el-table-column prop="booker" label="登记人" align="center"></el-table-column>
          <el-table-column label="操作" align="center" width="120">
            <template>
              <el-button type="text" size="small" @click="deliverDetailVisible = true">出库</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页模块 -->
        <!-- <el-footer class="block margin-top" style="left:0px; position:fixed; width:100%; bottom:0px;"> -->
        <el-pagination
          class="pagination"
          style="text-align:right;vertical-align:middle"
          background
          small
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 50, 100]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        ></el-pagination>
        <!-- </el-footer> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Store from "./store";
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      deliverDetailVisible: false, //默认dialog不显示
      currentPage: 1, //默认当前页
      pagesize: 5, //默认一页显示5个
      radio1: "纸质档案",
      radio2: "是",
      //弹出框的假数据
      deliverDetails: {
        caseName: "李曙光违纪案件",
        booker: "王某某",
        borrowerName: "李某某",
        purpose: "",
        borrowNum: "10",
        borrowRange: "",
        returnDate: "2019-03-05",
        requestType: "requestType",
        isCopied: "",
        docLocation: "",
        remark: "remark"
      },
      //表格内容
      tableData: [
        {
          caseName: "1李曙光违纪案件",
          documentNum: "1",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "2李曙光违纪案件",
          documentNum: "2",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "3李曙光违纪案件",
          documentNum: "3",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "4李曙光违纪案件",
          documentNum: "4",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "5李曙光违纪案件",
          documentNum: "5",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "6李曙光违纪案件",
          documentNum: "6",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "7李曙光违纪案件",
          documentNum: "7",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "8李曙光违纪案件",
          documentNum: "8",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "9李曙光违纪案件",
          documentNum: "9",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "10李曙光违纪案件",
          documentNum: "10",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "11李曙光违纪案件",
          documentNum: "11",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "12李曙光违纪案件",
          documentNum: "12",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "13李曙光违纪案件",
          documentNum: "13",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "14李曙光违纪案件",
          documentNum: "14",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "15李曙光违纪案件",
          documentNum: "15",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "16李曙光违纪案件",
          documentNum: "16",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "17李曙光违纪案件",
          documentNum: "17",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "18李曙光违纪案件",
          documentNum: "18",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "19李曙光违纪案件",
          documentNum: "19",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "20李曙光违纪案件",
          documentNum: "20",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "21李曙光违纪案件",
          documentNum: "21",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "22李曙光违纪案件",
          documentNum: "22",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "23李曙光违纪案件",
          documentNum: "23",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "24李曙光违纪案件",
          documentNum: "24",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "25李曙光违纪案件",
          documentNum: "25",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "26李曙光违纪案件",
          documentNum: "26",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "27李曙光违纪案件",
          documentNum: "27",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "28李曙光违纪案件",
          documentNum: "28",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "29李曙光违纪案件",
          documentNum: "29",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "30李曙光违纪案件",
          documentNum: "30",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        },
        {
          caseName: "31李曙光违纪案件",
          documentNum: "31",
          borrowerName: "张某某",
          borrowDate: "2019-03-01",
          borrowTerm: "3个月",
          booker: "李某某"
        }
      ],
      //查询表格默认内容
      formInline: {
        caseName: "",
        accusedName: ""
      }
    };
  },
  created: function() {
    this.total = this.tableData.length; //创建时，默认查询总量为tableData的长度
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields(); //重置表格方法
    },
    handleSizeChange: function(size) {
      this.pagesize = size; //设置页面显示数目
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage; //设置页码为当前页
    },
    clearForm() {
      this.deliverDetails.borrowRange = "";
      this.deliverDetails.purpose = "";
    },
    getFormData() {
      console.log("1");
      axios
        .post("http://localhost:8080/getProduct")
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  mounted() {
    console.log(Store);
    console.log("信访子系统调阅出库");
  }
};
</script>
<style ref="stylesheet/scss" lang="scss">
@import "~@/styles/queryList.scss";
.pagination {
  .el-select input {
    width: 90px;
  }
}
//dialog表格当中的栅格元素样式设置
.deliverDetailsCaseName {
  width: 100%;
}
.deliverDetailsBooker {
  width: 100%;
}
.deliverDetailsBorrowerName {
  width: 100%;
}
.deliverDetailsPurpose {
  width: 100%;
}
.deliverDetailsBorrowNum {
  width: 100%;
}
.deliverDetailsBorrowRange {
  width: 100%;
}
.deliverDetailsReturnDate {
  width: 100%;
}
.deliverDetailsRequestType {
  width: 100%;
}
.deliverDetailsIsCopied {
  width: 100%;
}
.deliverDetailsDocLocation {
  width: 100%;
}
.deliverDetailsRemark {
  width: 100%;
}
</style>
