<template>
    <div class="backplane">
        <div class="backplane-Content margin-0">
            <el-collapse v-model="activeNames1" class="collapse">
                <el-collapse-item id="menu1"  name="menu1" >
                    <template slot="title" >
                        <i class="header-icon el-icon-document"></i> <span class="title">复议意见</span>
                    </template>
                    <div class="form-content">
                        <el-form class="form-alive-label-top" label-position='top' :model="form" >
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="复议时间：">
                                        <el-date-picker v-model="formLabelAlign.date" type="date" placeholder="选择日期">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="18">
                                    <el-form-item label="复议意见：">
                                        <el-input type="textarea"  :autosize="{ minRows: 4, maxRows: 4}" v-model="formLabelAlign.opinion" placeholder="请输入内容">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                        </el-form>

                    </div>
                </el-collapse-item>
            </el-collapse>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        props: [''],
        components: {},
        data() {
            return {

            };
        },

        created() {
        },
        mounted() {
        },
        methods: {

        }
    })
    export default class DemoDetails extends Vue {
        activeName:string ='first';
        activeNames1:Array<string> =  ['menu1','menu2'];
        activeNames2:Array<string> =  ['menu3'];
        formLabelAlign = {
            date:'',
            opinion:''
        };

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>