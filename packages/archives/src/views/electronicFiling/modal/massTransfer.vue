<template>
	<div style="height: 100%;">
        
                        <el-form
            class="form-label-top"
            :rules="rules"
            label-position="top"
            :model="formLabelAlign"
          >
          <el-row>
              <el-col :span="8">
                <el-form-item label="案件数：" required>
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="卷数：" required>
                  <el-input v-model="value1" ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="盒数：" required>
                  <el-input v-model="value1" ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="移交人：" required>
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="移交时间：" required>
                  <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
			<el-row>
              <el-col :span="12">
                <el-form-item label="接收单位：" required>
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="接收人：" required>
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
			<el-row>
              <el-col> 
                <el-form-item label="移交信息：">
                  <el-input
					type="textarea"
					placeholder="请输入内容"
					style="width: 110%;">
					</el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
           
			<!--<div style="margin: 20px 0;"></div>
			<div slot="footer" class="body-footer" style="text-align:center;">
            <div class="footer-btn-grunp">
                <el-button type="primary" plain>保存</el-button>
                <el-button type="warning" plain>关闭</el-button>
            </div>
        </div>
		
    </div>-->
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
	components: {},
	data() {
		return {
			tableData: [
				{
					id: '1', //序号
					caseName: 'XX违反XXX纪', //案件名称
					caseNumber: '2016060812345', //档案编号
					borrowDate: '2018-05-17', //提交时间
					state: 'XXXXX', //案件单位
					person: '黄某某', //移交人
					turnDate: '2018-12-22', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				{
					id: '2', //序号
					caseName: 'XX违反XXX纪', //案件名称
					caseNumber: '2016060812345', //档案编号
					borrowDate: '2018-05-17', //提交时间
					state: 'XXXXX', //案件单位
					person: '黄某某', //移交人
					turnDate: '2018-12-22', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				{
					id: '3', //序号
					caseName: 'XX违反XXX纪', //案件名称
					caseNumber: '2016060812345', //档案编号
					borrowDate: '2018-05-17', //提交时间
					state: 'XXXXX', //案件单位
					person: '黄某某', //移交人
					turnDate: '2018-12-22', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				{
					id: '4', //序号
					caseName: 'XX违反XXX纪', //案件名称
					caseNumber: '2016060812345', //档案编号
					borrowDate: '2018-05-17', //提交时间
					state: 'XXXXX', //案件单位
					person: '黄某某', //移交人
					turnDate: '2018-12-22', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				{
					id: '5', //序号
					caseName: 'XX违反XXX纪', //案件名称
					caseNumber: '2016060812345', //档案编号
					borrowDate: '2018-05-17', //提交时间
					state: 'XXXXX', //案件单位
					person: '黄某某', //移交人
					turnDate: '2018-12-22', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				{
					id: '6', //序号
					caseName: 'XX违反XXX纪', //案件名称
					caseNumber: '2016060812345', //档案编号
					borrowDate: '2018-05-17', //提交时间
					state: 'XXXXX', //案件单位
					person: '黄某某', //移交人
					turnDate: '2018-12-22', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				
			],
			rules : {
				name: [
				{ required: true, message: "请输入", trigger: "blur" },
				{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
				],
				//idNum: [{ validator: validate.checkIdCardNo, trigger: "blur" }],
			},
			keyWords: {
				caseTitle: '',
				respondentName: ''
			},
			formLabelWidth: '20%'
		};
	},
	created() {},
	mounted() {},
	methods: {
		handleSizeChange(size) {
			this.pagesize = size;
		},
		handleCurrentChange(currentPage) {
			this.currentPage = currentPage;
		}
	}
})
export default class fileForDetails extends Vue {
	formLabelAlign = {
    name: "",
    region: "",
    type: ""
  };
	$refs: {
		audio: HTMLAudioElement;
		lyricsLines: HTMLDivElement;
	};
	
}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/common.scss";
@import "~@/styles/queryList.scss";
.el-form-item{
	width: 85%;
	/deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-select{
		width: 100%;
	}
}
.form-label-top .el-col{
	padding: 0px 10px 0px 10px;
}
</style>
