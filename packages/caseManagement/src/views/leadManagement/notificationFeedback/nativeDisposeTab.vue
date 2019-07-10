<template>
  <!--  查询结果-->
  <div class="block margin-top">
    12345678
    <div class="table">
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        border
        stripe
        :height="385"
        :row-class-name="'table-header-bg1'"
        :header-cell-class-name="'table-header-bg'"
        :cell-class-name="'tableContent-bg'"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="序号" type="index" align="center" width="60"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center"></el-table-column>
        <el-table-column prop="partLevel" label="部职别" align="center"></el-table-column>
      </el-table>
      <el-row>
        <div class="block page-positton" style="text-align: right">
          <el-pagination
            class="aa"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 40, 100]"
            small
            background
            :page-size="pagesize"
            layout="total,  prev, pager, next, jumper"
            :total="tableData.length"
          ></el-pagination>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import TrunOverInfo from "./trunOverInfo";
import InformDispose from "./informDispose";
export default {
  name: "nativeDisposeTab",
  components: { InformDispose, TrunOverInfo },
  data() {
    return {
      data: [],
      currentPage: 1,
      pagesize: 10,
      activeName: "first",
      dialogFormVisible: false,
      DisposeFormVisible: false,
      tableData: [
        {
          name: "李某某",
          partLevel: "部职别1"
        },
        {
          name: "李某某",
          partLevel: "部职别1"
        }
      ],
      formLabelWidth: "20%"
    };
  },
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
.aa {
  .el-select .el-input input {
    width: 100px;
  }
}
.block {
  width: 100%;
}
</style>
