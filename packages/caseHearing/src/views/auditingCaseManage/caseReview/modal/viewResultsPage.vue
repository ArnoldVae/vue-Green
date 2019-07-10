<template>
<!-- 历次会议记录-会议审议 -->
	<div >
	
		<div class="table">
            <el-table 
                    :data="tableData"
                    border
                    :row-class-name="'table-header-bg1'"
                    :header-cell-class-name="'table-header-bg'"
                    :cell-class-name="'tableContent-bg'">
                <el-table-column  type="index"  label="序号" width="80" align="center">  </el-table-column>
                <el-table-column  prop="borrowDate" label="会议时间"  align="center">  </el-table-column>
                <el-table-column  prop="state" label="会议类型"  align="center"> </el-table-column>
                <el-table-column  prop="person" label="审议结果"  align="center"> </el-table-column>
                <el-table-column  prop="receiver" label="审议意见"  align="center"> </el-table-column>
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
					borrowDate: '2018-05-17', //会议时间
					state: '军委纪委书记专题会议', //会议类型
					person: '同意审理意见', //审议结果
					receiver: '' ,//审议意见
				},
				{
					id: '2', //序号
					borrowDate: '2018-07-22', //会议时间
					state: '军委纪委全体会议', //会议类型
					person: '改变审理意见', //审议结果
					receiver: '' ,//审议意见
				},
				{
					id: '3', //序号
					borrowDate: '2018-09-11', //会议时间
					state: '中央军委常务会', //会议类型
					person: '同意审理意见', //审议结果
					receiver: '' ,//审议意见
				},
				{
					id: '4', //序号
					borrowDate: '2018-10-17', //会议时间
					state: '中央政治局常务会议', //会议类型
					person: '改变审理意见', //审议结果
					receiver: '' ,//审议意见
				},
				{
					id: '5', //序号
					borrowDate: '2018-12-24', //会议时间
					state: '军委纪委书记专题会议', //会议类型
					person: '同意审理意见', //审议结果
					receiver: '' ,//审议意见
				},
				{
					id: '6', //序号
					borrowDate: '2019-01-12', //会议时间
					state: '军委纪委书记专题会议', //会议类型
					person: '改变审理意见', //审议结果
					receiver: '' ,//审议意见
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
        margin: -15px 16px 20px 16px;
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
