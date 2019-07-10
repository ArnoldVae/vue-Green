<!--回显页面demo-->
<template>
			<el-container>
                <el-aside width="220px"   class="el-select-tab ">
                            <el-timeline class="pointer-Item">
                                <el-timeline-item
                                        style="margin-left: 3px"
                                        size="large"
                                        :type="activity.active?'primary ':''"
                                        v-for="(activity, index) in subMenuItem"
                                        :key="index"
                                >
                                    <span :id="activity.eleId"  @click="menuGo(activity)" :class="[activity.active ? 'active_class' : '']">{{activity.title}}</span>
                                
                                </el-timeline-item>
                            </el-timeline>
                        </el-aside>
                <el-main>
                    <el-collapse v-model="activeNames1" class="collapse" v-show="tabs1=='1'">
                        <el-collapse-item id="menu1"  name="menu1">
                                <template slot="title">
                                            <i class="header-icon el-icon-info"></i>
                                       <span class="title">申诉案件基本情况信息</span>
                                        </template>
                                        <div class="form-content">
                                            <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                                                <el-row :gutter="20">
                                                    <el-col :span="6">
                                                        <el-form-item label="案件名称：" prop="name4">
                                                            <el-input v-model="form.name"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <el-form-item label="申诉来源：" prop="name5">
                                                            <el-select v-model="form.name5" placeholder="请选择" class="form_select">
                                                                <el-option label="信访部门转来" value="1"></el-option>
                                                                <el-option label="下级部门报批" value="2"></el-option>
                                                                <el-option label="本级部门登记" value="3"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>

                                                    <el-col :span="6">
                                                        <el-form-item label="申诉事项：" prop="name7">
                                                            <el-select v-model="form.appealItem" placeholder="请选择" class="form_select">
                                                                <el-option label="对党纪处分不服" value="01"></el-option>
                                                                <el-option label="对军纪处分不服" value="02"></el-option>
                                                                <el-option label="对违纪事实不认同" value="03"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <el-form-item label="是否重复申诉：" prop="name6">
                                                            <el-radio-group v-model="form.isRepeat">
                                                                <el-radio label="01">是</el-radio>
                                                                <el-radio label="02">否</el-radio>
                                                            </el-radio-group>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row :gutter="20">
                                                    <el-col :span="6">
                                                        <el-form-item label="申诉时间：">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <el-form-item label="接收时间：">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <el-form-item label="关联案件：" prop="name5">
                                                            <el-input v-model="form.assoCase" autocomplete="off" placeholder="请选择">
                                                                <template slot="append">选择</template>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </el-form>
                                        </div>
                            </el-collapse-item>
                            <el-collapse-item id="menu2" name="menu2">
                            <template slot="title">
                                            <i class="header-icon el-icon-info"></i><span class="title">申诉人基本情况信息</span>

                            </template>
                                        <div class="form-content">
                                            <el-form class="form-label-top" label-position='top' :model="form" :rules="rules">
                                                <el-row :gutter="20">
                                                    <el-col :span="6">
                                                        <el-form-item label="申诉人：">
                                                            <el-input v-model="form.personName"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <el-form-item label="人员类别：">
                                                            <el-cascader expand-trigger="hover" :options="personnelCategory" class="form_select" v-model="form.category"></el-cascader>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <el-form-item label="出生日期：">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.borthday" style="width: 100%;"></el-date-picker>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <el-form-item label="政治面貌：">
                                                            <el-select v-model="form.poliStatus" placeholder="请选择" class="form_select">
                                                                <el-option v-for="(option,index)  in poliStatus" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row :gutter="20">
                                                    <el-col :span="12">
                                                        <el-form-item label="部职别：">
                                                            <el-input placeholder="请输入内容" v-model="form.departGrade" >
                                                                <el-select v-model="form.transDepart" slot="prepend" placeholder="请选择" style=" width: 290px;">
                                                                    <el-option v-for="(option,index) in transDepart" :key="index"
                                                                        v-bind:label="option.value"
                                                                        v-bind:value="option.code">
                                                                    </el-option>
                                                                </el-select>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <el-form-item label="职级：">
                                                            <el-select v-model="form.professionRank" placeholder="请选择" class="form_select">
                                                                <el-option v-for="(option,index) in professionRank" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <el-form-item label="军衔：">
                                                            <el-select class="form_select" v-model="form.rank" placeholder="请选择">
                                                                <el-option v-for="(option,index) in rank" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-row :gutter="20">
                                                    <el-col :span="6">
                                                        <el-form-item label="参加工作时间：">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <el-form-item label="入伍时间：">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="6">
                                                        <el-form-item label="入党(团)时间：">
                                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.partyTime" style="width: 100%;"></el-date-picker>
                                                        </el-form-item>
                                                    </el-col>

                                                </el-row>

                                            </el-form>
                                        </div>
                            </el-collapse-item>
                            <el-collapse-item id="menu3" name="menu3">
                            <template slot="title">
                                            <i class="header-icon el-icon-info"></i><span class="title">主要违纪事实</span>

                                        </template>

                                        <div class="form-content">
                                            <div>

                                            </div>
                                            <div class="form-content-box" v-for="(item,i) in breachList" :key="i">
                                                <div class="form-content-box-title">
                                                    <el-form class="form-label-right" label-position='right' :model="form" :rules="rules">
                                                        <el-row>
                                                            <el-col :span="1">
                                                                <el-tag class="opacity_0">0{{index+1}}</el-tag>
                                                            </el-col>
                                                            <el-col :span="10">
                                                                <el-form-item style="font-weight: normal !important;left: -4.5%" label="问题类别:">
                                                                    <el-select v-model="item.problemType" style="left: 4.5%" placeholder="请选择" class="form_select">
                                                                        <el-option v-for="(option,index) in discipBehavior" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                                                    </el-select>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :span="13">
                                                                <el-button type="text" @click="addBreachSubList(item,i)">+增加事实</el-button>
                                                            </el-col>
                                                        </el-row>
                                                    </el-form>
                                                </div>
                                                <div class="form-content-box-body">
                                                    <div class="form-content-box-body-item">
                                                        <el-form class="form-label-right" label-position='right' :model="form" :rules="rules" v-for="(s,index) in item.subList" :key="index">
                                                            <el-row>
                                                                <el-col :span="1">
                                                                    <el-tag>0{{index+1}}</el-tag>
                                                                </el-col>
                                                                <el-col :span="10">
                                                                    <el-form-item label="违反事项：">
                                                                        <el-select v-model="s.subDiscipBehavior" placeholder="请选择" class="form_select">
                                                                            <el-option v-for="(option,index) in subDiscipBehavior" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                                                        </el-select>
                                                                    </el-form-item>
                                                                </el-col>
                                                                <el-col :span="10">
                                                                    <el-form-item label="行业领域：">
                                                                        <el-select v-model="s.industryField" placeholder="请选择" class="form_select">
                                                                            <el-option v-for="(option,index) in industryField" :key="index" v-bind:label="option.value" v-bind:value="option.code"></el-option>
                                                                        </el-select>
                                                                    </el-form-item>
                                                                </el-col>
                                                                <el-col :span="1">
                                                                    <el-button type="text" style="margin-left: 20px" @click="removeSubItem(item,index)"><i class="el-icon-error color-red font-size-24" style="margin-top: -5px"></i></el-button>
                                                                </el-col>
                                                            </el-row>
                                                            <el-row>
                                                                <el-col :span="1">
                                                                    <el-tag class="opacity_0"> 01</el-tag>
                                                                </el-col>
                                                                <el-col :span="20">
                                                                    <el-form-item label="主要事实：">
                                                                        <el-input class="area" type="textarea" v-model="s.area" :row="3" placeholder="请输入内容">
                                                                        </el-input>
                                                                    </el-form-item>

                                                                </el-col>
                                                            </el-row>
                                                            <hr style="background-color:#efefef;border: none;height: 1px;">
                                                        </el-form>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                            </el-collapse-item>
                            <el-collapse-item id="menu4"  name="menu4">
                                <template slot="title">
                                    <i class="header-icon el-icon-info"></i><span class="title">处分情况</span>
                                </template>
                                <div class="form-content">
                                    <el-form class="form-label-top"  label-position='top' :model="form" :rules="rules">
                                        <el-row gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="党纪处分:">
                                                    <el-select v-model="form.partyPunish" placeholder="请选择" class="form_select">
                                                        <el-option v-for="(option,index) in partyPunish" :key="index"
                                                                v-bind:label="option.value"
                                                                v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                    <el-form-item label="批准时间:">
                                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date4"
                                                                        style="width: 100%;"></el-date-picker>
                                                    </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="审批权限:">
                                                    <el-select v-model="form.auditLimited" placeholder="请选择" class="form_select">
                                                        <el-option v-for="(option,index) in auditLimited" :key="index"
                                                                v-bind:label="option.value"
                                                                v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                        <el-form-item label="原呈报处分单位:">
                                                            <el-input v-model="form.originalUnit"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                        </el-row>
                                        <el-row gutter="20">
                                            <el-col :span="6">
                                                <el-form-item label="军纪处分:">
                                                    <el-select v-model="form.armyPunish" placeholder="请选择" class="form_select">
                                                        <el-option v-for="(option,index) in armyPunish" :key="index"
                                                                v-bind:label="option.value"
                                                                v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                    <el-form-item label="批准时间:">
                                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date5"
                                                                        style="width: 100%;"></el-date-picker>
                                                    </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item label="审批权限:">
                                                    <el-select v-model="form.auditLimited2" placeholder="请选择" class="form_select">
                                                        <el-option v-for="(option,index) in auditLimited2" :key="index"
                                                                v-bind:label="option.value"
                                                                v-bind:value="option.code"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </el-form>
                                </div>
                            </el-collapse-item>
                        <el-collapse-item id="menu5"  name="menu5" >
                            <template slot="title" >
                                <i class="header-icon el-icon-info"></i> <span class="title">受理情况</span>
                            </template>
                            <div class="form-content">
                                <el-form class="form-label-top"  label-position='top' :model="form" :rules="rules">
                                    <el-row :gutter="20">
                                        <el-col :span="6">
                                                <el-form-item label="是否转送：" prop="namew">
                                                    <el-radio-group v-model="form.isValide">
                                                        <el-radio label="01">是</el-radio>
                                                        <el-radio label="02">否</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="转送单位：" prop="name" v-if="form.isValide=='01'">
                                                    <el-input v-model="form.name"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            </el-row>
                                    <el-row :gutter="20" v-if="form.isValide=='02'">
                                        <el-col :span="6">
                                            <el-form-item label="受理时间：" prop="name4">
                                                <el-date-picker v-model="form.date10" type="date" placeholder="选择日期"></el-date-picker>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-form-item label="承办人：" prop="name5">
                                                <el-select v-model="form.othersHuman" multiple filterable allow-create default-first-option placeholder="请选择">
                                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-form-item label="审理方式：" prop="name5">
                                                <el-select v-model="form.othersHuman1"  default-first-option placeholder="请选择">
                                                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                                                    </el-option>
                                                </el-select>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                    
                                    <el-row :gutter="20" v-if="form.isValide=='02'">
                                        <el-col :span="6">
                                            <el-form-item label="受理期限(天数)：">
                                                <el-input v-model="form.value2"></el-input>

                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-form-item label="红色预警期限(天数)：" prop="value4">
                                                <el-input v-model="form.value4"></el-input>

                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-form-item label="黄色预警期限(天数)：" prop="value4">
                                                <el-input v-model="form.value5"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-form-item label="蓝色预警期限(天数)：" prop="value4">
                                                <el-input v-model="form.value6"></el-input>

                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                    
                                    <el-row :gutter="20" v-if="form.isValide=='02'">
                                        <el-col :span="18">
                                            <el-form-item label="领导签批意见：">
                                                <el-input type="textarea" v-model="form.desc"></el-input>
                                            </el-form-item>
                                        </el-col>

                                    </el-row>
                                </el-form>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item id="menu6"  name="menu6" v-if="form.isValide=='02'">
                            <template slot="title">
                                <i class="header-icon el-icon-info"></i><span  class="title">上传材料信息</span>
                            </template>
                            <div class="form-content" style="padding: 0">
                                <div class="my-file-table">
                                    <div class="item-main" >
                                        <el-row>
                                            <el-col :span="14" class="col-title"> <p>领导签批单</p></el-col>
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
                                            <el-col :span="24" class="text-left"><span>文件{{index+1}}：{{f.name}}</span>
                                                <span class="btn-right">
                                                    <el-button  size="small"><i class="el-icon-download"></i>下载</el-button>
                                                <el-button  size="small"><i class="el-icon-search"></i>查看</el-button>
                                                <el-button  size="small" @click="beforeRemove(index)"><i class="el-icon-delete"></i>删除</el-button>
                                                </span>

                                            </el-col>
                                        </el-row>
                                        <hr>
                                    </div>


                                </div>
                            </div>

                        </el-collapse-item>
                    </el-collapse>
                </el-main>
        	</el-container>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
	const selectData = require("store/selectData.json");
    @Component({
        props: [''],
        components: {},
        data() {
            return {
				borthday: "",
                form: {
							"name":"",
							"name5":"",
							"appealItem":"",
							"isRepeat":"01",
							"date":"",
							"date1":"",
							"assoCase":"",
							"personName":"",
							"category":"",
							"borthday":"",
							"poliStatus":"",
							"transDepart":"",
                            "transDepart2":"",
                            "departGrade":"",
							"professionRank":"",
							"rank":"",
							"date2":"",
							"date3":"",	
							"date4":"",	
							"date5":"",	
							"date10":"",	
							"partyTime":"",
							"partyPunish":"",
							"auditLimited":"",
							"auditLimited2":"",
							"originalUnit":"",
							"armyPunish":"",
							"isValide":'02',
							"othersHuman":"",
							"othersHuman1":"",
							"value2" :'30',
							"value4":'5',
							"value5":'10',
							"value6":'15',	
						},
				auditLimited:[
                                {"code":"01", "value":"中共中央"}, 
                                {"code":"02", "value":"中央军委"},
                                {"code":"03", "value":"军委纪委"},
                                {"code":"04", "value":"大单位"}
                             ],
                auditLimited2:[
                                {"code":"01", "value":"中共中央"}, 
                                {"code":"02", "value":"军委纪委"},
                                {"code":"03", "value":"大单位"}
                             ],
                nation:selectData.nation,//民族
                nativePalce:selectData.nativePalce,//籍贯
                personnelCategory:selectData.personnelCategory,//人员类别
                transDepart:selectData.transDepart,//移送部门
                industryField:selectData.industryField,//行业领域
                professionRank:selectData.professionRank,//职级
                educationList:selectData.educationList,//学历
                rank:selectData.rank,//军衔
                npcNmember:selectData.npcNmember,//人大代表
                poliStatus:selectData.poliStatus,//政治面貌
                discipBehavior:selectData.discipBehavior,//违纪行为
                subDiscipBehavior:selectData.subDiscipBehavior,//违纪行为子类
                positionGrade:selectData.positionGrade,//技术职务等级
                departCategory:selectData.departCategory,//单位类别
                techGrade:selectData.techGrade,//技术等级
                taskCategory:selectData.taskCategory,//机关类别
				options:selectData.selectedOptions, // 
				armySpecies:selectData.armySpecies, // 军兵种
                cppcc:selectData.cppcc,//政协委员级别
                partyPunish:selectData.partyPunish,//党纪处分
                armyPunish:selectData.armyPunish,//军纪处分
                formData:selectData.appealForm,
				options: [{
					value: '01',
					label: "审理人1"
				}, {
					value: '02',
					label: "审理人2"
				}, {
					value: '03',
					label: "审理人3"
				}],
				options1: [{
					value: '01',
					label: "复查"
				}, {
					value: '02',
					label: "复议"
				}],
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
				}],
				tabPosition: "left",
				
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
        fileList:Array= [{name: '领导签批单1', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '领导签批单2', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
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
        index=1
        subMenuItem: Array = [
            {
                title: "申诉案件基本情况信息",
                active: true,
                id: 'menu1',
                eleBtnId: "eleBtnId1",
                eleId: 'menuName1'
            },
            {
                title: "申诉人基本情况信息",
                active: false,
                id: 'menu2',
                eleBtnId: "eleBtnId2",
                eleId: 'menuName2'
            },
            {
                title: "主要违纪事实",
                active: false,
                id: 'menu3',
                eleBtnId: "eleBtnId3",
                eleId: 'menuName3'
            },
            {
                title: "处分情况",
                active: false,
                id: 'menu4',
                eleBtnId: "eleBtnId4",
                eleId: 'menuName4'
            },
            {
                title: "受理情况",
                active: false,
                id: 'menu5',
                eleBtnId: "eleBtnId5",
                eleId: 'menuName5'
            },
            {
                title: "上传材料信息",
                active: false,
                id: 'menu6',
                eleBtnId: "eleBtnId6",
                eleId: 'menuName6'
            }
        ]
        menuGo(item) {
            item.active = true;
            for (let i = 1; i < 6; i++) {
                document.getElementById('menuName' + i).setAttribute('class', '')
//                document.getElementById('eleBtnId' + i).setAttribute('class', 'el-button tab-btn el-button--default el-button--small is-circle')
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
         mounted(){
            let subMenuItem=this.subMenuItem
            //给页面绑定滑轮滚动事件
            if (window.addEventListener) {//firefox
                window.addEventListener('scroll', function (e) {
                    console.log('aaa')
                    e = e || window.event;
                    for (let i = 1; i < 6; i++) {
                        if (document.getElementById('menu' + i) && document.getElementById('menu' + i).getBoundingClientRect()) {
                            if (document.getElementById('menu' + i).getBoundingClientRect().top > -900 && document.getElementById('menu' + i).getBoundingClientRect().top < 200) {
                                if (i > 1) {
                                    document.getElementById('menuName' + (i - 1)).setAttribute('class', '')

                                }
                                document.getElementById('menuName' + i).setAttribute('class', 'active_class')
                                subMenuItem.forEach((item,index)=>{
                                    if(i==index+1){
                                        item.active=true
                                    }else{
                                        item.active=false
                                    }
                                })
                            } else {
                                document.getElementById('menuName' + i).setAttribute('class', '')
                            }
                        }

                    }
//
                }, true);
            }
        }
        activeNames1:Array<string> =  ['menu1','menu2','menu3','menu4','menu5','menu6','menu7','menu8','menu9'];
        breachList=[
            {
                problemType:"",
                test:'',
                subList:[
                    {
                        test:''
                    },
                    {
                        test:''
                    }
                ]
            }
        ]
      breachList1=[
            {
                problemType:"违反政治纪律行为",
                test:'',
                subList:[{subDiscipBehavior:"对抗组织审查",industryField:"经费管理",test:'',
                    area:" 2002年2月至2010年3月,xxx在组织对其问题线索进行初步核实、对其立案调查期间，多次与涉案人员串通、订立攻守同盟，转移藏匿脏款赃物。"}
                ]
            },
            {
                problemType:"违反政治纪律行为",
                test:'',
                subList:[{subDiscipBehavior:"对抗组织审查",industryField:"经费管理",test:'',
                    area:" 2002年2月至2010年3月,xxx在组织对其问题线索进行初步核实、对其立案调查期间，多次与涉案人员串通、订立攻守同盟，转移藏匿脏款赃物。"}
                ]
            }
        ]

		//        增加违反事实
        addBreach(){
            this.breachList.push(
                {
                    test:'',
                    subList:[
                        {
                            test:'',
                        }
                    ]
                }
            )
		}
//        删除违纪行为
        removeSubItem(item,index){
            this.$confirm('此操作将删除该条目, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                item.subList.splice(index,1)
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

        }
//        增加事实
        addBreachSubList(item,index){
            this.breachList[index].subList.push(
                {
                    test:'',
                }
            )
        }
        echoDetails(item){
            this.form=this.formData;
            this.form.name5=item.caseSource;
            this.form.name=item.caseName;
            this.form.personName=item.personName;
            this.breachList=this.breachList1;
        }
        closeItem(){
            this.activeNames=['1','2','3','4']
        }
    }
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
</style>