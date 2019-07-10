<template>
  <!-- 审理谈话-审理案件-->
  <div>
    <el-container>
      <el-aside width="220px" style="padding:10px">
        <el-timeline class="pointer-Item">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :reverse="false"
            :type="activity.type"
           

            :timestamp="activity.timestamp"
          ><span  @click="tabChange(activity)">{{activity.content}}</span>
		  </el-timeline-item>
        </el-timeline>
      </el-aside>
	  <el-main>	
 <el-collapse v-model="activeNames"  class="collapse"  @change="closeMenu">
      <el-collapse-item id="menu1" name="1">
        <template slot="title">
          <i class="header-icon el-icon-info"></i>审理谈话情况
          <el-button size="mini" type="primary" plain style="margin-left: 20px;">历次审理谈话记录</el-button>
          <el-button size="mini" type="primary" @click='newTalk' plain>新增审理谈话</el-button>
        </template>
        <div class="form-content">
          <el-form class="form-label-top" label-position="top" :model="form">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="谈话时间：" prop="date">
                  <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form.date"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="谈话地点：" prop="area">
                  <el-input v-model="form.area"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item label="谈话人：" prop="name">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <el-form-item label="谈话简要说明："></el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <div class="explainDiv">
                  <el-row class="select-row">
                    <el-col :span="10">
                      <div>
                        <span>本人</span>
                        <el-select v-model="value" placeholder="请选择">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                        <span>违纪事实</span>
                      </div>
                    </el-col>
                    <el-col :span="10">
                      <span>本人</span>
                      <el-select v-model="value1" placeholder="请选择">
                        <el-option
                          v-for="item in options1"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                      <span>处置意见</span>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="18">                                                                                                                
                      <el-form-item label="备注：" prop="name">
                        <el-input
                          type="textarea"
                          :autosize="{ minRows: 4}"
                          v-model="form.desc"
                          placeholder="请输入内容"
                        ></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>
	  </el-main>
    </el-container>
   

    <div class="backplane-footer-center" v-if="pageFlag!='details'">
      <!--<el-button type="primary">提交</el-button>-->
     	<el-button type="success"  @click="saveForm()">保存</el-button>
			<el-button  @click="closeForm()">返回</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["pageFlag"],
  components: {},
  data() {
    return {
      options: [
        {
          value: "1",
          label: "同意"
        },
        {
          value: "2",
          label: "不同意"
        }
      ],
      options1: [
        {
          value: "1",
          label: "接受"
        },
        {
          value: "2",
          label: "不接受"
        }
      ],
      value: "",
      value1: "",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
	  },
	  activities: [ {
          content: '地点2',
          timestamp: '2018-04-13',
          type:'primary'
        },{
          content: '地点1',
          timestamp: '2018-04-15'
        },],

      activeNames: ["1", "2", "3", "4", "5", "6", "7", "8"],

      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        type: [],
        resource: "",
        desc: ""
      },
    };
  },

  created() {},
  mounted() {},
  methods: {}
})
export default class caseSupplement extends Vue {
  isCollapse: boolean = false;
  focusStep(item) {
    this.steps.forEach((el, index) => {
      el.active = false;
    });
    item.active = true;
  }

  addDisciplineObjList() {
    // this.disciplineObjList.push({
    //     test:""
    // })
  }
  newTalk(){
	  console.log('tag')
	  this.activities.splice(0, 0, {
		   content: this.form.area,
          timestamp: this.form.date
	  });
  }
  tabChange(item){
    console.log('aaaaaaaaaaa')
    this.activities.forEach(element => {
    
      element.type=''
    });
    this.form.date=item.timestamp
    this.form.area=item.content
    item.type='primary'
  }
  closeMenu(){
	this.activeNames=["1", "2", "3", "4", "5", "6", "7", "8"]
  }
    saveForm(){
            this.$parent.$emit("closePage");
            this.$message({
			  type: "success",
			  message: "保存成功!"
			});
        }
		
		closeForm(){
			this.$parent.$emit("closePage");
		}
 
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
/*trialTalkPage.vue*/
/*审理谈话样式*/

.explainDiv {
  border: 1px solid #dcdfe6;
  /deep/.el-col {
    text-align: left;
  }
  /deep/.select-row {
    margin-top: 20px;
    span {
      font-size: 14px;
    }
    input {
      height: 32px;
      line-height: 1.77777777;
    }
  }
}
// 下来选icon调整
/deep/.el-input__icon {
  line-height: 0;
}
</style>