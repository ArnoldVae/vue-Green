<template>
  <div>
            <el-row type="flex" justify="space-around" class="file_conter">
              <el-col :span="2" class="file" v-for="(item,index) in remainTime" :key="index">
                <div class="file_conter">
                  <div style="margin-top: 66%;">{{item.name}}</div>
                  <div style="margin-top: 1%;font-size: 5pt;color: rgb(113,188,224);">{{item.type}}</div>
                  <div style="margin-top: 6%;padding-right: 10px;font-size: 4pt;text-align: right;" class="file_conter_day">{{item.time}}天</div>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-around" class="file_conter">
              <el-col :span="2" v-for="(item,index1) in remainTime" :key="index1">
                <div style="color:#fff;font-size:10px">
                  <el-row>
                    <el-col :span='11' style="text-align:left">{{item.date}}</el-col>
                    <el-col :span='13' style="text-align:right"><i class="el-icon-time"></i>还剩{{item.day}}天</el-col>
                  </el-row>
                </div>
                <div>
                    <div class="progress-bar__outer">
                      <div v-bind:class="{'bar__inner80': item.day<3 }" class="progress-bar__inner">&nbsp;</div>
                    </div>
                </div>
              </el-col>
            </el-row>
          </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  methods:{
    
  },
  data(){
    return{
      remainTime:[
        {
          name:'李东旭',
          type:'自办案件',
          time:60,
          date:1.18,
          day:1
        },
        {
          name:'张国峰',
          type:'备案案件',
          time:10,
          date:1.11,
          day:10
        },
        {
          name:'李玉梅',
          type:'征求意见案件',
          time:10,
          date:1.18,
          day:10
        },
        {
          name:'李东旭',
          type:'自办案件',
          time:10,
          date:1.18,
          day:10
        },
        {
          name:'李东旭',
          type:'自办案件',
          time:10,
          date:1.18,
          day:1
        },
        {
          name:'张国峰',
          type:'备案案件',
          time:10,
          date:1.11,
          day:10
        },
        {
          name:'李玉梅',
          type:'征求意见案件',
          time:10,
          date:1.18,
          day:10
        },
        {
          name:'李东旭',
          type:'自办案件',
          time:10,
          date:1.18,
          day:10
        }
      ]
    }
  }
})
export default class file extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.progress-bar__outer{
    border-radius: 100px;
    background-color: #ebeef5;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
}
.progress-bar__inner{
    left: 0;
    top: 0;
    height: 6px;
    width:20%;
    background-color: rgb(75,165,50);
    text-align: right;
    border-radius: 100px;
    line-height: 1;
    white-space: nowrap;
    transition: width .6s ease;
}
.bar__inner80{
   width:80%;
   background-color: red;
}
.progress-bar__outer::after{
    content: "";
}
.progress-bar__inner::after{
  content: "";
}
.file{
  background:rgb(253,252,250);
  background-image: url('../assets/img/palette.png');
  height:200px;
  background-repeat: no-repeat;
  background-size:100% 100%;
}
.file_conter{
  margin-bottom:10px;
}
.file_bottom{
/* position:absolute;
left:0;
width: 100%;
bottom:0; */
}
.file_conter{
}
.file_conter_day{
}
</style>
