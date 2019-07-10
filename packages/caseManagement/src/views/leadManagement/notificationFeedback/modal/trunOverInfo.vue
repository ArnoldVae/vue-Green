<template>

<!-- 通报反馈-移交信息 -->
  <div class="backplane">
    <div class="backplane-Content">
      <el-form label-position="top" :model="form" :rules="rules" class="form-label-top">
        <el-collapse v-model="activeNames">
          <el-collapse-item id="menu1" title="移交案卷" name="1">
            <div class="form-content">
              <el-row :gutter="10">
                <el-col :span="6">
                  <el-form-item label="移送时间:" prop="name">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.date1"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="接收人:" prop="name">
                    <el-input v-model="form.receivePerson"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="接收部门:" prop="name">
                    <el-input v-model="form.receiveDepart"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="接收单位联系方式:" prop="name">
                    <el-input v-model="form.receiveDepartContactWay"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
          <br>
          <el-collapse-item id="menu2" title="移交款物" name="2">
            <div class="form-content">
              <el-row :gutter="10">
                <el-col :span="6">
                  <el-form-item label="移送时间:" prop="name">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.date1"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="接收人:" prop="name">
                    <el-input v-model="form.receivePerson"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="接收部门:" prop="name">
                    <el-input v-model="form.receiveDepart"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label="接收单位联系方式:" prop="name">
                    <el-input v-model="form.receiveDepartContactWay"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-form>
      <div class="backplane-footer-center">
        <el-button type="primary" @click="closeNSubmit">提交</el-button>
        <el-button type="success" @click="closeNSave()">保存</el-button>
        <el-button @click="close">返回</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    //    传过来的数据
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  name: "trunOverInfo",
  data() {
    return {
      activeNames: ["1", "2", "3", "4"],
      form: {}
    };
  },
  methods: {
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
};
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/commonJWJW.scss";
@import "~@/styles/common.scss";

//radio样式
.el-radio-group {
  float: left;
  width: 100%;
  line-height: 40px;
}

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
</style>

