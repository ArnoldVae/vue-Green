<template>
    <!-- 补充完善 -->
    <div class="dialog">
        <el-form ref="form" :model="form" label-width="120px" class="form_submit">
            <el-form-item label="主要被审查调查人员姓名*:">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.resource">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    <el-radio label="不详"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="政治面貌" class="form_select">
                <el-select v-model="form.region" placeholder="请选择">
                    <el-option v-for="option in faceList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工作单位">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="企业性质" class="form_select">
                <el-select v-model="form.region" placeholder="请选择">
                    <el-option v-for="option in businessNatureList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="职级" class="form_select">
                <el-select v-model="form.region" placeholder="请选择">
                    <el-option v-for="option in rankList" v-bind:label="option.value" v-bind:value="option.code"></el-option>

                </el-select>
            </el-form-item>
            <el-table
                    :data="caseList"
                    style="width: 100%">
                <el-table-column
                        prop="caseInc"
                        label="涉案人员"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="性别"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="企业性质">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="政治面貌">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="工作单位">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="操作">
                </el-table-column>

            </el-table>
        </el-form>
        <div class="foot">
            <el-button type="primary" plain round>上一步</el-button>
            <el-button type="primary" plain round>下一步</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({
        components: {},
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '',
                    desc: ''
                },
                //        企业性质（下拉）
                businessNatureList:[{code:"01", value:"国有或国有控股企业"}, {code:"01", value:"集体企业"}, {code:"01", value:"私营企业"},{code:"01", value:"其他内资企业"},{code:"01", value:"外商及港澳台资企业"}],
//        职级列表（下拉）
                rankList:[{code:"01", value:"正省部级"}, {code:"01", value:"副省部级"}, {code:"01", value:"正厅局级"},{code:"01", value:"副厅局级"},{code:"01", value:"正县处级"},{code:"01", value:"副县处级"}],
//        政治面貌下拉
                faceList:[{code:"01", value:"党组织"}, {code:"01", value:"中共党员"}, {code:"01", value:"共青团员"},{code:"01", value:"民主党派"},{code:"01", value:"无党派"},{code:"01", value:"其他"}],
//        承办处下拉
                undertakeList:[{code:"01", value:"审理一处"}, {code:"01", value:"审理一处附属办公室"}, {code:"01", value:"审理二处"},{code:"01", value:"中央测试"}],
//        承办人
                undertakerList:[{code:"01", value:"测试一"}, {code:"01", value:"测试二"}, {code:"01", value:"测试三"},{code:"01", value:"测试四"}],
//        民族下拉
                nationList:[{code:"01", value:"汉族"}, {code:"01", value:"蒙古族"}, {code:"01", value:"回族"},{code:"01", value:"维吾尔族"}],
//        籍贯下拉
                nativeList:[{code:"01", value:"北京市"}, {code:"01", value:"河北省"}, {code:"01", value:"天津市"},{code:"01", value:"浙江省"}],
//        学历下拉
                educationList:[{code:"01", value:"博士研究生"}, {code:"01", value:"硕士研究生"}, {code:"01", value:"大学本科"},{code:"01", value:"大专"},{code:"01", value:"中专"},{code:"01", value:"高中"},{code:"01", value:"其他"}],
//        人员身份（下拉）
                identityList:[{code:"01", value:"中管干部"}, {code:"01", value:"省管干部"}, {code:"01", value:"市管干部"},{code:"01", value:"县管干部"},{code:"01", value:"企业领导人员"},{code:"01", value:"中层管理人员"},{code:"01", value:"其他人员"}],
//        部门分类列表
                departmentList:[{code:"01", value:"党务机关"}, {code:"01", value:"政府机关"}, {code:"01", value:"人大机关"},{code:"01", value:"政协机关"},{code:"01", value:"审判机关"},{code:"01", value:"检查机关"},{code:"01", value:"人民团体"}],
//        身份类型下拉
                identityClassList:[{code:"01", value:"党务机关"}, {code:"01", value:"政府机关"}, {code:"01", value:"人大机关"},{code:"01", value:"政协机关"},{code:"01", value:"审判机关"},{code:"01", value:"检查机关"},{code:"01", value:"人民团体"}],
//        党代表级别下拉
                identityClassList:[{code:"01", value:"全国"}, {code:"01", value:"省级"}, {code:"01", value:"市级"},{code:"01", value:"县级"}],
//        违纪行为下拉
                disciplineList:[{code:"01", value:"违反政治纪律行为"}, {code:"01", value:"违反组织纪律行为"}, {code:"01", value:"违反廉洁纪律行为"},{code:"01", value:"违反群众纪律行为"}],
                disciplineObjList:[{code:"01", value:"违反政治纪律行为",test:""}],
                activeNames:['1','2','3','4','5','6','7','8'],
                fileList:[{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],


                caseList:[
                    {
                        caseTitle:"查看案件",
                        caseInc:"el-icon-document",
                        sendedCount:1,
                        noSendCount:7,
                    },
                    {
                        caseTitle:"报批案件",
                        caseInc:"el-icon-tickets",
                        sendedCount:2,
                        noSendCount:8,
                    },
                    {
                        caseTitle:"备案案件",
                        caseInc:"el-icon-goods",
                        sendedCount:3,
                        noSendCount:9
                    }
                ],
            };
        },

        created() {},
        mounted() {},
        methods: {}
    })
    export default class othsersPerson extends Vue {
        isCollapse: boolean = false;
        focusStep(item){
            this.steps.forEach((el,index) => {
                el.active = false
            });
            item.active = true
        }
    }
</script>
<style scoped>
    .dialog {
        background: #f6f6f6;
    }
    .box {
        background: #fff;
        width: 1314px;
        margin: 0 auto;
    }
    .box_title {
        background: #f6f6f6;
        font-size: 18px;
    }
    .openLaw_case {
        cursor: pointer;
        position: fixed;
        right: 9px;
        top: 63px;
        z-index: 99999998;
    }
    .box_content{
        background: white;
        height: 500px;
    }
    .el-select >>>input{
        width: 700px;
    }
    .foot{
        position: absolute;
        left: 0px;
        bottom: 0px;
        height: 80px;
        width: 100%;
        background: white;
        line-height: 80px;
        text-align: center;
    }




</style>