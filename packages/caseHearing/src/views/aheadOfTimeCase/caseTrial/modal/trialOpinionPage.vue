<template>
    <!--审理意见-提前介入 -->
    <div class="backplane">
        <div class="backplane-Content">
            <el-collapse class="collapse"  v-model="activeNames">
                        <el-collapse-item id="menu1" name="1">
                            <template slot="title">
                                <i class="header-icon el-icon-info"></i>审理意见
                            </template>
                             <div class="form-content">
                                <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                                    <el-row :gutter="20">
                                        <el-col :span="6">
                                            <el-form-item label="审理时间：">
                                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                                                style="width: 100%;"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-form-item label="党纪处分意见:">
                                                <el-select v-model="form.partyPunish" placeholder="请选择" class="form_select">
                                                    <el-option v-for="(option,index) in partyPunish" :key="index"
                                                            v-bind:label="option.value"
                                                            v-bind:value="option.code"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>   
                                        <el-col :span="6">
                                            <el-form-item label="军纪处分意见:">
                                                <el-select v-model="form.armyPunish" placeholder="请选择" class="form_select">
                                                    <el-option v-for="(option,index) in armyPunish" :key="index"
                                                            v-bind:label="option.value"
                                                            v-bind:value="option.code"></el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                    </el-row >
                                    <el-row :gutter="20">
                                        <el-tabs v-model="activeName" @tab-click="handleClick" >
                                            <el-tab-pane label="被调查人的态度和认识" name="third" >
                                                <el-form-item >
                                                    <el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.desc2" ></el-input>
                                                </el-form-item>
                                            </el-tab-pane>
                                            <el-tab-pane label="处理意见" name="five">
                                                <el-form-item>
                                                    <el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.desc4"></el-input>
                                                </el-form-item>
                                            </el-tab-pane>
                                        </el-tabs>

                                    </el-row>
                                </el-form>
                             </div>
                        </el-collapse-item>
            </el-collapse>
        </div>
        <div class="backplane-footer-center" v-if="pageFlag!='details'">
            <el-button type="success" @click="downLoadFile">导出审理报告文档</el-button>
            <el-button type="primary" @click="stateTrans">提交</el-button>
            <el-button @click="close">返回</el-button>
            <el-button  @click="goNext">上一步</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    const selectData = require("store/selectData.json");
    @Component({
        props: ['pageFlag'],
        components: {},
        data() {
            return {
                isCollapse: "left",
                activeName: 'third',
                activeNames: ['1'],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '',
                    partyPunish:'',
                    armyPunish:'',
                    desc2: '',
                    desc4: ''
                },
                 partyPunish:selectData.partyPunish,//党纪处分
                 armyPunish:selectData.armyPunish,//军纪处分
                rules: {
                    name: [
                        {required: true, message: '请输入', trigger: 'blur'}
                    ],
                }
            };
        },
        created() {
        },
        mounted() {
        },
        methods: {
            close(){
                     this.$emit('submitEvent','SLYJ')
            },
        	handleClick(){
        		
        	}
        }
    })
    export default class caseSupplement extends Vue {
        isCollapse: boolean = false;

        downLoadFile() {
            var $eleForm = $("<form method='get'></form>");

            $eleForm.attr("action", "img/123.docx");

            $(document.body).append($eleForm);

            //提交表单，实现下载
            $eleForm.submit();

//        window.open('')
        }
        goNext(){
            this.$emit('goNextPage')
        }

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
</style>