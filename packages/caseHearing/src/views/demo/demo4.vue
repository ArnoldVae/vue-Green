<template>
  <div class="adapt-height">
    <el-row class="adapt-height">
      <el-col
        :span="12"
        class="adapt-height"
        style="background: RGB(245, 245, 245);padding: 16px 0px;"
      >
					<multiple-tree-select
						:data="trees"
						showKey="name"
						:on-click="treeOnClick"
						v-model="tree.checks"
						placeholder="请选择"
					></multiple-tree-select>
					{{tree.checks}}
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import multipleTreeSelect from "../../components/multipleTreeSelect.vue";
// 暂时先写死模拟的tree数据
const trees = require("./multipleTreeJson.json");
@Component({
  name: "demo4",
  components: {
    multipleTreeSelect
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
})
export default class Demo extends Vue {
  tree = {
    checks: []
  };
  trees = trees;
  // 在实例创建完成后被立即调用
  created() {
    console.log("demo created");
  }
  treeOnClick(event: any, treeId: any, treeNode: any) {
    console.log(event);
    console.log(treeId);
    console.log(treeNode);
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/queryList.scss";
.adapt-height {
  position: relative;
  height: 100%;
}
</style>

