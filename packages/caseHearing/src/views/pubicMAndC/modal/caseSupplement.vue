<template>
    <!-- 补充完善 -->
    <div class="dialog">
        <div class="openLaw_case">
            <img title="案件法规" src="img/Regulations.png">
        </div>
        <div class="box">
            <div class="box_title">
                <el-radio-group v-model="isCollapse" style="margin-top: 10px; background: #f6f6f6;">
                    <el-radio-button :label="false">补充完善</el-radio-button>
                    <el-radio-button :label="true">移送材料</el-radio-button>
                </el-radio-group>
            </div>
            <div v-show="!isCollapse">
                <div class="box_content">
                    <ul class="steps">
                        <li @click="focusStep(step)" :id="step.id" :class="{'step-active' : step.active}"
                            v-for="(step ,index) in steps" :key="index">{{step.name}}
                        </li>
                    </ul>
                </div>
                <div class="tab-content">
                    <case-register ref="caseReg" pageFlag="caseSup"></case-register>
                </div>
            </div>
            <div v-show="isCollapse">
                <el-container>
                    <el-aside width="27%" style="overflow-x: hidden">
                        <div class="file-Upload" @click="showUploadListFlag=true">
                            <el-upload
                                    class="upload-demo"
                                    drag
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    multiple>
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            </el-upload>
                        </div>
                        <div class="file-search">
                            <div class="search-container-input">
                                <el-input placeholder="请输入内容" class="search-input" style=""><i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                            </div>
                            <div class="search-container" id="search-container">

                                <div >
                                    <el-row v-for="c in cardList" style="margin: 12px">
                                        <el-col :span="4">
                                            <img v-show="c.type=='doc'" src="../../../../public/img/文档类型_doc.png" width="24px" alt="">
                                            <img  v-show="c.type=='xls'" src="../../../../public/img/文档类型_xls.png" width="24px" alt="">
                                            <img v-show="c.type=='pdf'" src="../../../../public/img/文档类型_pdf.png" width="24px" alt="">
                                        </el-col>
                                        <el-col :span="20">
                                            <a @click="showPdf(c)">{{c.title}}</a>
                                        </el-col>
                                    </el-row>

                                </div>

                            </div>


                        </div>
                    </el-aside>
                    <el-main>
                        <div class="file-Item-container" id="file-Item-container">
                            <iframe id='previewPdf' :src="'/static/pdf/web/viewer.html'" height="100%"
                                    width="100%">
                            </iframe>
                        </div>
                    </el-main>
                </el-container>
            </div>


        </div>

        <div class="foot">
            <el-button type="primary" plain round>上一步</el-button>
            <el-button type="primary" plain round>下一步</el-button>
        </div>
        <el-dialog title="上传材料" :visible.sync="showUploadListFlag" width="50%" top="0" class="upList-modal"
                   append-to-body>
            <div class="dialog">

                <el-table :data="form">
                    <el-table-column property="date" label="日期" width="150"></el-table-column>
                    <el-table-column property="name" label="姓名" width="200"></el-table-column>
                    <el-table-column property="address" label="地址"></el-table-column>
                </el-table>
                <div class="foot">
                    <el-button type="primary" plain round>上一步</el-button>
                    <el-button type="primary" plain round>下一步</el-button>
                    <el-button type="primary" plain round>上传文件</el-button>
                </div>
            </div>
        </el-dialog>
        <el-dialog title="目录设置" :visible.sync="newDocumentFlag" width="50%" top="10%" class="mc-dialog-medium"
                   append-to-body center>
            <div>
                <NewDocument></NewDocument>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="newDocumentFlag = false">确 定</el-button>

                <el-button @click="newDocumentFlag = false">返 回</el-button>
            </div>


        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import caseRegister from "../../evocatoryRes/modal/caseRegister.vue";
    import NewDocument from "./newDocument.vue";


    @Component({
        components: {caseRegister,NewDocument},
        data() {
            return {
                newDocumentFlag:false,
                showUploadListFlag: false,
                steps: [
                    {id: 'step01', active: true, name: '案件审查/调查基本信息'},
                    {id: 'step02', active: false, name: '被审查调查人员'},
                    {id: 'step03', active: false, name: '违纪行为'},
                    {id: 'step04', active: false, name: '案件审查/调查基本情况'},
                    {id: 'step05', active: false, name: '涉案款物基本情况'},
                    {id: 'step06', active: false, name: '潜逃终止情况'},
                    {id: 'step07', active: false, name: '案件分发信息'},
                    {id: 'step08', active: false, name: '上传材料信息'},
                ]
            };
        },

        created() {
        },
        mounted() {
        },
        methods: {}
    })
    export default class caseSupplement extends Vue {
        isCollapse: boolean = false;
        form={}
        cardList=[
            {
                title:"调查报告.doc",
                type:"doc",
                code:'1',
                active:true
            },
            {
                title:"某某案件调阅审查资料.doc",
                code:'2',
                type:"doc",
                active:false
            },
            {
                title:"某某案件调阅审查资料.doc",
                type:"doc",
                code:'2',
                active:false
            },
            {
                title:"某某案件调阅审查资料.xls",
                type:"xls",
                code:'2',
                active:false
            },
            {
                title:"某某案件调阅审查资料.xls",
                type:"xls",
                code:'2',
                active:false
            },
            {
                title:"某某案件调阅审查资料.xls",
                type:"xls",
                code:'2',
                active:false
            },
            {
                title:"某某案件调阅审查资料.xls",
                type:"xls",
                code:'2',
                active:false
            },
            {
                title:"某某案件调阅审查资料.pdf",
                type:"pdf",
                code:'2',
                active:false
            },
            {
                title:"某某案件调阅审查资料.pdf",
                type:"pdf",
                code:'2',
                active:false
            },
            {
                title:"某某案件调阅审查资料.pdf",
                type:"pdf",
                code:'2',
                active:false
            },
            {
                title:"某某案件调阅审查资料.pdf",
                type:"pdf",
                code:'2',
                active:false
            },{
                title:"某某案件调阅审查资料.pdf",
                type:"pdf",
                code:'2',
                active:false
            },
            {
                title:"某某案件调阅审查资料.pdf",
                type:"pdf",
                code:'2',
                active:false
            },
            {
                title:"某某案件调阅审查资料.pdf",
                type:"pdf",
                code:'2',
                active:false
            },

            {
                title:"案件线索受理登记表.xls",
                type:'xls',
                code:'3',
                active:false
            }
        ]

        focusStep(item) {

            this.steps.forEach((el, index) => {
                el.active = false
            });
            item.active = true
            this.$refs.caseReg.parentMethod('caseSup', item.id)
        }

        showUploadList() {
            console.log('aadbhdjhjdhj')
        }

        showPdf(item) {
            this.cardList.forEach((c,i)=>{
                this.newDocumentFlag=true
                if(c.code==item.code){
                    c.active=true
                }else{
                    c.active=false
                }

            })
        }
        autodivheight(){
            //函数：获取尺寸
            //获取浏览器窗口高度
            var winHeight=0;
            if (window.innerHeight)
                winHeight = window.innerHeight;
            else if ((document.body) && (document.body.clientHeight))
                winHeight = document.body.clientHeight;
            //通过深入Document内部对body进行检测，获取浏览器窗口高度
            if (document.documentElement && document.documentElement.clientHeight)
                winHeight = document.documentElement.clientHeight;
            //DIV高度为浏览器窗口的高度
            document.getElementById("file-Item-container").style.height= (winHeight-200) +"px";
            document.getElementById("search-container").style.height= (winHeight-345) +"px";

        }
        mounted() {
            this.autodivheight();
            window.onresize=this.autodivheight; //浏览器窗口发生变化时同时变化DIV高度

        }
    }

</script>
<style scoped>
    @import "~@/styles/dialogBox.scss";

    .el-aside {

    }

    .el-main {
        padding: 16px 36px;
    }

    .dialog {
        background: #f6f6f6;
        height: 100%;
    }

    .box {
        background: #fff;
        width: 1314px;
        margin: 0 auto;

    }

    .card-title {
        font-size: 12px;
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

    .box_content {
        background: white;
        height: 90px;
    }

    .box-card span {
        color: #bbbbbb;
        font-size: 12px;
    }

    .foot {
        position: absolute;
        left: 0px;
        bottom: 0px;
        height: 80px;
        width: 100%;
        background: white;
        line-height: 80px;
        text-align: center;
    }

    .tab-content {
        height: 360px;
        overflow: auto;
    }

    /* 步骤 */
    .steps {
        position: relative;
        margin-bottom: 30px;
        counter-reset: step; /*创建步骤数字计数器*/
    }

    /*步骤描述*/
    .steps li {
        list-style-type: none;
        font-size: 12px;
        text-align: center;
        width: 12%;
        position: relative;
        float: left;
        cursor: pointer;
    }

    /*步骤数字*/
    .steps li:before {
        display: block;
        content: counter(step); /*设定计数器内容*/
        counter-increment: step; /*计数器值递增*/
        width: 40px;
        height: 40px;
        background-color: #FBB63D;
        line-height: 40px;
        border-radius: 32px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        font-weight: 700;
        margin: 0 auto 8px auto;

    }

    /*连接线*/
    .steps li ~ li:after {
        content: '';
        width: 74%;
        height: 2px;
        background-color: #FBB63D;
        position: absolute;
        left: -37%;
        top: 19px;
        z-index: 0;
    }

    .step-active::before {
        display: block;
        content: counter(step); /*设定计数器内容*/
        counter-increment: step; /*计数器值递增*/
        width: 32px;
        height: 32px;
        background-color: #559BEB !important;
        line-height: 32px;
        border-radius: 32px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        font-weight: 700;
        margin: 0 auto 8px auto;
    }

    .el-main {
        margin: 0;
    }

    .dialog {
        background: #ffffff;

    }

    /deep/.el-main {
        margin-left: 1%;
    }

    .dialog > > > .el-main {
        margin-left: 1%;
    }

    /*.file-Upload {*/
        /*padding: 10px;*/
    /*}*/

    .search-container {
        height: 375px;
        border: 1px solid #e7e2e2;
        width: 84%;
        margin-left: 30px;
        overflow-y: scroll;
    }

    /deep/ .el-upload-dragger {
        width: 300px;
        height: 100px;
        margin-left: 4px;

    }

    .search-container-input {
        height: 60px;
        background: #ecedf3;
        width: 84.5%;
        margin-left: 8.3%;
    }

    .search-input {
        margin-top: 3%;
        width: 86%;
    }

    .file-Item-container {
        height: 455px;

    }


    .upList-modal > > > .el-dialog {
        position: relative;
        height: 500px;
    }

    .upList-modal {
        margin-top: 56px;
    }

    /deep/ .el-card__header {
        padding: 10px 10px;
        cursor: pointer;
    }
    /deep/.box-card-active{
        background: #409EFF;

    }
    /deep/.box-card-active span{
        color: #ffffff;

    }
    .el-upload-dragger .el-icon-upload{
        margin: 0;
        margin-top: 15px;
    }
    a:hover{text-decoration:underline;color: #409EFF;}
    .search-container /deep/.el-col-20{
        text-align: left;
    }

    .search-container /deep/.el-col-20 a{
        font-size: 17px;
    }

</style>