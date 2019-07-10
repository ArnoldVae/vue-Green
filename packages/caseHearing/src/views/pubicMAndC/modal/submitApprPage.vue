<template>
<!--呈报审批-审理案件-->
   <div >
        <el-form
                class="form-label-top apprForm"
                :rules="rules"
                label-position="top"
                :model="form">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="呈报审批时间：" prop="name">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" ></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
             
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    props:['pageFlag'],
    components: {},
    data() {
        return {
            form: {
                name: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入', trigger: 'blur' }
                ],
            }
        };
  },

    created() {},
    mounted(){},
    methods: {}
})
export default class caseSupplement extends Vue {
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped>
    .apprForm{
         padding-left: 15px;
    }

</style>