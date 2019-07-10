
<template style="background: #f1f1f1">
    <div class="body-container">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="初审情况" name="1">
                    <div>
                        <el-form
                                class="form-label-top"
                                :rules="rules"
                                :label-position="labelPosition"
                                :model="formLabelAlign"
                        >
                            <el-row>
                                <el-col :span="6">
                                    <el-form-item label="报件要素是否齐全" prop="name">
                                        <el-switch
                                                v-model="formLabelAlign.name"
                                                active-color="#13ce66"
                                                inactive-color="#ff4949">
                                        </el-switch>
                                    </el-form-item>

                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="案体总体要素是否齐全">
                                        <el-switch
                                                v-model="formLabelAlign.name1"
                                                active-color="#13ce66"
                                                inactive-color="#ff4949">
                                        </el-switch>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="违纪事实是否清楚">
                                        <el-switch
                                                v-model="formLabelAlign.name3"
                                                active-color="#13ce66"
                                                inactive-color="#ff4949">
                                        </el-switch>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="定位是否准确">
                                        <el-switch
                                                v-model="formLabelAlign.name4"
                                                active-color="#13ce66"
                                                inactive-color="#ff4949">
                                        </el-switch>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>

                    </div>
                    <div></div>
                </el-collapse-item>
                <el-collapse-item title="初审结果" name="2">
                    <div>
                        <el-radio-group v-model="tabPosition" style="margin: 20px 0;">
                            <el-radio-button label="left">案件受理</el-radio-button>
                            <el-radio-button label="right">案件回退</el-radio-button>
                        </el-radio-group>
                        <el-form v-show="tabPosition=='left'"
                                 class="form-label-top"
                                 :rules="rules"
                                 :label-position="labelPosition"
                                 :model="formLabelAlign"
                                 style="margin-bottom: 30px;"
                        >
                            <el-row>
                                <el-col :span="6">
                                    <el-form-item label="受理时间">
                                        <el-date-picker v-model="formLabelAlign.date" type="date" placeholder="选择日期"></el-date-picker>
                                    </el-form-item>
                                </el-col>

                                <el-col :span="6">
                                    <el-form-item label="是否需要上传扫描件">
                                        <el-switch
                                                v-model="formLabelAlign.value3"
                                                active-color="#13ce66"
                                                inactive-color="#ff4949">
                                        </el-switch>

                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="签收期限">
                                        <el-input v-model="formLabelAlign.value2"></el-input>

                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="红色预警期限(天数)"  prop="value4">
                                        <el-input v-model="formLabelAlign.value4"></el-input>

                                    </el-form-item>
                                </el-col>




                            </el-row>
                            <el-row>

                                <el-col :span="6">
                                    <el-form-item label="黄色预警期限(天数)"  prop="value5">
                                        <el-input v-model="formLabelAlign.value5"></el-input>

                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="蓝色预警期限(天数)"  prop="value6">
                                        <el-input v-model="formLabelAlign.value6"></el-input>

                                    </el-form-item>
                                </el-col>




                            </el-row>
                            <el-row>
                                <el-col :span="18">
                                    <el-form-item label="领导签批意见">
                                        <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
                                    </el-form-item>
                                </el-col>

                            </el-row>
                            <el-row>
                                <el-col :span="6">
                                    <el-form-item label="主审核人">
                                        <el-select v-model="formLabelAlign.mainHuman" clearable placeholder="请选择">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="辅助审核人">
                                        <el-select
                                                v-model="formLabelAlign.othersHuman"
                                                multiple
                                                filterable
                                                allow-create
                                                default-first-option
                                                placeholder="请选择">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>


                            </el-row>
                        </el-form>
                        <el-form v-show="tabPosition=='right'"
                                 class="form-label-top"
                                 :rules="rules"
                                 :label-position="labelPosition"
                                 :model="formLabelAlign"
                                 style="margin-bottom: 30px;"
                        >
                            <el-row>
                                <el-col :span="18">
                                    <el-form-item label="回退意见">
                                        <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
                                    </el-form-item>
                                </el-col>

                            </el-row>
                        </el-form>

                    </div>
                </el-collapse-item>
                <div class="body-footer">
                    <div class="footer-btn-grunp">
                        <el-button>重置</el-button>

                        <el-button type="success">提交</el-button>
                    </div>



                </div>
            </el-collapse>

        </div>


</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";


    @Component({
        name : "formAudit",
        components: { },
        data() {
            return {
                activeNames:['1','2'],
                formLabelAlign:{
                    name:true,
                    name1:true,
                    name2:true,
                    name3:true,
                    name4:true
                },
                options:[{value:'01', label:"审核人1"},{value:'02', label:"审核人2"},{value:'03', label:"审核人3"}],
                tabPosition:"left"
            };
        },

        created() {},
        mounted() {},
        methods: {}
    })
    export default class formAudit extends Vue {
        rules = {
            name: [
                { required: true, message: "请输入活动名称", trigger: "blur" },
                { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
            ],
            value4: [
                { required: true, message: "请输入期限天数", trigger: "blur" },
                { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
            ],
            value5: [
                { required: true, message: "请输入期限天数", trigger: "blur" },
                { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
            ],
            value6: [
                { required: true, message: "请输入期限天数", trigger: "blur" },
                { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
            ],
            value7: [
                { required: true, message: "请输入期限天数", trigger: "blur" },
                { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
            ]

        };
        labelPosition="top";

        handleChange(){
            this.activeNames=['1','2']

        }


        mounted() {

        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/common.scss";
    @import "~@/styles/dialogBox.scss";

    .body-container{
        padding: 3%;
        .el-collapse-item{
            border: 1px solid #eceae9;
            border-radius: 8px;
            .el-radio-group{
                margin: 0;
            }
        }
        /deep/.el-collapse-item__header{
            border-bottom: 1px solid #eceae9;
            border-top-radius: 8px;
            padding: 0 24px;
            border-radius: 8px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }

    }
   /deep/ .el-collapse{
        border-top: none;
    }
    .body-footer{
        height: 60px;
        position: fixed;
        width: 100%;
        top:92%;
        text-align: center;
        padding: 10px ;
        background: #ffffff;
        .footer-btn-grunp{
            margin-right: 150px;
        }
    }


</style>