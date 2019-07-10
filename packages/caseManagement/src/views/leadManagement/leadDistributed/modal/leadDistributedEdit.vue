<template>
<!-- 线索分发 -->
<!-- 转下级调查dialog弹窗 -->
  <div>
      <el-form
        :model="currentLevelData"
        ref="currentLevelData"
        class="form-label-top"
        :rules='rules'
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="接收单位名称：" prop="acceptOrganization">
              <el-input v-model="currentLevelData.acceptOrganization" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="分发时间：" prop="distributeTime">
              <el-date-picker
                v-model="currentLevelData.distributeTime"
                type="date"
                placeholder="选择日期"
								value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
					<el-col :span="8" >
					  <el-form-item label="接收单位联系人：" prop="acceptContacter">
					    <el-input v-model="currentLevelData.acceptContacter" autocomplete="off"></el-input>
					  </el-form-item>
					</el-col>
        </el-row>
				
        <el-row>
          <el-col :span="8" >
            <el-form-item label="接收单位联系方式:" prop="acceptContactInfo">
              <el-input v-model="currentLevelData.acceptContactInfo" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default {
  components: {},
  data() {
    return {
      currentLevelData: {
        acceptOrganization: "", //接收单位名称
        distributeTime: "", //分发时间
        acceptContacter: "", //接收单位联系人
        acceptContactInfo: "" //接收单位联系方式
      },
      rules:{
        //表单校验
        acceptOrganization:[
          {required: true,message: '请输入接收单位',trigger:'blur'}
          ],
        distributeTime:[
          {required: true,message: '分发时间' ,trigger:'blur'}
        ],
        acceptContacter:[
          {required: true,message: '接收单位联系人',trigger:'blur'}
        ],
        acceptContactInfo:[
          {required: true,message: '请填写接收单位',trigger:'blur'},
          {min: 9,max: 11,message:'请输出接收单位的电话，或者是手机号',trigger:'blur'}
        ]
      },
    };
  },
 
  created() {},
	mounted() {},
  methods:{
    
    //提交表单
    returnForm(){
      // debugger
      this.$refs.currentLevelData.validate((valid)=>{
        //如果存在就提交成功
        if(valid){
          this.message({
            showClose: true,
				    message: '提交成功',
				    type: 'success'
          });
          this.closeDiaLog();
        }else{
          this.message({
            showClose: true,
				    message: '提交失败',
				    type: 'success'
          });
          console.log('valid'+valid);
          return false;
        }
      });
  },
    //打印数据
    // returnForm() {
		// 	//提示信息
		// 	this.$message({
		// 		showClose: true,
		// 		message: '提交成功',
		// 		type: 'success'
		// 	});
    //   console.log(JSON.stringify(this.currentLevelData));
    //   this.closeDiaLog();
    // },
   resetFrom(distributeDetails){
      this.$refs[distributeDetails].resetFields();
    },


		 //保存数据
		saveForm(){
			//提示信息
			this.$message({
				showClose: true,
				message: '保存成功',
				type: 'success'
			});
		  console.log(JSON.stringify(this.currentLevelData));
		  this.closeDiaLog();
		},
    //关闭dialog弹窗
    closeDiaLog() {
      this.$parent.$parent.dispenseDialogFormVisible = false;
    }
  }
}
  </script>

<style ref="stylesheet/scss" lang="scss" scoped>
.form-centent { 
  /deep/ .el-date-editor {
    width: 100%;
  }
  .el-dialog__footer {
    text-align: center;
  }
}
</style>
