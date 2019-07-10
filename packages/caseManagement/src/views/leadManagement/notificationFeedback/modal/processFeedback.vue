<template>
<!-- 通报反馈 -->
<!-- 本级直查-处理反馈 -->
  <div class="backplane">
    <div class="backplane-Content">
      <!-- XXXXXX分类 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <div class="menu-item">XXXXXX监委</div>
        </el-menu-item>
      </el-menu>

      <el-container v-show="isChecked == 1">
        <el-collapse v-model="activeNames">
          <el-collapse-item id="menu1" title="涉案人员信息" name="1">
            <div class="edit-tabs" style="text-align: left;margin: 12px">
              <el-button
                type="primary"
                plain
                class="add-tab-btn"
                size="mini"
                @click="addMember"
              >新增涉案人员信息</el-button>
            </div>
            <el-tabs v-model="selectMember" type="card" closable @tab-remove="removeTab">
              <el-tab-pane
                v-for="(item, index) in informDisForm.beTriedMember"
                :key="item.memberTabKey"
                :label="item.memberTabTitle"
                :name="item.memberTabKey"
              >
                <div class="form-content">
                  <el-form
                    label-position="top"
                    :model="form"
                    :ref="'tab'+index"
                    class="form-label-top"
                  >
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <el-form-item
                          label="姓名:"
                          :rules="[{ required: true, message: '请输入姓名', trigger: 'blur' }]"
                        >
                          <el-input placeholder="请输入" v-model="item.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="性别:">
                          <el-col :span="24">
                            <el-radio v-model="item.sex" label="1">男</el-radio>
                            <el-radio v-model="item.sex" label="2">女</el-radio>
                            <el-radio v-model="item.sex" label="3">不详</el-radio>
                          </el-col>
                        </el-form-item>
                      </el-col>

                      <el-col :span="12">
                        <el-form-item label="部职别（工作单位）:">
                          <el-input placeholder="请输入职务" v-model="item.ministryDuty"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <el-form-item label="现隶属单位:">
                          <el-select v-model="item.subUnit" placeholder="请选择" style="width:100%">
                            <el-option
                              v-for="item in subUnitOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="人员类别:">
                          <el-select v-model="item.category" placeholder="请选择" style="width:100%">
                            <el-option
                              v-for="item in categoryOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="职务等级:">
                          <el-select v-model="item.rank" placeholder="请选择" style="width:100%">
                            <el-option
                              v-for="item in rankOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="在职状态:">
                          <el-select v-model="item.incumbency" placeholder="请选择" style="width:100%">
                            <el-option
                              v-for="item in incumbencyOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="24">
                        <el-form-item label="其他信息:">
                          <el-input
                            type="textarea"
                            :rows="5"
                            placeholder="请输入"
                            v-model="item.otherInfo"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <div class="dividingLine"></div>
                    <el-row :gutter="20">
                      <el-col :span="12">
                        <el-form-item label="问题发生时间:">
                          <el-date-picker
                            v-model="item.occurTime"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            style="width: 100%;"
                          ></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="违纪一级分类:">
                          <el-select
                            v-model="item.discipLevel1"
                            placeholder="请选择"
                            @change="showLevel2Discip(item)"
                            style="width:100%"
                          >
                            <el-option
                              v-for="item in discipLevel1Options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="违纪二级分类:">
                          <el-select
                            v-model="item.discipLevel2"
                            placeholder="请选择"
                            style="width:100%"
                          >
                            <el-option
                              v-for="item in discipLevel2Optionscmp"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <el-form-item label="职务违法犯罪一级分类:">
                          <el-select
                            v-model="item.officialOffencesLevel1"
                            placeholder="请选择"
                            style="width:100%"
                            @change="showLevel2Office(item)"
                          >
                            <el-option
                              v-for="item in officialOffencesLevel1Options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="职务违法犯罪二级分类:">
                          <el-select
                            v-model="item.officialOffencesLevel2"
                            placeholder="请选择"
                            style="width:100%"
                          >
                            <el-option
                              v-for="item in officeLevel2Optionscmp"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="其他违法犯罪行为:">
                          <el-input placeholder="请输入" v-model="item.otherCriminals"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="24">
                        <el-form-item label="主要问题情况:">
                          <el-input
                            type="textarea"
                            :rows="5"
                            placeholder="请输入"
                            v-model="item.mainIssue"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="24">
                        <el-form-item label="党纪处分:">
                          <el-radio label="1" v-model="item.partyPunishment">警告</el-radio>
                          <el-radio label="2" v-model="item.partyPunishment">严重警告</el-radio>
                          <el-radio label="3" v-model="item.partyPunishment">撤销党内职务</el-radio>
                          <el-radio label="4" v-model="item.partyPunishment">留党察看</el-radio>
                          <el-radio label="5" v-model="item.partyPunishment">开除党籍</el-radio>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="24">
                        <el-form-item label="XXX纪处分:">
                          <el-radio v-model="item.militaryPunishment" label="1">警告</el-radio>
                          <el-radio v-model="item.militaryPunishment" label="2">记过</el-radio>
                          <el-radio v-model="item.militaryPunishment" label="3">记大过</el-radio>
                          <el-radio v-model="item.militaryPunishment" label="4">降级</el-radio>
                          <el-radio v-model="item.militaryPunishment" label="5">撤职</el-radio>
                          <el-radio v-model="item.militaryPunishment" label="6">开除</el-radio>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="24">
                        <el-form-item label="组织处理:">
                          <el-radio v-model="item.orgTreatment" label="1">批评教育</el-radio>
                          <el-radio v-model="item.orgTreatment" label="2">诫勉谈话</el-radio>
                          <el-radio v-model="item.orgTreatment" label="3">岗位调整</el-radio>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
                </div>
                <!--引入组件-->
              </el-tab-pane>
            </el-tabs>
          </el-collapse-item>
        </el-collapse>
      </el-container>
      <div class="backplane-footer-center">
        <el-button type="primary" @click="closeNSubmit">提交</el-button>
        <el-button type="success" @click="closeNSave()">保存</el-button>
        <el-button @click="close">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  props: {
    //    传过来的数据
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  name: "informDispose",
  components: {},
  computed: {
    discipLevel2Optionscmp() {
      for (var i = 0; i < this.discipLevel1Options.length; i++) {
        if (this.discipLevel1Options[i].value == this.discipLevel1Temp) {
          return this.discipLevel1Options[i].discipLevel2Options;
        }
      }
    },
    officeLevel2Optionscmp() {
      for (var i = 0; i < this.officialOffencesLevel1Options.length; i++) {
        if (
          this.officialOffencesLevel1Options[i].value == this.officeLevel1Temp
        ) {
          return this.officialOffencesLevel1Options[i]
            .officialOffencesLevel2Options;
        }
      }
    }
  },
  data() {
    return {
      data: [],
      currentPage: 1,
      pagesize: 10,
      act_Name: "notificationInfoFirst",
      dialogFormVisible: false,
      DisposeFormVisible: false,
      discipLevel1Temp: "",
      officeLevel1Temp: "",
      activeIndex: "1", //折叠框默认打开的属性
      isChecked: "1",
      tableData: [
        {
          name: "李某某",
          partLevel: "部职别1"
        },
        {
          name: "李某某",
          partLevel: "部职别1"
        }
      ],
      informDisForm: {
        // 通报信息
        beTriedMember: [
          {
            memberTabTitle: "新增涉案人员信息1",
            memberTabKey: "1",
            name: "",
            sex: "",
            subUnit: "",
            ministryDuty: "",
            category: "",
            rank: "",
            incumbency: "",
            otherInfo: "",
            occurTime: "",
            discipLevel1: "",
            discipLevel2: "",
            officialOffencesLevel1: "",
            officialOffencesLevel2: "",
            otherCriminals: "",
            mainIssue: "",
            partyPunishment: "",
            militaryPunishment: "",
            orgTreatment: ""
          }
        ]
      },

      officialOffencesLevel1Options: [
        {
          value: "1",
          label: "请选择"
        },
        {
          value: "2",
          label: "贪污贿赂类行为",
          officialOffencesLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "贪污"
            },
            {
              value: "3",
              label: "挪用公款"
            },
            {
              value: "4",
              label: "受贿"
            },
            {
              value: "5",
              label: "行贿"
            },
            {
              value: "6",
              label: "巨额财产来源不明"
            },
            {
              value: "7",
              label: "非国家工作人员受贿"
            },
            {
              value: "8",
              label: "其他贪污贿赂行为"
            }
          ]
        },
        {
          value: "3",
          label: "滥用职权类行为",
          officialOffencesLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "滥用职权"
            },
            {
              value: "3",
              label: "国有企事业人员滥用职权"
            },
            {
              value: "4",
              label: "报复陷害"
            },
            {
              value: "5",
              label: "挪用特定款物"
            },
            {
              value: "6",
              label: "其他滥用职权类行为"
            }
          ]
        },
        {
          value: "4",
          label: "玩忽职守类行为",
          officialOffencesLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "玩忽职守"
            },
            {
              value: "3",
              label: "国有企事业人员失职"
            },
            {
              value: "4",
              label: "环境监管失职"
            },
            {
              value: "5",
              label: "其他玩忽职守类行为"
            }
          ]
        },
        {
          value: "5",
          label: "徇私舞弊类行为",
          officialOffencesLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "徇私舞弊低价折股、出售国有资产"
            },
            {
              value: "3",
              label: "非法批准征收、征用、占用土地"
            },
            {
              value: "4",
              label: "非法低价出让国有土地使用权"
            },
            {
              value: "5",
              label: "非法经营同类营业和为亲友非法牟利"
            },
            {
              value: "6",
              label: "招收公务员、学生徇私舞弊"
            },
            {
              value: "7",
              label: "其他徇私舞弊类行为"
            }
          ]
        },
        {
          value: "6",
          label: "重大责任事故类行为",
          officialOffencesLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "重大责任事故"
            },
            {
              value: "3",
              label: "不报、谎报安全事故"
            },
            {
              value: "4",
              label: "工程重大安全事故"
            },
            {
              value: "5",
              label: "其他重大责任事故类行为"
            }
          ]
        },
        {
          value: "7",
          label: "行使公权力过程中发生的其他违法犯罪行为",
          officialOffencesLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "破坏选举"
            },
            {
              value: "3",
              label: "非法转让、倒卖土地使用权"
            },
            {
              value: "4",
              label: "职务侵占"
            },
            {
              value: "5",
              label: "挪用资金"
            },
            {
              value: "6",
              label: "其他行使公权力过程中发生的其他违法犯罪行为"
            }
          ]
        }
      ],
      discipLevel1Options: [
        {
          value: "1",
          label: "请选择"
        },
        {
          value: "2",
          label: "违反政治纪律行为",
          discipLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "在重大原则问题上不同党XXX保持一致"
            },
            {
              value: "3",
              label: "公开发表危害党的言论"
            },
            {
              value: "4",
              label: "诋毁、污蔑党和国家领导人、英模，歪曲历史"
            },
            {
              value: "5",
              label: "在党内搞团团伙伙"
            },
            {
              value: "6",
              label: "自行其是搞山头主义拒不执行XXX大政方针"
            },
            {
              value: "7",
              label: "落实党XXX决策部署打折扣、搞变通"
            },
            {
              value: "8",
              label: "对党不忠诚不老实、搞两面派、做两面人"
            },
            {
              value: "9",
              label: "制造散布传播政治谣言，搞诬告陷害"
            },
            {
              value: "10",
              label: "不按规定请示报告重大事项"
            },
            {
              value: "11",
              label: "干扰巡视巡查或不落实整改要求"
            },
            {
              value: "12",
              label: "对抗组织审查"
            },
            {
              value: "13",
              label: "参加反对党和政府的活动或组织"
            },
            {
              value: "14",
              label: "违反党和国家民族、宗教政策"
            },
            {
              value: "15",
              label: "信仰宗教组织或组织参加迷信活动"
            },
            {
              value: "16",
              label: "叛逃及涉外活动中损害党和国家利益"
            },
            {
              value: "17",
              label: '不履行"两个责任"或履行不力'
            },
            {
              value: "18",
              label: "无原则一团和气和违反政治规矩"
            },
            {
              value: "19",
              label: "违反党的优良传统和工作惯例"
            }
          ]
        },
        {
          value: "3",
          label: "违反组织纪律行为",
          discipLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "违反民主集中制原则"
            },
            {
              value: "3",
              label: "不按要求请示报告个人有关事项"
            },
            {
              value: "4",
              label: "违规组织参加老乡会校友会战友会"
            },
            {
              value: "5",
              label: "在投票和选举中搞非组织活动"
            },
            {
              value: "6",
              label: "违反干部选拔任用规定"
            },
            {
              value: "7",
              label: "在人事劳动工作中违规谋利"
            },
            {
              value: "8",
              label: "侵犯党员权利"
            },
            {
              value: "9",
              label: "违规发展党员"
            },
            {
              value: "10",
              label: "违规办理出国证件和在境外脱离组织"
            }
          ]
        },
        {
          value: "4",
          label: "违反廉洁纪律行为",
          discipLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "权权交易和纵容特定关系人以权谋私"
            },
            {
              value: "3",
              label: "违规收送礼品礼金、金融产品及宴请服务等 "
            },
            {
              value: "4",
              label: "借用管理服务对象财物或通过民间借贷获取大额回报"
            },
            {
              value: "5",
              label: "违规操办婚丧喜庆事宜"
            },
            {
              value: "6",
              label: "违规从事营利活动"
            },
            {
              value: "7",
              label: "违反工作生活待遇规定"
            },
            {
              value: "8",
              label: "违规占有使用公私财物"
            },
            {
              value: "9",
              label: "违规参与公款宴请消费"
            },
            {
              value: "10",
              label: "违规自定薪酬和发放津贴补贴奖金"
            },
            {
              value: "11",
              label: "公款旅游"
            },
            {
              value: "12",
              label: "违反公务接待管理规定"
            },
            {
              value: "13",
              label: "违反公务用车管理规定"
            },
            {
              value: "14",
              label: "违反会议活动管理规定"
            },
            {
              value: "15",
              label: "违反办公用房管理规定"
            },
            {
              value: "16",
              label: "权色钱色交易"
            },
            {
              value: "17",
              label: "其他违反廉洁纪律行为"
            }
          ]
        },
        {
          value: "5",
          label: "违反群众纪律行为",
          discipLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "侵害群众利益"
            },
            {
              value: "3",
              label: "利用宗族黑恶势力等欺压群众或充当“保护伞”"
            },
            {
              value: "4",
              label: "漠视群众利益"
            },
            {
              value: "5",
              label: "搞形象工程、政绩工程"
            },
            {
              value: "6",
              label: "侵犯群众知情权"
            },
            {
              value: "7",
              label: "其他违反群众纪律行为"
            }
          ]
        },
        {
          value: "6",
          label: "违反工作纪律行为",
          discipLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "工作中搞形式主义、官僚主义"
            },
            {
              value: "3",
              label: "违规干预市场经济活动"
            },
            {
              value: "4",
              label: "违规干预司法活动执纪执法活动"
            },
            {
              value: "5",
              label: "泄露扩散窃取私存党的秘密"
            },
            {
              value: "6",
              label: "违反考试录取工作规定"
            },
            {
              value: "7",
              label: "其他违反工作纪律行为"
            }
          ]
        },
        {
          value: "7",
          label: "违反生活纪律行为",
          discipLevel2Options: [
            {
              value: "1",
              label: "请选择"
            },
            {
              value: "2",
              label: "生活奢靡、贪图享受、追求低级趣味"
            },
            {
              value: "3",
              label: "不正当性关系"
            },
            {
              value: "4",
              label: "不重视家风建设、对配偶、子女及其配偶失管失教"
            },
            {
              value: "5",
              label: "违背公序良俗"
            },
            {
              value: "6",
              label: "其他违反生活纪律行为"
            }
          ]
        },
        {
          value: "8",
          label: "违反XXX八项规定和XXX十项规定精神",
          discipLevel2Options: [
            {
              value: "1",
              label: "请选择"
            }
          ]
        }
      ],
      incumbencyOptions: [
        {
          value: "1",
          label: "请选择"
        },
        {
          value: "2",
          label: "在职"
        },
        {
          value: "3",
          label: "退休"
        },
        {
          value: "4",
          label: "免职"
        },
        {
          value: "5",
          label: "在押"
        },
        {
          value: "6",
          label: "已故"
        },
        {
          value: "7",
          label: "退役"
        },
        {
          value: "8",
          label: "其他"
        }
      ],

      rankOptions: [
        {
          value: "1",
          label: "请选择"
        },
        {
          value: "2",
          label: "专业技术一级"
        },
        {
          value: "3",
          label: "专业技术二级"
        },
        {
          value: "4",
          label: "专业技术三级"
        },
        {
          value: "5",
          label: "专业技术四级"
        },
        {
          value: "6",
          label: "专业技术五级"
        },
        {
          value: "7",
          label: "专业技术六级"
        },
        {
          value: "8",
          label: "专业技术七级"
        },
        {
          value: "9",
          label: "专业技术八级"
        },
        {
          value: "10",
          label: "专业技术九级"
        },
        {
          value: "11",
          label: "专业技术十级"
        },
        {
          value: "12",
          label: "专业技术十一级"
        },
        {
          value: "13",
          label: "专业技术十二级"
        },
        {
          value: "14",
          label: "专业技术十三级"
        },
        {
          value: "15",
          label: "专业技术十四级"
        }
      ],
      categoryOptions: [
        {
          value: "1",
          label: "请选择"
        },
        {
          value: "2",
          label: "XXX政后装XXX官"
        },
        {
          value: "3",
          label: "专业技术XXX官和专业技术文职干部"
        },
        {
          value: "4",
          label: "非专业技术文职干部"
        },
        {
          value: "5",
          label: "士官"
        },
        {
          value: "6",
          label: "义务兵"
        },
        {
          value: "7",
          label: "管理岗位文职人员"
        },
        {
          value: "8",
          label: "专业技术文职人员"
        },
        {
          value: "9",
          label: "学员"
        },
        {
          value: "10",
          label: "职工"
        },
        {
          value: "11",
          label: "其他人员"
        }
      ],
      subUnitOptions: [
        {
          value: "1",
          label: "请选择"
        },
        {
          value: "2",
          label: "东部战区"
        },
        {
          value: "3",
          label: "南部战区"
        },
        {
          value: "4",
          label: "西部战区"
        },
        {
          value: "5",
          label: "北部战区"
        },
        {
          value: "6",
          label: "中部战区"
        },
        {
          value: "7",
          label: "陆XXX"
        },
        {
          value: "8",
          label: "海XXX"
        },
        {
          value: "9",
          label: "空XXX"
        },
        {
          value: "10",
          label: "火箭XXX"
        },
        {
          value: "11",
          label: "战略支援部队"
        },
        {
          value: "12",
          label: "联勤保障部队"
        },
        {
          value: "13",
          label: "国防大学"
        },
        {
          value: "14",
          label: "XXX事科学院"
        },
        {
          value: "15",
          label: "国防科技大学"
        },
        {
          value: "16",
          label: "XXX办公厅"
        },
        {
          value: "17",
          label: "XXX联合参谋部"
        },
        {
          value: "18",
          label: "XXX政治工作部"
        },
        {
          value: "19",
          label: "XXX后勤保障部"
        },
        {
          value: "20",
          label: "XXX装备发展部"
        },
        {
          value: "21",
          label: "XXX训练管理部"
        },
        {
          value: "22",
          label: "XXX国防动员部"
        },
        {
          value: "23",
          label: "XXX纪律检查委员会"
        },
        {
          value: "24",
          label: "XXX政法委员会"
        },
        {
          value: "25",
          label: "XXX科学技术委员会"
        },
        {
          value: "26",
          label: "XXX战略规划办公室"
        },
        {
          value: "27",
          label: "XXX审计署"
        },
        {
          value: "28",
          label: "XXX改革和编制办公室"
        },
        {
          value: "29",
          label: "XXX国际XXX事合作办公室"
        },
        {
          value: "30",
          label: "XXX机关事务管理总局"
        },
        {
          value: "31",
          label: "沈阳XXX区善后办"
        },
        {
          value: "32",
          label: "北京XXX区善后办"
        },
        {
          value: "33",
          label: "兰州XXX区善后办"
        },
        {
          value: "34",
          label: "济南XXX区善后办"
        },
        {
          value: "35",
          label: "南京XXX区善后办"
        },
        {
          value: "36",
          label: "广州XXX区善后办"
        },
        {
          value: "37",
          label: "成都XXX区善后办"
        },
        {
          value: "38",
          label: "武警部队"
        }
      ],

      formLabelWidth: "20%"
    };
  },
  created() {},
  mounted() {},
  methods: {
    showLevel2Discip(item) {
      this.discipLevel1Temp = item.discipLevel1;
    },
    showLevel2Office(item) {
      this.officeLevel1Temp = item.officialOffencesLevel1;
    },
    handleSelect(key) {
      if (key == 1) {
        this.isChecked = 1;
        console.log(this.isChecked);
      } else if (key == 2) {
        this.isChecked = 2;
        console.log(this.isChecked);
      } else {
        this.isChecked = 1;
      }
    },
    close() {
      this.data.state = false;
    },
    closeNSave() {
      this.$message({
        message: "保存成功",
        type: "success"
      });
      this.data.state = false;
    },
    closeNSubmit() {
      this.$message({
        message: "提交成功",
        type: "success"
      });
      this.data.state = false;
    }
  }
})
export default class informDispose extends Vue {
  @Prop() private showDisposal: Boolean;
  @Prop() private showBtn: Boolean;

  activeNames: string[] = ["1"];
  //弹框flag
  dialogFlag: boolean = false;
  dialogTitle: string = "";
  selectMember: string = "1";

  addMember() {
    var member = this.newMember();
    var No = this.informDisForm.beTriedMember.length + 1;
    member.memberTabKey = No.toString();
    member.memberTabTitle = "新增涉案人员信息" + No;
    this.informDisForm.beTriedMember.push(member);
  }

  newMember() {
    return {
      memberTabTitle: "",
      memberTabKey: ""
    };
  }

  //违纪人员添加标签页
  addTab() {
    var violatingDisciplinePersonnelObecjt = this.newViolatingDisciplinePersonnel();
    violatingDisciplinePersonnelObecjt.title += this.formInline.violatingDisciplineTabNumber;
    violatingDisciplinePersonnelObecjt.index =
      this.formInline.violatingDisciplineTabNumber + 1 + "";
    this.formInline.violatingDisciplinePersonnels.push(
      violatingDisciplinePersonnelObecjt
    );
    this.formInline.violatingDisciplineTab =
      violatingDisciplinePersonnelObecjt.index;
    this.formInline.violatingDisciplineTabNumber++;
  }

  // 通报信息标签页删除
  removeTab(targetName) {
    //   console.log(targetName);
    let tabs = this.informDisForm.beTriedMember;
    let activeName = this.selectMember;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.memberTabKey === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.memberTabKey;
          }
        }
      });
    }
    this.selectMember = activeName;
    this.informDisForm.beTriedMember = tabs.filter(
      tab => tab.memberTabKey !== targetName
    );
  }
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/dialogBox.scss";
@import "~@/styles/queryList.scss";
@import "~@/styles/commonJWJW.scss";
@import "~@/styles/common.scss";
.el-container {
  width: 100%;
}

.active_class h4 {
  color: #2f76dd;
  font-weight: normal;
}

//选项卡
/deep/ .el-tabs__nav.is-top {
  margin-left: 5px;
}

//底部固定的按钮样式----
.body-footer {
  box-shadow: 0px -4px 3px #4c4c4c12;
  position: fixed;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  bottom: 0px;
  z-index: 999;
  right: 2px;

  .el-button {
    margin: 0px 8px 0px 8px;
  }
}

.el-collapse {
  width: 100%; //折叠面板
  .el-collapse-item {
    width: 100%;
    /deep/.el-collapse-item__header {
      height: 45px;
      line-height: 45px;
      padding-left: 2%;
      font-size: 14px;
      border: 1px solid #dee1e7;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      color: #2f76dd;
    }
  }
  .el-collapse-item:last-child {
    margin-bottom: 60px !important;
  }
}

//form表单样式
.form-content {
  border: 1px solid #dee1e7;
  padding: 26px;
  border-top: navajowhite;
  border-top-style: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  text-align: left;
}

//tabs页新增按钮样式
.edit-tabs {
  .add-tab-btn {
    width: 165px;
    height: 35px;
    font-size: 16px;
    margin: 0;
    color: #2f76ff;
    background: #e6f3ff;
    border-color: #2f76dd;
    position: relative;
    float: right;
  }
}

//分割线样式
.dividingLine {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px dashed #e6e6e6;
}

// ======公共样式开始======
.el-main {
  margin-left: 18%;
}

.active-btn-class {
  background: #2f76dd;
}
.el-select {
  width: 100%;
}
.el-select-tab {
  position: fixed;
}
.el-select-tab li {
  font-size: 14px;
  margin-bottom: 20%;
  text-align: left;
}
.tab-btn {
  position: relative;
  margin-left: -18%;
  top: 38px;
}
/deep/ textarea {
  height: 90px;
}
.el-icon-close {
  float: right;
  cursor: pointer;
  font-size: 20px;
}
/deep/ .tab-btn-new {
  margin-left: 80%;
}

/deep/ .form-content {
  .form-content-box {
    margin-bottom: 20px;
    border: 1px solid #eeeff2;
    .form-content-box-title {
      // .el-form-item__label{
      //     font-weight: normal !important;
      // }
      height: 58px;
      border-bottom: 1px solid #2f76dd;
      padding-top: 8px;
      padding-left: 16px;
      .el-col {
        text-align: right;
        button {
          margin-right: 10%;
        }
      }
    }
    .form-content-box-body {
      /*box-sizing:"",*/
      .form-content-box-body-item {
        padding-left: 10px;
        margin-top: 10px;
        // .el-form-item__label{
        //     font-weight: normal !important;
        // }
        .el-tag {
          position: relative;
          left: 36%;
          margin-top: 6px;
        }
      }
    }
  }
}
/*appalRegister.vue*/
</style>




