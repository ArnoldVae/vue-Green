<template>
    <div class="dialog">
        <el-row>
            <el-col :span="24">
                <headTools v-bind:parentValue="parentKey"></headTools>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4">
                <catalogueTree @change-type="onChangeType"></catalogueTree>
            </el-col>
            <el-col :span="20">

                <iframe :src="pdfurls" frameborder="0" style="width: 100%;height: 600px;min-height: 100%;"></iframe>

            </el-col>
        </el-row>
    </div>
</template>
<script>
    import Vue from 'vue';
    import tree from "./tree.vue";
    import catalogueTree from "./catalogueTree.vue";
    import headTools from "./headTools.vue";
    export default {
        name: "caseView",
        data() {
            return {
                parentKey:'this is value',
                pdfurls:'http://127.0.0.1:8002/img/a.pdf'

            };
        },
        methods: {
            onChangeType (type) { // type是子组件$emit传递的参数
                this.pdfurls = type;
                console.log('parent++'+type)
            }
        },
        comments:{

        },
        components: {
            tree,
            catalogueTree,
            headTools
        }
    }
</script>



<style scoped>
    .dialog{
        margin-top:20px;
    }
    .vddl-list {
        min-height: 44px;
    }
    .red{
        color:red;
    }
    .panel__body{
        padding: 3px 10px 3px 10px;
    }
</style>