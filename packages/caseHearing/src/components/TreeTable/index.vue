<template>

  <el-table v-loading="loading" ref="singleTable" :height="height" class="el_table_td" :row-key="row => row._id" :style="tableStyle" :data="formatData" size="mini" :header-cell-style="setHeaderStyle" :cell-class-name="setCellClass" :row-class-name="setRowClass" :span-method="type==='vertical'?mergeVertical:mergeHorizontal" :highlight-current-row="!!rowCallback" @cell-dblclick="cellDbclick" @current-change="handleCurrentChange" :row-style="showRow" :cell-style="showCell" v-bind="$attrs" :max-height="maxHeight">

    <column ref="treeTableColumn" :type="type" :expanded-callback="expandedCallback" :data="formatData" :is-disabled="isDisabled" :columns="formatColumns" :cell-callback="cellCallback" :cell-blur-callback="cellBlurCallback" />
    <slot/>
  </el-table>

</template>

<script>
import { treeToArray, equalsArray } from './customEval'
import _ from 'lodash'
import column from '@/components/TreeTable/column'

export default {
  name: 'TreeTable',
  components: { column },
  props: {
    isDisabled: Boolean,
    // table类型：vertical[垂直展开]/horizontal[横向展开]
    type: {
      type: String,
      default: 'vertical'
    },
    height: {
      type: [Number, String],
      default: 750
    },
    // 最大高度（超过之后固定头部）
    maxHeight: {
      type: [Number, String],
      default: '100%'
    },
    tableStyle: Object,
    // 固定列 true|false|left|right 默认false
    fixed: [String, Boolean],
    // 是否隔行换色 默认false
    stripe: Boolean,
    // 树数据
    data: {
      type: [Array, Object],
      required: true
    },
    // 列配置项
    columns: {
      type: [Array, Function],
      required: true,
      default: () => []
    },
    evalFunc: Function,
    evalArgs: Array,
    // 是否展开全部
    expandAll: {
      type: Boolean,
      default: false
    },
    // 行回调
    rowCallback: {
      type: Function,
      default: () => {}
    },
    // 单元格回调
    cellCallback: {
      type: Function,
      default: () => {}
    },
    // 单元格失去焦点回调
    cellBlurCallback: {
      type: Function,
      default: () => {}
    },
    // 单元格双击回调
    cellDbCallback: {
      type: Function,
      default: () => {}
    },
    // 显示等级
    showLevel: {
      type: [String, Number],
      default: 100
    },
    expandedCallback: {
      type: Function,
      default: () => {}
    },
    hasMergeFlag: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    // 格式化数据源
    formatData() {
      this.loading = true
      equalsArray()
      let tmp
      if (!Array.isArray(this.data)) {
        tmp = [this.data]
      } else {
        tmp = this.data
      }
      if (!this.oldData.oldTmp.equals(tmp)) {
        this.oldData.oldTmp = tmp
        const func = treeToArray
        const args =[tmp, null, null, this.expandAll, '', this.showLevel]
        this.oldData.oldData = func.apply(null, args)
      }
      // 横向展开数据源添加_hasChildren标识
      if (this.type !== 'vertical') {
        this.oldData.oldData = this.setDisplay(this.oldData.oldData)
        // this.expandAll = true
      }
      this.needData = this.oldData.oldData.slice(this.position.dataIndex, 20)
      this.expandedNum = []
      this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
        this.loading = false
      });
      // this.setScroll()
      return this.oldData.oldData
    },
    // 格式化列信息
    formatColumns() {
      // if (!this.oldData.oldFromColumn.equals(this.columns)) {
      //   this.oldData.oldFromColumn = this.columns
      // 如果没有下标默认第一个下标是0
      if (this.columns[0] && !this.columns[0].index) {
        this.columns[0].index = 0
      }
      // 解析并排序columns（主要针对树结构columns）
      this.result = this.sortColumns(this.columns)
      this.result.sort(this.sortBy('index', true))
      // 纠正children中第一列跑到最后bug
      this.colIndex = -1
      return this.reverseArray(
        this.setColIndex(JSON.parse(JSON.stringify(this.columns))),
        'true'
      )
    }
  },
  watch: {
    // 显示等级
    showLevel: _.debounce(function(newLevel, oldLevel) {
      if (this.showLevel) {
        this.changeExpanded(this.oldData.oldData, this.showLevel)
      }
      setTimeout(() => {
        this.$refs.singleTable.doLayout()
      },100)
    }, 300),
    data() {
      // if (!this.loading) {
      //   this.formatData()
      // }
    }
  },
  created() {
    // this.formatData()
  },
  data() {
    return {
      result: [],
      valid: true,
      colIndex: -1,
      expandedNum: [],
      needData: [],
      oldData: {
        oldData: [],
        oldTmp: [],
        oldFromColumn: [],
        oldGetColumn: []
      },
      loading: false,
      position: {
        oldY: 0,
        dataIndex: 0
      }
    }
  },
  methods: {
    setScroll() {
      if (this.$el) {
        const that = this
        this.$el.children[2].onscroll = event => {
          const top = that.$el.children[2].scrollHeight - this.$el.children[2].clientHeight
          // 往下滑动
          if (that.position.dataIndex + 20 <= that.oldData.oldData.length && that.$el.children[2].scrollTop > that.position.oldY && (top - that.$el.children[2].scrollTop < 2 && top - that.$el.children[2].scrollTop > -2)) {
            // that.loading = true
            // TweenLite.to(that.$el.children[2], 0.5, { scrollTop: 2 });
            that.position.dataIndex += 20
            // setTimeout(() => {
              const addData = that.oldData.oldData.slice(that.position.dataIndex, that.position.dataIndex + 20)
              addData.forEach(item => {
                that.needData.push(item)
              })
            // }, 500)
            // setTimeout(() => {
            //   that.loading = false
            // }, 2000)
          }
          // else if (that.position.dataIndex > 0 && that.$el.children[2].scrollTop < that.position.oldY && that.$el.children[2].scrollTop === 0) { // 向上滑
          //   that.loading = true
          //   // TweenLite.to(that.$el.children[2], 0.5, { scrollTop: top - 3 });
          //   that.position.dataIndex -= 10
          //   setTimeout(() => {
          //     const addData = that.oldData.oldData.slice(that.position.dataIndex, that.position.dataIndex + 20)
          //     addData.forEach(item => {
          //       that.needData.unshift(item)
          //     })
          //   }, 500)
          //   setTimeout(() => {
          //     that.loading = false
          //   }, 2000)
          // }
          that.position.oldY = that.$el.children[2].scrollTop
        }
      }
    },
    validate(validate) {
      this.getValidate(this.$refs.treeTableColumn.$refs)
      // 验证回调
      if (validate && typeof validate === 'function') {
        validate(JSON.parse(JSON.stringify(this.valid)))
      }
      this.valid = true
    },
    getValidate(refs) {
      for (const key in refs) {
        // 验证失败退出
        if (!this.valid) return
        if (key === 'treeTableColumn') {
          for (let i = 0; i < refs.treeTableColumn.length; i++) {
            // 验证失败退出
            if (!this.valid) return
            this.getValidate(refs.treeTableColumn[i].$refs)
          }
        }
        if (key.indexOf('_ruleForm') !== -1 && refs[key].length > 0) {
          for (let i = 0; i < refs[key].length; i++) {
            if (!this.valid) return
            if (
              refs[key][i].model &&
              refs[key][i].model.rules &&
              typeof refs[key][i].validate === 'function'
            ) {
              refs[key][i].validate(valid => {
                if (!valid) {
                  this.valid = valid
                }
              })
            }
          }
        }
      }
    },
    // 单元格双击事件
    cellDbclick(row, col, cell, event) {
      if (this.cellDbCallback) {
        this.cellDbCallback(row, col, cell, event)
      }
    },
    /**
     * 递归有children数组中最后一个元素放到最前面（纠正排序bug）
     */
    reverseArray(items, first) {
      // 确保有数据
      if (items[0] && items[0].value) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].children) {
            for (let n = 0; n < items[i].children.length; n++) {
              if (items[i].children[n].children) {
                this.reverseArray(items[i].children[n].children)
                items[i].children[n].children.unshift(
                  items[i].children[n].children.pop()
                )
              }
            }
            items[i].children.unshift(items[i].children.pop())
          }
        }
        if (first) {
          items.unshift(items.pop())
        }
      }
      return items
    },
    /**
     * 递归添加列index
     */
    setColIndex(columns) {
      if (columns.length > 0) {
        for (let i = 0; i < columns.length; i++) {
          if (!columns[i].children) {
            this.colIndex += 1
            columns[i]['index'] = this.colIndex
          } else {
            this.setColIndex(columns[i].children)
          }
        }
      }
      return columns
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
    },
    /**
     * 合并单元格（横向展开随机合并列）
     */
    mergeHorizontal({ row, column, rowIndex, columnIndex }) {
      if(!this.hasMergeFlag){
        return true
      }
      if (columnIndex === row._level - 1) {
        return {
          rowspan: this.getChildrenNo(row) + 1,
          colspan: 1
        }
      } else if (row._level - 1 < columnIndex) {
        return {
          rowspan: 1,
          colspan: 1
        }
      } else {
        return {
          rowspan: 0,
          colspan: 0
        }
      }
    },
    /**
     * 合并单元格（纵向展开合并第一列）
     */
    mergeVertical({ row, column, rowIndex, columnIndex }) {
      if(!this.hasMergeFlag){
        return false
      }
      // 如果是第一列
      if (columnIndex === 0) {
        // 如果有合并标识且状态展开 合并行列不变
        if (row.mergeFlag && row._expanded) {
          return {
            rowspan: this.getChildrenLength(row.children) + 1,
            colspan: 1
          }
          // 如果有parentId不显示
        } else if (this.isMergeFlag(row) && (row._expanded || (row.parent && row.parent._expanded))) {
          return {
            rowspan: 0,
            colspan: 0
          }
          // 否则正常显示一个单元
        } else {
          return {
            rowspan: 1,
            colspan: 1
          }
        }
      }
      // 特殊情况----如果有slot进来的列进行合并（echart）
      if (columnIndex >= this.result.length) {
        if (this.expandedNum.length === 0) {
          this.expandedNum = this.getExpandedNum()
        }
        const spanMethod = this.getSpanMethod(column.labelClassName)
        if (rowIndex === 0 && spanMethod && spanMethod.colspan !==undefined && (columnIndex === this.result.length + spanMethod.colspan || columnIndex === this.result.length)) {
          return {
            rowspan: this.expandedNum.length - spanMethod.rowspan,
            colspan: spanMethod.colspan || 99
          }
        }
        return this.getExpandedRow(rowIndex, column)
      }
    },
    // 获取需要展开的行
    getExpandedRow(rowIndex,column) {
      if (column.labelClassName) {
        const spanMethod = this.getSpanMethod(column.labelClassName)

        if (this.expandedNum.length > 0 && this.expandedNum.length > spanMethod.reserve.rowspan) {
          const newExpandedNum = this.expandedNum.slice(this.expandedNum.length - spanMethod.reserve.rowspan, this.expandedNum.length - 1)
          for (let i = 0; i < newExpandedNum.length; i++) {
            if (spanMethod.reserve && spanMethod.reserve.rowspan > 0 && rowIndex === newExpandedNum[i]) {
              return {
                rowspan: spanMethod.reserve.rowspan,
                colspan: spanMethod.reserve.colspan
              }
            } else {
              return {
                rowspan: 0,
                colspan: 0
              }
            }
          }
        }
        return {
          rowspan: 0,
          colspan: 0
        }
      }
      return {
        rowspan: 0,
        colspan: 0
      }
    },
    // 获取展开行数
    getExpandedNum() {
      let length = []
      for (let i = 0; i < this.oldData.oldData.length; i++) {
        if (this.oldData.oldData[i]._expanded || (this.oldData.oldData[i].parent && this.oldData.oldData[i].parent._expanded)) {
          length.push(i)
        }
      }
      return length
    },
    // 获取预留位置
    getSpanMethod(labelClassName) {
      let spanMethod = {}
      // 判断是否有预留位置
      if (labelClassName && labelClassName.indexOf('{') !== -1) {
        const labelClass = labelClassName.split(' ')
        labelClass.forEach((item, index) => {
          if (item.indexOf('{') !== -1) {
            spanMethod = JSON.parse(item)
          }
          return false
        })
      }
      return spanMethod
    },
    // 是否是合并项
    isMergeFlag(row) {
      let isMergeFlag = row.mergeFlag
      if (!isMergeFlag && row.parent) {
        isMergeFlag = this.isMergeFlag(row.parent)
        if (isMergeFlag) return true
      }
      return isMergeFlag
    },
    // 获得子类长度
    getChildrenLength(children) {
      let length = 0
      if (children && children instanceof Array && children.length > 0) {
        for (let i = 0; i < children.length; i++) {
          if (children[i].parent._expanded) {
            length ++
          }
          length += this.getChildrenLength(children[i].children)
        }
      }
      return length
    },
    // 自动添加是否有chidren标识
    setDisplay(items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].children) {
          items[i]._hasChildren = true
          this.setDisplay(items[i].children)
        }
      }
      return items
    },
    /**
     * 显示或隐藏row
     */
    showRow: function({ row, rowIndex }) {
      let show = row.parent ? row.parent._expanded : true
      show = (show && row.isShow !== undefined) ? row.isShow : show
      return show ? '' : 'display:none;'
    },
    showCell({ row, column, rowIndex, columnIndex }) {
      // 纵向treetable类型
      if (row.mergeFlag && columnIndex !== 0 && row._expanded) {
        return 'display:none;'
      }
      // 横向treetable类型
      if (this.type !== 'vertical') {
        if (row._hasChildren && row._level <= columnIndex) {
          return 'display:none;'
        }
      }
      return ''
    },
    /**
     * 根据自定义字段排序
     */
    sortBy(attr, rev) {
      // 第二个参数没有传递 默认升序排列
      if (rev === undefined) {
        rev = 1
      } else {
        rev = rev ? 1 : -1
      }
      return function(a, b) {
        a = a[attr]
        b = b[attr]
        if (a < b) {
          return rev * -1
        }
        if (a > b) {
          return rev * 1
        }
        return 0
      }
    },
    /**
     * 排序columns
     */
    sortColumns(columns, res) {
      const tmp = []
      if (res) {
        tmp.push(res)
      } else {
        for (let i = 0; i < columns.length; i++) {
          if (!columns[i].children) {
            tmp.push(columns[i])
          } else {
            tmp.push(...this.sortColumns(columns[i].children))
          }
        }
      }
      return tmp
    },
    setHeaderStyle({ row, column, rowIndex, columnIndex }) {
      if (this.columns.length > 0) {
        for (let n = 0; n < this.columns.length; n++) {
          if (this.columns[n].headerStyles) {
            if (typeof this.columns[n].headerStyles === 'object') {
              return this.columns[n].headerStyles
            } else if (this.columns[n].headerStyles instanceof Array) {
              for (let i = 0; i < this.columns[n].headerStyles.length; i++) {
                if (columnIndex === this.columns[n].headerStyles[i].col) {
                  return this.columns[n].headerStyles[i].style
                }
              }
            }
            return
          }
        }
      }
    },
    /**
     * 设置单元格class 列class
     */
    setCellClass({ row, column, rowIndex, columnIndex }) {
      let result = ''
      if (row.cellStyles) {
        for (let i = 0; i < row.cellStyles.length; i++) {
          if (columnIndex === row.cellStyles[i].col) {
            result += row.cellStyles[i].class + ' '
          }
        }
      }
      if (this.result.length > 0 && this.result[0].value) {
        // 设置列样式
        for (let n = 0; n < this.result.length; n++) {
          if (this.result[n].colClass) {
            if (columnIndex === n) {
              result += this.result[n].colClass + ' '
            }
          }
        }
      }

      return result
    },
    /**
     * 设置隔行换色class（最新需求-全白色背景）
     */
    setRowClass({ row, rowIndex }) {
      return 'odd_row'
      // if (rowIndex % 2 === 0) {
      //   return 'even_row'
      // } else {
      //   return 'odd_row'
      // }
    },
    /**
     * 设置单元格style（暂未启用此功能）
     */
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (row.cellStyles) {
        for (let i = 0; i < row.cellStyles.length; i++) {
          if (columnIndex === row.cellStyles[i].col) {
            return row.cellStyles[i]
          }
        }
      } else if (this.columns) {
        // 设置列样式
        for (let i = 0; i < this.columns.length; i++) {
          if (this.columns[i].colStyle) {
            if (columnIndex === i) {
              return this.columns[i].colStyle
            }
          }
        }
      }
    },
    /**
     * 切换下级是否展开 (暂时废弃)
     */
    toggleExpanded(trIndex) {
      const record = this.formatData[trIndex]
      record._expanded = !record._expanded
    },
    /**
     * 展开等级
     */
    changeExpanded(items, level, expanded, mergeFlag) {
      for (let i = 0; i < items.length; i++) {
        if (items[i]._level >= parseInt(level)) {
          items[i]._expanded = false
        } else {
          items[i]._expanded = true
        }
        if (items[i].mergeFlag !== undefined) {
          if (parseInt(level) >= 1) {
            items[i].mergeFlag = true
          } else {
            items[i].mergeFlag = false
          }
        } else if (mergeFlag !== undefined && items[i].parent) {
          this.setMergeFlag(items[i].parent, mergeFlag)
        }
        if (expanded !== undefined) {
          items[i].parent._expanded = expanded
        }
        if (items[i].children) {
          this.changeExpanded(items[i].children, level, items[i]._expanded, parseInt(level) >= 1)
        }
      }
    },
    setMergeFlag(children, mergeFlag) {
      if (children) {
        if (children.mergeFlag !== undefined) {
          children.mergeFlag = mergeFlag
        } else {
          this.setMergeFlag(children.parent, mergeFlag)
        }
      }
    },
    /**
     * 行回调方法
     */
    handleCurrentChange(row) {
      if (this.rowCallback) {
        this.rowCallback(row)
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
$td-height: 35px;
$font-size: 12px;
// 预设样式
.font_color_white {
  color: white;
}
.font_color_green {
  color: green;
}
.font_color_red {
  color: red;
}
.font_color_blue {
  color: blue;
}
.bg_red {
  background: red;
}
.bg_grey {
  background: grey;
}

.pad_left {
  text-indent: 10px;
}

.ba-share1 {
  background-color: #f9fcfd;
}

.ba-share2 {
  background-color: #fef8f5;
}

.ba-share3 {
  background-color: #fffff3;
}

.el-table .even_row {
  background: #fafafa;
}
.el-table .odd_row {
  background: white;
}
.table_input input {
  font-size: $font-size;
  height: $td-height;
  border: none;
  outline: none;
  color: #418ee7;
  background: none;
}
.table_select input {
  font-size: $font-size;
  height: $td-height;
  border: none;
  background: none;
}
.el_table_td td {
  padding: 0;
  margin: 0;
  height: $td-height;
}
.el_table_td td > .cell {
  padding: 0 !important;
  margin: 0;
  height: $td-height;
  line-height: $td-height;
}
.el_table_td th {
  padding: 0;
  margin: 0;
  height: $td-height;
  background: #f3f3f3;
  text-align: center;
  color: #666666;
  font-size: 13px;
  font-weight: 500;
}
</style>

