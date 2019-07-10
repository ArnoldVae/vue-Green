<template>
    <!-- 案件著录-->
    <div class="backplane">
		<div class="page-tabs">
			<el-radio-group v-model="isCollapse" size="medium">
				<el-radio-button label="left">案件基本信息著录</el-radio-button>
				<el-radio-button label="other">卷内文件著录</el-radio-button>
			</el-radio-group>
		</div>
		<div class="backplane-Content">
			<div v-show="isCollapse=='left'">
				<detailForm pageFlag="audit" ref="caseReg"></detailForm>
			</div>
			<div v-show="isCollapse=='other'">
				<description pageFlag="audit"></description>
			</div>
		</div>
	</div>
            <!--<el-tabs   v-model="act_Name" @tab-click="handleClick" style='width:80%;height:90%;margin: 0 auto;margin-top: 20px;'>
                <el-tab-pane label="案件基本信息著录" name="first">
                  <detailForm/>
					
                </el-tab-pane>
                
                <el-tab-pane label="卷内文件著录" name="three" style="height:100%">
                    <description></description>
                </el-tab-pane>
            </el-tabs>-->
      		
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Vue from 'vue';
    import Vddl from 'vddl';
    import detailForm from './detailForm.vue'
    import description from './description.vue'
    Vue.use(Vddl);

    export  default{
       
        components: {detailForm	,description},
        data() {

            return {
            	addFileFlag:false,
            	isCollapse: "left",
                showCases :[
            {
                caseTitle: "调查报告",
            },{caseTitle: "个人检讨"},{ caseTitle: "剖析报告"},
            {caseTitle: "处分决定"},{caseTitle: "初核呈批表送"},
            {caseTitle: "初核报告"},{caseTitle: "协审意见表"},
            {caseTitle: "立案呈批报告"},{caseTitle: "党委会议"},
            {caseTitle: "初核报告"},{caseTitle: "初核报告"},
            {caseTitle: "处分决定"},
            
        ],
         showDemo :[
            {caseTitle: "立案呈批报告"},
		            {caseTitle: "基层党组织处分意见"},
		            {caseTitle: "决定事项通知单"}, {caseTitle: "党委会议记录"},
        ],
                resource:1,
                resource2:1,
                resource7:1,
                
                
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        
                act_Name: 'first',
                    
                   
                    
                    pdfurls:'http://127.0.0.1:8002/img/a.pdf',
                    isshowpdf:false,
                    fileList:[],
                steps: [
                    {id: 'step01', active: true, name: '案件审查/调查基本信息'},
                    {id: 'step02', active: false, name: '被审查调查人员'},
                    {id: 'step03', active: false, name: '违纪行为'},
                    {id: 'step04', active: false, name: '案件审查/调查基本情况'},

                ],
                visaObj: {},
                formLabelAlign: {
                    name: '',
                    name2: '',
                    region: '',
                    type: ''
                },
                activeNames: ['1', '2', '3', '4'],

                form: {
                    Resource2:'',
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入', trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
        	onclick (index) {
	　　　　　　　　 this.isActive = !this.isActive;
				   this.muenActive = !this.muenActive;
	　　　　　　},
            putAway() {//直接入库
                this.$notify({
                    title: '成功！',
                    message: '直接入库操作成功！',
                    position: 'bottom-right',
                    type: 'success',
                    duration:2000,
                    offset: 100,
                    onClose: this.$emit("closeDialog",this.resource)
                });
            },
            passMuster() {//通过检查
                this.$notify({
                    title: '成功！',
                    message: '通过检查操作成功！',
                    position: 'bottom-right',
                    type: 'success',
                    duration:2000,
                    onClose: this.$emit("closeDialog",this.resource)
                });
            },
            musterNotPass() {//检查不通过
                this.$notify({
                    title: '成功！',
                    message: '检查不通过操作成功！',
                    position: 'bottom-right',
                    type: 'success',
                    duration:2000,
                    onClose: this.$emit("closeDialog",this.resource)
                });
            },
            save() {//保存
                this.$notify({
                    title: '成功！',
                    message: '保存操作成功！',
                    position: 'bottom-right',
                    type: 'success',
                    duration:2000,
                    onClose: this.$emit("closeDialog",this.resource)
                });
            },
            
           
            handleDragend() {
                console.log('拖动结束');

            },
            closepdf(){
                this.isshowpdf = false
            },
            pdferr(errurl) {
                console.log(errurl);
            },
            uploadScuess(file,fileList){
                console.log('ddd')
                this.fileList=fileList
            },
             handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },

      	echoDetails(item){
            let that=this;
            setTimeout(function(){
                that.$refs.caseReg.echoDetails(item);
            },1);
		}
        },
        created() {
        },

    }
</script>

<style ref="stylesheet/scss" lang="scss"  scoped>
	@import "~@/styles/mianCards.scss";
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/common.scss";
</style>
