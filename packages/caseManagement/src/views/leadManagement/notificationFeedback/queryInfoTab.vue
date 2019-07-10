
<template>
  <div style="border-top-width: 1px;
    border-top-style: solid;    border-color: #e6e6e6;">
    <el-col :span="10" :offset="7">
      <div class="text-left">
        <el-transfer
          :titles="['人员', '通报相关单位调查']"
          v-model="currentLevel"
          :data="allPersonNames"
          @change="showTransfer"
        ></el-transfer>
      </div>
    </el-col>

    <el-col :span="10" :offset="7">
      <div class="text-left">
        <el-transfer :titles="['人员', '本级直查']" v-model="subordinate" :data="allPersonNames"></el-transfer>
      </div>
    </el-col>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "queryInfoTab",
  components: {},
  data() {
    const generateData = _ => {
      const data = [];
      const allNames = [
        "0.李某某",
        "1.王某某",
        "2.赵某某",
        "3.钱某某",
        "4.孙某某",
        "5.刘某某",
        "6.李曙光"
      ];

      allNames.forEach((name, index) => {
        data.push({
          label: name,
          key: index
        });
      });
      return data;
    };
    return {
      dialogFormVisible2: false,
      allPersonNames: generateData(), //所有人员
      currentLevel: [], //本级直查名单
      subordinate: [], //转下级调查名单
      activeIndex: "1",
      isChecked: "1"
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleSelect(key) {
      if (key == 1) {
        this.isChecked = 1;
        console.log(this.isChecked);
      } else if (key == 2) {
        this.isChecked = 2;
        console.log(this.isChecked);
      } else {
        this.isChecked = 1;
      }
    },
    //穿梭框改变的方法
    showTransfer(index) {
      alert(index);
      alert(this.allPersonNames[index].label);
    }
  }
})
export default class CaseDistributed extends Vue {
  $refs: {
    audio: HTMLAudioElement;
    lyricsLines: HTMLDivElement;
  };
  resetForm(formName) {
    this.$refs[formName].resetFields();
  }
}
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/queryList.scss";
</style>

