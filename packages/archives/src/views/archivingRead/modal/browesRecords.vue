<template>
	<div class="block margin-top">
		<div class="table">
            <el-table 
                    :data="tableData"
                    border
                    :row-class-name="'table-header-bg1'"
                    :header-cell-class-name="'table-header-bg'"
                    :cell-class-name="'tableContent-bg'">
                <el-table-column  type="index"  label="序号" width="60" align="center">  </el-table-column>
                <el-table-column  prop="borrower" label="借阅人" align="center"> </el-table-column>
                <el-table-column  prop="fileName" label="借阅单位" width="180" align="center" show-overflow-tooltip> </el-table-column>
                <el-table-column  prop="borrowDate" label="借阅时间" align="center">  </el-table-column>
                <el-table-column  prop="state" label="档案类型" align="center"> </el-table-column>
                <el-table-column  prop="registrant" label="调阅人" align="center"> </el-table-column>
                <el-table-column  prop="returnFlag" label="是否归还" width="220" align="center"> </el-table-column>
            </el-table>
            <el-row>
                <div class="block page-positton">
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="currentPage"
							:page-sizes="[5, 10, 20, 30]"
							:page-size="pagesize"
							small
							background
							layout="total, sizes, prev, pager, next, jumper"
							:total="tableData.length"
						></el-pagination>
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
					fileName: 'xx单位', //案件名称
					fileNum: '2016060812345', //档号
					borrower: '李某某', //借阅人
					borrowDate: '2018-05-17', //借阅时间
					borrowPeriod: '2018-05-17 至 2018-05-27', //借阅期限
					registrant: '黄某某', //登记人
					borrowStatus: '借阅中' ,//借阅状态
					state:'电子阅览',
					returnFlag:'是' //是否归还
				},
				{
					id: '2', //序号
					fileName: 'xx单位', //案件名称
					fileNum: '2017060954321', //档号
					borrower: '牛某某', //借阅人
					borrowDate: '2018-10-21', //借阅时间
					borrowPeriod: '2018-10-21 至 2018-10-23', //借阅期限
					registrant: '孔某某', //登记人
					borrowStatus: '已归还', //借阅状态
					state:'纸质阅览',
					returnFlag:'是' //是否归还
				},
				{
					id: '3', //序号
					fileName: 'xx单位', //案件名称
					fileNum: '2015081934534', //档号
					borrower: '范某某', //借阅人
					borrowDate: '2018-05-27', //借阅时间
					borrowPeriod: '2018-05-27 至 2018-05-13', //借阅期限
					registrant: '赵某某', //登记人
					borrowStatus: '已超期', //借阅状态
					state:'复印',
					returnFlag:'是' //是否归还
				},
				{
					id: '4', //序号
					fileName: 'xx单位', //案件名称
					fileNum: '2013040284567', //档号
					borrower: '梁某某', //借阅人
					borrowDate: '2019-03-06', //借阅时间
					borrowPeriod: '2019-03-06 至 2019-03-07', //借阅期限
					registrant: '贾某某', //登记人
					borrowStatus: '借阅中' ,//借阅状态
					state:'借出',
					returnFlag:'是' //是否归还
				},
				{
					id: '5', //序号
					fileName: 'xx单位', //案件名称
					fileNum: '2013040284567', //档号
					borrower: '李某某', //借阅人
					borrowDate: '2018-05-17', //借阅时间
					borrowPeriod: '2018-05-17 至 2018-05-27', //借阅期限
					registrant: '王某某', //登记人
					borrowStatus: '借阅中', //借阅状态
					state:'摘抄',
					returnFlag:'否' //是否归还
				},
				{
					id: '6', //序号
					fileName: 'xx单位', //案件名称
					fileNum: '2012301242245', //档号
					borrower: '赵某某', //借阅人
					borrowDate: '2018-05-17', //借阅时间
					borrowPeriod: '2018-05-17 至 2018-05-27', //借阅期限
					registrant: '孙某某', //登记人
					borrowStatus: '已归还', //借阅状态
					state:'电子阅览',
					returnFlag:'是' //是否归还
				},
				
			],
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
	$refs: {
		audio: HTMLAudioElement;
		lyricsLines: HTMLDivElement;
	};
	
}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
//分页样式
.page-positton{
    /deep/.el-pagination{
        margin: -15px 16px 20px 16px !important;
    }
    height: 48px;
    z-index: 3;
    text-align: right;
    left: 0;
    padding: 30px;
    bottom: 0;
    width: 100%;
}
</style>
