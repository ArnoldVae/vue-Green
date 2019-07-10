<template style="background: #f1f1f1">
    <!-- 会议审议弹窗-审理案件 -->
    <div class="body-container-jwjw">
        <div class="body-container" style="width: 80%">
            <div class="box">
                <div class="box_title">
                    <el-radio-group v-model="isCollapse" style="margin-top: 10px; background: #f6f6f6;">
                        <el-radio-button label="left">征求意见</el-radio-button>
                        <el-radio-button label="other">集体审议</el-radio-button>
                        <el-radio-button label="right">会议审议</el-radio-button>
                    </el-radio-group>
                    <div v-show="isCollapse=='left'">
                        <TakeAdvice pageFlag="review"></TakeAdvice>
                    </div>
                    <div v-show="isCollapse=='right'">
                        <ReviewSession pageFlag="review"></ReviewSession>
                    </div>
                    <div v-show="isCollapse=='other'">
                        <Deliberations  pageFlag="review"></Deliberations>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    const selectData = require("store/selectData.json");
    import TakeAdvice from "./takeAdvice.vue"
    import Deliberations from "./deliberations.vue"
    import ReviewSession from "./reviewSession.vue"
    @Component({
        props:['pageFlag'],
        selectData:selectData,
        components: {TakeAdvice,Deliberations,ReviewSession},
        data() {
            return {
                options: [{
                    value: '1',
                    label: '同意审理意见'
                }, {
                    value: '2',
                    label: '改变审理意见'
                }],
                value: '',
                textarea: '',
                visaObj:{},
                activeNames:['1','2','3','4','5','6','7','8'],
                form: {
                    metttingType:'',//会议类型
                    partyDiscip:'',//党纪处分
                    militaryDiscip:'',//军纪处分
                    fileRecord:'01',
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '01',
                    resource1: '01',
                    resource2: '01',
                    desc: '',
                    depart:[]
                },
                partyDiscip:selectData.partyDiscip,//党纪处分
                militaryDiscip:selectData.militaryDiscip,//军纪处分
                metttingType:selectData.metttingType,//会议类型
                rules: {
                    name: [
                        { required: true, message: '请输入', trigger: 'blur' }
                    ],
                }
            };
        },

        created() {},
        mounted(){
            if(this.pageFlag=="leader"){

                this.isCollapse='left'
            }

        },
        methods: {

        }
    })
    export default class caseSupplement extends Vue {

        isCollapse='right'
        // 附件列表
        visaForm :object = {
            registerFiles : [], // 移送审理案件材料交接登记表
            batchFiles : [] // 案件移送审理呈批表
        }
        showFlag:boolean = false;
        dialogFlag = {
            allPrevious:false,
        }
        allPrevious(item) {
            this.dialogFlag[item] = true
        }
        handleChange(val) {
            this.activeNames=['1','2']
        }

        // 获取附件信息
        setRegisterFiles(file, fileList) {
            this.visaForm.registerFiles.push(file)
            const date = new Date()
            for (let i = 0; i < this.visaForm.registerFiles.length; i++) {
                this.visaForm.registerFiles[i].documentname = this.visaForm.registerFiles[i].name
                this.visaForm.registerFiles[i].filesize = this.visaForm.registerFiles[i].size
                this.visaForm.registerFiles[i].documentdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            }
        }
        setBatchFiles(file, fileList) {
            this.visaForm.batchFiles.push(file)
            const date = new Date()
            for (let i = 0; i < this.visaForm.batchFiles.length; i++) {
                this.visaForm.batchFiles[i].documentname = this.visaForm.batchFiles[i].name
                this.visaForm.batchFiles[i].filesize = this.visaForm.batchFiles[i].size
                this.visaForm.batchFiles[i].documentdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            }
        }
        // 删除附件
        delBatchFiles(index){
            this.visaForm.batchFiles.splice(index, 1)
        }
        delRegisterFiles(index){
            this.visaForm.registerFiles.splice(index, 1)
        }

        stateTrans(){
            this.$confirm('提交后将进入案件执行环节，确定提交？','提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //父页面调用方法
                this.$emit('submitEvent','HYSY')
            }).catch(() => {

            });
        }
    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    @import "~@/styles/common.scss";
    /*控制表单项的公有样式*/
    @import "~@/styles/commonJWJW.scss";
</style>