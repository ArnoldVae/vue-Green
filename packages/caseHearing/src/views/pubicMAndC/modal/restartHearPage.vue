<template>
<!--重启审理弹框-->
	<div>
    <el-form
            class="form-label-top"
            :rules="rules"
            label-position="top"
            :model="formLabelAlign">
        <el-row>
            <el-col :span="12">
                <el-form-item label="重启审理时间：">
                    <el-date-picker v-model="value3" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                      <el-form-item label="重启审理选项：" prop="name">
                      <el-select
                        v-model="value1"
                        filterable
                        allow-create
                        default-first-option
                        placeholder="请选择">
                        <el-option
                          v-for="item in options1"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                      </el-form-item>
                    </el-col> 
        </el-row>
        <el-row>
            <el-col :span="12">
                      <el-form-item label="重启审理原因：" prop="name">
                      <el-select
                        v-model="value2"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        placeholder="请选择">
                        <el-option
                          v-for="item in options2"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                      </el-form-item>
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
			options1: [{
          value: '1',
          label: '下级重新报批'
        }, {
          value: '2',
          label: '继续审理'
        }],
				options2: [{
          value: '1',
          label: '补证完毕'
        }, {
          value: '2',
          label: '违纪问题查结'
        }],
				value3:"",
        value1: [],
				value2: [],
			  keyWords: {
				caseTitle: '',
				respondentName: ''
			},
      formLabelWidth: '20%',
      rules: {
        name: [
            { required: true, message: '请输入', trigger: 'blur' }
        ],
      }
		};
	},
	created() {},
	mounted() {},
	methods: {
	}
})
export default class fileForDetails extends Vue {
	formLabelAlign = {
    name: "",
    region: "",
    type: ""
  };
}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>



</style>
