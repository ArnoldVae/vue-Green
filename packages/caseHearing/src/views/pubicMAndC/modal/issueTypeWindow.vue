 <template>
  <div class="issueTypeWindow">
    <el-container>
      <el-main style="margin-top:10px;">
        
          <el-collapse v-model="activeName">
            <el-checkbox-group v-model="checkArr" @change="setCheckArr">
              <el-collapse-item name="1">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">违反政治纪律行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="在重大原则问题上不同党中央保持一致"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="公开发表危害党的言论"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="诋毁、诬蔑党和国家领导人、英模，歪曲历史"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                      <el-col :span="8">
                    <el-checkbox label="在党内搞团团伙伙"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                    <el-checkbox label="自行其是搞山头主义拒不执行中央大政方针"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                    <el-checkbox label="落实党中央决策部署打折扣、搞变通"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="对党不忠诚不老实、搞两面派、做两面人"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="制造散布传播政治谣言，搞诬告陷害"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="不按规定请示报告重大事项"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="干扰巡视巡察或不落实整改要求"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="对抗组织审查"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="参加反对党和政府的活动或组织"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="违反党和国家民族、宗教政策"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="信仰宗教或组织参加迷信活动"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="叛逃及涉外活动中损害党和国家利益"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="不履行“两个责任”或履行不力"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="无原则一团和气和违反政治规矩"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违反党的优良传统和工作惯例"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="2">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">违反组织纪律行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="违反民主集中制原则"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="不按要求请示报告个人有关事项"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违规组织参加老乡会校友会战友会"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="在投票和选举中搞非组织活动"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违反干部选拔任用规定"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="在人事劳动工作中违规谋利"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="侵犯党员权利"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违规发展党员"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违规办理出国证件和在境外脱离组织"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="3">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">违反廉洁纪律行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="权权交易和纵容特定关系人以权谋私"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违规收送礼品礼金、金融产品及宴请服务等"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="借用管理服务对象财物或通过民间借贷等获取大额回报"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                   <el-col :span="8">
                      <el-checkbox label="违规操办婚丧喜庆事宜"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违规从事营利活动"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违反工作生活待遇规定"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="违规占有使用公私财物"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                    <el-checkbox label="违规参与公款宴请消费"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                    <el-checkbox label="违规自定薪酬和发放津贴补贴奖金"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="公款旅游"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违反公务接待管理规定"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违反公务用车管理规定"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                    <el-checkbox label="违反会议活动管理规定"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                    <el-checkbox label="违反办公用房管理规定"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                    <el-checkbox label="权色钱色交易"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                     <el-checkbox label="其他违反廉洁纪律行为"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="4">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">违反群众纪律行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                       <el-checkbox label="侵害群众利益"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                       <el-checkbox label="利用宗族黑恶势力等欺压群众或充当“保护伞”"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                       <el-checkbox label="漠视群众利益"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="搞形象工程、政绩工程"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="侵犯群众知情权"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="其他违反群众纪律行为"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="5">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">违反工作纪律行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="工作中搞形式主义、官僚主义"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违规干预市场经济活动"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违规干预司法活动执纪执法活动"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="泄露扩散窃取私存党的秘密"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="违反考试录取工作规定"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="其他违反工作纪律行为"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="6">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">违反生活纪律行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="生活奢靡、贪图享受、追求低级趣味"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="不正当性关系"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="不重视家风建设、对配偶、子女及其配偶失管失教"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                      <el-col :span="8">
                      <el-checkbox label="违背公序良俗"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="其他违反生活纪律行为"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="7">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">贪污贿赂类行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="贪污"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="挪用公款"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="受贿"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="行贿"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="巨额财产来源不明"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="非国家工作人员受贿"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="其他贪污贿赂行为"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="8">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">滥用职权类行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                       <el-checkbox label="滥用职权"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                       <el-checkbox label="国有企事业人员滥用职权"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                       <el-checkbox label="报复陷害"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="挪用特定款物"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="其它滥用职权类行为"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="9">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">玩忽职守类行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="玩忽职守"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="国有企事业人员失职"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="环境监管失职"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                       <el-checkbox label="其他玩忽职守类行为"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="10">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">徇私舞弊类行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="徇私舞弊低价折股、出售国有资产"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="非法批准征收、征用、占用土地"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="非法低价出让国有土地使用权"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="非法经营同类营业和为亲友非法牟利"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="招收公务员、学生徇私舞弊"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="其他徇私舞弊类行为"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="11">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">重大责任事故类行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="重大责任事故"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="不报、谎报安全事故"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="工程重大安全事故"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="其他重大责任事故类行为"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="12">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">行使公权力过程中发生的其他违法犯罪行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="破坏选举"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="非法转让、倒卖土地使用权"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="职务侵占"></el-checkbox>
                    </el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="挪用资金"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-checkbox label="其他行使公权力过程中发生的其他违法犯罪行为"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
              <el-collapse-item name="13">
                <template slot="title" class="collapse-title">
                  <h2 class="title-h2">其他违法犯罪行为:</h2>
                </template>
                <template>
                  <el-row >
                    <el-col :span="8">
                      <el-checkbox label="其他违法犯罪行为"></el-checkbox>
                    </el-col>
                  </el-row>
                </template>
              </el-collapse-item>
            </el-checkbox-group>
          </el-collapse>
      </el-main>
    </el-container>
  </div>
</template>
 <style>
    .petitionAccept {
      padding-left: 16px;
      min-height: 100%;
      height: auto;
      text-align: left;
    }

    .issueTypeWindow /deep/ .el-checkbox{
        width: 400px;
    }
    .issueTypeWindow /deep/ .el-collapse-item__content{
      text-align: left;
    margin-left: 50px;
 }
 </style>
 <script lang="ts" scoped>
import { Component, Vue } from "vue-property-decorator";
import issueTypeWindow from './issueTypeWindow.vue'
@Component({
  name: "petitionAccept",
   components: {issueTypeWindow},
  data() {
    return {
      
       
    };
  },

  //父页面传来的选中数据
  props:[],
  created() {},
  mounted() {},
  methods: {
    setCheckArr:function () {
        console.log(this.checkArr)
      this.$emit('transferCheckArr',this.checkArr);
    }
  }
})
export default class petitionAccept extends Vue {
    checkArr=[]
  //弹框默认展开项
  activeName = ["1", "2","3","4","5","6","7","8","9","10","11","12","13"];
}
</script>
 
 