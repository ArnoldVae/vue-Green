<template>
	<div>
		<el-form
			:model="form"
			:rules="rules"
			ref="form"
			class="form-label-top"
			label-position="top"
		>
			<el-row>
                    <el-col :span="6">
                         <el-form-item label="案件名称：" required prop="caseName">
                            <el-input v-model="form.caseName" prefix-icon="icon-yonghuming"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                         <el-form-item label="档案位置：" required prop="name1">
                            <el-input v-model="form.name1" readonly autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                         <el-form-item label="调阅单位：" required prop="name2">
                            <el-input v-model="form.name2" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                      <el-col :span="6">
                         <el-form-item label="调阅人：" required prop="name3">
                            <el-input v-model="form.name3" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    </el-row>
                    <el-row>
                    <el-col :span="6">
                          <el-form-item label="利用凭证："  required prop="region">
                            <el-select v-model="form.region" filterable  placeholder="请选择">
                                <el-option label="XXX官证" value="1"></el-option>
                                <el-option label="文职干部证" value="2"></el-option>
                                <el-option label="士兵证" value="3"></el-option>
                                <el-option label="居民身份证" value="4"></el-option>
                                <el-option label="其他证件" value="5"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="证件号码：" required prop="name5">
                            <el-input v-model="form.name5" autocomplete="off"></el-input>
                        </el-form-item>
                	</el-col>
                	<el-col :span="6">
                        <el-form-item label="联系电话：" prop="name6">
                            <el-input v-model="form.name6" autocomplete="off"></el-input>
                        </el-form-item>
                	</el-col>
                    <el-col :span="6">
                        <el-form-item label="利用期间：" required prop="borrowDate">
                            <el-date-picker
							v-model="form.borrowDate"
							type="date"
							placeholder="选择日期"
							></el-date-picker>
                        </el-form-item>
                    </el-col>
                    </el-row>
                    <el-row>
                    <el-col :span="6">
                        <el-form-item label="利用方式："  required prop="region2">
                            <el-select v-model="form.region2" @change="selectGet" filterable  placeholder="请选择">
                                <el-option label="电子阅览" value="1"></el-option>
                                <el-option label="纸质阅览" value="2"></el-option>
                                <el-option label="复印" value="3"></el-option>
                                <el-option label="摘抄" value="4"></el-option>
                                <el-option label="借出" value="5"></el-option>
                                <el-option label="其他" value="6"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="审批人：" required prop="name7">
                            <el-input v-model="form.name7" autocomplete="off"></el-input>
                        </el-form-item>
                	</el-col>
                    <el-col :span="6">
                        <el-form-item label="经办人：" required prop="name8">
                            <el-input v-model="form.name8" autocomplete="off"></el-input>
                        </el-form-item>
                	</el-col>
                </el-row>
                 <el-row >
                 	<el-col :span="6" v-if="form.region2 == 1">
                        <el-form-item label="调阅码：" required prop="name9">
                            <el-input v-model="form.name9" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" v-if="form.region2 == 5 || form.region2 == '3'">
                       <el-form-item label="审批领导：" required prop="name10">
                            <el-input v-model="form.name10" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" v-if="form.region2 == 5 || form.region2 == '3'" >
                       <el-form-item label="借阅期限(天数)：" required prop="name11">
                            <el-input v-model="form.name11" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" v-if="form.region2 == '5' || form.region2 == '3'">
                       <el-form-item style="position: relative;top: 42px;">
                           <el-button type="primary" plain @click="printDemo" size="medium" v-print="'#test01'">打印</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
           
            <el-dialog
            class="mc-dialog-big"
            title="打印测试"
            :visible.sync="commonPrintFlag"
            width="100%"
            top="0"
    		>
		      <CommonPrint @closeCommonPrint="closeCommonPrint" ref="print"></CommonPrint>
		    </el-dialog>
		    
	</div>
	
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommonPrint from "./commonPrint.vue";
import Print from 'vue-print-nb';
Vue.use(Print); //注册
@Component({
	components: { CommonPrint},
	props: ['myData'],
	data() {
		return {
			commonPrintFlag:false,
			radio:'',
			radio1:'',
			
			rules : {
				name: [
				{ required: true, message: "请输入", trigger: "blur" },
				{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
				],
				//idNum: [{ validator: validate.checkIdCardNo, trigger: "blur" }],
			},
		};
	},
	created() {
		if(this.myData.type == 'XQ'){
			this.form = this.form2;
			this.form.region2 = this.form.region2
		}
		if(this.myData.type == 'addDatail'){
			this.form = this.form1;
			this.form.region2 = "";
			this.form.name10 = "";
			this.form.name11 = "";
		}
		console.log(this.form);
	},
	mounted() {
		
	},
	methods: {
		
		selectGet(vId){
			this.form.region2 = vId;
		},
		printDemo(){
	        this.commonPrintFlag=true
	        let that=this;
	        setTimeout(()=>{
	            that.$refs.print.goPrint();
	        },1)
    	},
    	closeCommonPrint(){
        	
    		
        	this.commonPrintFlag=false
    	},
//  	
	}
})
export default class fileForDetails extends Vue {
	form:Object = {
		caseName:'xx违纪案件',
		name1:'001柜02号',
		name2:'',
		name3:'',
		name4:'',
		name5:'',
		region2:'',
		name6:'',
		name8:'',
		name9:'234224',
		name10:'',
		name11:'',
		date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        borrowDate:''
	}
	form1 :all = {
		caseName:'xx违纪案件',
		name1:'3号柜01',
		name2:'xx单位',
		name3:'刘某某',
		region:'4',
		name5:'411015199001266514',
		name6:'13522894587',
		borrowDate:'2019-03-29',
		region2:'5',
		name7:'李某某',
		name8:'刘某某',
		name9:'234224',
		name10:'李某某',
		name11:'10天',
	}
	form2 :all = {
				caseName:'xx违纪案件',
				name1:'3号柜01',
				name2:'xx单位',
				name3:'刘某某',
				region:'4',
				name5:'411015199001266514',
				name6:'13522894587',
				borrowDate:'2019-03-29',
				region2:'5',
				name7:'李某某',
				name8:'刘某某',
				name9:'234224',
				name10:'李某某',
				name11:'10天',
			}
		
	//关闭弹窗
	close(){
		 this.$refs['form'].resetFields();
		 this.myData.dialogFormVisible = false;
		 //this.form = {}
	}
}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>

</style>
