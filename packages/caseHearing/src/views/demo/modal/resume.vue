<template>
    <!-- 案件登记 -->
    <div class="backplane" style="height: auto">


        <div class="backplane-Content">
            <div class="resume-main">
                <div class="human" style="width: 90px">
                    <div class="human-img"></div>
                </div>
                <div class="human-main-right">
                    <div class="human-main-detail">
                        <ul>
                            <li class="human-name" style="text-align: left">
                                <span>韩某某</span>
                                <div class="human-tag">
                                    <div>男</div>
                                    <div>汉族</div>
                                    <div>党员</div>
                                </div>
                            </li>
                            <br>
                            <li class="human-area">
                                山东省济南预备区
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="resume-content">
                <el-collapse v-model="activeNames" class="collapse" >
                    <el-collapse-item id="menu1"  name="menu1">
                        <template slot="title">
                            <i class="header-icon el-icon-info"></i>
                            <span class="title">人员信息</span>
                        </template>
                        <div class="form-content">
                            <el-form class="form-label-right-resume" label-position='right' :model="formLabelAlign">
                                <el-row :gutter="20" >
                                    <el-col :span="12">
                                        <el-form-item label="姓名："class="resume-row"  prop="name4">
                                            <div class="re-label">张建明</div>

                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="部级别：" class="resume-row"  prop="name5">
                                            <div class="re-label">中央军事委员会副主席</div>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" >
                                    <el-col :span="12">
                                        <el-form-item label="人员类别："class="resume-row"  prop="name4">
                                            <div class="re-label">军事军官</div>

                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="政治面貌：" class="resume-row"  prop="name5">
                                            <div class="re-label">中国共产党党员</div>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" >
                                    <el-col :span="12">
                                        <el-form-item label="职务等级："class="resume-row"  prop="name4">
                                            <div class="re-label">军委副主席</div>

                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="军衔等级：" class="resume-row"  prop="name5">
                                            <div class="re-label">少将</div>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" >
                                    <el-col :span="12">
                                        <el-form-item label="隶属大单位："class="resume-row"  prop="name4">
                                            <div class="re-label">某某</div>

                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="工作单位行政区划：" class="resume-row"  prop="name5">
                                            <div class="re-label">北京市/东城区</div>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" >
                                    <el-col :span="12">
                                        <el-form-item label="领导小组职务："class="resume-row"  prop="name4">
                                            <div class="re-label">组长</div>

                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="籍贯：" class="resume-row"  prop="name5">
                                            <div class="re-label">湖北省/武汉市</div>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" >
                                    <el-col :span="12">
                                        <el-form-item label="出生日期："class="resume-row"  prop="name4">
                                            <div class="re-label">1988-02-05</div>

                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="出生地：" class="resume-row"  prop="name5">
                                            <div class="re-label">湖北省/武汉市</div>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" >
                                    <el-col :span="12">
                                        <el-form-item label="入伍时间："class="resume-row"  prop="name4">
                                            <div class="re-label">2008-02-05</div>

                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="入党时间：" class="resume-row"  prop="name5">
                                            <div class="re-label">2012-02-21</div>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </div>
                    </el-collapse-item>
                </el-collapse>
                <div class="resume-content-two">
                        <div class="resume-content-two-left">
                            <el-collapse v-model="activeNames" class="collapse" >
                                <el-collapse-item id="menu1"  name="menu2">
                                    <template slot="title">
                                        <i class="header-icon el-icon-info"></i>
                                        <span class="title">工作履历</span>

                                    </template>
                                    <div class="form-content form-content-el-card">
                                        <div class="block ">
                                            <el-timeline>
                                                <el-timeline-item  color='#2f76dd'timestamp="2018/4/12" placement="top">
                                                    <el-card>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                人员类别：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无业
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                职务等级：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无业
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                部级别：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无业
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                工作单位行政区划：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                备注：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                这是一条备注信息 这是一条备注信息 这是一条备注信息 这是一条备注信息 这是一条备注信息
                                                            </el-col>
                                                        </el-row>
                                                    </el-card>
                                                </el-timeline-item>
                                                <el-timeline-item   color='#2f76dd' timestamp="2018/4/3" placement="top">
                                                    <el-card>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                人员类别：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无业
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                职务等级：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无业
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                部级别：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无业
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                工作单位行政区划：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                备注：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                这是一条备注信息 这是一条备注信息 这是一条备注信息 这是一条备注信息 这是一条备注信息
                                                            </el-col>
                                                        </el-row>
                                                    </el-card>
                                                </el-timeline-item>
                                            </el-timeline>
                                        </div>

                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                        <div class="resume-content-two-right">
                            <el-collapse v-model="activeNames" class="collapse" >
                                <el-collapse-item id="menu1"  name="menu3">
                                    <template slot="title">
                                        <i class="header-icon el-icon-info"></i>
                                        <span class="title">巡视履历</span>
                                    </template>
                                    <div class="form-content form-content-el-card">
                                        <div class="block">
                                            <el-timeline-item  color='#2f76dd'timestamp="2018/4/12" placement="top">
                                                <el-card>
                                                    <el-row>
                                                        <el-col :span="8" class="el-card-left">
                                                            人员类别：
                                                        </el-col>
                                                        <el-col :span="16" class="el-card-right">
                                                            无业
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="8" class="el-card-left">
                                                            职务等级：
                                                        </el-col>
                                                        <el-col :span="16" class="el-card-right">
                                                            无业
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="8" class="el-card-left">
                                                            部级别：
                                                        </el-col>
                                                        <el-col :span="16" class="el-card-right">
                                                            无业
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="8" class="el-card-left">
                                                            工作单位行政区划：
                                                        </el-col>
                                                        <el-col :span="16" class="el-card-right">
                                                            无
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="8" class="el-card-left">
                                                            备注：
                                                        </el-col>
                                                        <el-col :span="16" class="el-card-right">
                                                            这是一条备注信息 这是一条备注信息 这是一条备注信息 这是一条备注信息 这是一条备注信息
                                                        </el-col>
                                                    </el-row>
                                                </el-card>
                                            </el-timeline-item>
                                            <el-timeline-item   color='#2f76dd' timestamp="2018/4/3" placement="top">
                                                <el-card>
                                                    <el-row>
                                                        <el-col :span="8" class="el-card-left">
                                                            人员类别：
                                                        </el-col>
                                                        <el-col :span="16" class="el-card-right">
                                                            无业
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="8" class="el-card-left">
                                                            职务等级：
                                                        </el-col>
                                                        <el-col :span="16" class="el-card-right">
                                                            无业
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="8" class="el-card-left">
                                                            部级别：
                                                        </el-col>
                                                        <el-col :span="16" class="el-card-right">
                                                            无业
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="8" class="el-card-left">
                                                            工作单位行政区划：
                                                        </el-col>
                                                        <el-col :span="16" class="el-card-right">
                                                            无
                                                        </el-col>
                                                    </el-row>
                                                    <el-row>
                                                        <el-col :span="8" class="el-card-left">
                                                            备注：
                                                        </el-col>
                                                        <el-col :span="16" class="el-card-right">
                                                            这是一条备注信息 这是一条备注信息 这是一条备注信息 这是一条备注信息 这是一条备注信息
                                                        </el-col>
                                                    </el-row>
                                                </el-card>
                                            </el-timeline-item>
                                                <el-timeline-item   color='#2f76dd' timestamp="2018/4/3" placement="top">
                                                    <el-card>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                人员类别：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无业
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                职务等级：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无业
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                部级别：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无业
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                工作单位行政区划：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                无
                                                            </el-col>
                                                        </el-row>
                                                        <el-row>
                                                            <el-col :span="8" class="el-card-left">
                                                                备注：
                                                            </el-col>
                                                            <el-col :span="16" class="el-card-right">
                                                                这是一条备注信息 这是一条备注信息 这是一条备注信息 这是一条备注信息 这是一条备注信息
                                                            </el-col>
                                                        </el-row>
                                                    </el-card>
                                                </el-timeline-item>
                                            </div>


                                    </div>
                                </el-collapse-item>
                            </el-collapse>

                        </div>
                </div>


            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue
    } from "vue-property-decorator";

    @Component({
        components: {},
        props: ['officerInfo'],
        data() {
            return {};
        },

        methods: {

            //关闭页面
            closeDialogOfficerListView() {
                this.$emit("closeDiaLog", false);
            }
        },
        created() {},

        mounted() {},
    })
    export default class officerListView extends Vue {
        activeNames=['menu1','menu2','menu3','menu4']
        formLabelAlign={}

    }
</script>

<style lang="scss" scoped>
    /*@import "~@/styles/resume.scss";*/
</style>
