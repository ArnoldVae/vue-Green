<!--回显页面demo-->
<template>
    <div class="backplane">
        <div class="backplane-Content margin-0">
            <el-collapse v-model="activeNames1" class="collapse">
                <el-collapse-item id="menu1"  name="menu1" >
                    <template slot="title" >
                        <i class="header-icon el-icon-document"></i> <span class="title">阅卷基本信息</span>
                    </template>
                    <div class="form-content">
                        <el-form class="form-alive-label-top" label-position='top' :model="form" >
                            <!--只有回写的表格form-disabled-label-top-->
                            <!--<el-form class="form-disabled-label-top" label-position='top' :model="form" >-->
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="阅卷人：" prop="name4">
                                        <!--<div class="label"></div>-->
                                        <el-input v-model="formLabelAlign.value2"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="阅卷时间：" prop="name5">
                                        <el-date-picker v-model="formLabelAlign.date" type="date" placeholder="选择日期"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="18">
                                    <el-form-item label="阅卷意见：">
                                        <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 4}" v-model="formLabelAlign.desc"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item id="menu2"  name="menu2" >
                    <template slot="title">
                        <i class="header-icon el-icon-document"></i><span  class="title">上传材料信息</span>
                    </template>
                    <div class="form-content" style="padding: 0">
                        <div class="my-file-table">
                            <div class="item-main" >
                                <el-row>
                                    <el-col :span="14" class="col-title"> <p>阅卷笔录</p></el-col>
                                    <el-col :span="3">
                                        <el-upload
                                                class="upload-demo"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :on-preview="handlePreview"
                                                :on-remove="handleRemove"
                                                :before-remove="beforeRemove"
                                                multiple
                                                :show-file-list="false"
                                                :limit="3"
                                                :on-exceed="handleExceed"
                                                :file-list="fileList">
                                            <el-button  size="small"  type="primary"><i class="el-icon-upload"></i> 本地上传</el-button>
                                        </el-upload>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-upload
                                                class="upload-demo"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :on-preview="handlePreview"
                                                :on-remove="handleRemove"
                                                :before-remove="beforeRemove"
                                                multiple
                                                :show-file-list="false"
                                                :limit="3"
                                                :on-exceed="handleExceed"
                                                :file-list="fileList">
                                            <el-button  size="small"  type="success"><i class="el-icon-printer"></i> 扫描上传</el-button>
                                        </el-upload>
                                    </el-col>
                                    <el-col :span="3">
                                        <el-upload
                                                class="upload-demo"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :on-preview="handlePreview"
                                                :on-remove="handleRemove"
                                                :before-remove="beforeRemove"
                                                multiple
                                                :show-file-list="false"
                                                :limit="3"
                                                :on-exceed="handleExceed"
                                                :file-list="fileList">
                                            <el-button  size="small" type="warning"> <i class="el-icon-picture"></i>高拍仪上传</el-button>
                                        </el-upload>
                                    </el-col>
                                </el-row>
                                <el-row v-for="(f,index) in fileList">
                                    <el-col :span="16" class="text-left"><span>文件{{index+1}}：{{f.name}}</span></el-col>
                                    <el-col :span="8" >
                                        <el-button  size="small"><i class="el-icon-download"></i>下载</el-button>
                                        <el-button  size="small"><i class="el-icon-search"></i>查看</el-button>
                                        <el-button  size="small" @click="beforeRemove(index)"><i class="el-icon-delete"></i>删除</el-button>
                                    </el-col>
                                </el-row>
                                <hr>
                            </div>


                        </div>
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
        fileList:Array= [{name: '阅卷笔录材料1', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '阅卷笔录材料2', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        tabs1:string = '1';
        tabs2:string = '1';
        options: [{
            value: '01',
            label: "审理人1"
        }, {
            value: '02',
            label: "审理人2"
        }, {
            value: '03',
            label: "审理人3"
        }]
        refusalCause: [{
            value: '01',
            label: "材料不全"
        }, {
            value: '02',
            label: "事实不清 "
        }, {
            value: '03',
            label: "定性不准"
        }, {
            value: '04',
            label: "证据不足"
        }, {
            value: '05',
            label: "其他"
        }]
        activeNames1:Array<string> =  ['menu1','menu2'];
        activeNames2:Array<string> =  ['menu3'];
        formLabelAlign = {
            name: "",
            region: "",
            type: "",
            borthday: "2019-01-01",
            sex: "1",
            nation:'',//民族
            nativePalce:'',//籍贯
            category:'',//人员类别
            transDepart:'',//移送部门
            industryField:'',//行业领域
            professionRank:'',//职级
            educationList:'',//学历
            rank:'',//军衔
            npcNmember:'',//人大代表
            poliStatus:'',//政治面貌
            discipBehavior:'',//违纪行为
            subDiscipBehavior:'',//违纪行为子类
            departGrade:'',
            secretGrade:'01',
            gender:'01',
            supervisedPersion:'01',
            date1: '',
            date2: '',
            partyTime:'',
            identify:'',//身份证号码
            positionGrade:'',//技术职务等级
            isValide:'',
            techGrade:'',
            isManager:'01',//是否主管
            departCategory:'',
            secretGrades:'',//审批权限
            orgCategory:'',
            taskCategory:'',
        };

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>