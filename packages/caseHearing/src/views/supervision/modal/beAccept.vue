<template>
    <div style="width: 95%;margin: 0 auto;">
        <div class="title">待受理案件
			<div class="menu-pages">
			<div class="menu-btn">
				<div @click="onclick(1)" :class="{'active':isActive}"><i class="el-icon-document"></i>缩略图</div>
				<div @click="onclick(2)" :class="{'active':isActive == false}"><i class="el-icon-document"></i>列表</div></div>
			
			</div>        	
        </div>
        
       	<di class="menu-item" v-show="muenActive">
       		<el-row :gutter="20">
	            <el-col :span="6" v-for="(item,index) in showcase" :key="index">
	            	<el-card class="box-card" >
	                    <div slot="header" class="clearfix">
	                        <span>{{item.caseName}}</span>
	                    </div>
	                    <div class="case_content">
	                        <p> 被调查人 <span>{{ item.personName}}</span></p>
	                        <p> 登记时间 <span>{{ item.registerTime}}</span></p>
	                        <p> 办理期限 <a class="term_state" v-if="item.state =='1' ">正常</a>
	                        	<a class="term_state term_state_2" v-if="item.state =='2'">超期</a>
	                        	<span>{{ item.deading}} 天</span></p>
	                        <p> 案件类型 <span v-if="item.caseType == '1'">直查案件</span></p>
	                    </div>
	                </el-card>
	            </el-col>
       		</el-row>
       	</di>
        <div class="menu-item" v-show="!muenActive">
        	<div class="table">
	       		<el-table
				    ref="filterTable"
				    :data="allCase"
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
				      prop="personName"
				      label="被调查人"
				      >
				    </el-table-column>
				    <el-table-column
				      prop="registerTime"
				      label="登记时间"
				      >
				    </el-table-column>
				    <el-table-column
				      prop="deading"
				      label="办理期限（天）"
				      >
				    </el-table-column>
				    <el-table-column
				      prop="caseType"
				      label="案件类型"
				      :formatter="caseType">
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
				</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component({
        components: {

        },
        data() {
            return {
            	isActive:true,
            	muenActive:true,
				params: this.$route.params
            }
        },

        created(){
			console.log(this.$route.params.id)
        },
        mounted(){
        	this.showcase = this.allCase;
            this.allCase.forEach(item => {
             
            });
        },
        methods: {
        	onclick (index) {
　　　　　　　　 this.isActive = !this.isActive;
			   this.muenActive = !this.muenActive;
　　　　　　},
			caseType(row, column, cellValue){ //表格中判断显示案件类型
				if (cellValue === "1"){
	                return '直查案件';
	            }else if (cellValue === "2"){
	                return '报批案件';
	            }
			}
        }
    })
    export default class petitionLetter extends Vue {
		showcase = [];
		allCase :ang = [
			{
				caseName:'xx违纪案件',
				personName:'李某某',
				registerTime:'2019-3-08',//登记时间
				deading:'10',//办理期限
				caseType:'1',
				state:'1' //超期
			},
			{
				caseName:'xx违纪案件',
				personName:'李某某',
				registerTime:'2019-3-08',//登记时间
				deading:'10',//办理期限
				caseType:'1',
				state:'1' //超期
			},
			{
				caseName:'xx违纪案件',
				personName:'李某某',
				registerTime:'2019-3-08',//登记时间
				deading:'10',//办理期限
				caseType:'1',
				state:'2' //超期
			}
		];
    }
</script>

<style <style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/card.scss";
@import "~@/styles/common.scss";
	.app-main{
		overflow: hidden!important;
	}
 	.title {
        text-align: left;
        font-size: 30px;
        padding-left: 40px;
        color: #000;
        font-weight: 500;
        margin-top: 25px;
        padding-bottom: 10px;
    	border-bottom: 1px solid #b9b7b7;
    }
    .menu-title{
        float: left;
        width: 95%;
        left: 40px;
        position: relative;
        
    }
    /deep/ .el-row{
        	padding: 0;
        	margin: 0;
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
    .menu-pages{
		float: right;
    	font-size: 15px;
	}
	.menu-btn div{
		display: inline-block;
		padding: 5px;
	    border: 1px solid #ECEDF2;
	    width: 100px;
	    text-align: center;
	}
	.menu-btn div.active{
		background: #ECEDF2;
	}
	.table{    margin: 15px auto;}
</style>
