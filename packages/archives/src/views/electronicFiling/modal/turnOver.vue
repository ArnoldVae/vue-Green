<template>
	<div style="height: 100%;">
        
        <el-form :inline="true" :model="keyWords" ref="keyWords" class="demo-form-inline search">
            <el-row :gutter="20">
                <!--<el-col :span="8">
                    <el-form-item label="案件数:" prop="caseName">
                        <el-input v-model="keyWords.name" placeholder="单位名称"></el-input>
                    </el-form-item>
                </el-col>-->
                <el-col :span="12">
                    <el-form-item label="移交时间:">
                        <el-date-picker
					      v-model="keyWords.archiveDate"
					      type="daterange"
					      range-separator="至"
					      start-placeholder="开始日期"
					      end-placeholder="结束日期">
					    </el-date-picker>
                    </el-form-item>
                    <!--<label>至</label>
                    <el-form-item >
                        <el-date-picker type="year" placeholder="请选择" v-model="keyWords.archiveDate2" ></el-date-picker>
                    </el-form-item>-->
                </el-col>
                <el-col :span="2">
                    <el-form-item style="position: relative;">
                        <el-button type="primary" size="small" @click=search()  icon="el-icon-search">查询</el-button>
                        <!-- <el-button  size="small" @click="resetForm('formInline')">重置</el-button> -->
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
            
			
		<div class="table">
            <el-table 
                    :data="tableData"
                    border
                    :row-class-name="'table-header-bg1'"
                    :header-cell-class-name="'table-header-bg'"
                    :cell-class-name="'tableContent-bg'">
                <el-table-column  type="index"  label="序号" width="60" align="center">  </el-table-column>
                <el-table-column  prop="year" label="年度"  align="center"> </el-table-column>
                <el-table-column  prop="caseNum" label="案件数"  align="center"> </el-table-column>
                <el-table-column  prop="juanshu" label="卷数"  align="center" show-overflow-tooltip> </el-table-column>
                <el-table-column  prop="heshu" label="盒数"  align="center">  </el-table-column>
                <el-table-column  prop="yijiaoperson" label="移交人" align="center"> </el-table-column>
                <el-table-column  prop="turnDate" label="移交时间" align="center"> </el-table-column>
               <!-- <el-table-column  prop="receiver" label="移交单位" align="center"> </el-table-column>-->
            </el-table>
            <el-row>
                <div class="block page-positton">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage2"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        small
                        background
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                    </el-pagination>
                </div>
            </el-row>
        </div>
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
					year:'2000 - 2009',//年度
					caseNum: '20', //案件号
					juanshu: '2', //卷数
					heshu: '7', //盒数
					yijiaoperson: '黄某某', //移交人
					turnDate: '2018-12-22', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				{
					id: '2', //序号
					year:'2006',
					caseNum: '20', //案件号
					juanshu: '2', //卷数
					heshu: '5', //盒数
					yijiaoperson: '吴某某', //移交人
					turnDate: '2018-10-22', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				{
					id: '3', //序号
					year:'2002 - 2009',//年度
					caseNum: '12', //案件号
					juanshu: '2', //卷数
					heshu: '2', //盒数
					yijiaoperson: '张某某', //移交人
					turnDate: '2018-11-21', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				{
					id: '4', //序号
					year:'2011 - 2019',//年度
					caseNum: '20', //案件号
					juanshu: '2', //卷数
					heshu: '3', //盒数
					yijiaoperson: '李某某', //移交人
					turnDate: '2018-12-22', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				{
					id: '5', //序号
					year:'2009',//年度
					caseNum: '15', //案件号
					juanshu: '2', //卷数
					heshu: '9', //盒数
					yijiaoperson: '刘某某', //移交人
					turnDate: '2018-12-12', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				{
					id: '6', //序号
					year:'2016',//年度
					caseNum: '17', //案件号
					juanshu: '5', //卷数
					heshu: '12', //盒数
					yijiaoperson: '黄某某', //移交人
					turnDate: '2018-12-22', //移交时间
					receiver: 'XX办事处' ,//接收单位
				},
				
			],
			keyWords: {
				caseTitle: '',
				archiveDate: ''
			},
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
/*-----弹出框里列表分页--------*/

/deep/ .block.page-positton{
    z-index: 3;
    text-align: right;
    position: relative;
    bottom: 0;
    width: 100%;
    left: -2%;
    padding: 14px;
}

.el-form-item{
	/*width: 85%;*/
	/deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-select{
		/*width: 100%;*/
	}
}
.el-col-6{
	width: 33%;	
}
label{
	margin: 10px;
    position: relative;
    left: -3px;
    top: 10px;
}
</style>
