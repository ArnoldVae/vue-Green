<template>
    <el-row class="tree-ui">
        <el-row class="search-wrapper" style="padding:10px">
            <el-col :span="14">
            <el-input class="treeSearch" placeholder="请输入内容"  prefix-icon="el-icon-search"  v-model="keyWord"  @input="search" > </el-input>
            </el-col>
            <el-col :span="10" style=" margin-top: 9px;cursor: pointer;">
            <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">XXX机关</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">XXX机关2</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </el-col>
        </el-row>
        <el-row class="tree-wrapper">
            <ul id="treeDemo" class="ztree customZtree tree-position" pNode=""></ul>
        </el-row>
    </el-row>
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
        // tree的展示数据
        data: {
            type: Array,
            default: () => {
                return []
            },
        },
         // 是否带有勾选
        isCheck:{
            type: Boolean,
            default: () => {
                return false
            },
        },
        // 点击节点树触发方法
        onClick: {
            type: Function,
            default: () => {}
        },
        // tree勾选的节点树
        checked: {
            type: Function,
            default: () => {}
        },
    },
    // props:['data','keyWord','onClick','treeChecked',],
    mounted () {
        let ztreeObj = $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
        $("#search-bt").click(this.filter);
    },
    created(){
    }
})
export default class Tree extends Vue {
    resizeTimer = null
    keyWord = ""
    hiddenNodesFinal=[]
    hiddenNodes = []
    nodeList = [];
    setting = {
        view: {
            showLine: true,
            showIcon: true,
            // fontCss : {fontSize:"14px"}
        },
        check: {
            enable: this.isCheck
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        edit: {
            enable: false
        },
        callback:{
            onClick: this.zTreeOnClick
        }

    };
    zNodes=this.data;
    zTreeOnClick(event, treeId, treeNode) {
       this.onClick(event, treeId, treeNode)
    };
    zTreeChecked(){
        let zTreeObj = $.fn.zTree.getZTreeObj("treeDemo");
        return zTreeObj.getCheckedNodes(true)
    };
    search() {
        let _that = this
        let zTreeObj = $.fn.zTree.getZTreeObj("treeDemo");
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
.tree-ui{
    position: relative;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    .treeSearch{
        /deep/.el-input__inner{
            border-radius: 20px!important
        }
    }
    .tree-wrapper{
        flex: 1;
        overflow: hidden;
        .tree-position{
            width: 100%;
            margin-top: 0px;
            background: white;
            border: 0px solid RGB(235, 238, 245);
            height: 100%;
            padding: 10px;
            position: relative;
            overflow-x: auto;
        }
    }

}
</style>
