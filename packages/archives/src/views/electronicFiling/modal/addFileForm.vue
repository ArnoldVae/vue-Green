<template>
	<div style="height: 100%;">
        
          <el-form
            class="form-label-left"
            :rules="rules"
            :label-position="labelPosition"
            :model="formLabelAlign"
          >
          <el-row :span="20">
              <el-col :span="24">
                <el-form-item label="文件名称:" prop="name">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :span="20">
              <el-col :span="24">
                <el-form-item label="附件:" prop="name">
                  <el-button size="medium">高拍仪上传</el-button>
                  <el-button size="medium">扫描上传</el-button>
                  <!--<el-button size="medium">本地上传</el-button>-->
                </el-form-item>
              </el-col>
            </el-row>
			<el-row :span="20" >
              <el-col :span="24">
                <div class="uploaded">
                	<div class="file-panel">
                		<img src="img/wendang.png"/> <div>刘某某案件审批调阅资料.docx</div>
                	</div>
                	<div class="file-panel">
                		<img src="img/wendang.png"/> <div>刘某某案件审批调阅资料.docx</div>
                	</div>
                	<div class="file-panel">
                		<img src="img/wendang.png"/> <div>刘某某案件审批调阅资料.xsl</div>
                	</div>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
	components: {},
	data() {
		return {
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
	formLabelAlign = {
    name: "",
    region: "",
    type: ""
  };
	$refs: {
		audio: HTMLAudioElement;
		lyricsLines: HTMLDivElement;
	};
	
}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
.el-input{
	width: 70%;
}
.el-form-item{
	/deep/ .el-form-item__label{
		width: 120px;
	}
}
.uploaded{
	width: 85%;
    height: 225px;
    border: 1px solid #B0BEC5;
    float: right;
    border-radius: 5px;
    /deep/ .file-panel{
    	width: 91%;
	    height: 45px;
	    margin: 10px auto;
	    position: relative;
	    display: block;
    	/deep/ div{
    		line-height: 35px;
    		display: inline-block;
    		float: left;
    		left: 18px;
    		position: relative;
    	}
    	/deep/ img{
    		float: left;
    	}
    }
}
</style>
