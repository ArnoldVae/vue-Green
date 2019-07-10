<template>
<!-- 线索分发 -->
<!-- 线索分发总页面 -->
  <div class="query-box">
    <div class="el-main bg-layout">
      <div class="block search-Item">
        <!-- 查询条件 -->
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <el-row slot="title" class="title">检索查询</el-row>
            <el-form :inline="true" :model="keyWords" ref="keyWords" class="form-label-right-query">
              <el-row>
                <el-col :span="6">
                  <el-form-item label="姓名:" prop="personnelName">
                    <el-input v-model="keyWords.personnelName" placeholder="姓名"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="线索来源:" prop="leadSource">
                    <el-select v-model="keyWords.leadSource" placeholder="请选择">
                      <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="11">
                  <el-form-item label="受理时间:" prop="acceptedDate">
                    <el-date-picker
                      v-model="keyWords.acceptedDate"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item>
                    <el-button
                      type="primary"
                      size="mini"
                      @click="selectSubmit"
                      icon="el-icon-search"
                    >查询</el-button>
                    <el-button @click="resetForm('keyWords')" size="mini" icon="el-icon-refresh">重置</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-collapse-item>
        </el-collapse>
      </div>
      <!-- 检索列表 -->
      <div class="block search-result">
        <el-row class="title">检索结果</el-row>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <el-badge :value="currentLevelTable.length" class="not-disposal-tab">
              <div class="meau-item">本级直查</div>
            </el-badge>
          </el-menu-item>
          <el-menu-item index="2">
            <el-badge :value="subordinateTable.length" class="has-disposal-tab">
              <div class="meau-item">转下级调查</div>
            </el-badge>
          </el-menu-item>
          <el-menu-item index="3">
            <el-badge :value="otherUnitTable.length" class="has-disposal-tab">
              <div class="meau-item">转其他单位</div>
            </el-badge>
          </el-menu-item>
        </el-menu>

        <!-- =============================================================表格内容============================================================= -->
        <div class="table">
          <!-- 本级直查表格开始 -->
          <div class="not-disposal-tab" v-show="isChecked == 1">
            <el-table
              :data="currentLevelTable.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
              border
              :row-class-name="'table-header-bg1'"
              :header-cell-class-name="'table-header-bg'"
              :cell-class-name="'tableContent-bg'"
            >
              <el-table-column
                type="index"
                label="序号"
                width="60px"
                align="center"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column
                prop="clueName"
                label="线索名称"
                align="center"
                min-width="15%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column
                prop="accusedName"
                label="姓名"
                align="center"
                min-width="10%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column
                prop="sinistryOfDuty"
                label="部职别(工作单位)"
                align="center"
                min-width="15%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column
                prop="acceptanceTime"
                label="受理时间"
                align="center"
                min-width="10%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column
                prop="clueSource"
                label="线索来源名称"
                align="center"
                min-width="10%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column label="操作区" align="center" min-width="11%">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small"
                    style="padding: 0px;"
                    @click="dialogFormVisible = true"
                  >
                    <i class="el-icon-edit"></i>
                    分发
                  </el-button>
                  <el-button
                    type="text"
                    size="small"
                    style="padding: 0px;"
                    @click="dialogDisLook = true"
                  >
                    <i class="el-icon-view"></i>
                    查看
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-row>
              <div class="block page-positton">
                <el-pagination
                  style="text-align: right;"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-sizes="[5, 10, 15, 20, 25]"
                  :current-page="currentPage"
                  :page-size="pagesize"
                  small
                  background
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="currentLevelTable.length"
                ></el-pagination>
              </div>
            </el-row>
          </div>
          <!-- 本级直查表格结束 -->

          <!-- 转下级调查表格开始 -->
          <div class="not-disposal-tab" v-show="isChecked == 2">
            <el-table
              :data="subordinateTable.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
              border
              :row-class-name="'table-header-bg1'"
              :header-cell-class-name="'table-header-bg'"
              :cell-class-name="'tableContent-bg'"
            >
              <el-table-column type="index" label="序号" width="60px" align="center"></el-table-column>

              <el-table-column
                prop="clueName"
                label="线索名称"
                align="center"
                min-width="15%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column
                prop="accusedName"
                label="姓名"
                align="center"
                min-width="10%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column
                prop="sinistryOfDuty"
                label="部职别(工作单位)"
                align="center"
                min-width="20%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column prop="subordinateUnit" label="现隶属单位" align="center" min-width="15%"></el-table-column>
              <el-table-column
                prop="acceptanceTime"
                label="受理时间"
                align="center"
                min-width="10%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column
                prop="clueSource"
                label="线索来源名称"
                align="center"
                min-width="15%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column label="操作区" align="center" min-width="15%">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small"
                    style="padding: 0px;"
                    @click="dispenseDialogFormVisible = true"
                  >
                    <i class="el-icon-edit"></i>
                    分发
                  </el-button>
                  <el-button
                    type="text"
                    size="small"
                    style="padding: 0px;"
                    @click="dialogDisLook = true"
                  >
                    <i class="el-icon-view"></i>
                    查看
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-row>
              <div class="block page-positton">
                <el-pagination
                  style="text-align: right;"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-sizes="[5, 10, 15, 20, 25]"
                  :current-page="currentPage"
                  :page-size="pagesize"
                  small
                  background
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="subordinateTable.length"
                ></el-pagination>
              </div>
            </el-row>
          </div>
          <!-- 转下级调查表格结束 -->

          <!-- 转其他单位表格开始 -->
          <div class="not-disposal-tab" v-show="isChecked == 3">
            <el-table
              :data="otherUnitTable.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
              border
              :row-class-name="'table-header-bg1'"
              :header-cell-class-name="'table-header-bg'"
              :cell-class-name="'tableContent-bg'"
            >
              <el-table-column type="index" label="序号" width="60px" align="center"></el-table-column>

              <el-table-column
                prop="clueName"
                label="线索名称"
                align="center"
                min-width="15%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column
                prop="accusedName"
                label="姓名"
                align="center"
                min-width="10%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column
                prop="sinistryOfDuty"
                label="部职别(工作单位)"
                align="center"
                min-width="20%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column prop="subordinateUnit" label="现隶属单位" align="center" min-width="15%"></el-table-column>
              <el-table-column
                prop="acceptanceTime"
                label="受理时间"
                align="center"
                min-width="10%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column
                prop="clueSource"
                label="线索来源名称"
                align="center"
                min-width="15%"
                :show-overflow-tooltip="true"
              ></el-table-column>
              <el-table-column label="操作区" align="center" min-width="15%">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small"
                    style="padding: 0px;"
                    @click="dispenseDialogFormVisible = true"
                  >
                    <i class="el-icon-edit"></i>
                    分发
                  </el-button>
                  <el-button
                    type="text"
                    size="small"
                    style="padding: 0px;"
                    @click="dialogDisLook = true"
                  >
                    <i class="el-icon-view"></i>
                    查看
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-row>
              <div class="block page-positton">
                <el-pagination
                  style="text-align: right;"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-sizes="[5, 10, 15, 20, 25]"
                  :current-page="currentPage"
                  :page-size="pagesize"
                  small
                  background
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="otherUnitTable.length"
                ></el-pagination>
              </div>
            </el-row>
          </div>
          <!-- 转其他单位表格结束 -->
        </div>
      </div>
    </div>

    <!-- dialog弹框 -->

    <!-- 本级直查dialog弹框 -->
    <el-dialog
			title="分发信息"
      class="mc-dialog-medium"
			:visible.sync="dialogFormVisible"
      width="68.81%"
      top="10%"
      center
			v-if="dialogFormVisible"
    >
      <leadDistributedEditCurrent ref="leadDistributedEditCurrent"></leadDistributedEditCurrent>
			<div slot="footer" class="dialog-footer">
				<el-button size='small' type="primary" @click="leadDistributedEditCurrentReturnForm()">提交</el-button>
				<el-button size="small" type="success" @click="leadDistributedEditCurrentReturnFormSave()">保存</el-button>
				<el-button size='small' @click="leadDistributedEditCurrentCloseDiaLog()">返回</el-button>
			</div>
    </el-dialog>

    <!-- 其他dialog弹框 -->
    <el-dialog
			title="分发信息"
      class="mc-dialog-medium"
      width="68.81%"
      top="10%"
      :visible.sync="dispenseDialogFormVisible"
      center
			v-if="dispenseDialogFormVisible"
    >
      <leadDistributedEdit ref="leadDistributedEdit"></leadDistributedEdit>
			<div slot="footer" class="dialog-footer">
				<el-button size='small' type="primary" @click="leadDistributedEditReturnForm()">提交</el-button>
				<el-button size="small" type="success" @click="leadDistributedEditReturnFormSave()">保存</el-button>
				<el-button size='small' @click="leadDistributedEditCloseDiaLog()">返回</el-button>
			</div>
    </el-dialog>

    <!-- 详情dialog弹框 -->
    <el-dialog
      class="mc-dialog-big"
      width="100%"
      top="0"
      title="线索信息查看"
      lock-scroll
      :modal="false"
      :visible.sync="dialogDisLook"
      :close-on-click-modal="false"
      @closed="dialogClose()"
    >
      <leadInfoLook ref="leadInfoLook" :dialogDisLookFlag="dialogDisLook"></leadInfoLook>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import leadDistributedEdit from "./modal/leadDistributedEdit";
import leadDistributedEditCurrent from "./modal/leadDistributedEditCurrent";
import leadInfoLook from "../modal/leadInfoLook";
//引入action
import { State, Action, Getter } from "vuex-class";

@Component({
  components: {
    leadDistributedEdit,
    leadDistributedEditCurrent,
    leadInfoLook
  },
  data() {
    return {
      isChecked: 1, //判断显示哪个表格的属性
      activeIndex: "1", //折叠框默认打开的属性
      activeNames: ["1"],
      currentPage: 1,
      pagesize: 5,
      dialogFormVisible: false,
      dispenseDialogFormVisible: false,
      dialogDisLook: false,
      //表格内容
      //本级直查
      currentLevelTable: [],
      //转下级调查
      subordinateTable: [],
      //转其他单位
      otherUnitTable: [],
      keyWords: {
        leadNum: "",
        personnelName: "",
        acceptedDate: "",
        leadSource: ""
      },
      options: [
        {
          value: "1",
          label: "巡视移交"
        },
        {
          value: "2",
          label: "审计移送"
        },
        {
          value: "3",
          label: "审查调查发现"
        },
        {
          value: "4",
          label: "信访举报"
        },
        {
          value: "5",
          label: "XXX事检察机关移送"
        },
        {
          value: "6",
          label: "领导批办"
        },
        {
          value: "7",
          label: "XXXXXX和地方XXX移送"
        },
        {
          value: "8",
          label: "下级单位上报"
        },
        {
          value: "9",
          label: "其他"
        }
      ],
      formLabelWidth: "20%"
    };
  },
  created() {},
  mounted() {
    this.getCurrentLevelData();
    this.getSubordinateData();
    this.getOtherUnitData();
  },
  methods: {
		 //本级dialog弹框提交方法
		leadDistributedEditCurrentReturnForm() {
      this.$refs.leadDistributedEditCurrent.returnForm();
		},
		//本级dialog弹框保存方法
		leadDistributedEditCurrentReturnFormSave() {
			this.$refs.leadDistributedEditCurrent.saveForm();
		},
		//本级dialog弹窗关闭方法
		leadDistributedEditCurrentCloseDiaLog() {
		  this.$refs.leadDistributedEditCurrent.closeDiaLog();
		},
		 //其他dialog弹框提交方法
		leadDistributedEditReturnForm() {
			this.$refs.leadDistributedEdit.returnForm();
		},
		 //其他dialog弹框提交方法
		leadDistributedEditReturnFormSave() {
			this.$refs.leadDistributedEdit.saveForm();
		},
		//其他dialog弹窗关闭方法
		leadDistributedEditCloseDiaLog() {
		  this.$refs.leadDistributedEdit.closeDiaLog();
		},
		
	}
})
export default class leadDistributed extends Vue {
  //引入action内定义的方法
  @Action GetCurrentLevelData: any;
  @Action GetSubordinateData: any;
  @Action GetOtherUnitData: any;

  //============================获取本级直查列表数据================================
  //本组件中本级直查的方法
  getSubordinateData(): void {
    //调用的被声明的方法
    this.GetSubordinateData().then(res => {
      this.subordinateTable = res.data.subordinateData;
    });
  }
  //本组件中转下级调查的方法
  getCurrentLevelData(): void {
    //调用的被声明的方法
    this.GetCurrentLevelData().then(res => {
      this.currentLevelTable = res.data.currentLevelData;
    });
  }
  //本组件中转其他单位的方法
  getOtherUnitData(): void {
    //调用的被声明的方法
    this.GetOtherUnitData().then(res => {
      this.otherUnitTable = res.data.otherUnitData;
    });
  }
  //菜单栏方法
  handleSelect(key) {
    if (key == 1) {
      this.isChecked = 1;
      console.log(this.isChecked);
    } else if (key == 2) {
      this.isChecked = 2;
      console.log(this.isChecked);
    } else if (key == 3) {
      this.isChecked = 3;
      console.log(this.isChecked);
    } else {
      this.isChecked = "";
      console.log(this.isChecked);
    }
  }
  //分页栏翻页的方法
  handleSizeChange(size) {
    this.pagesize = size;
  }
  handleCurrentChange(currentPage) {
    this.currentPage = currentPage;
  }
  //重置检索查询的表单
  resetForm(formName) {
    this.$refs[formName].resetFields();
  }
  //检索查询的表单提交方法
  selectSubmit() {
    console.log(JSON.stringify(this.keyWords));
  }
}
</script>

<style lang="scss" type="text/scss" scoped>
@import "~@/styles/queryList.scss";
@import "~@/styles/dialogBox.scss";

.block {
  .el-button {
    margin: 0px 7px 0px 7px;
  }
  .table-btn {
    margin: 0px 7px 12px 7px;
  }
}

//调整菜单栏上标记的位置
/deep/.el-badge__content.is-fixed {
  transform: translateY(-0%) translateX(100%);
}

//调整首页table背景颜色自适应
.box {
  .bg-layout {
    .margin-top {
      display: block;
    }
  }
}

//修改badge标记样式
/deep/.el-badge__content {
  border-radius: 100%;
  height: 20px;
  width: 20px;
  padding: 0 2px;
  line-height: 17px;
}
</style>
