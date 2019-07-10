<template>
    <!-- 审核意见-审核意见-审核案件 -->
    <div>
        
            <el-collapse v-model="activeNames" name='1' class="collapse" ref="csElCoolapase">
                        <el-collapse-item id="menu1" name="1">
                            <template slot="title">
                                <i class="header-icon el-icon-info"></i>审核意见
                            </template>
                            <div class="form-content">
                            <el-form  class="form-label-top" :rules="rules" label-position="top" :model="form">
                                <el-row :gutter="20">

                                    <el-col :span="6">
                                        <el-form-item label="审核时间：">
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

                                </el-row>
                                <el-row :gutter="20">

                                    <el-tabs v-model="activeName" @tab-click="handleClick">
                                        <el-tab-pane label="被调查人的态度和认识" name="third">
                                            <el-form-item>
                                            <el-input type="textarea" :autosize="{ minRows: 4}" v-model="form.desc2"></el-input>
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
        
    
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    const selectData = require("store/selectData.json");
    @Component({
        props: ['pageFlag'],
        components: {},
        data() {
            return {
                options5: [{
                    value: '1',
                    label: '关键证据缺失'
                }, {
                    value: '2',
                    label: '发现新的违纪问题线索'
                }, {
                    value: '3',
                    label: '待同案违纪人员一并处理'
                }],
                value10: [],
                isCollapse: "left",
                activeName: 'third',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },

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
                    desc: ''
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
        	stateTrans(){
        		this.$confirm('提交后将进入会议审议环节，确定提交？','提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	//父页面调用方法
		          this.$emit('submitEvent','SLYJ')
		        }).catch(() => {
		                  
			    });
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

    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>

</style>