<template>
  <div>
    <!-- 固定头部 -->
    <div class="table-head">
      <table>
        <colgroup>
          <col style="width: 100%;" >
          <col >
        </colgroup>
        <thead>
          <tr>
            <th v-for="(column,colIndex) in columns" :key="colIndex" nowrap="nowrap">{{ column.title }}</th>
          </tr>
        </thead>
      </table>
    </div>
    <!-- body -->
    <div class="table-body">
      <colgroup><col style="width: 100%;" ><col ></colgroup>
      <table border="1" cellspacing="0" cellpadding="0">
        <tbody>
          <!-- 隐藏头部 -->
          <tr v-if="false">
            <th v-for="(column,colIndex) in columns" :key="colIndex" nowrap="nowrap">{{ column.title }}</th>
          </tr>
          <tr v-for="(item,index) in dataCopy" :key="index" :class="'_'+item.parentId+'-'+item._level" v-if="item&&item.parent&&item.parent._expanded">
            <td v-for="(column,colIndex) in columns" :key="colIndex" nowrap="nowrap">
              <!-- 缩进和图标【只有在第一列时会有】 -->
              <span v-if="colIndex === 0" v-for="space in item._level" class="ms-tree-space" :key="space" />
              <!-- 展开关闭按钮只有纵向展开的treetable类型才展示 -->
              <span v-if="colIndex === 0 && item.children" @click="expanded(item)">
                <span class="tree-ctrl">
                  <i v-if="!item._expanded" class="el-icon-plus treeTable_text_icon" />
                  <i v-else class="el-icon-minus treeTable_text_icon" />
                </span>
              </span>
              <!-- 文本类型 -->
              <span v-if="column.type==='text'" :class="column.class">{{ item[column['value']] }}-{{ index }}</span>
              <!-- input类型 -->
              <span v-else-if="column.type==='input'">
                <el-input type="text" v-model="item[column['value']]" />
              </span>
              <!-- 其他类型 -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import { treeToArray, equalsArray } from './customEval'
export default {
  name: 'FastTreetable',
  props: {
    // 树数据
    // 显示等级
    showLevel: {
      type: [String, Number],
      default: 1
    },
    data: {
      type: [Array, Object],
      required: true
    },
    // 列配置项
    columns: {
      type: [Array, Function],
      required: true,
      default: () => []
    }
  },
  watch: {
    data(newValue, oldValue) {
      if (newValue !== oldValue) this.dataCopy = this.formatData()
    }
  },
  computed: {
    // 格式化列信息
    formatColumns() {
      // 如果没有下标默认第一个下标是0
      if (this.columns[0] && !this.columns[0].index) {
        this.columns[0].index = 0
      }
      // 解析并排序columns（主要针对树结构columns）
      this.result = this.sortColumns(this.columns)
      this.result.sort(this.sortBy('index', true))
      return result
    }
  },
  data() {
    return {
      dataCopy: [{}],
      flag: true
    }
  },
  methods: {
    // 格式化数据源
    formatData() {
      let tmp
      if (!Array.isArray(this.data)) {
        tmp = [this.data]
      } else {
        tmp = this.data
      }
      const func = treeToArray
      const args = this.evalArgs
        ? Array.concat([tmp], this.evalArgs, [this.showLevel])
        : [tmp, null, null, this.expandAll, '', this.showLevel]
      return func.apply(null, args)
    },
    // 展开关闭
    expanded(row, expanded) {
      if (expanded !== undefined) {
        row._expanded = expanded
        row.parent._expanded = expanded
      } else {
        row._expanded = !row._expanded
      }
      for (let i = 0; i < this.dataCopy.length; i++) {
        if (
          this.dataCopy[i].parent &&
          this.dataCopy[i].parent._id === row._id
        ) {
          this.dataCopy[i].parent._expanded = row._expanded
          if (!this.dataCopy[i].children) {
            this.dataCopy[i]._expanded = row._expanded
          }
          // 关闭的时候判断当前子集是否有子集
          if (
            !row._expanded &&
            this.dataCopy[i].children &&
            this.dataCopy[i].children.length > 0
          ) {
            this.dataCopy[i]._expanded = false
            for (let j = 0; j < this.dataCopy[i].children.length; j++) {
              this.expanded(this.dataCopy[i].children[j], false)
            }
          }
        }
      }
      // const myClass = '.' + '_' + row.parentId + '-' + row._level
      // const domArr = document.querySelectorAll(myClass)
      // if (!row._expanded) {
      //   for (let i = 0; i < domArr.length; i++) {
      //     domArr[i].style.display = 'none'
      //   }
      // } else {
      //   for (let i = 0; i < domArr.length; i++) {
      //     domArr[i].style.display = ''
      //   }
      // }
    },
    /**
     * 获取子集个数
     */
    getChildrenNo(item) {
      let count = 0
      if (item.children) {
        count += item.children.length
        for (var i in item.children) {
          if (item.children[i].children) {
            count += this.getChildrenNo(item.children[i])
          }
        }
      }
      return count
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$color-blue: #2196f3;
$space-width: 13px;
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: $space-width;
  height: 14px;
  &::before {
    content: '';
  }
}

.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: $color-blue;
  margin-left: -$space-width;
}

.table-head {
  // padding-right: 17px;
  background-color: #999;
  color: #000;
}
.table-body {
  width: 100%;
  height: 300px;
  overflow-y: scroll;
}
.table-head table,
.table-body table {
  width: 100%;
}
.table-body table tr:nth-child(2n + 1) {
  background-color: #f2f2f2;
}

table tbody {
  // display: block;
  height: 500px;
  overflow-y: scroll;
}

table thead,
tbody tr {
  // display: table;
  width: 100%;
  // table-layout: fixed;
}

table thead {
  width: calc(100% - 1em);
}
</style>

