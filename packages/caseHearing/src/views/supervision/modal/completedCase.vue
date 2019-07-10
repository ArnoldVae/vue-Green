<template>
    <div style=" width: 98%;">
        <div class="title">已办结案件</div>
        <el-row :gutter="20">
        	<el-row :gutter="20">
	       	<div class="table">
	       		<el-table
				    ref="filterTable"
				    :data="tableData"
				    border
				    header-cell-class-name="'table-header-bg'" 
	                :cell-class-name="'tableContent-bg'"
	                style="padding: '0px 10px 10px',width: 100%"
				   >
				    <el-table-column
				      prop="caseName"
				      label="案件名称"
				      sortable
				      column-key="caseName"
				    >
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="被调查人"
				      >
				    </el-table-column>
				    <el-table-column
				      prop="date"
				      label="登记时间"
				      :formatter="date">
				    </el-table-column>
				    <el-table-column
				      prop="deading"
				      label="办理期限（天）"
				      :formatter="deading">
				    </el-table-column>
				    <el-table-column
				      prop="caseType"
				      label="案件类型"
				      :formatter="caseType">
				      	<template slot-scope="scope">
                            <div v-if="caseType == '1'">直查案件</div>
                            <div v-if="caseType == '2'">报批案件</div>
                        </template>
				      </el-table-column>
				    
				      <el-table-column
				      label="操作"
				      align="center"
				      >
				      	<template slot-scope="scope">
                                <el-button type="text" size="medium"> 查看 </el-button>
                            </template>
				      </el-table-column>
				    </el-table-column>
				  </el-table>
				  <el-row>
                    <div class="block page-positton" style="float: right;">
                        <el-pagination
                        background
                        @current-change="handleCurrentChange"
                        :page-size="100"
                        layout="total, prev, pager, next"
                        :total="1000">
                        </el-pagination>
                    </div>	
                	</el-row>
	       	</div>
       	</el-row>
        </el-row>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component({
        components: {

        },
        data() {
            return {
				tableData: [{
				  caseName:'xx违纪案件',
		          date: '2019-03-02',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1518 弄',
		          tag: '家',
		          deading:'10',//办理期限
				  caseType:'1'
		        }, 
		        {
		          caseName:'xx违纪案件',
		          date: '2019-03-04',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1517 弄',
		          tag: '公司',
		          deading:'10',//办理期限
				  caseType:'1'
		        }, 
		        {
		          caseName:'xx违纪案件',
		          date: '2019-02-01',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1519 弄',
		          tag: '家',
		          deading:'10',//办理期限
				  caseType:'1'
		        }, 
		        {
		          caseName:'xx违纪案件',
		          date: '2019-03-03',
		          name: '王小虎',
		          address: '上海市普陀区金沙江路 1516 弄',
		          tag: '公司',
		          deading:'10',//办理期限
				  caseType:'1'
		        }]
            }
        },

        created(){
        },
        mounted(){
        	
        },
        methods: {
        	resetDateFilter() {
		        this.$refs.filterTable.clearFilter('date');
		      },
		      clearFilter() {
		        this.$refs.filterTable.clearFilter();
		      },
		      formatter(row, column) {
		        return row.address;
		      },
		      filterTag(value, row) {
		        return row.tag === value;
		      },
		      filterHandler(value, row, column) {
		        const property = column['property'];
		        return row[property] === value;
		      }
        }
    })
    export default class petitionLetter extends Vue {
		
    }
</script>

<style <style rel="stylesheet/scss" lang="scss" scoped>

	.app-main{
		overflow: hidden!important;
	}
	.table{
		width: 95%;
    	margin: 10px auto;
	}
 	.title {
        text-align: left;
        font-size: 30px;
        padding-left: 40px;
        color: #000;
        font-weight: 500;
        margin-top: 25px;
    }
    .menu-title{
        float: left;
        width: 95%;
        left: 40px;
        position: relative;
    }
    .box-card /deep/ .el-card__header{
    	height: 50px;
    }
    .clearfix {
    	padding: 12px;
    	font-size: 16px;
    	
    }
    /deep/ .case_content > p > span{
    		float: right;
    	}
    .time-line{position:relative;overflow:hidden;display: inline-block;width: 100%;}
	.line{    width: 1px;	
	    height: 100%;
	    background-color: #ecedf2;
	    position: absolute;
	    left: 33px;
	    top: 10px;
	 }
	 .time-line ul{
	    width: 98%;
	    margin: 0px auto;
	    background: #F7FBFE;
	    padding: 5px 0px;
	 }
	.time-line ul li{    
		padding-left: 14%;
	    font-size: 14px;
	    color: #333333;
	    line-height: 24px;
	    margin-bottom: 10px;
	   }
	.time-line ul li:last-child{
		color: #1E50AC;
	}
	.time-line ul li:last-child::AFTER{
		background: #1E50AC;
		border: 1px solid #1E50AC;
	}
	.time-line ul li::AFTER{
		content: '';
	    width: 15px;
	    height: 15px;
	    border: 1px solid #ECEDF2;
	    float: left;
	    margin: 3px 10px;
	    border-radius: 15px;
	    background: #ECEDF2;
	    z-index: 999999;
	    position: absolute;
	    left: 15px;
	}
	
	.time-line ul li:last-child{margin-bottom:0px;}
	.line-conent{
		width: 103px;
	    display: inline-block;
	    white-space: normal;
	    word-break: break-all;
	    word-wrap: break-word;
	    text-align: right;
	    position: relative;
	    top: -15px;
	}
	.time-line ul li  p{
	    font-size: 16px;
	    font-weight: 600;
	    font-family: Microsoft YaHei;
	}
	.time-line ul li > span{
		position: relative;
	    float: right;
	    right: 10%;
	}
</style>
