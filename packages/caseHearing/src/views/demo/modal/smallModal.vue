<!--回显页面demo-->
<template>
    <div >
        <el-form
                class="form-label-top"
                :rules="rules"
                label-position="top"
                :model="formLabelAlign"
        >
            <el-row>
                <el-col :span="8">
                    <el-form-item label="普通输入框" prop="name">
                        <el-input  prefix-icon="icon-yonghuming"	 v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="日期">
                        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="下拉框">
                        <el-select v-model="value4" clearable placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <!--<el-row>-->
                <!--<el-col :span="8">-->
                    <!--<el-form-item label="身份证号" prop="idNum">-->
                        <!--<el-input v-model.lazy="formLabelAlign.idNum" @change="changeIdNo"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="8">-->
                    <!--<el-form-item label="出生日期">-->
                        <!--<el-date-picker type="date" v-model="formLabelAlign.borthday" placeholder="选择日期"></el-date-picker>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="8">-->
                    <!--<el-form-item label="性别">-->
                        <!--<el-radio-group v-model="formLabelAlign.sex">-->
                            <!--<el-radio label="1">男</el-radio>-->
                            <!--<el-radio label="2">女</el-radio>-->
                        <!--</el-radio-group>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <el-row>
                <el-col :span="24">
                    <el-form-item label="备注" prop="idNum">
                        <el-input v-model.lazy="formLabelAlign.idNum1" rows="4" type="textarea"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    const validate = require("../../../utils/validate.js");


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
        tabs1:string = '1';
        tabs2:string = '1';
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
        rules = {
            name: [
                { required: true, message: "请输入活动名称", trigger: "blur" },
                { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
            ],
            idNum: [{ validator: validate.checkIdCardNo, trigger: "blur" }]
        };

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>