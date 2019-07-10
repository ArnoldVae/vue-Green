<template>
    <!-- 案件登记 -->
    <div class="dialog">
        <div>
            <el-aside width="220px" class="el-select-tab" v-if="!hideTabTreeFlag">
                <ul style="list-style-type:none;height:800px">
                    <li style="height: 20px;cursor: pointer;" v-bind:id="menu.eleId"
                        v-bind:class="[menu.active ? 'active_class' : '']" v-for="(menu,index) in subMenuItem"
                        :key="index" @click="menuGo(menu)">
                        <el-button v-bind:id="menu.eleBtnId" v-bind:class="[menu.active ? 'active-btn-class' : '']"
                                   class="tab-btn" circle size="small"></el-button>
                        <h4>{{index + 1}}{{menu.title}}</h4></li>
                </ul>
            </el-aside>
            <el-main >
                <el-collapse v-model="activeNames">
                    <el-collapse-item id="menu1"  name="1" v-show="!hideMenuList.step01">
                        <template slot="title">
                            <i class="header-icon el-icon-info"></i>案件审查/调查基本信息
                        </template>
                        <div class="form-content">
                            <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="案件编号:" prop="name">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="案件名称:">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="案件涉密等级:">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="秘密"></el-radio>
                                                <el-radio label="机密"></el-radio>
                                                <el-radio label="绝密"></el-radio>
                                                <el-radio label="不涉密"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
         		                    <el-col :span="6">
                                        <el-form-item label="案件类型:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option label="直查案件" value="shanghai"></el-option>
                                                <el-option label="报批案件" value="shanghai"></el-option>
                                                <el-option label="司法移送案件" value="shanghai"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="移送部门:">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="接收时间:">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" :default-value="timeDefaultShow"
                                              format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item id="menu2" v-show="!hideMenuList.step02" name="2">
                        <template slot="title">
                            <i class="header-icon el-icon-document"></i>被审查调查人员
                        </template>
                        <div class="form-content">
                            <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="主要被审查调查人员姓名:" prop="name">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="性别:">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="男" size="medium"></el-radio>
                                                <el-radio label="女" size="medium"></el-radio>
                                                <el-radio label="不详" size="medium"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="民族:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option label="汉族" value="shanghai"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="出生日期:">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                                            style="width: 100%;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="籍贯:">
                                            <el-select class="form_select" v-model="form.region" placeholder="请选择">
                                                <el-option v-for="(option,index) in nativeList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="最高学历:">
                                            <el-select class="form_select" v-model="form.region" placeholder="请选择">
                                                <el-option v-for="(option,index) in educationList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="参加工作时间:">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                                            style="width: 100%;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="工作单位:">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="企业性质:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option v-for="(option,index) in businessNatureList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="人员身份:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option v-for="(option,index) in identityList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="部门分类:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option v-for="(option,index)  in identityList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="政治面貌:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option v-for="(option,index)  in faceList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="身份类型:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option v-for="(option,index) in identityClassList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="是否监察对象:">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="是"></el-radio>
                                                <el-radio label="否"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="党代表级别:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option v-for="(option,index)  in rankList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="党委委员级别:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option v-for="(option,index) in rankList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="人大代表级别:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option v-for="(option,index) in rankList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="职级:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option v-for="(option,index) in rankList" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="违纪行为:">
                                            <el-select  placeholder="请选择" class="form_select">
                                                <el-option ></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="违纪行为子类:">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option ></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="违纪行为时间:">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                                            style="width: 100%;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                     <el-col :span="6">
                                        <el-form-item label="行业领域:">
                                            <el-select v-model="form.field" placeholder="请选择" class="form_select">
                                                <el-option v-for="(option,index) in industryField" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                     <el-col :span="6">
                                        <el-form-item label="人员类别:">
                                            <el-select v-model="form.category" placeholder="请选择" class="form_select">
                                                <el-option v-for="(option,index) in personnelCategory" :key="index"
                                                           v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" class="el-lable">
		                            <el-col :span="24">
		                                <el-form-item label="违纪事实:">
		                                    <el-input type="textarea" row="5"></el-input>
		                                </el-form-item>
		                            </el-col>
		                        </el-row>
                                <!--<el-row :gutter="20" class="el-lable">-->
                                    <!--<el-col :span="24">-->
                                            <!--<el-button type="primary" plain style="float: right" @click="dialogFormVisible3=true">-->
                                                <!--+其他被审查人员-->
                                            <!--</el-button>-->

                                    <!--</el-col>-->
                                <!--</el-row>-->
                            </el-form>
                        </div>
						
                    </el-collapse-item>
                    
                    <el-collapse-item id="menu3" title="案件审查/调查基本情况" v-show="!hideMenuList.step03"  name="3">
                        <div class="form-content">
                            <el-form class="form-label-top"  label-position='top' :model="form" :rules="rules">
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="审查调查单位/部门:" prop="name">
                                            <el-select v-model="form.region" placeholder="请选择" class="form_select">
                                                <el-option v-for="option in departmentList" v-bind:label="option.value"
                                                           v-bind:value="option.code"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="初核时间:">
                                            <el-date-picker type="date" placeholder="选择日期"
                                                            style="width: 100%;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="立案时间:">
                                            <el-date-picker type="date" placeholder="选择日期"
                                                            style="width: 100%;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="联合办案:">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="是"></el-radio>
                                                <el-radio label="否"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="是否留置:">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="是"></el-radio>
                                                <el-radio label="否"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="审查调查延期:">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="是"></el-radio>
                                                <el-radio label="否"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="责任追究:">
                                            <el-input type="text">

                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="24">
                                        <el-form-item label="审查调查结果及处理意见:">
                                            <el-input type="textarea" :row="3" placeholder="请输入内容">

                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </div>

                    </el-collapse-item>
                    <el-collapse-item id="menu4" title="涉案款物基本情况" v-show="!hideMenuList.step04" name="4">
                        <div class="form-content">
                            <el-form class="form-label-top"  label-position='top' :model="form" :rules="rules">
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="涉案款物合计金额(万元):" prop="name">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="是否办理手续:">
                                            <el-radio-group v-model="form.resource">
                                                <el-radio label="是"></el-radio>
                                                <el-radio label="否"></el-radio>

                                            </el-radio-group>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="涉案款物类别:">
                                            <el-checkbox-group v-model="form.type">
                                                <el-checkbox label="钱款" name="type"></el-checkbox>
                                                <el-checkbox label="物品" name="type"></el-checkbox>
                                                <el-checkbox label="股票" name="type"></el-checkbox>
                                                <el-checkbox label="银行账户" name="type"></el-checkbox>
                                                <el-checkbox label="其他" name="type"></el-checkbox>
                                            </el-checkbox-group>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="24">
                                        <el-form-item label="情况:">
                                            <el-input type="textarea" :row="3" placeholder="请输入内容">

                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </div>


                    </el-collapse-item>
                    <el-collapse-item id="menu5" title="潜逃终止情况" v-show="!hideMenuList.step05" name="5">
                        <div class="form-content">
                            <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="潜逃去向:" prop="name">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="潜逃时间:">
                                            <el-date-picker type="date" placeholder="选择日期"
                                                            style="width: 100%;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="抓获时间:">
                                            <el-date-picker type="date" placeholder="选择日期"
                                                            style="width: 100%;"></el-date-picker>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="24">
                                        <el-form-item label="潜逃去向细节:">
                                            <el-input type="textarea" :row="3" placeholder="请输入内容">

                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="24">
                                        <el-form-item label="终止原因:">
                                            <el-input type="textarea" :row="3" placeholder="请输入内容">

                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </div>
                    </el-collapse-item>
                    
                    <!-- <el-collapse-item id="menu6" title="是否提前介入" v-show="!hideMenuList.step06" name="6">
                        <div class="form-content">
                            <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item label="提前介入:" prop="name">
                                            <el-radio-group v-model="form.interent" @change="onRadioChange">
                                                <el-radio label="1">是</el-radio>
                                                <el-radio label="2">否</el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            <div v-if="form.interent == 1">
							<h4>商请提前介入审理表</h4>
                            <el-row>
                                <el-col :span="12" :offset="12" style="text-align: right;">
                                    <el-upload
                                            multiple
                                            :on-change="setRegisterFiles"
                                            :action="''"
                                            ref="changeFile"
                                            :auto-upload="false"
                                            :file-list="visaForm.registerFiles"
                                            :show-file-list="false"
                                            :data="visaObj">
                                        <el-button type="text" size="small" class="font-size-14"><i
                                                class="el-icon-upload2">&nbsp;</i>上传
                                        </el-button>
                                    </el-upload>
                                </el-col>
                            </el-row>
                            <el-row>
                                <div class="dev_show_table">
                                    <el-table highlight-current-row border
                                              :data="visaForm.registerFiles"
                                              size="small"
                                              :header-cell-style="{background:'#f3f3f3', 'text-align': 'center', color: '#666',fontSize:'13px',height:'35px',border:'0.5px solid #e5e5e5',padding:'6px 0',fontWeight:'500'}">
                                        <el-table-column type="index" label="序号" align="center" width="50"/>
                                        <el-table-column show-overflow-tooltip prop="documentname" label="附件"
                                                         header-align="center" align="center"/>
                                        <el-table-column prop="documentdate" align="center" label="上传时间" width="150px">
                                            <template slot-scope="scope">
                                                {{ scope.row.documentdate | formatDate }}
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="" align="center" label="操作" width="150px">
                                            <template slot-scope="scope">
                                                <el-button-group class="button_group">
                                                    <el-row :gutter="20">
                                                        <el-col :span="8">
                                                            <el-button type="text" size="small"
                                                                       @click="delRegisterFiles(scope.$index)">删除
                                                            </el-button>
                                                        </el-col>
                                                    </el-row>
                                                </el-button-group>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-row>
                            <h4>提前介入审理意见</h4>
                            <el-row>
                                <el-col :span="12" :offset="12" style="text-align: right;">
                                    <el-upload
                                            multiple
                                            :on-change="setBatchFiles"
                                            :action="''"
                                            ref="changeFile"
                                            :auto-upload="false"
                                            :file-list="visaForm.batchFiles"
                                            :show-file-list="false"
                                            :data="visaObj">
                                        <el-button type="text" size="small" class="font-size-14"><i
                                                class="el-icon-upload2">&nbsp;</i>上传
                                        </el-button>
                                    </el-upload>
                                </el-col>
                            </el-row>
                            <el-row>
                                <div class="dev_show_table">
                                    <el-table highlight-current-row border
                                              :data="visaForm.batchFiles"
                                              size="small"
                                              :header-cell-style="{background:'#f3f3f3', 'text-align': 'center', color: '#666',fontSize:'13px',height:'35px',border:'0.5px solid #e5e5e5',padding:'6px 0',fontWeight:'500'}">
                                        <el-table-column type="index" label="序号" align="center" width="50"/>
                                        <el-table-column show-overflow-tooltip prop="documentname" label="附件"
                                                         header-align="center" align="center"/>
                                        <el-table-column prop="documentdate" align="center" label="上传时间" width="150px">
                                            <template slot-scope="scope">
                                                {{ scope.row.documentdate | formatDate }}
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="" align="center" label="操作" width="150px">
                                            <template slot-scope="scope">
                                                <el-button-group class="button_group">
                                                    <el-row :gutter="20">
                                                        <el-col :span="8">
                                                            <el-button type="text" size="small"
                                                                       @click="delBatchFiles(scope.$index)">删除
                                                            </el-button>
                                                        </el-col>
                                                    </el-row>
                                                </el-button-group>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-row>
                            </div>
                            </el-form>
                        </div>

                    </el-collapse-item> -->
                    <el-collapse-item id="menu7" title="初审期限" v-show="!hideMenuList.step07" name="7">
                   		<div class="form-content">
                            <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                                <el-row :gutter="20">
                                	<el-col :span="6">
                                        <el-form-item label="初审期限(天数):">
                                            <el-input v-model="form.limitDays"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="红色预警期限(天数):">
                                            <el-input v-model="form.redDays"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="黄色预警期限(天数):">
                                            <el-input v-model="form.yellowDays"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item label="蓝色预警期限(天数):">
                                            <el-input v-model="form.buleDays"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                       </div>
                   	</el-collapse-item>
                    <el-collapse-item id="menu8" title="上传材料信息" v-show="!hideMenuList.step08" name="8">
                        <div class="tab-content">
                            <h4>移送审理案件材料交接登记表</h4>
                            <el-row>
                                <el-col :span="12" :offset="12" style="text-align: right;">
                                    <el-upload
                                            multiple
                                            :on-change="setRegisterFiles"
                                            :action="''"
                                            ref="changeFile"
                                            :auto-upload="false"
                                            :file-list="visaForm.registerFiles"
                                            :show-file-list="false"
                                            :data="visaObj">
                                        <el-button type="text" size="small" class="font-size-14"><i
                                                class="el-icon-upload2">&nbsp;</i>上传
                                        </el-button>
                                    </el-upload>
                                </el-col>
                            </el-row>
                            <el-row>
                                <div class="dev_show_table">
                                    <el-table highlight-current-row border
                                              :data="visaForm.registerFiles"
                                              size="small"
                                              :header-cell-style="{background:'#f3f3f3', 'text-align': 'center', color: '#666',fontSize:'13px',height:'35px',border:'0.5px solid #e5e5e5',padding:'6px 0',fontWeight:'500'}">
                                        <el-table-column type="index" label="序号" align="center" width="50"/>
                                        <el-table-column show-overflow-tooltip prop="documentname" label="附件"
                                                         header-align="center" align="center"/>
                                        <el-table-column prop="documentdate" align="center" label="上传时间" width="150px">
                                            <template slot-scope="scope">
                                                {{ scope.row.documentdate | formatDate }}
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="" align="center" label="操作" width="150px">
                                            <template slot-scope="scope">
                                                <el-button-group class="button_group">
                                                    <el-row :gutter="20">
                                                        <el-col :span="8">
                                                            <el-button type="text" size="small"
                                                                       @click="delRegisterFiles(scope.$index)">删除
                                                            </el-button>
                                                        </el-col>
                                                    </el-row>
                                                </el-button-group>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-row>
                            <h4>案件移送审理呈批表</h4>
                            <el-row>
                                <el-col :span="12" :offset="12" style="text-align: right;">
                                    <el-upload
                                            multiple
                                            :on-change="setBatchFiles"
                                            :action="''"
                                            ref="changeFile"
                                            :auto-upload="false"
                                            :file-list="visaForm.batchFiles"
                                            :show-file-list="false"
                                            :data="visaObj">
                                        <el-button type="text" size="small" class="font-size-14"><i
                                                class="el-icon-upload2">&nbsp;</i>上传
                                        </el-button>
                                    </el-upload>
                                </el-col>
                            </el-row>
                            <el-row>
                                <div class="dev_show_table">
                                    <el-table highlight-current-row border
                                              :data="visaForm.batchFiles"
                                              size="small"
                                              :header-cell-style="{background:'#f3f3f3', 'text-align': 'center', color: '#666',fontSize:'13px',height:'35px',border:'0.5px solid #e5e5e5',padding:'6px 0',fontWeight:'500'}">
                                        <el-table-column type="index" label="序号" align="center" width="50"/>
                                        <el-table-column show-overflow-tooltip prop="documentname" label="附件"
                                                         header-align="center" align="center"/>
                                        <el-table-column prop="documentdate" align="center" label="上传时间" width="150px">
                                            <template slot-scope="scope">
                                                {{ scope.row.documentdate | formatDate }}
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="" align="center" label="操作" width="150px">
                                            <template slot-scope="scope">
                                                <el-button-group class="button_group">
                                                    <el-row :gutter="20">
                                                        <el-col :span="8">
                                                            <el-button type="text" size="small"
                                                                       @click="delBatchFiles(scope.$index)">删除
                                                            </el-button>
                                                        </el-col>
                                                    </el-row>
                                                </el-button-group>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-row>
                        </div>
                    </el-collapse-item>
                </el-collapse>
                <div class="margin_top_4 margin_left_0" v-show="!hideTabTreeFlag&&pageFlag!=='total'">
                    <el-button type="primary">提交</el-button>
                    <el-button type="primary" plain>保存</el-button>
                    <el-button type="warning" plain>取消</el-button>
                </div>
            </el-main>
            <el-dialog title="其他人员信息" class="mc-dialog-medium" append-to-body  :visible.sync="dialogFormVisible3">
                <other-person ></other-person>
            </el-dialog>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import otherPerson from  './othsersPersonModal'
    @Component({
        components: {otherPerson},
        props: ['pageFlag'],
        data() {
            return {
            	timeDefaultSho:new Date(),
                steps: [
                    {id: 'step01', active: true, name: '案件审查/调查基本信息'},
                    {id: 'step02', active: false, name: '被审查调查人员'},
                    {id: 'step03', active: false, name: '案件审查/调查基本情况'},
                    {id: 'step04', active: false, name: '涉案款物基本情况'},
                    {id: 'step05', active: false, name: '潜逃终止情况'},
                    // {id: 'step06', active: false, name: '是否提前介入'},
                    {id: 'step07', active: false, name: '初审期限'},
                    {id: 'step08', active: false, name: '上传材料信息'},
                ],
                visaObj: {},
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                hideMenuList:{step01:false,step02:false,step03:false,step04:false,step05:false,step06:false,step07:false,step08:false},
                hideTabTreeFlag:false,
//        企业性质（下拉）
                businessNatureList: [{code: "01", value: "国有或国有控股企业"}, {code: "01", value: "集体企业"}, {
                    code: "01",
                    value: "私营企业"
                }, {code: "01", value: "其他内资企业"}, {code: "01", value: "外商及港澳台资企业"}],
//        职级列表（下拉）
                rankList: [{code: "01", value: "正省部级"}, {code: "01", value: "副省部级"}, {
                    code: "01",
                    value: "正厅局级"
                }, {code: "01", value: "副厅局级"}, {code: "01", value: "正县处级"}, {code: "01", value: "副县处级"}],
//        政治面貌下拉
                faceList: [{code: "01", value: "党组织"}, {code: "01", value: "中共党员"}, {
                    code: "01",
                    value: "共青团员"
                }, {code: "01", value: "民主党派"}, {code: "01", value: "无党派"}, {code: "01", value: "其他"}],
//        承办处下拉
                undertakeList: [{code: "01", value: "审理一处"}, {code: "01", value: "审理一处附属办公室"}, {
                    code: "01",
                    value: "审理二处"
                }, {code: "01", value: "中央测试"}],
//        承办人
                undertakerList: [{code: "01", value: "测试一"}, {code: "01", value: "测试二"}, {
                    code: "01",
                    value: "测试三"
                }, {code: "01", value: "测试四"}],
//        民族下拉
                nationList: [{code: "01", value: "汉族"}, {code: "01", value: "蒙古族"}, {
                    code: "01",
                    value: "回族"
                }, {code: "01", value: "维吾尔族"}],
//        籍贯下拉
                nativeList: [{code: "01", value: "北京市"}, {code: "01", value: "河北省"}, {
                    code: "01",
                    value: "天津市"
                }, {code: "01", value: "浙江省"}],
//        学历下拉
                educationList: [{code: "01", value: "博士研究生"}, {code: "01", value: "硕士研究生"}, {
                    code: "01",
                    value: "大学本科"
                }, {code: "01", value: "大专"}, {code: "01", value: "中专"}, {code: "01", value: "高中"}, {
                    code: "01",
                    value: "其他"
                }],
//        人员身份（下拉）
                identityList: [{code: "01", value: "中管干部"}, {code: "01", value: "省管干部"}, {
                    code: "01",
                    value: "市管干部"
                }, {code: "01", value: "县管干部"}, {code: "01", value: "企业领导人员"}, {
                    code: "01",
                    value: "中层管理人员"
                }, {code: "01", value: "其他人员"}],
//        部门分类列表
                departmentList: [{code: "01", value: "党务机关"}, {code: "01", value: "政府机关"}, {
                    code: "01",
                    value: "人大机关"
                }, {code: "01", value: "政协机关"}, {code: "01", value: "审判机关"}, {code: "01", value: "检查机关"}, {
                    code: "01",
                    value: "人民团体"
                }],
//        身份类型下拉
                identityClassList: [{code: "01", value: "党务机关"}, {code: "01", value: "政府机关"}, {
                    code: "01",
                    value: "人大机关"
                }, {code: "01", value: "政协机关"}, {code: "01", value: "审判机关"}, {code: "01", value: "检查机关"}, {
                    code: "01",
                    value: "人民团体"
                }],
//        党代表级别下拉
                // identityClassList:[{code:"01", value:"全国"}, {code:"01", value:"省级"}, {code:"01", value:"市级"},{code:"01", value:"县级"}],
//        违纪行为下拉
                disciplineList: [{code: "01", value: "违反政治纪律行为"}, {code: "01", value: "违反组织纪律行为"}, {
                    code: "01",
                    value: "违反廉洁纪律行为"
                }, {code: "01", value: "违反群众纪律行为"}],
                disciplineObjList: [{code: "01", value: "违反政治纪律行为", test: ""}],
 //            行业领域下拉
                industryField: [{code: "01", value: "正省部级"}, {code: "01", value: "副省部级"}, {code: "01",value: "正厅局级"}, 
                {code: "01", value: "副厅局级"}, {code: "01", value: "正县处级"}, {code: "01", value: "副县处级"}],
 //           人员类别  下拉
                personnelCategory: [{code: "01", value: "正省部级"}, {code: "01", value: "副省部级"}, {code: "01",value: "正厅局级"}, 
                {code: "01", value: "副厅局级"}, {code: "01", value: "正县处级"}, {code: "01", value: "副县处级"}],
                activeNames: ['1', '2', '3', '4', '5', '6', '7', '8'],

                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    type: [],
                    resource: '',
                    desc: '',
                    limitDays:'',
                    redDays:'',
                    yellowDays:'',
                    buleDays:'',
                    interent:'' ,// 提前介入
                    field:'',
                    category:''
                },
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
//            判断父组件标志
            if(this.pageFlag){
                if(this.pageFlag=='caseSup'){
                    this.hideTabTreeFlag=true;
                    this.hideMenuList= {step01:false,step02:true,step03:true,step04:true,step05:true,step06:true,step07:true,step08:true}
                }
            }
            //给页面绑定滑轮滚动事件
            if (window.addEventListener&&!this.hideTabTreeFlag) {//firefox
                window.addEventListener('scroll', function (e) {
                    e = e || window.event;
                    for (let i = 1; i < 9; i++) {
                        if (document.getElementById('menu' + i) && document.getElementById('menu' + i).getBoundingClientRect()) {
                            if (document.getElementById('menu' + i).getBoundingClientRect().top > -900 && document.getElementById('menu' + i).getBoundingClientRect().top < 200) {
                                if (i > 1) {
                                    document.getElementById('menuName' + (i - 1)).setAttribute('class', '')
                                    document.getElementById('eleBtnId' + (i - 1)).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')

                                }
                                document.getElementById('menuName' + i).setAttribute('class', 'active_class')
                                document.getElementById('eleBtnId' + i).setAttribute('class', 'active-btn-class el-button tab-btn el-button--default el-button--small is-circle')
                            } else {
                                document.getElementById('menuName' + i).setAttribute('class', '')
                                document.getElementById('eleBtnId' + i).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
                            }
                        }

                    }
//
                }, true);
            }
            //   window.onmousewheel = window.onmousewheel = scrollFunc;
        },
        methods: {
            parentMethod(target:string,pageIndex:string) {
                if(target=='caseSup'){
                    console.log(this.hideMenuList);
                    for (let key in this.hideMenuList) {
                        if(key == pageIndex){
                            this.hideMenuList[key]=false;
                        }else{
                            this.hideMenuList[key]=true
                        }
                    }
                }

            },
            onRadioChange(val){ // 提前介入radio点击事件
            	interent = this.val
            }
        }
    })
    export default class caseSupplement extends Vue {

        dialogFormVisible3:boolean=false
        // 附件列表
        visaForm: object = {
            registerFiles: [], // 移送审理案件材料交接登记表
            batchFiles: [], // 案件移送审理呈批表

        }
        subMenuItem: Array = [
            {
                title: "案件审查/调查基本信息",
                active: true,
                id: 'menu1',
                eleBtnId: "eleBtnId1",
                eleId: 'menuName1'
            },
            {
                title: "被调查人员",
                active: false,
                id: 'menu2',
                eleBtnId: "eleBtnId2",
                eleId: 'menuName2'
            },
            {
                title: "案件审核/调查基本情况",
                active: false,
                id: 'menu3',
                eleBtnId: "eleBtnId3",
                eleId: 'menuName3'
            },
            {
                title: "涉案款物基本情况",
                active: false,
                id: 'menu4',
                eleBtnId: "eleBtnId4",
                eleId: 'menuName4'
            }, {
                title: "潜逃终止情况",
                active: false,
                id: 'menu5',
                eleBtnId: "eleBtnId5",
                eleId: 'menuName5'
            },
            // {
            //     title: "是否提前介入",
            //     active: false,
            //     eleBtnId: "eleBtnId6",
            //     id: 'menu6',
            //     eleId: 'menuName6'
            // },
            {
                title: "初审期限",
                active: false,
                eleBtnId: "eleBtnId6",
                id: 'menu7',
                eleId: 'menuName6'
            },
            {
                title: "上传材料信息",
                active: false,
                eleBtnId: "eleBtnId7",
                id: 'menu8',
                eleId: 'menuName7'
            }
        ]

        addDisciplineObjList() {
            console.log(this.disciplineObjList)
            this.disciplineObjList.push({
                test: ''
            })
        }

        menuGo(item) {
            item.active = true;
            for (let i = 1; i < 8; i++) {
                document.getElementById('menuName' + i).setAttribute('class', '')
                document.getElementById('eleBtnId' + i).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
            }
            this.subMenuItem.forEach(function (v) {
                if (v.id === item.id) {
                    v.active = true

                } else {
                    v.active = false
                }

            })
            document.getElementById(item.id).scrollIntoView();
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
        delBatchFiles(index) {
            this.visaForm.batchFiles.splice(index, 1)
        }

        delRegisterFiles(index) {
            this.visaForm.registerFiles.splice(index, 1)
        }
    }
</script>
<style>
    @import "~@/styles/dialogBox.scss";
</style>
<style ref="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/dialogBox.scss";
    .el-collapse-item{
        /deep/.el-collapse-item__header{
            padding-left: 2%;
            font-size: 14px;
            border: 1px solid #dee1e7;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
            color: #2f76dd;
        }
    }
    .tab-content {
        border: 1px solid #dee1e7;
        padding: 26px;
        border-top: navajowhite;
        border-top-style: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        text-align: left
    }

    .form-content {
        border: 1px solid #dee1e7;
        padding: 26px;
        border-top: navajowhite;
        border-top-style: none;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        text-align: left;
        /deep/ .el-form-item__label {
            font-size: 16px;
            font-weight: bold;
        }
    }
    .el-main{
        margin-left: 18%;
    }
    .active_class h4{
        color: #2f76dd;
        font-weight: normal;
    }
    .active-btn-class{
        background: #2f76dd;
    }
	.el-select{
    	width: 100%;
    }
	/deep/.form_select{
       /* width: 240px;*/
        .el-input__suffix{
            right: 12%;
        }
    }
    .el-select-tab{
        position: fixed;
    }
    .el-select-tab li{
        font-size: 14px;
        margin-bottom: 20%;
        text-align: left;
    }
    .tab-btn{
        position: relative;
        margin-left: -18%;
        top: 38px;
    }
</style>