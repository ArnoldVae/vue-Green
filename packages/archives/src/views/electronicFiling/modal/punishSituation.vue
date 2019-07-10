<template>
<!--处分情况-->
    <div class="form-content">
        <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
            <el-collapse-item id="menu9" name="9" v-show="!hideMenuList.step01">
                    <template slot="title">
                        党纪处分
                    </template>
                    <div class="form-content">
                        <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                    <el-col :span="6">
                                    <el-form-item label="党纪处分：">
                                        <el-select v-model="form.professionRank" placeholder="请选择" class="form_select">
                                            <el-option v-for="(option,index) in professionRank" :key="index"
                                                    v-bind:label="option.value"
                                                    v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="批准时间：">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date9"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="处分时间：">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date10"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="批准机关：" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="作出处分决定机关：" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="党纪处分审批级别：">
                                        <el-select v-model="form.professionRank" placeholder="请选择" class="form_select">
                                            <el-option v-for="(option,index) in professionRank" :key="index"
                                                    v-bind:label="option.value"
                                                    v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
            </el-collapse-item>
            <el-collapse-item id="menu9" name="9" v-show="!hideMenuList.step01">
                    <template slot="title">
                        XXX纪处分
                    </template>
                    <div class="form-content">
                        <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="XXX纪处分：">
                                        <el-select v-model="form.professionRank" placeholder="请选择" class="form_select">
                                            <el-option v-for="(option,index) in professionRank" :key="index"
                                                    v-bind:label="option.value"
                                                    v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                    <el-col :span="6">
                                    <el-form-item label="XXX纪处分审批级别：">
                                        <el-select v-model="form.professionRank" placeholder="请选择" class="form_select">
                                            <el-option v-for="(option,index) in professionRank" :key="index"
                                                    v-bind:label="option.value"
                                                    v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            
                                <el-col :span="6">
                                    <el-form-item label="批准时间：">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date10"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="批准机关：" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
            </el-collapse-item>
            <el-collapse-item id="menu9" name="10" v-show="!hideMenuList.step01">
                    <template slot="title">
                        其他处理
                    </template>
                    <div class="form-content">
                        <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="处理类型：">
                                        <el-select v-model="form.professionRank" placeholder="请选择" class="form_select">
                                            <el-option v-for="(option,index) in professionRank" :key="index"
                                                    v-bind:label="option.value"
                                                    v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="批准时间：">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date10"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="批准机关：" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
            </el-collapse-item>
            <el-collapse-item id="menu9" name="11" v-show="!hideMenuList.step01">
                    <template slot="title">
                        形式处罚
                    </template>
                    <div class="form-content">
                        <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="刑事处罚：" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="判决时间：">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date10"
                                                        style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="审判机关：" prop="name">
                                        <el-input v-model="form.name"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
            </el-collapse-item>
        </el-form>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    const selectData = require("store/selectData.json");
    @Component({
        components: {},
        selectData: selectData,
        data() { 
            return {
            activeName: 'first',
            activeNames: ['1','2'],
        
            
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '',
                    desc: ''
                },
                professionRank: selectData.professionRank, //职级
                rules: {
                    name: [
                        { required: true, message: '请输入', trigger: 'blur' }
                    ],
                }
            };
        },

            created() {},
            mounted(){
            
        },
        methods: {}
    })
    export default class caseSupplement extends Vue {
        
        
        
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";


</style>