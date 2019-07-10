<template>
  <el-dropdown trigger="click" placement="top-start" @visible-change="visibleChange">
    <div class="input-wrapper">
      <div class="placeholder" v-show="value.length===0">{{placeholder}}</div>
      <span class="item" v-for="(item,index) in value" :key="index">
        {{item[showKey]}}
        <i class="el-icon-circle-close" @click.stop="delItem(item)"></i>
      </span>
    </div>
    <el-dropdown-menu slot="dropdown">
      <ul :id="id" class="ztree customZtree tree-position" pNode></ul>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
import "../assets/ztree/js/jquery-1.4.4.min.js";
import "../assets/ztree/js/jquery.ztree.core.js";
import "../assets/ztree/js/jquery.ztree.excheck.js";
import "../assets/ztree/js/jquery.ztree.exedit.js";
import "../assets/ztree/js/jquery.ztree.exhide.js";
@Component({
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    type: {
      type: String,
      default: () => {
        return "checkbox"
      }
    },
    showKey: {
      type: String,
      default: () => {
        return "name"
      }
    },
    placeholder: {
      type: String,
      default: () => {
        return "请选择"
      }
    },
    id: {
      type: String,
      default: () => {
        return new Date().getTime().toString()
      }
    },
    // tree的展示数据
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    change: {
      type: Function,
      default: () => { }

    },
    // 是否带有勾选
    isCheck: {
      type: Boolean,
      default: () => {
        return false
      },
    },
    // 点击节点树触发方法
    clickCallback: {
      type: Function,
      default: () => { }
    },
    // tree勾选的节点树
    checked: {
      type: Function,
      default: () => { }
    },
  },
  // props:['data','keyWord','onClick','treeChecked',],
  mounted() {
    let ztreeObj = $.fn.zTree.init($("#" + this.id), this.setting, this.zNodes);
    $("#search-bt").click(this.filter);
    // 同步model
    this.$emit('input', this.zTreeChecked())
  },
  created() {
  }
})
export default class Tree extends Vue {
  isShowTree = false //下拉框是否显示标识

  resizeTimer = null
  keyWord = ""
  hiddenNodesFinal = []
  hiddenNodes = []
  nodeList = [];
  code = "dark";
  log = "dark";
  className = "dark";
  checks = [];
  setting = {
    view: {
      selectedMulti: false
    },
    check: {
      enable: true,
      chkStyle: this.type,
      radioType: "all"
    },
    data: {
      simpleData: {
        enable: true
      }
    },
    callback: {
      beforeCheck: this.beforeCheck,
      onCheck: this.onCheck,
      onClick: this.onClick,
    }

  };
  beforeCheck(treeId, treeNode) {
    this.className = (this.className === "dark" ? "" : "dark");
    // console.log("[ " + " beforeCheck ]&nbsp;&nbsp;&nbsp;&nbsp;" + treeNode.name);
    return (treeNode.doCheck !== false);
  };
  onCheck(e, treeId, treeNode) {
    this.change(this.zTreeChecked())
    this.$emit('input', this.zTreeChecked())
    this.checks = this.zTreeChecked()
    // console.log("[ " + " onCheck ]&nbsp;&nbsp;&nbsp;&nbsp;" + treeNode.name);
  }
  onClick(e, treeId, treeNode) {
    let zTreeObj = $.fn.zTree.getZTreeObj(this.id);
    zTreeObj.checkNode(treeNode, !treeNode.checked, null, true);
    return false;
  }

	/**
	 * 同步下拉框显示状态
	 */
  visibleChange(flag) {
    this.isShowTree = flag
  }
  delItem(item) {
    let zTreeObj = $.fn.zTree.getZTreeObj(this.id);
    zTreeObj.checkNode(item, false, true)
    this.$emit('input', this.zTreeChecked())
    return false
  }


  zNodes = this.data;
  zTreeOnClick(event, treeId, treeNode) {
    this.onClick(event, treeId, treeNode)
    this.zTreeChecked()
  };
  zTreeChecked() {
    let zTreeObj = $.fn.zTree.getZTreeObj(this.id);
    console.log(zTreeObj.getCheckedNodes(true), '====')
    return zTreeObj.getCheckedNodes(true)
  };
  search() {
    let _that = this
    let zTreeObj = $.fn.zTree.getZTreeObj(this.id);
    let allNode = zTreeObj.transformToArray(zTreeObj.getNodes());
    zTreeObj.hideNodes(allNode);

    function filterFunc(node) {
      if (node.name.indexOf(_that.keyWord) > -1) return true;
      return false;
    };

    if (_that.keyWord == "") {
      zTreeObj.showNodes(allNode);
      zTreeObj.expandAll(false);
    } else {
      this.nodeList = zTreeObj.getNodesByFilter(filterFunc);
      this.nodeList = zTreeObj.transformToArray(this.nodeList);
      for (var n in this.nodeList) {
        if (this.nodeList.hasOwnProperty(n)) {
          this.findParent(zTreeObj, this.nodeList[n]);
        }
      }
      zTreeObj.showNodes(this.nodeList);
    }
  }
  findParent(treeObj, node) {
    treeObj.expandNode(node, true, false, false);
    var pNode = node.getParentNode();
    if (pNode != null) {
      this.nodeList.push(pNode);
      this.findParent(treeObj, pNode);
    }
  };
}

</script>
<style  lang="scss" scoped>
@import "~@/assets/ztree/css/demo.css";
@import "~@/assets/ztree/css/metroStyle/metroStyle.css";
.treeSearch {
  /deep/.el-input__inner {
    border-radius: 20px !important;
  }
}
.el-dropdown {
  width: 100%;
  text-align: left;
  .input-wrapper {
    border: $inputBorder;
    background-color: $inputBg;
    border-radius: $inputBorderRadius;
    min-height: $inputHeight;
    .placeholder {
      margin-left: 9px;
      color: #cbcfd5;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .item {
      box-sizing: border-box;
      border-color: transparent;
      margin: 4px 0 2px 6px;
      background-color: $selectItemBg;
      color: #909399;
      height: 24px;
      padding: 0 4px 0 8px;
      line-height: 24px;
      display: inline-block;
      border-radius: 4px;
      i {
        cursor: pointer;
        font-size: 15px !important;
        color: #c0c4cc;
        position: relative;
        &:hover {
          color: #a4a8af;
        }
      }
    }
  }
}
.tree-position {
  margin-top: 0px;
  background: white;
  border: 0px solid RGB(235, 238, 245);
  width: 100%;
  height: 450px;
  overflow-y: auto;
  overflow-x: auto;
  padding: 10px;
  position: relative;
}
.ztree {
  background: #fff;
  border: none;
  height: auto;
}
</style>
