<template >
	<div class="el-main evocatory" style="padding: 0px;margin: 0px;">
    <el-row :gutter="20" style="padding: 0px;margin: 0px;height: 100%;">
        <el-col :span="9" style="height: 100%;">
            <el-collapse v-model="activeNames" @change="handleChange" >
	        <el-collapse-item class="el-collapse-item__header2  handleChangeItem" id="menu2"  name="1" >
	        	<template slot="title">
		            <!--<i class="header-icon el-icon-info"></i>
		          			  档案归档-->
		            <el-button-group >
		                <el-button type="primary" :class="{'isActive':isActive}" size="medium" @click="zhengjuan()">正卷</el-button>
		                <el-button type="primary" :class="{'isActive':isActive == false}" size="medium" @click="fujuan()">副卷</el-button>
		            </el-button-group>   
	            </template>
                <div class="form-content">
                	<!-- 正卷 -->
		           <div v-if="zhengjuanFlag">
		            <el-row :gutter="20" >
			            <el-col :span="12" v-for="(item,index) in showCases" :key="index">
			                <div class="uploadBtn" :class="{'active':nowIndex == index}"  @click="onclickChang(index)"><span class="span" >
			                    {{item.caseTitle}}</span><!--<i class="header-icon el-icon-upload2 icon" 
			                    @click="updating" style="cursor: pointer">上传</i>-->
			                </div>
			            </el-col>
		            </el-row>
		            </div>  
		            <div v-if="fujuanFlag">
		            <el-row :gutter="20" >
			            <el-col :span="12" v-for="(item,index) in showDemo" :key="index">
			                <div class="uploadBtn" :class="{'active':nowIndexs == index}" @click="onclickChangs(index)"><span class="span" >
			                    {{item.caseTitle}}</span><!--<i class="header-icon el-icon-upload2 icon" 
			                    @click="updating" style="cursor: pointer">上传</i>-->
			                </div>
			            </el-col>
		            </el-row>
		            </div> 
	            <el-upload style="display:none;"
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-change="handleChange"
                        >
                        <el-button size="small" id="updata" type="primary">点击上传</el-button>
                        </el-upload>
               	</div>
            </el-collapse-item>
			</el-collapse>   
        </el-col>
        <el-col :span="15">
            
                <div class="title_state"><img src="img/report.png" alt="" style="height: 100%;width: 100%;"></div>
           
        </el-col>
    
    </el-row> 
  </div>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
    @Component({
        name: "formAudit",
        components: {},
        data() {
            return {
                form: {},
                activeNames: ['1'],
                zhengjuanFlag:true,
                fujuanFlag:false,
                nowIndex:-1,
                nowIndexs:-1,
                isActive:true,
			}
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
		zhengjuan() {
           this.zhengjuanFlag=true;
           this.fujuanFlag=false;
           this.showCases = this.allCases;
            this.isActive = !this.isActive;
        },
        fujuan() {
            this.fujuanFlag=true;
            this.zhengjuanFlag=false;
            this.showCases = this.showDemo;
             this.isActive = !this.isActive;
        },
        handleChange(val){
           this.activeNames=['1','2']
        },
        updating(){
        	document.getElementById('updata').click();
        },
        onclickChang(index){
        	this.nowIndex = index;
        	
        },
        onclickChangs(index){
        	this.nowIndexs = index;
        },
        }
    })
    export default class formAudit extends Vue {
        showCases = [];
        //case
        allCases: any = [
            {
                caseTitle: "调查报告",
            },{caseTitle: "个人检讨"},{ caseTitle: "剖析报告"},
            {caseTitle: "处分决定"},{caseTitle: "初核呈批表送"},
            {caseTitle: "初核报告"},{caseTitle: "协审意见表"},
            {caseTitle: "立案呈批报告"},{caseTitle: "党委会议"},
            {caseTitle: "初核报告"},{caseTitle: "初核报告"},
            {caseTitle: "处分决定"},
        ];
        showDemo :any= [
		            {caseTitle: "立案呈批报告"},
		            {caseTitle: "基层党组织处分意见"},
		            {caseTitle: "决定事项通知单"}, {caseTitle: "党委会议记录"},
		        ]
        archiveReadFlag: boolean = false
        /*handleSelect(key) {
            key = Number(key.index) + 1;
            if (key == 1) {
                this.showCases = this.allCases;
            } else if (key == 2) {
                console.log(2);
                //this.showCases = this.waitAcceptanceCases;
            } else if (key == 3) {
               // this.showCases = this.unWaitAcceptanceCases;
            }
        }*/

        

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
    @import "~@/styles/mianCards.scss";
    @import "~@/styles/common.scss";
  
.el-main.evocatory{
	height: 100%;
	/deep/ .search-container-input2{
		height: 98%;
		/deep/ .el-row{
			height: 100%;
		}
	}
} 

.el-form-item{
    text-align: left;
   /deep/ .el-form-item__label{
		width: 100%;   	
   }
}
/*折叠面板样式*/
.el-collapse{
	height: 95%;
	margin: 10px;
	border: 1px solid #ebeef5;
}
.el-collapse-item{
	height: 100%;
    /deep/.el-collapse-item__header{
        padding-left: 2%;
        font-size: 14px;
        border: 1px solid #dee1e7;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        color: #ffffff;
    	background: #409eff;
    }
    /deep/ .el-collapse-item__wrap{
    	height: 94%;
    }
    
}
/deep/.el-button-group{
	position: relative;
    float: right;
    margin: 10px auto;
    /deep/ button{
    	background: #fff;
    	color: #409eff;
    }
    /deep/ button:hover{
    	background: #409eff;
    	color: #fff;
    }
}
/* 按钮*/
.form-content{
	/deep/.el-row{
		padding: 0px;
	}
	/deep/ .uploadBtn{
		width: 75%;
	    line-height: 30px;
	    text-align: center;
	    margin: 15px 10px;
	    border: 1px solid #1d62e4;
	    padding: 6px;
	    cursor:pointer;
	    /deep/.span{
		    position: relative;
		    width: 50%;
	    }
	    /deep/ .icon{
	    	position: relative;
		    width: 20%;
		    right: -8%;
		    color: #1d62e4;
	    }
	}
	/deep/ .uploadBtn.active{
	    background: #1d62e4;
		color: #fff;
	}
}
/deep/ .el-button.isActive{
	background: #409eff;
    color: #fff;
    border: 1px solid;
}
</style>