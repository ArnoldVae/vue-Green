<!--回显页面demo-->
<template>
    <div class="backplane">
         <div class="page-tabs">
            <el-radio-group v-model="tabs1" size="medium">
                <el-radio-button label="1">基本信息{{disabled}}</el-radio-button>
                <el-radio-button label="2">附件信息</el-radio-button>
                <el-radio-button label="3">扫描件列表</el-radio-button>
                <el-radio-button label="4">批示信息</el-radio-button>
            </el-radio-group>
        </div>
         <div class="backplane-Content">
            <el-collapse v-model="activeNames1" class="collapse" v-show="tabs1=='1'">
                <el-collapse-item id="menu1"  name="menu1" >
                    <template slot="title" >
                        <span class="iconfont iconfont-title ">&#xe609;</span> <span class="title">案件审理/调查基本信息</span>
                    </template>
                    <div class="form-content">
                        <el-form :class="[disabled?'form-disabled-label-top':'form-label-top']" label-position='top' :model="form" >
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="案件名称：" prop="name4">

                                        <el-input v-if="!disabled" v-model="form.name"></el-input>

                                        <div v-else class="label">{{form.name}}</div>
                                    </el-form-item>
                                </el-col>
                                    <el-col :span="6">
                                    <el-form-item label="案件来源：" prop="name5">
                                        <el-input v-if="!disabled" v-model="form.code"></el-input>
                                        <div v-else class="label">{{form.name}}</div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="案件涉密等级：" prop="name6">
                                        <el-input v-if="!disabled" v-model="form.name"></el-input>
                                        <div v-else class="label">{{form.name}}</div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="移送部门：" prop="name7">
                                        <el-input v-if="!disabled" v-model="form.name"></el-input>
                                        <div v-else class="label">{{form.name}}</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <div class="dividing-Line"></div>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="接收时间：" prop="name5">
                                        <el-input v-if="!disabled" v-model="form.name"></el-input>
                                        <div v-else class="label">{{form.name}}</div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="是否呈报上级审核：" prop="isCheckCode">
                                        <el-radio-group v-if="!disabled" v-model="form.isCheckCode">
                                            <el-radio label="1">是</el-radio>
                                            <el-radio label="2">否</el-radio>
                                        </el-radio-group>
                                        <div v-else class="label">{{form.isCheckName}}</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item id="menu2"  name="menu2" >
                    <template slot="title">
                        <span class="iconfont iconfont-title ">&#xe609;</span><span  class="title">反应问题情况</span>
                    </template>
                    <div class="form-content">
                        <el-radio-group v-model="tabs2" class="page-block-tabs">
                            <el-radio-button label="1">案件受理</el-radio-button>
                            <el-radio-button label="2">不予受理</el-radio-button>
                            <el-radio-button label="3">不予受理</el-radio-button>
                            <el-radio-button label="4">不予受理</el-radio-button>
                        </el-radio-group>
                        <el-form :class="[disabled?'form-disabled-label-top':'form-label-top']" label-position='top' :model="form"  v-show="tabs2=='1'">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="案件名称：" prop="name4">
                                        <el-input v-if="!disabled" v-model="form.name"></el-input>
                                        <div v-else class="label">{{form.name}}</div>
                                    </el-form-item>
                                </el-col>
                                    <el-col :span="6">
                                    <el-form-item label="案件来源：" prop="name5">
                                        <el-input v-if="!disabled" v-model="form.name"></el-input>
                                        <div v-else class="label">{{form.name}}</div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="案件涉密等级：" prop="name6">
                                        <el-input v-if="!disabled" v-model="form.name"></el-input>
                                        <div v-else class="label">{{form.name}}</div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="移送部门：" prop="name7">
                                        <el-input v-if="!disabled" v-model="form.name"></el-input>
                                        <div v-else class="label">{{form.name}}</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                                <div class="dividing-Line"></div>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="接收时间：" prop="name5">
                                        <el-input v-if="!disabled" v-model="form.name"></el-input>
                                        <div v-else class="label">{{form.name}}</div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="是否呈报上级审核：" prop="isCheckCode">
                                        <el-radio-group v-if="!disabled" v-model="form.isCheckCode">
                                            <el-radio label="1">是</el-radio>
                                            <el-radio label="2">否</el-radio>
                                        </el-radio-group>
                                        <div v-else class="label">{{form.isCheckName}}</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                        <el-form :class="[disabled?'form-disabled-label-top':'form-label-top']" label-position='top' :model="form"  v-show="tabs2=='2'">
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <el-form-item label="举报内容" prop="content">
                                        <el-input v-if="!disabled" type="textarea" v-model="form.content"></el-input>
                                        <div v-else class="label">{{form.content}}</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <div class="dividing-Line"></div>
                            <el-row :gutter="20">
                                <el-col :span="24" >
                                    <el-form-item label="备注" prop="content">
                                        <el-input v-if="!disabled" type="textarea" v-model="form.content"></el-input>
                                        <div v-else class="label">{{form.content}}</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                        </div>
                </el-collapse-item>
                <el-collapse-item id="menu3"  name="menu4" >
                    <template slot="title">
                        <span class="iconfont iconfont-title ">&#xe609;</span><span  class="title">反应问题</span>
                    </template>
                    <div class="form-content">
                        <el-form :class="[disabled?'form-disabled-label-top':'form-label-top']" label-position='top' :model="form">
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <el-form-item label="举报内容" prop="content">
                                        <el-input v-if="!disabled" type="textarea" v-model="form.content"></el-input>
                                        <div v-else class="label">{{form.content}}</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <div class="dividing-Line"></div>
                            <el-row :gutter="20">
                                <el-col :span="24" >
                                    <el-form-item label="备注" prop="content">
                                        <el-input v-if="!disabled" type="textarea" v-model="form.content"></el-input>
                                        <div v-else class="label">{{form.content}}</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                        </div>
                </el-collapse-item>
                <el-collapse-item id="menu4"  name="menu4" >
                    <template slot="title">
                        <span class="iconfont iconfont-title ">&#xe609;</span><span  class="title">纪检监察相关专业培训情况</span>
                    </template>
                    <div class="form-content">
                        <el-form :class="[disabled?'form-disabled-label-top':'form-label-top']" label-position='top' :model="form">
                            <el-row :gutter="20">
                                <el-col :span="24">
                                    <el-form-item label="举报内容" prop="content">
                                        <el-input v-if="!disabled" type="textarea" v-model="form.content"></el-input>
                                        <div v-else class="label">{{form.content}}</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <div class="dividing-Line"></div>
                            <el-row :gutter="20">
                                <el-col :span="24" >
                                    <el-form-item label="备注" prop="content">
                                        <el-input v-if="!disabled" type="textarea" v-model="form.content"></el-input>
                                        <div v-else class="label">{{form.content}}</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <el-collapse v-model="activeNames2" class="collapse" v-show="tabs1=='2'">
                <el-collapse-item id="menu3"  name="menu3" >
                    <template slot="title" >
                        <span class="iconfont iconfont-title ">&#xe609;</span> <span class="title">附件信息</span>
                    </template>
                    <div class="form-content">
                        <el-form :class="[disabled?'form-disabled-label-top':'form-label-top']" label-position='top' :model="form" >
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="案件名称：" prop="name4">
                                        <div class="label">案件名称</div>
                                    </el-form-item>
                                </el-col>
                                    <el-col :span="6">
                                    <el-form-item label="案件来源：" prop="name5">
                                        <div class="label">司法移送案件</div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="案件涉密等级：" prop="name6">
                                        <div class="label">机密</div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="移送部门：" prop="name7">
                                        <div class="label">司法部门</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <div class="dividing-Line"></div>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label="接收时间：" prop="name5">
                                            <div class="label">2019-03-09</div>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="是否呈报上级审核：" prop="namew">
                                        <div class="label">是</div>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="backplane-footer">
            <el-button>关闭</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        props: {
            disabled:{
                type:Boolean,
                default:()=>true
            }
        }
    })
    export default class DemoDetails extends Vue {
        tabs1:string = '1';
        tabs2:string = '1';
        activeNames1:Array<string> =  ['menu1','menu2'];
        activeNames2:Array<string> =  ['menu3'];
        form = {
            name: "案件名称",
            content:"网络连着你我他，空间清朗靠大家。欢迎广大网民通过举报中心网站、12377举报电话、“网络举报”客户端等渠道，或拨打31个省（区、市）网信办举报部门以及2000余家网站举报电话（可通过举报中心网站右下角入口查询），或通过人民网、新华网、央视网等19家中央新闻网站，千龙网、新浪网、天涯网等900余家地方新闻网站和商业网站开设的“网上有害信息举报专区”，积极举报网上有害信息，踊跃参与网络综合治理，推动网络空间共建共治共享。",
            region: "",
            type: "",
            borthday: "2019-01-01",
            sex: "1",
            isCheckCode:"1",
            isCheckName:"是",
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
