<template>
	<div style="height: 100%;">
		<div class="this-window">
		<el-row :gutter="20" style="height: 100%;">
	        <el-col :span="9">
	            <el-collapse v-model="activeNames" @change="handleChange" >
		        <el-collapse-item class="el-collapse-item__header2  handleChangeItem" id="menu2"  name="1" >
		        	<template slot="title">
			           <!-- <i class="header-icon el-icon-info"></i>
			          			  档案归档-->
			            <el-button-group >
			                <el-button type="primary" size="small" :class="{'isActive':isActive}"  @click="zhengjuan()">正卷</el-button>
			                <el-button type="primary" size="small" :class="{'isActive':isActive == false}"  @click="fujuan()">副卷</el-button>
			            </el-button-group> 
			            <div class="addbtn" @click="addFileFlag = true,addFile()" v-if="myData != 'DY' && myData != 'XQ'"><i class="el-icon-plus"></i>新增</div>
			            <el-button type="primary" size="small" v-if="myData == 'DY'" @click="otherReadWayFlag=true" >其他调阅</el-button>
			            <el-button type="primary" size="small" @click="" v-if="myData == 'XQ'">打印</el-button>
		            </template>
	                <div class="form-content">
	                	
	                	<!-- 正卷 -->
			           <div v-show="zhengjuanFlag">
			            <el-row :gutter="20" >
				            <el-col :span="24"  v-for="(item,index) in showCases" :key="index" v-bind:class="[item.active ? 'item_active' : '']">
				                <div class="uploadBtn"   @click="onclickChang(item,index)"><span class="span" >
				                   {{index+1}} 、{{item.caseTitle}}</span><!--<i class="header-icon el-icon-upload2 icon" 
				                    @click="updating" style="cursor: pointer">上传</i>-->
				                    <span class="number">12</span>
				                </div>
				            </el-col>
			            </el-row>
			            </div>  
			            
			            <div v-show="fujuanFlag">
			            <el-row :gutter="20" >
				            <el-col :span="24" v-for="(item,index) in showDemo" :key="index" v-bind:class="[item.active ? 'item_active' : '']">
				                <div class="uploadBtn" :class="{'active':nowIndexs == index}" @click="onclickChangs(item,index)"><span class="span" >
				                    {{index+1}} 、{{item.caseTitle}}</span>
				                    <span class="number">12</span>
				                    <!--<i class="header-icon el-icon-upload2 icon" 
				                    @click="updating" style="cursor: pointer">上传</i>-->
				                </div>
				            </el-col>
			            </el-row>
			            </div> 
	               	</div>
	            </el-collapse-item>
				</el-collapse>   
	        </el-col>
	        <el-col :span="15">
	            <div class="title_state" ><img src="img/report.png" alt="" style="height: 100%;width: 100%;"></div>
	        </el-col>
	    </el-row> 
	    </div>
	    <el-dialog class="mc-dialog-medium" title="目录设置"  :visible.sync="addFileFlag" width="834px" id="caseMsg" append-to-body center>
        	<addFileForm></addFileForm>
        	<div slot="footer" class="dialog-footer">
				<el-button type="success"  @click="addFileFlag = false" size="small">保 存</el-button>
				<el-button  @click="addFileFlag = false" size="small">返 回</el-button>
			</div>
    	</el-dialog> 
	    <el-dialog class="mc-dialog-medium" title="申请其他调阅方式"  :visible.sync="otherReadWayFlag" width="400px"  append-to-body center>
        	<OtherReadWayForm></OtherReadWayForm>
        	<div slot="footer" class="dialog-footer">
				<el-button type="success"  @click="otherReadWayFlag = false" size="small">保 存</el-button>
				<el-button  @click="otherReadWayFlag = false" size="small">返 回</el-button>
			</div>
    	</el-dialog> 
	</div>
</template>

<script lang="ts">
	import {Component, Vue} from "vue-property-decorator";
	import addFileForm from './addFileForm.vue';
	import OtherReadWayForm from './otherReadWayForm.vue';
	
	export  default{
        components: {addFileForm,OtherReadWayForm},
        props: ['myData'],
        data() {

            return {
            	addFileFlag:false,
            	otherReadWayFlag:false,
                showCases :[
            {
                caseTitle: "调查报告",
				active:true
            },{caseTitle: "个人检讨",active:false},{ caseTitle: "剖析报告",active:false},
            {caseTitle: "处分决定",active:false},{caseTitle: "初核呈批表送",active:false},
            {caseTitle: "初核报告",active:false},{caseTitle: "协审意见表",active:false},
            {caseTitle: "立案呈批报告",active:false},{caseTitle: "党委会议",active:false},
            {caseTitle: "初核报告",active:false},{caseTitle: "初核报告",active:false},
            {caseTitle: "处分决定",active:false},
            
        ],
         showDemo :[
            {caseTitle: "立案呈批报告",active:true},
		            {caseTitle: "基层党组织处分意见",active:false},
		            {caseTitle: "决定事项通知单",active:false}, {caseTitle: "党委会议记录",active:false},
        	],
                activeNames: ['1'],
                zhengjuanFlag:true,
                fujuanFlag:false,
                nowIndex:-1,
                nowIndexs:-1,
                isActive:true,
                activeNames2: 'first',
                act_Name: 'first',
                    
                    activeNames:['1','2','3'],
                    activeNames2: ['1','2'],
                    lists: {
                        "正卷": [
                            {
                                "id": 1,
                                "label": "正卷文件的名字1.pdf"
                            },
                            {
                                "id": 2,
                                "label": "正卷文件2.pdf"
                            },
                            {
                                "id": 3,
                                "label": "正卷文件3.pdf"
                            },
                            {
                                "id": 4,
                                "label": "正卷文件4.pdf"
                            },
                            {
                                "id": 5,
                                "label": "正卷文件5.pdf"
                            },
                            //...
                        ],
                        "副卷": [
                            {
                                "id": 1,
                                "label": "副卷文件1.pdf"
                            },
                            {
                                "id": 2,
                                "label": "副卷文件2.pdf"
                            },
                            {
                                "id": 3,
                                "label": "副卷文件3.pdf"
                            },
                            {
                                "id": 4,
                                "label": "副卷文件4.pdf"
                            },
                            {
                                "id": 5,
                                "label": "副卷文件5.pdf"
                            },
                            //...
                        ]
                    },
                visaObj: {},
                
                activeNames: ['1', '2', '3', '4'],
            };
        },
        methods: {
        	onclick (index) {
	　　　　　　　　 this.isActive = !this.isActive;
				   this.muenActive = !this.muenActive;
	　　　　　　},
            updating() {
                document.getElementById('updata').click();
            },
            handleChange(val) {
                console.log(val);
                this.activeNames=['1','2']
            },
            
            uploadScuess(file,fileList){
                console.log('ddd')
                this.fileList=fileList
            },
             handleChangeItem(){
            this.activeNames2=['1','2']
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            zhengjuan() {
               this.zhengjuanFlag=true;
               this.fujuanFlag=false;
               this.isActive = !this.isActive;
            },
            fujuan() {
                this.fujuanFlag=true;
                this.zhengjuanFlag=false;
                this.isActive = !this.isActive;
            },
            onclickChang:function (item,index) {
                 this.showCases.forEach((i,x)=>{
                     i.active=false})
                item.active=true
			},
            onclickChangs(item){
                this.showDemo.forEach((i,x)=>{
                    i.active=false})
                item.active=true
			}
            
        },
        created() {
        },

    }
</script>

<style ref="stylesheet/scss" lang="scss"  scoped>
.mc-dialog-big /deep/ .el-dialog__body{
	padding: 4.8% 3% 4px 3%!important;
}
	/*折叠面板样式*/
.el-collapse{
	height: 90%;
	border: 1px solid #ebeef5;
}
.el-collapse-item{
	height: 100%;
	position: relative;
    /deep/.el-collapse-item__header{
        padding-left: 2%;
        font-size: 14px;
        border: 1px solid #dee1e7;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        color: #ffffff;
    	background: #EBF6FF;
    }
    /deep/ .el-collapse-item__wrap{
    	height: 94%;
	    position: relative;
	    overflow-y: auto;
	    /*max-height: 436px;*/
	   /*/deep/ .el-collapse-item__content{
			height: 100%;
		}*/
    }
    
}
.this-window{
	/deep/.el-button-group{
	position: relative;
    float: right;
    margin: 10px auto;
    /deep/ button{
    	background: #fff;
    	color: #2F76DD;
    }
    /deep/ button:hover{
    	background: #2F76DD;
    	color: #fff;
    }
}
/deep/ .addbtn{
	color: #2f76dd;
    position: relative;
    float: right;
    right: 10px;
}
/deep/ .el-button.isActive{
	background: #2F76DD;
    color: #fff;
    border: 1px solid #2F76DD;
}
/deep/ .el-button:hover{
	background: #2F76DD;
}
}

    /* 按钮*/
.form-content{
	height: 100%;
	/*border: 1px solid #dee1e7;*/
	/deep/.el-row{
		padding: 0px;
		.el-col:hover{
			background: #f2f2f2;
		}
	}
	/deep/.item_active{
		color: #2f76dd;;
	}
	/deep/ .uploadBtn{
		:hover {
		}
		/*width: 100%;*/
	    line-height: 38px;
	    margin: 4px 10px;
	    border-bottom: 1px solid #E6EAF1;
	    padding: 4px 0px;
	    cursor: pointer;
	    height: 42px;
	    /deep/.span{
		    position: relative;
		    float: left;
		    text-align: left;
		    left: 6px;
		    font-size: 15px;
		    width: 70%;
	    }
	    /deep/ .number{
	    	position: relative;
		    float: right;
		    right: 0px;
		    border-bottom: 1px solid #C8D3E2;
		    font-size: 17px;
		    width: 31px;
		    font-weight: bold;
	    }
	    /deep/ .icon{
	    	position: relative;
		    width: 29%;
		    right: -8%;
		    color: #1d62e4;
	    }
	}
	/deep/ .uploadBtn.active{
	    background: #1d62e4;
		color: #fff;
	}
	/*/deep/ .uploadBtn:hover{
		background: #1d62e4;
	}*/
}

/deep/.title_state{
	height: 93%;
}
@media screen and (min-width: 1900px) { 
	.title_state{
		height: 90%;
	}
}
 @import "~@/styles/dialogBox.scss";
    .el-tabs__content{
    	overflow-y: auto;
    }
    .el-collapse-item__header{
        background: #1c51ab;
        color: white;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        padding-left: 2%;
		height: 100%;
    }
    .el-collapse-item__header2{
    	height: 100%;
    }
    .el-select{
        display: inline-block;
        width: 100%;
        height: 98%;
    }
 /* 案件著录样式 */
.el-collapse-item__header2{
    width: 100%; 
    background: rgba(32, 96, 230, 0);
}
/* 去掉折叠面板图标 */
.handleChangeItem{
	height: 100%;
    position: relative;
    /*max-height: 500px;*/
    /deep/.el-collapse-item__arrow {
        display:none;
    }
    
}
.el-collapse-item__header {
background: rgb(32, 96, 230);
}

.boderOne{
border: 1px solid rgb(32, 96, 230);
    padding: 3px;
    width: 188px;
    height: 38px;
    margin-top: 30px;
    margin-left: 20px;
    padding-top: 6px;
    text-align:center;

}
.boderTo{
    border: 1px solid rgb(32, 96, 230);
	padding: 3px;
	width: 188px;
	height: 38px;
	margin-top: 30px;
	margin-left: 140px;
	padding-top: 6px;
	//padding-left: 50px;
	// text-align:center;
}

.el-button--primary {
    color: rgb(32, 96, 230);
    background-color: #f6f7f9;
    border-color: rgb(32, 96, 230);
}

.one{
    margin-left: 20px;
    color: rgb(32,96,230);
    position: relative;
    top: -7px;
}
.two{
    margin-left: 20px;
    position: relative;
    top: -7px;
    color: rgb(32,96,230);
    
}
.uploading {
    background: #FFF;
    border: 1px solid #fffefe;
    color: #606266;
    padding-left: 0px;
    border-bottom-width: 1px;
    padding-bottom: 5px;
    width: 67px;
    padding-right: 0px;

}
.span{
    width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
}
/*description.vue   其他调用方式*/
.otherReadWay {
     /deep/.el-dialog {
            margin-top: 14% !important;
    }
    /deep/.el-dialog__body{
        height:115px !important;
    }
}

</style>