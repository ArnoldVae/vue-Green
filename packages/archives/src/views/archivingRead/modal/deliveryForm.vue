<template>
	<div style="height: 100%;">
		<el-form
        :model="deliverDetails"
        ref="deliveryForm"
        class="checkDalogForm"
        :inline="true"
        label-position="left"
        style="text-align:left"
        label-width="50%"
      >
        <el-row gutter="20">
          <el-col :span="8">
            <el-form-item label="案件名称：" class="deliverDetailsCaseName">
              <el-input v-model="deliverDetails.caseName" autocomplete="off" :readonly="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="登记人：" class="deliverDetailsBooker">
              <el-input v-model="deliverDetails.booker" autocomplete="off" :readonly="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="借阅人(单位)：" class="deliverDetailsBorrowerName">
              <el-input
                v-model="deliverDetails.borrowerName"
                autocomplete="off"
                :readonly="true"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row gutter="20">
          <el-col :span="8">
            <el-form-item label="借阅目的：" class="deliverDetailsPurpose">
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
              <el-input v-model="deliverDetails.borrowNum" autocomplete="off" :readonly="true""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="借阅范围：" class="deliverDetailsBorrowRange">
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
        </el-row>
        <el-row gutter="20">
          <el-col :span="8">
            <el-form-item
              label="归还期限:"
              v-model="deliverDetails.returnDate"
              class="deliverDetailsReturnDate"
            >
              <el-input v-model="deliverDetails.returnDate" autocomplete="off" :readonly="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="申请类型："
              v-model="deliverDetails.requestType"
              class="deliverDetailsRequestType"
            >
              <el-radio  v-model="radio1" label="纸质档案">纸质档案</el-radio>
              <el-radio  v-model="radio1" label="电子档案">电子档案</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="复印带走："
              v-model="deliverDetails.isCopied"
              class="deliverDetailsIsCopied"
            >
              <el-radio  v-model="radio2" label="是">是</el-radio>
              <el-radio  v-model="radio2" label="否">否</el-radio>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row gutter="24">
          <el-col :span="24 ">
            <el-form-item
              label="档案位置："
              v-model="deliverDetails.docLocation"
              class="deliverDetailsDocLocation"
            >
              <el-input v-model="deliverDetails.docLocation" autocomplete="off" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row gutter="24">
          <el-col :span="24">
            <el-form-item label="备注：" v-model="deliverDetails.remark" class="deliverDetailsRemark">
              <el-input v-model="deliverDetails.remark" autocomplete="off" :rows="4"
						type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
	name:'common',
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
		        remark: ""
		      },
		};
	},
	created() {},
	mounted() {},
	methods: {}
})
export default class common extends Vue {
	
}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/common.scss";
.el-form-item{
	width: 85%;
	/deep/ .el-form-item__content{
		width: 100%;
	}
	/deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-select{
		width: 100%;
	}
}
</style>
