<template >
    <div class="el-main evocatory" style="height: 100%;">
        <div style="height: 100%;">
       		<div class="search-container-input"> 
       			<!--<lable class="search-lable">检索查询 </lable>-->
       				<div class="searchTime">
       				<label >调阅时间：</label>	
       				<el-date-picker
				      v-model="form.value6"
				      type="daterange"
				      range-separator="至"
				      start-placeholder="开始日期"
				      end-placeholder="结束日期">
				    </el-date-picker>
				    <label >案件名称：</label>
				    <el-input v-model="form.caseName" autocomplete="off" placeholder="请输入"></el-input>
				    <el-button class="el-button-tel" slot="append" icon="el-icon-search" style=" margin-left: 5px;padding-left: 20px;"></el-button> 
				    </div>	
       		</div>
            <div class="search-container-input2"> 
            	<!--<div class="title">
	        	<div class="menu-pages">
				<div class="menu-btn">
					<div @click="onclick(1)" :class="{'active':isActive}"><i class="el-icon-document"></i>缩略图</div>
					<div @click="onclick(2)" :class="{'active':isActive == false}"><i class="el-icon-document"></i>列表</div></div>
				
				</div>
        	</div>-->
        <div class="cards">
        	<div class="menu-item" v-show="muenActive">
            <el-row :gutter="20">
                <el-card class="box-card" v-for="(item,index) in showCases" :key="index">
                    <!--<div slot="header" class="clearfix">
                    <span>
                      {{item.caseTitle}}
                    </span>
                    <img src="img/kouzi.jpg" alt="">
                    </div>-->
                    <div class="case_content">
                    	<div class="title_states" v-if="item.caseTitle == '1'"><img  src="img/yellow.png" alt=""><div class="span">借阅中</div></div>
                    		<div class="title_states" v-if="item.caseTitle == '2'"><img  src="img/red.png" alt=""><div class="span">已超期</div></div>
                        <el-form ref="form" :model="form" >
                            <el-form-item label="案件名称" class="card-form-item">
                                {{item.personnel}}
                            </el-form-item>
                            <el-form-item label="案件单位" class="card-form-item">
                                {{item.term}}
                            </el-form-item>
                            <el-form-item label="调阅时间" class="card-form-item">
                                {{item.registrationTime}}
                            </el-form-item>
                            <!--<el-form-item label="调阅人" class="card-form-item">
                                {{item.accusedName}} 
                            </el-form-item>-->
                        </el-form>
                       <!-- <div class="unitTitle">案件单位 <span>**集团XXX</span></div>-->
                        <!--<img v-if="item.caseTitle == '1'" src="img/borrow.png" />
						<img v-if="item.caseTitle == '2'" src="img/exceed.png" />-->
                    </div>
                    <div class="card-bottom-btn">
                        <el-button type="primary" size="mini"  @click="archiveReadFlag = true">归还</el-button>
                    </div>

                </el-card>
            </el-row>
            </div>
            <div class="menu-item" v-show="!muenActive">
            	<div class="table">
				<el-table
					:data="tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
					border
					:height="200"
					:row-class-name="'table-header-bg1'"
					:header-cell-class-name="'table-header-bg'"
					:cell-class-name="'tableContent-bg'"
					@selection-change="handleSelectionChange"
				>
					<el-table-column type="selection" width="50"></el-table-column>
					<el-table-column type="index" label="序号" width="60"></el-table-column>
					<el-table-column
						prop="caseName"
						label="案件名称"
						align="center"
					></el-table-column>
					<el-table-column
						prop="id"
						label="档号"
						align="center"
						show-overflow-tooltip
					></el-table-column>
					<el-table-column prop="date" label="归档日期" align="center"></el-table-column>
					<el-table-column
						prop="acceptPerson"
						label="归档人"
						align="center"
					></el-table-column>
					<el-table-column fixed="right" label="操作" align="center" width="120">
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="isfileOpFlag = true">
								档案移交
							</el-button>
						</template>
					</el-table-column>
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
        </div>
        </div>
         <el-dialog class="mc-dialog-medium " title="阅卷归还"  meta="{keepAlive: false}"   :visible.sync="archiveReadFlag" 
         	 width="70% " top="6%" id="caseMsg" 
			:close-on-click-modal="false"
			center >
                <fileForDetails ref="archiveRead" @closeDialog="archiveReadFlag"></fileForDetails>
                <div slot="footer" class="dialog-footer">
					<el-button type="success" size="small" @click="returnForm()">归还</el-button>
				</div>
            </el-dialog>
        </div>   
    </div>
</template>


<script lang="ts">
     import {Component, Vue} from "vue-property-decorator";
     import Store from '../evocatoryRes/store';
     import fileForDetails from "./modal/fileForDetails.vue";
    @Component({
        name: "formAudit",
        components: {fileForDetails},
        data() {
            return {
                form: {},
                isActive:true,
                muenActive:true,
                tableData: [
				{
					id: '00000000000020190010',
					caseName: '自办案件01',
					date: '2019-02-1',
					accusedName: '李某某',
					acceptPerson: '孙某某'
				},
				{
					id: '00000000000020190306',
					caseName: '自办案件02',
					date: '2019-03-16',
					accusedName: '赵某某',
					acceptPerson: '张某某'
				},
				{
					id: '00000000000020190223',
					caseName: '自办案件03',
					date: '2019-02-23',
					acceptPerson: '刘某某'
				},
				{
					id: '00000000000020190010',
					caseName: '自办案件04',
					date: '2019-02-25',
					accusedName: '李某某',
					acceptPerson: '王某某'
				},
				{
					id: '00000000000020190122',
					caseName: '自办案件05',
					date: '2019-03-22',
					accusedName: '吴某某',
					acceptPerson: '王某某'
				},
				{
					id: '00000000000020190122',
					caseName: '自办案件06',
					date: '2019-03-22',
					accusedName: '吴某某',
					acceptPerson: '王某某'
				},
				{
					id: '00000000000020190122',
					caseName: '自办案件07',
					date: '2019-03-22',
					accusedName: '吴某某',
					acceptPerson: '王某某'
				},
				{
					id: '00000000000020190122',
					caseName: '自办案件08',
					date: '2019-03-22',
					accusedName: '吴某某',
					acceptPerson: '王某某'
				}
			],
			isTabSelect: false,
			currentPage: 1,
			pagesize: 5,
            };
        },

        created() {
        },
        mounted() {
        },
        methods: {
        	onclick (index) {
	　　　　　　　　 this.isActive = !this.isActive;
				   this.muenActive = !this.muenActive;
	　　　　　　},
	//判断tab是否选定
		handleSelectionChange(val) {
			console.log(val);
			if (val.length > 0) {
				this.$data.isTabSelect = true;
			} else {
				this.$data.isTabSelect = false;
			}
		},
		handleSizeChange(val) {
			this.pagesize = val;
			console.log(this.pagesize);
		},
		handleCurrentChange(val) {
			this.currentPage = val;
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePreview(file) {
			console.log(file);
		},

        }
    })
    export default class formAudit extends Vue {
        showCases = [];
        //case
        allCases: any = [
            {
                caseTitle: "1", //1 借阅中 2. 已超期
                caseState: "1",
                personnel: "某某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "**集团XXX",
                termState: "1",
                accusedName: '李某某'
            },
            {
               caseTitle: "2",
                caseState: "1",
                personnel: "某某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "**集团XXX",
                termState: "1",
                accusedName: '刘某某'
            },
            {
                caseTitle: "1",
                caseState: "1",
                personnel: "某某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "**集团XXX",
                termState: "1",
                accusedName: '李某某'
            },
             {
                caseTitle: "1",
                caseState: "1",
                personnel: "某某某违反组织纪律",
                number: "320123455677672",
                registrationTime: "2019-02-25",
                term: "**集团XXX",
                termState: "1",
                accusedName: '李某某'
            }
        ];
        
        archiveReadFlag: boolean = false
        handleSelect(key) {
            key = Number(key.index) + 1;
            if (key == 1) {
                this.showCases = this.allCases;
            } else if (key == 2) {
                console.log(2);
                //this.showCases = this.waitAcceptanceCases;
            } else if (key == 3) {
               // this.showCases = this.unWaitAcceptanceCases;
            }
        }

        

        showStateLine(val) {
            // this.show(val)
            let that = this;

            this.showStateLineFlag = true

            setTimeout(function () {
                that.$refs.stateLine.focusStep(val)

            }, 1)
        }

        mounted() {
            this.showCases = this.allCases;
            this.allCases.forEach(item => {
                if (item.caseState == "1") {
                   // this.waitAcceptanceCases.push(item);
                } else {
                  //  this.unWaitAcceptanceCases.push(item);
                }
            });
        }
        
        returnForm(){
        	console.log(JSON.stringify(this.$refs.archiveRead.formInline));
			this.archiveReadFlag = false;
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/mianCards.scss";
    @import "~@/styles/common.scss";
  
.case_content {
  padding-left: 5px;
  font-size: 1em;
   width: 100%;
    height: 85%; 
    margin: 10px auto;
    border-radius: 5px;
    height: 179px;
}

.el-form{
    position: relative;
    right: 10%;
    padding-top: 20px;
    padding-left: 0px;
}

.cards-content-bt{
padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    width: 60px;
    height: 30px;
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

/deep/.mc-dialog-medium .el-dialog--center .el-dialog__body {
    text-align: initial;
    padding: 1.1% 0 20px 3%;
    max-height: 400px;
    overflow: auto;
}
</style>