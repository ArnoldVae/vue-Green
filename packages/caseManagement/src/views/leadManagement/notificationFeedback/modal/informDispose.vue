<template>
<!-- 本级直查-通报处理 -->
  <div class="backplane">
    <div class="backplane-Content">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <div class="menu-item">通报相关单位处理</div>
        </el-menu-item>
        <el-menu-item index="2">
          <div class="menu-item">本级处理</div>
        </el-menu-item>
      </el-menu>

      <el-container v-show="isChecked == 1">
        <el-collapse v-model="activeNames">
          <el-collapse-item id="menu1" title="通报信息" name="1">
            <div class="form-content">
              <div class="edit-tabs" style="margin-top:10px;">
                <el-button
                  type="primary"
                  plain
                  class="add-tab-btn"
                  size="mini"
                  @click="addMember"
                >新增通报信息</el-button>

                <el-tabs v-model="selectMember" type="card" closable @tab-remove="removeTab">
                  <el-tab-pane
                    v-for="(item, index) in informDisForm.beTriedMember"
                    :key="item.memberTabKey"
                    :label="item.memberTabTitle"
                    :name="item.memberTabKey"
                  >
                    <el-form
                      label-position="top"
                      :model="form"
                      :rules="rules"
                      class="form-label-top"
                    >
                      <el-row :gutter="20">
                        <el-col :span="8">
                          <el-form-item label="通报单位名称:">
                            <el-input placeholder="请输入" v-model="item.notificationDeptName"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="8">
                          <el-form-item label="通报单位联系人:">
                            <el-input placeholder="请输入" v-model="item.notificationPerson"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="8">
                          <el-form-item label="文件传送时间:">
                            <el-date-picker
                              type="date"
                              placeholder="选择日期"
                              v-model="item.fileTrunTime"
                              style="width: 100%;"
                            ></el-date-picker>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row :gutter="20">
                        <el-col :span="8">
                          <el-form-item label="通报单位联系方式:">
                            <el-input placeholder="请输入" v-model="item.notificationDeptContactWay"></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </el-form>
                    <el-col :span="24" >
                      <!-- ==================穿梭框开始==================== -->

                      <div class="transferdiv">
                        <!-- 自己写的包裹穿梭框的div样式 -->
                        <el-transfer
                          style="text-align: left; display: inline-block"
                          v-model="item.transferValue"
                          :titles="['人员', '处理']"
                          @change="(value, direction, movedKeys)=> handleChange(value, direction, movedKeys,item.memberTabTitle)"
                          :data="item.transferData" 
                        >
                          <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
                        </el-transfer>
                      </div>
                    </el-col>
                    <!-- ==================穿梭框结束==================== -->
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-container>
      <el-container v-show="isChecked == 2">
        <div class="transferdiv">
          <el-col :span="24">
            <!-- ==================穿梭框开始==================== -->
            <el-transfer
              style="text-align: left; display: inline-block"
              v-model="informDisForm.currentTransfer[0].transferValue"
              :titles="['人员', '处理']"
              @change="(value, direction, movedKeys)=> handleChange(value, direction, movedKeys,'本级直查')"
              :data="informDisForm.currentTransfer[0].transferData"
            >
              <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
            </el-transfer>
          </el-col>
        </div>
      </el-container>

      <!-- 底部固定按钮 -->
      <div class="backplane-footer-center">
        <el-button type="primary" @click="closeNSubmit">提交</el-button>
        <el-button type="success" @click="closeNSave()">保存</el-button>
        <el-button @click="close">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  props: {
    //    传过来的数据
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  name: "informDispose",
  components: {},
  data() {
    return {
      data: [],
      currentPage: 1,
      pagesize: 10,
      act_Name: "notificationInfoFirst",
      dialogFormVisible: false,
      DisposeFormVisible: false,
      activeIndex: "1",
      isChecked: "1",
      formLabelWidth: "20%"
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleSelect(key) {
      if (key == 1) {
        this.isChecked = 1;
        console.log(this.isChecked);
      } else if (key == 2) {
        this.isChecked = 2;
        console.log(this.isChecked);
      } else {
        this.isChecked = 1;
      }
    },

    close() {
      this.data.state = false;
    },
    closeNSave() {
      this.$message({
        message: "保存成功",
        type: "success"
      });
      this.data.state = false;
    },
    closeNSubmit() {
      this.$message({
        message: "提交成功",
        type: "success"
      });
      this.data.state = false;
    }
  }
})
export default class informDispose extends Vue {
  @Prop() private showDisposal: Boolean;
  @Prop() private showBtn: Boolean;
  tabsArr = [];//这是一个大对象
  activeNames: string[] = ["1"];
  //弹框flag
  dialogFlag: boolean = false;
  dialogTitle: string = "";
  selectMember: string = "1";
  informDisForm: object = {
    // 通报信息
    beTriedMember: [
      {
        memberTabTitle: "新增通报信息1",
        memberTabKey: "1",
        notificationDeptName: "",
        notificationPerson: "",
        fileTrunTime: "",
        notificationDeptContactWay: "",
        transferData: [
          { key: "01", label: "周某 - 总参参谋长", disabled: false },
          { key: "02", label: "李某 - 成都XXX区政治部主任", disabled: false },
          { key: "03", label: "胡某 - XXX分区副政委", disabled: false },
          { key: "04", label: "郭某 - 总部各下署处处长", disabled: false },
          { key: "05", label: "张某 - 海XXX二等基地司令员", disabled: false },
          { key: "06", label: "焦某 - 武汉XXX区政治部主任", disabled: false },
          { key: "07", label: "陶某 - 福建XXX区某部3600连一排排长", disabled: false },
          { key: "08", label: "吕某 - 35000部队部队长", disabled: false },
          { key: "09", label: "王某 - 35000部队3营营长", disabled: false },
          { key: "10", label: "徐某 - 武汉XXX区3675部队1营营长", disabled: false },
          { key: "11", label: "许某 - 城都XXX区3520部队1营2连3排2班班长", disabled: false }
        ],
        transferValue: []
      }
    ],
    currentTransfer: [
      {
        memberTabTitle: "本级直查",
        memberTabKey: "0",
        notificationDeptName: "",//通知人姓名
        notificationPerson: "",//通知人
        fileTrunTime: "",//文件中继时间
        notificationDeptContactWay: "",//通知部门
        transferData: [
          { key: "01", label: "周某 - 总参参谋长", disabled: false },
          { key: "02", label: "李某 - 城都XXX区政治部主任", disabled: false },
          { key: "03", label: "胡某 - XXX分区副政委", disabled: false },
          { key: "04", label: "郭某 - 总部各下署处处长", disabled: false },
          { key: "05", label: "张某 - 海XXX二等基地司令员", disabled: false },
          { key: "06", label: "焦某 - 武汉XXX区政治部主任", disabled: false },
          { key: "07", label: "陶某 - 福建XXX区某部3600连一排排长", disabled: false },
          { key: "08", label: "吕某 - 35000部队部队长", disabled: false },
          { key: "09", label: "王某 - 35000部队3营营长", disabled: false },
          { key: "10", label: "徐某 - 武汉XXX区3675部队1营营长", disabled: false },
          { key: "11", label: "许某 - 城都XXX区3520部队1营2连3排2班班长", disabled: false }
        ],
        transferValue: []
      }
    ]
  };
  
  handleChange(checkedArr, direction, movedKeys, tabName) {
    // 将各个tab的数据汇集到一个数组中
    // alert(tabName);
    this.tabsArr.push(
      ...this.informDisForm.beTriedMember,
      ...this.informDisForm.currentTransfer
    );
    
    // 接受两个参数，1,tabName-当前标签name, 2,checkedArr-当前已经选择的项集合
    // 根据当前tab的选择项，告诉其他tab禁止选择
    //不是当前操作项，里面的元素，置为不可选
    this.tabsArr.forEach(el => {
    //新增通报信息中只要有一个穿梭框中的选项选中，其他新增通报信息中无法选中包括本级处理
      if (el.memberTabTitle != tabName) {
        el.transferData.forEach(el1 => {
          checkedArr.forEach(el2 => {
            if (el2 == el1.key) {
              el1.disabled = true;
            }
          });
        });
        //当前操作项，将选定的元素放回以后，所有其他穿梭框对应的元素可选
        if (direction == "left") {              
          el.transferData.forEach(el1 => {
            movedKeys.forEach(el2 => {
              if (el2 == el1.key) {
                el1.disabled = false;
              }
            });
          });
        }
      }
    });
  }

  //新增通报信息标签页
  addMember(){
    var member = this.newMember();
    var No = this.informDisForm.beTriedMember.length + 1;
    member.memberTabKey = No.toString();
    member.memberTabTitle = "新增通报信息" + No;
    this.informDisForm.beTriedMember.push(member);
  }
  //新增标签页，
  newMember() {
    
    
    // var transferData1=this.informDisForm.beTriedMember[0].transferData
    return {
      memberTabTitle: "",
      memberTabKey: "",
      transferValue: [],
      //在新增标签页中调用的是同一个穿梭框李面的内容
      transferData: this.tabsArr[this.tabsArr.length-1].transferData,
    };
  }

  // 通报信息标签页删除
  removeTab(targetName) {
    //   console.log(targetName);
    let tabs = this.informDisForm.beTriedMember;
    let activeName = this.selectMember;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.memberTabKey === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.memberTabKey;
          }
        }
      });
    }
    this.selectMember = activeName;
    this.informDisForm.beTriedMember = tabs.filter(
      tab => tab.memberTabKey !== targetName
    );
  }
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/queryList.scss";
@import "~@/styles/commonJWJW.scss";
@import "~@/styles/common.scss";

//折叠面板
.el-collapse {
  width: 100%;
  //折叠面板
  .el-collapse-item {
    /deep/.el-collapse-item__header {
      height: 45px;
      line-height: 45px;
      padding-left: 2%;
      font-size: 14px;
      border: 1px solid #dee1e7;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      color: #2f76dd;
    }
  }
}

//form表单样式
.form-content {
  border: 1px solid #dee1e7;
  padding: 26px;
  border-top: navajowhite;
  border-top-style: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  text-align: left;
}

//tabs页新增按钮样式
.edit-tabs {
  .add-tab-btn {
    width: 165px;
    height: 35px;
    font-size: 16px;
    margin: 0;
    color: #2f76ff;
    background: #e6f3ff;
    border-color: #2f76dd;
    position: relative;
    float: right;
  }
}

//分割线
#dividingLine {
  border-color: #e6e6e6;
  border-top-width: 1px;
  border-top-style: solid;
}

// ======公共样式开始======
.el-main {
  margin-left: 18%;
}

.active-btn-class {
  background: #2f76dd;
}
.el-select {
  width: 100%;
}
.el-select-tab {
  position: fixed;
}
.el-select-tab li {
  font-size: 14px;
  margin-bottom: 20%;
  text-align: left;
}
.tab-btn {
  position: relative;
  margin-left: -18%;
  top: 38px;
}
/deep/ textarea {
  height: 90px;
}
.el-icon-close {
  float: right;
  cursor: pointer;
  font-size: 20px;
}
/deep/ .tab-btn-new {
  margin-left: 80%;
}

/deep/ .form-content {
  .form-content-box {
    margin-bottom: 20px;
    border: 1px solid #eeeff2;
    .form-content-box-title {
      // .el-form-item__label{
      //     font-weight: normal !important;
      // }
      height: 58px;
      border-bottom: 1px solid #2f76dd;
      padding-top: 8px;
      padding-left: 16px;
      .el-col {
        text-align: right;
        button {
          margin-right: 10%;
        }
      }
    }
    .form-content-box-body {
      /*box-sizing:"",*/
      .form-content-box-body-item {
        padding-left: 10px;
        margin-top: 10px;
        // .el-form-item__label{
        //     font-weight: normal !important;
        // }
        .el-tag {
          position: relative;
          left: 36%;
          margin-top: 6px;
        }
      }
    }
  }
}
/*appalRegister.vue*/
.el-collapse-item:last-child {
  margin-bottom: 60px !important;
}
.transferdiv {
  height:100%;
  width: 100%;
  margin-top: 5%;
  .el-checkbox__label{
    width: 100%
  }
  .el-transfer{width:100%;}
  /deep/.el-transfer-panel{
    
    width:37%;
    margin-left:65px; 
  }
  /deep/.el-transfer__buttons{
  padding: 25px 3%; 
  margin-left:40px;
  }
  /deep/.el-transfer-panel__body{
    height:100%;
  }
  /deep/.el-transfer-panel__list{
    height:100%;
  }
  /deep/.el-transfer-panel {
    vertical-align:top;
  }
  /deep/.el-transfer__buttons{
    margin-top:12%
  }
}
</style>




