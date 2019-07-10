<template>
    <div class="dialog">
        <el-tabs v-model="activeName">
            <el-tab-pane label="案件著录1" name="first">
                <caseView2></caseView2>
            </el-tab-pane>
            <el-tab-pane label="案件著录2" name="second">
                <!--<el-row>
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark">
                            <el-button-group style="display: flex;justify-content: flex-end;">
                                <el-popover
                                        placement="right"
                                        width="523"
                                        trigger="click">
                                    <el-transfer
                                            v-model="value5"
                                            :props="{
                                                  key: 'value',
                                                  label: 'desc'
                                                }"
                                            :data="data3"
                                            :titles="['修改前', '修改后']"
                                    >
                                        <el-button class="transfer-footer" slot="right-footer" size="small">保存</el-button>
                                    </el-transfer>
                                    <el-button slot="reference" type="primary">目录设置</el-button>
                                </el-popover>





                                <el-dropdown>
                                    <el-button type="primary">
                                        添加附件<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
                                    </el-button>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>高拍仪</el-dropdown-item>
                                        <el-popover
                                                placement="left"
                                                width="300"
                                                height="100"
                                                trigger="click">

                                            <el-upload
                                                    :file-list="fileList"
                                            >
                                                <el-button type="primary">正卷</el-button>
                                                <el-button type="primary">副卷</el-button>
                                            </el-upload>

                                            <el-dropdown-item slot="reference">本地</el-dropdown-item>
                                        </el-popover>

                                        <el-dropdown-item>扫描</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>

                                &lt;!&ndash;<el-upload
                                        class="upload-demo"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :before-remove="beforeRemove"
                                        multiple
                                        :limit="3"
                                        :on-exceed="handleExceed"
                                        :show-file-list="false"
                                        :on-success="uploadScuess"
                                        :file-list="fileList">
                                    <el-button type="primary">添加附件</el-button>
                                </el-upload>&ndash;&gt;
                                <el-button type="primary">预览卷宗</el-button>
                            </el-button-group>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">
                        <h3>卷宗目录</h3>
                        <div class="grid-content bg-purple">
                            <el-collapse v-model="activeNames" @change="handleChange">

                                    <div v-for="(list, listName) in lists" class="v-col&#45;&#45;auto">
                                        <el-collapse-item :title="listName" name="1">
                                            <div class="panel__body">
                                                <vddl-list class="panel__body&#45;&#45;list" :list="list" :horizontal="false">
                                                    <vddl-draggable class="panel__body&#45;&#45;item" v-for="(item, index) in list" :key="item.id"
                                                                    :draggable="item"
                                                                    :index="index"
                                                                    :wrapper="list"
                                                                    :dragend="handleDragend"
                                                                    effect-allowed="move">
                                                        <vddl-handle
                                                                :handle-left="20"
                                                                :handle-top="20"
                                                                class="handle">
                                                        </vddl-handle>
                                                        {{item.label}}
                                                    </vddl-draggable>
                                                    <vddl-placeholder class="red">&#45;&#45;》放至此处《&#45;&#45;</vddl-placeholder>
                                                </vddl-list>
                                            </div>
                                        </el-collapse-item>
                                    </div>

                            </el-collapse>
                        </div>
                    </el-col>
                    <el-col :span="20">

                        <iframe :src="pdfurls" frameborder="0" style="width: 100%;height: 600px;min-height: 100%;"></iframe>

                    </el-col>
                </el-row>-->

            </el-tab-pane>
        </el-tabs>

        </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import caseView2 from "./caseView2.vue";

    /*@Component({
        components: {
            caseView2
        },

    })*/



    export default {
        data() {
            return {
                ok:false,
            };
        },
        methods: {
            closepdf(){
                this.isshowpdf = false
            }
        },
        components: {
            caseView2
        },
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