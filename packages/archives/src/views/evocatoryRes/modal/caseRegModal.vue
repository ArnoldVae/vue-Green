<template>
    <!-- 补充完善 -->
    <div class="dialog">
        <el-container>
            <el-aside width="200px" class="el-select-tab" >
                <ul style="list-style-type:none; overflow-y: hidden">
                    <li style="height: 50px" v-bind:id="menu.eleId" v-bind:class="[menu.active ? 'active_class' : '']" v-for="(menu,index) in subMenuItem" @click="menuGo(menu)"><el-button  v-bind:id="menu.eleBtnId"  v-bind:class="[menu.active ? 'active-btn-class' : '']"  class="tab-btn" circle size="small"></el-button><h4 >{{index+1}}{{menu.title}}</h4></li>
                </ul>
            </el-aside>
            <el-main style="margin-left: 15%">
                <el-form ref="form" label-position="left" :model="form" label-width="120px" class="form_submit">
                    <el-collapse v-model="activeNames" >
                        <el-collapse-item  id="menu1" title="案件审查/调查基本信息" name="1" >
                            <div class="tab-content" >
                                <el-row class="el-lable">
                                    <el-col :span="6">案件编号</el-col>
                                    <el-col :span="6"><div class="grid-content bg-purple">案件名称</div></el-col>
                                    <el-col :span="6">案件涉密等级</el-col>
                                    <el-col :span="6">移送时间</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6"><el-input v-model="form.name"></el-input></el-col>
                                    <el-col :span="6"><div class="grid-content bg-purple-light"><el-input v-model="form.name"></el-input></div></el-col>
                                    <el-col :span="6"><el-radio-group v-model="form.resource">
                                        <el-radio label="秘密"></el-radio>
                                        <el-radio label="机密"></el-radio>
                                        <el-radio label="绝密"></el-radio>
                                        <el-radio label="不涉密"></el-radio>
                                    </el-radio-group></el-col>
                                    <el-col :span="6"> <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker></el-col>
                                </el-row>
                                <el-row class="el-lable">
                                    <el-col :span="6">移送部门</el-col>

                                    <el-col :span="6">接收时间</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6"> <el-input v-model="form.name"></el-input></el-col>
                                    <el-col :span="6"> <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker></el-col>
                                </el-row>
                            </div>

                        </el-collapse-item>
                        <el-collapse-item id="menu2" title="被审查调查人员" name="2">
                            <div class="tab-content">
                                <el-row class="el-lable">
                                    <el-col :span="6">主要被审查调查人员姓名</el-col>
                                    <el-col :span="6">性别</el-col>
                                    <el-col :span="6">民族</el-col>
                                    <el-col :span="6">出生日期</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6"><el-input v-model="form.name"></el-input></el-col>
                                    <el-col :span="6"><el-radio-group v-model="form.resource">
                                        <el-radio label="男"></el-radio>
                                        <el-radio label="女"></el-radio>
                                        <el-radio label="不详"></el-radio>
                                    </el-radio-group></el-col>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                            <el-option label="汉族" value="shanghai"></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="6"><el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker></el-col>
                                </el-row>
                                <el-row class="el-lable">
                                    <el-col :span="6">籍贯</el-col>
                                    <el-col :span="6">最高学历</el-col>
                                    <el-col :span="6">参加工作时间</el-col>
                                    <el-col :span="6">工作单位</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6"><el-select  class="form_select" v-model="form.region" placeholder="请选择">
                                        <el-option v-for="option in nativeList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                    </el-select></el-col>
                                    <el-col :span="6"><el-select  class="form_select" v-model="form.region" placeholder="请选择">
                                        <el-option v-for="option in educationList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                    </el-select></el-col>
                                    <el-col :span="6"> <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker></el-col>
                                    <el-col :span="6"> <el-input v-model="form.name"></el-input></el-col>
                                </el-row>
                                <el-row class="el-lable">
                                    <el-col :span="6">企业性质</el-col>
                                    <el-col :span="6">人员身份</el-col>
                                    <el-col :span="6">部门分类</el-col>
                                    <el-col :span="6">政治面貌</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="option in businessNatureList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="option in identityList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="option in departmentList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="option in faceList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-col>
                                </el-row>
                                <el-row class="el-lable">
                                    <el-col :span="6">身份类型</el-col>
                                    <el-col :span="6">是否XXX对象</el-col>
                                    <el-col :span="6">党代表级别</el-col>
                                    <el-col :span="6">党委委员级别</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="option in identityClassList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-radio-group v-model="form.resource">
                                            <el-radio label="是"></el-radio>
                                            <el-radio label="否"></el-radio>
                                        </el-radio-group>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="option in rankList" v-bind:label="option.value" v-bind:value="option.code"></el-option>

                                        </el-select>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="option in rankList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-col>
                                </el-row>
                                <el-row class="el-lable">
                                    <el-col :span="6">人大代表级别</el-col>
                                    <el-col :span="6">职级</el-col>

                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="option in rankList" v-bind:label="option.value" v-bind:value="option.code"></el-option>

                                        </el-select>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择"  class="form_select">
                                            <el-option v-for="option in rankList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                        </el-select>
                                    </el-col>

                                </el-row>
                                <el-form-item>
                                    <el-button type="primary" plain style="float: right" @click="dialogFormVisible3=true">+其他被审查人员</el-button>
                                </el-form-item>
                            </div>


                        </el-collapse-item>
                        <el-collapse-item id="menu3" title="违纪行为" name="3">
                            <div class="tab-content">
                                <div v-for="(d,index) in disciplineObjList">
                                    <h4>违纪行为{{index+1}}</h4>
                                    <el-row class="el-lable">
                                        <el-col :span="6">违纪行为</el-col>
                                        <el-col :span="6">违纪行为子类</el-col>
                                        <el-col :span="6">违纪行为时间</el-col>

                                    </el-row>
                                    <el-row>
                                        <el-col :span="6">
                                            <el-select v-model="d.test" class="form_select" placeholder="请选择">
                                                <el-option v-for="option in disciplineList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-select v-model="form.region" class="form_select" placeholder="请选择">
                                                <el-option v-for="option in disciplineList" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                        </el-col>

                                    </el-row>
                                    <el-row class="el-lable">
                                        <el-col :span="6">违纪事实</el-col>


                                    </el-row>
                                    <el-row>
                                        <el-col :span="18"><el-input type="textarea" row="5"></el-input></el-col>


                                    </el-row>


                                </div>
                                <el-form-item>
                                    <el-button type="primary" plain style="float: right" @click="addDisciplineObjList">+新增违纪行为</el-button>
                                </el-form-item>

                            </div>
                        </el-collapse-item>
                        <el-collapse-item id="menu4" title="案件审查/调查基本情况" name="4">
                            <div class="tab-content">
                                <el-row class="el-lable">
                                    <el-col :span="6">审查调查单位/部门</el-col>
                                    <el-col :span="6">初核时间</el-col>
                                    <el-col :span="6">立案时间</el-col>
                                    <el-col :span="6">联合办案</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                            <el-option v-for="option in departmentList" v-bind:label="option.value" v-bind:value="option.code">   </el-option>
                                        </el-select>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
                                    </el-col>

                                    <el-col :span="6">
                                        <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-radio-group v-model="form.resource">
                                            <el-radio label="是"></el-radio>
                                            <el-radio label="否"></el-radio>
                                        </el-radio-group>
                                    </el-col>

                                </el-row>
                                <el-row class="el-lable">
                                    <el-col :span="6">是否留置</el-col>
                                    <el-col :span="6">审查调查延期</el-col>
                                    <el-col :span="6">责任追究</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-radio-group v-model="form.resource">
                                            <el-radio label="是"></el-radio>
                                            <el-radio label="否"></el-radio>
                                        </el-radio-group>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-radio-group v-model="form.resource">
                                            <el-radio label="是"></el-radio>
                                            <el-radio label="否"></el-radio>
                                        </el-radio-group>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-input type="text">

                                        </el-input>
                                    </el-col>
                                </el-row>
                                <el-row class="el-lable">
                                    <el-col :span="6">审查调查结果及处理意见</el-col>

                                </el-row>
                                <el-row>
                                    <el-input type="textarea" :row="3" placeholder="请输入内容">

                                    </el-input>
                                </el-row>
                            </div>

                        </el-collapse-item>
                        <el-collapse-item id="menu5" title="涉案款物基本情况" name="5">
                            <div class="tab-content">
                                <el-row class="el-lable">
                                    <el-col :span="6">涉案款物合计金额(万元)</el-col>
                                    <el-col :span="6">是否办理手续</el-col>
                                    <el-col :span="6">涉案款物类别</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-input v-model="form.name"></el-input>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-radio-group v-model="form.resource">
                                            <el-radio label="是"></el-radio>
                                            <el-radio label="否"></el-radio>

                                        </el-radio-group>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-checkbox-group v-model="form.type">
                                            <el-checkbox label="钱款" name="type"></el-checkbox>
                                            <el-checkbox label="物品" name="type"></el-checkbox>
                                            <el-checkbox label="股票" name="type"></el-checkbox>
                                            <el-checkbox label="银行账户" name="type"></el-checkbox>
                                            <el-checkbox label="其他" name="type"></el-checkbox>
                                        </el-checkbox-group>
                                    </el-col>
                                </el-row>
                                <el-row class="el-lable">
                                    <el-col :span="6">情况</el-col>

                                </el-row>
                                <el-row>
                                    <el-input type="textarea" :row="3" placeholder="请输入内容">

                                    </el-input>
                                </el-row>
                            </div>


                        </el-collapse-item>
                        <el-collapse-item id="menu6" title="潜逃终止情况" name="6">
                            <div class="tab-content">
                                <el-row class="el-lable">
                                    <el-col :span="6">潜逃去向</el-col>
                                    <el-col :span="6">潜逃时间</el-col>
                                    <el-col :span="6">抓获时间</el-col>
                                    <el-col :span="6">调查(中)终止时间</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-input v-model="form.name"></el-input>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
                                    </el-col>
                                </el-row>
                                <el-row class="el-lable">
                                    <el-col :span="6">潜逃去向细节</el-col>

                                </el-row>
                                <el-row>
                                    <el-input type="textarea" :row="3" placeholder="请输入内容">

                                    </el-input>
                                </el-row>
                                <el-row class="el-lable">
                                    <el-col :span="6">终止原因</el-col>

                                </el-row>
                                <el-row>
                                    <el-input type="textarea" :row="3" placeholder="请输入内容">

                                    </el-input>
                                </el-row>
                            </div>

                        </el-collapse-item>
                        <el-collapse-item  id="menu7" title="案件分发信息" name="7">
                            <div class="tab-content">
                                <el-row class="el-lable">
                                    <el-col :span="6">承办处</el-col>
                                    <el-col :span="6">承办人</el-col>
                                    <el-col :span="6">签收时限(天数)</el-col>
                                    <el-col :span="6">提前介入</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <el-input v-model="form.name"></el-input>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-select v-model="form.region" placeholder="请选择政治面貌">
                                            <el-option label="测试" value="shanghai"></el-option>

                                        </el-select>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-input v-model="form.name"></el-input>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-radio-group v-model="form.resource">
                                            <el-radio label="是"></el-radio>
                                            <el-radio label="否"></el-radio>
                                        </el-radio-group>
                                    </el-col>
                                </el-row>
                            </div>

                        </el-collapse-item>
                        <el-collapse-item id="menu8" title="上传材料信息" name="8">
                            <div class="tab-content">
                                <el-row>
                                    <el-col :span="6">
                                        <h4>移送审理案件材料交接登记表</h4>
                                    </el-col>
                                    <el-col :span="18">
                                        <el-upload
                                                class="upload-demo"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :on-preview="handlePreview"
                                                :show-file-list="false"
                                                :on-remove="handleRemove"
                                                :before-remove="beforeRemove"
                                                multiple
                                                :limit="3"
                                                :on-exceed="handleExceed"
                                                :file-list="fileList">
                                            <el-button size="small" type="primary">本地上传</el-button>
                                            <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                                        </el-upload>
                                    </el-col>
                                </el-row>
                                <el-row :span="24">
                                    <div class="upload-table-div" v-for="(d,index) in fileList">
                                        <span>{{d.name}}</span>
                                        <el-button style="" icon="el-icon-delete" size="small" @click="delUploadItem(index)">删除</el-button>
                                        <el-button style="" icon="el-icon-search" @click="showUploadItem(d)" size="small">查看</el-button>
                                        <el-button style="" icon="el-icon-download" @click="downloadItem(d)" size="small">下载</el-button>
                                    </div>

                                </el-row>
                                <el-row>
                                    <el-col :span="6">
                                        <h4>案件移送审理呈批表</h4>
                                    </el-col>
                                    <el-col :span="18">
                                        <el-upload
                                                class="upload-demo"
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                :on-preview="handlePreview"
                                                :on-remove="handleRemove"
                                                :show-file-list="false"
                                                :before-remove="beforeRemove"
                                                :on-success="upSuccess"
                                                multiple
                                                :limit="3"
                                                :on-exceed="handleExceed"
                                                :file-list="fileList">
                                            <el-button size="small" type="primary">点击上传</el-button>
                                            <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                                        </el-upload>
                                    </el-col>
                                </el-row>
                                <el-row :span="24">
                                    <div class="upload-table-div" v-for="(d,index) in fileList2">
                                        <span>{{d.name}}</span>
                                        <el-button style="" icon="el-icon-delete" size="small">删除</el-button>
                                        <el-button style="" icon="el-icon-search" size="small">查看</el-button>
                                        <el-button style="" icon="el-icon-download" size="small">下载</el-button>
                                    </div>

                                </el-row>


                            </div>

                        </el-collapse-item>
                    </el-collapse>

                    <div  class="margin_top_4 margin_left_0">
                        <el-button type="primary" @click="onSubmit">分发</el-button>
                        <el-button type="success" >保存</el-button>
                        <el-button >关闭</el-button>
                    </div>

                </el-form>

            </el-main>
            <el-dialog title="其他人员信息" append-to-body  :visible.sync="dialogFormVisible3">
                <other-person ></other-person>

            </el-dialog>
        </el-container>

    </div>



</template>


<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import otherPerson from './othsersPersonModal.vue'



    @Component({
        components: {
            otherPerson,
        },
        data() {
            return {
                dialogFormVisible:false,
                dialogFormVisible2:false,
                dialogFormVisible3:false,
//        企业性质（下拉）
                businessNatureList:[{code:"01", value:"国有或国有控股企业"}, {code:"01", value:"集体企业"}, {code:"01", value:"私营企业"},{code:"01", value:"其他内资企业"},{code:"01", value:"外商及港澳台资企业"}],
//        职级列表（下拉）
                rankList:[{code:"01", value:"正省部级"}, {code:"01", value:"副省部级"}, {code:"01", value:"正厅局级"},{code:"01", value:"副厅局级"},{code:"01", value:"正县处级"},{code:"01", value:"副县处级"}],
//        政治面貌下拉
                faceList:[{code:"01", value:"党组织"}, {code:"01", value:"中共党员"}, {code:"01", value:"共青团员"},{code:"01", value:"民主党派"},{code:"01", value:"无党派"},{code:"01", value:"其他"}],
//        承办处下拉
                undertakeList:[{code:"01", value:"审理一处"}, {code:"01", value:"审理一处附属办公室"}, {code:"01", value:"审理二处"},{code:"01", value:"XXX测试"}],
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
                fileList:[{name: 'foodhhhhh.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                fileList2:[{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],





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
                appealLsit:[
                    {
                        caseTitle:"申诉信件",
                        caseInc:"el-icon-message",
                        sendedCount:4,
                        noSendCount:5,
                    },
                    {
                        caseTitle:"申诉案件",
                        caseInc:"el-icon-star-on",
                        sendedCount:7,
                        noSendCount:3,
                    },
                    {
                        caseTitle:"申诉事项",
                        caseInc:"el-icon-goods",
                        sendedCount:10,
                        noSendCount:2
                    }

                ],
                subMenuItem:[
                    {
                        title:"案件审查/调查基本信息",
                        active:true,
                        id:'menu1',
                        eleBtnId:"eleBtnId1",
                        eleId:'menuName1'
                    },
                    {
                        title:"被调查人员",
                        active:false,
                        id:'menu2',
                        eleBtnId:"eleBtnId2",
                        eleId:'menuName2'
                    },
                    {
                        title:"违纪行为",
                        active:false,
                        id:'menu3',
                        eleBtnId:"eleBtnId3",
                        eleId:'menuName3'
                    },
                    {
                        title:"案件审核/调查基本情况",
                        active:false,
                        id:'menu4',
                        eleBtnId:"eleBtnId4",
                        eleId:'menuName4'
                    },
                    {
                        title:"涉案款物基本情况",
                        active:false,
                        id:'menu5',
                        eleBtnId:"eleBtnId5",
                        eleId:'menuName5'
                    }, {
                        title:"潜逃终止情况",
                        active:false,
                        id:'menu6',
                        eleBtnId:"eleBtnId6",
                        eleId:'menuName6'
                    },
                    {
                        title:"案件分发情况",
                        active:false,
                        eleBtnId:"eleBtnId7",
                        id:'menu7',
                        eleId:'menuName7'
                    },
                    {
                        title:"上传材料信息",
                        active:false,
                        eleBtnId:"eleBtnId8",
                        id:'menu8',
                        eleId:'menuName8'
                    }
                ],
                activeName:{

                },
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '20%'

            }
        },

        created() {
            window.onscroll = function(){
                //变量scrollTop是滚动条滚动时，距离顶部的距离
                var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                //变量windowHeight是可视区的高度
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //变量scrollHeight是滚动条的总高度
                var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
                //滚动条到底部的条件
                if(scrollTop+windowHeight==scrollHeight){
                    //写后台加载数据的函数
                    console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
                }
            }
        },
        mounted() {},
        methods: {
            handleRemove(file, fileList) {
                this.fileList=fileList;
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                console.log(fileList)
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            upSuccess:function (response,file,fileList) {
                this.fileList=fileList;
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            delUploadItem:function (target) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    debugger
                    this.fileList.splice(target,1)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
                
            },
            showUploadItem:function (item) {
                window.open(item.url)

            },
            downloadItem:function () {
                
            },
            menuGo:function (item) {
                item.active=true;
                for ( let i=1;i<9;i++){
                    document.getElementById('menuName'+ i).setAttribute('class','')
                    document.getElementById('eleBtnId'+ i).setAttribute('class','el-button tab-btn el-button--default el-button--small is-circle')
                }
                this.subMenuItem.forEach(function (v) {
                    if(v.id===item.id){
                        v.active=true

                    }else {
                        v.active=false
                    }

                })
                document.getElementById(item.id).scrollIntoView();

            },
            goEd:function () {
                this.$router.push({  //核心语句
                    path:'./caseDistributed',   //跳转的路径
                })
            },
            goIng:function () {
                this.$router.push({  //核心语句
                    path:'./caseDistributing',   //跳转的路径
                })

            },
            addDisciplineObjList:function () {

                console.log(this.disciplineObjList)
                this.disciplineObjList.push({
                    test:""
                })
            },
            goAnchor(selector) {

            },
            onSubmit:function () {

            },
            next() {
                console.log('aaaaa')
            }
        }
    })
    export default class caseRegModal extends Vue {
        isCollapse: boolean = false;

    }
</script>
<style scoped>
    .dialog {
        background: #f6f6f6;
        height: 100%;
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
        height: 700px;
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

    /* 步骤 */
    .steps {
        position: relative;
        margin-bottom: 30px;
        counter-reset: step;  /*创建步骤数字计数器*/
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

    @import "~@/styles/card.scss";

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }




    .card-footer-title{
        margin: 0 50px;
        color: #009ABB;
    }
    .card-hearder-title{
        float: left;
    }
    .backgrund-color-blue{
        color: #6085c4;

    }
    .el-collapse-item{
        margin: 10px 0;
    }
    .el-collapse-item__header{
        font-size: 16px;
        font-weight: bold;
    }
    .form_select >> input{
        width: 320px;
    }
    .case_card > .el-card__header {
        background: #c2dbf9;

    }
    .caseCardCon{
        height: 132px;
    }
    .caseCardCon >.el-main{
        overflow-y: hidden;
    }
    .el-input input{
        width: 94%;
    }
    .el-date-editor{
        margin-left: 3%;
    }
    .el-select-tab{
        position: fixed;
    }
    .el-select-tab li{
        font-size: 16px;
        margin-bottom: 20%;
        text-align: left;
    }
    .el-select input{
        width: 330px;
    }
    .active_class h4{
        color: #1c51ab;
        font-weight: normal;
    }
    .el-dialog{
        height: 100%;
        background: #ffffff;
    }
    .el-lable{
        text-align: left;
        margin-left: 1%;
    }
    .el-dialog__body{
        background: #ffffff;
    }
    .el-collapse-item__header{
        background: #1c51ab;
        color: white;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        padding-left: 2%;

    }
    .tab-content{
        border: 1px solid #dee1e7;
        padding: 26px;
        border-top: navajowhite;
        border-top-style: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }
    .tab-btn{
        position: relative;
        margin-left: -18%;
        top: 42px;
    }
    .active-btn-class{
        background: royalblue;
    }
    .title-hr{
        width: 92%;
        margin-left: 7%;
    }
    .card-footer-div{
        text-align: center;
        margin-top: 3%;
        padding-top: 6%;
        border-top: 1px solid #edeff4;
        width: 110%;
        position: relative;
        left: -5%;
        color: #5199ee;
    }
    .upload-table-div{
        width: 90%;
        height: 50px;
        border: 1px solid #cccccc;
        margin-left: 6%;
        text-align: left;
        padding: 14px;
        margin-bottom:1%;

    }
    .upload-table-div button{
        float: right;
        margin-top: -5px;
        margin-right: 1%;
    }
    .el-upload button{
        float: right;
        position: relative;
        left: 500%;
        margin-top: 18%;
    }


</style>