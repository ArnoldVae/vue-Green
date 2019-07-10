<template>
    <div>
				<div class="block margin-top">
					<div class="table">
                    <el-table
                        :data="tableData"
                        border
                        height="90%"
                        max-height="100%"
                        :header-cell-class-name="'table-header-bg'"
                        :row-class-name="'table-header-bg1'"
                        :cell-class-name="'tableContent-bg'" >
                        <el-table-column prop="personnel" label="案件名称"  align="center"></el-table-column>
                        <el-table-column prop="term" label="案件单位"  align="center"></el-table-column>
                        <el-table-column prop="registrationTime" label="提交时间" align="center"></el-table-column>
                        <el-table-column prop="caseState" label="案件状态" align="center"></el-table-column>
						<el-table-column fixed="right" label="操作"  align="center">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click="dialogFormVisible2 = true" > 档案归档 </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                   
                        <div class="block page-positton">
                            <el-pagination
                                :page-sizes="[5, 10, 20, 30]"
                                :page-size="pagesize"
                                small
                                background
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="tableData.length">
                            </el-pagination>
                        </div>
                    
                </div>
				
				<el-dialog class="mc-dialog-big" title="录入信息" meta="{keepAlive: false}" :visible.sync="dialogFormVisible2" @showParentComp="eventFromChild" width="100% " top="0" id="caseMsg">
				<electronic-filing-info ></electronic-filing-info>
			</el-dialog>
            </div>
			</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ElectronicFilingInfo from "@/views/electronicFiling/modal/electronicFilingInfo.vue";
@Component({
	components: {ElectronicFilingInfo},
	data() {
		return {
			tableData : [{
				caseTitle: "1", //1 归档中 ，2 待归档
				caseState: "待归档",
				personnel: "某某某违反组织纪律",
				number: "320123455677672",
				registrationTime: "2019-02-25",
				term: "**集团XXX",
				termState: "1"
			},
			{
				caseTitle: "1",
				caseState: "已归档",
				personnel: "某某某违反组织纪律",
				number: "320123455677672",
				registrationTime: "2019-02-25",
				term: "**集团XXX",
				termState: "1"
			},
			{
				caseTitle: "2",
				caseState: "待归档",
				personnel: "某某某违反组织纪律",
				number: "320123455677672",
				registrationTime: "2019-02-25",
				term: "**集团XXX",
				termState: "1"
			},
			{
				caseTitle: "2",
				caseState: "已归档",
				personnel: "某某某违反组织纪律",
				number: "320123455677672",
				registrationTime: "2019-02-25",
				term: "**集团XXX",
				termState: "1"
			}
		],
		pagesize:5,
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
		},
		eventFromChild(){
			
		}
	}
})
export default class fileForDetails extends Vue {
	dialogFormVisible2: boolean = false
	$refs: {
		audio: HTMLAudioElement;
		lyricsLines: HTMLDivElement;
	};
	
}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
	@import "~@/styles/queryList.scss";
	@import "~@/styles/mianCards.scss";
</style>
