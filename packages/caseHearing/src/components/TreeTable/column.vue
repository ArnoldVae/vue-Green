<template>
  <div>
    <el-table-column v-for="(column, index) in columns" :column-key="index+''" :resizable="false" :show-overflow-tooltip="true" :fit="true" :render-header="renderHeader" :key="index" :label="column.title" :width="column.width">

      <!-- 合并单元格 -->
      <template slot-scope="scope">
        <el-form v-if="scope.row._display !== column.index && (scope.row.rules || column.rules)" :onload="ruleForms(scope.row, scope.$index, index, column, scope.row[column.value])" :model="scope.row" :rules="scope.row.rules || column.rules || {}" status-icon :ref="'_ruleForm'+scope.$index + index">
          <el-form-item :prop="column.value">
            <!-- 缩进和图标【只有在第一列时会有】 -->
            <span v-if="column.indent || column.index === 0" v-for="space in (column.index!==0?scope.row._level-1:scope.row._level)" class="ms-tree-space" :key="space" />
            <!-- 展开关闭按钮只有纵向展开的treetable类型才展示 -->
            <span v-if="column.index === 0 && type==='vertical'">
              <span class="tree-ctrl" v-if="iconShow(column.index,scope.row)" @click="expanded(scope.row)">
                <i v-if="!scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-right treeTable_text_icon" />
                <i v-else-if="scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-bottom treeTable_text_icon" />
                <i v-else-if="!scope.row._expanded" class="el-icon-plus treeTable_text_icon" />
                <i v-else class="el-icon-minus treeTable_text_icon" />
              </span>
            </span>

            <!-- <el-tooltip placement="right" :disabled="!scope.row['tipIsOver'+column.index]"> -->

            <!-- tooltip 同时支持字符串和数组 -->
            <div v-if="false" slot="content">
              <!-- <span v-if="scope.row[column.tooltip]&&typeof scope.row[column.tooltip]==='string'">{{scope.row[column.tooltip]}}</span> -->
              <!-- <span v-if="scope.row[column.tooltip]&&typeof scope.row[column.tooltip]==='object'" v-for="(tip,t) in scope.row[column.tooltip]" :key="t">{{tip}}<br/></span> -->
              <span v-for="(tip,x) in scope.row.cellStyles" :key="tip.col" v-if="scope.row.cellStyles[x].col===column.index">
                <span :onload="scope.row['tipIsOver'+column.index]=true" v-if="scope.row.cellStyles[x].tooltip">
                  <span :onload="column['tipIsOver'+index]=true" v-for="(tip,t) in scope.row.cellStyles[x].tooltip" :key="t">{{ tip }}<br></span>
                </span>
              </span>
              <span v-if="!column['tipIsOver'+index] && column.tooltip">
                <span :onload="scope.row['tipIsOver'+column.index]=true" v-for="(tip,t) in column.tooltip" :key="t">{{ tip }}<br></span>
              </span>
            </div>

            <span v-if="column.type=='index'">
              {{ scope.$index+1 }}
            </span>
            <span class="treeTable_text_index" v-else-if="column.index===0">{{ scope.row[column.value] }}</span>
            <!-- type=='text' 优先设置单元格 新增item情况下为input -->
            <span v-else-if="scope.row.cellStyles" @keyup="cellChange(scope.row,column,column.index)">
              <span v-for="(item,x) in scope.row.cellStyles" :key="item.col" v-if="scope.row.cellStyles[x].col===column.index">
                <span :onload="scope.row['isOver'+column.index]=true">
                  <el-input v-if="scope.row.cellStyles[x].type==='input'" @clear="cellChange(scope.row,column,column.index)" @blur="formatter(scope.row, column, scope.row[column.value], true),cellBlur(scope.row,column,column.index)" @focus="unFormatter(scope.row, column, scope.row[column.value])" v-model="scope.row[column.value]" :class="item.class || column.colClass" class="table_input" :disabled="disabled(scope.row.readOnlyIndex, column ,scope.row.cellStyles[x].readOnly)" clearable/>
                  <!-- type=='format-input' -->
                  <div v-else-if="scope.row.cellStyles[x].type=='format-input'" @change="cellChange(scope.row,column,column.index)" @blur="formatter(scope.row, column, scope.row[column.value], true)" @focus="unFormatter(scope.row, column, scope.row[column.value])">
                    <format-input class="table_input input_text_right" @clear-callback="cellChange(scope.row,column,column.index)" @blur="cellBlur(scope.row,column,column.index)" :currency="scope.row.cellStyles[x].currency || column.currency" :separator="scope.row.cellStyles[x].separator || column.separator" :precision="scope.row.cellStyles[x].precision || column.precision" v-model="scope.row[column.value]" :empty-value="scope.row.cellStyles[x].emptyValue || column.emptyValue" :minus="true" :read-only="disabled(scope.row.readOnlyIndex, column, scope.row.cellStyles[x].readOnly)" />
                  </div>
                  <el-select class="table_select" v-else-if="scope.row.cellStyles[x].type=='select'" v-model="scope.row[column.value]" @change="cellCallback(scope.row, column, column.index)" placeholder="请选择" :disabled="disabled(scope.row.readOnlyIndex, column ,scope.row.cellStyles[x].readOnly)" clearable>
                    <el-option v-for="option in scope.row.cellStyles[x].options" :key="option.value" :label="option.label" :value="option.value" />
                  </el-select>
                  <span class="treeTable_text" v-else-if="!scope.row.cellStyles[x].type || scope.row.cellStyles[x].type==='text'">{{ scope.row[column.value] }}</span>
                </span>
              </span>
            </span>
            <!-- type=='text' 同时支持字符串和对象 -->
            <span class="treeTable_text" v-if="column.index!==0&&column.type=='text'&&!scope.row['isOver'+column.index]">
              <span class="treeTable_text" v-if="typeof scope.row[column.value] === 'Object'">{{ scope.row[column.value].value }}</span>
              <span v-else>{{ scope.row[column.value] }}</span>
            </span>

            <!-- type=='input' -->
            <div v-if="column.index!==0&&column.type=='input'&&!scope.row['isOver'+column.index]" @keyup="cellChange(scope.row,column,column.index)">
              <!--<el-form-item :prop="column.value" :rules="column.rules">-->
              <el-input class="table_input" :class="column.colClass" v-model="scope.row[column.value]" @clear="cellChange(scope.row,column,column.index)" @blur="formatter(scope.row, column, scope.row[column.value], true),cellBlur(scope.row,column,column.index)" @focus="unFormatter(scope.row, column, scope.row[column.value])" :disabled="disabled(scope.row.readOnlyIndex, column)" clearable/>
              <!--</el-form-item>-->
            </div>

            <!-- type=='format-input' -->
            <div v-if="column.index!==0&&column.type=='format-input'&&!scope.row['isOver'+column.index]" @change="cellChange(scope.row,column,column.index)" @blur="formatter(scope.row, column, scope.row[column.value], true)" @focus="unFormatter(scope.row, column, scope.row[column.value])">

              <format-input class="table_input input_text_right" @clear-callback="cellChange(scope.row,column,column.index)" :currency="column.currency" :separator="column.separator" :precision="column.precision" v-model="scope.row[column.value]" :empty-value="column.emptyValue" :minus="true" :read-only="disabled(scope.row.readOnlyIndex, column)" />
            </div>

            <!-- type=='select' -->
            <el-select class="table_select" v-if="column.index!==0&&column.type=='select'&&!scope.row['isOver'+column.index]" v-model="scope.row[column.value]" @change="cellCallback(scope.row, column, column.index)" placeholder="请选择" :disabled="disabled(scope.row.readOnlyIndex, column)" clearable>
              <el-option v-for="item in column.options" :key="item.value" :label="item.label" :value="item.value">
                <!--<span style="float: left">{{ item.label }}</span>-->
                <!--<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>-->
              </el-option>
            </el-select>
            <!-- </el-tooltip> -->
          </el-form-item>
        </el-form>
        <span v-else-if="scope.row._display !== column.index" :onload="formatter(scope.row, column, scope.row[column.value])">
          <!-- 缩进和图标【只有在第一列时会有】 -->
          <span v-if="column.indent || column.index === 0" v-for="space in (column.index!==0?scope.row._level-1:scope.row._level)" class="ms-tree-space" :key="space" />
          <!-- 展开关闭按钮只有纵向展开的treetable类型才展示 -->
          <span v-if="column.index === 0 && type==='vertical'">
            <span class="tree-ctrl" v-if="iconShow(column.index,scope.row)" @click="expanded(scope.row)">
              <i v-if="!scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-right treeTable_text_icon" />
              <i v-else-if="scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-bottom treeTable_text_icon" />
              <i v-else-if="!scope.row._expanded" class="el-icon-plus treeTable_text_icon" />
              <i v-else class="el-icon-minus treeTable_text_icon" />
            </span>
          </span>

          <!-- <el-tooltip placement="right" :disabled="!scope.row['tipIsOver'+column.index]"> -->

          <!-- tooltip 同时支持字符串和数组 -->
          <div v-if="false" slot="content">
            <!-- <span v-if="scope.row[column.tooltip]&&typeof scope.row[column.tooltip]==='string'">{{scope.row[column.tooltip]}}</span> -->
            <!-- <span v-if="scope.row[column.tooltip]&&typeof scope.row[column.tooltip]==='object'" v-for="(tip,t) in scope.row[column.tooltip]" :key="t">{{tip}}<br/></span> -->
            <span v-for="(tip,x) in scope.row.cellStyles" :key="tip.col" v-if="scope.row.cellStyles[x].col===column.index">
              <span :onload="scope.row['tipIsOver'+column.index]=true" v-if="scope.row.cellStyles[x].tooltip">
                <span :onload="column['tipIsOver'+index]=true" v-for="(tip,t) in scope.row.cellStyles[x].tooltip" :key="t">{{ tip }}<br></span>
              </span>
            </span>
            <span v-if="!column['tipIsOver'+index] && column.tooltip">
              <span :onload="scope.row['tipIsOver'+column.index]=true" v-for="(tip,t) in column.tooltip" :key="t">{{ tip }}<br></span>
            </span>
          </div>

          <span v-if="column.type=='index'">
            {{ scope.$index+1 }}
          </span>
          <span class="treeTable_text_index" v-else-if="column.index===0">{{ scope.row[column.value] }}</span>
          <!-- type=='text' 优先设置单元格 新增item情况下为input -->
          <span v-else-if="scope.row.cellStyles" @keyup="cellChange(scope.row,column,column.index)">
            <span v-for="(item,x) in scope.row.cellStyles" :key="item.col" v-if="scope.row.cellStyles[x].col===column.index">
              <span :onload="scope.row['isOver'+column.index]=true">
                <el-input v-if="scope.row.cellStyles[x].type==='input'" @clear="cellChange(scope.row,column,column.index)" @blur="formatter(scope.row, column, scope.row[column.value], true),cellBlur(scope.row,column,column.index)" @focus="unFormatter(scope.row, column, scope.row[column.value])" v-model="scope.row[column.value]" :class="item.class || column.colClass" class="table_input" :disabled="disabled(scope.row.readOnlyIndex, column, scope.row.cellStyles[x].readOnly)" clearable/>
                <!-- type=='format-input' -->
                <div v-else-if="scope.row.cellStyles[x].type=='format-input'" @change="cellChange(scope.row,column,column.index)" @blur="formatter(scope.row, column, scope.row[column.value], true)" @focus="unFormatter(scope.row, column, scope.row[column.value])">
                  <format-input class="table_input input_text_right" @clear-callback="cellChange(scope.row,column,column.index)" :currency="scope.row.cellStyles[x].currency || column.currency" :separator="scope.row.cellStyles[x].separator || column.separator" :precision="scope.row.cellStyles[x].precision || column.precision" v-model="scope.row[column.value]" :empty-value="scope.row.cellStyles[x].emptyValue || column.emptyValue" :minus="true" :read-only="disabled(scope.row.readOnlyIndex, column, scope.row.cellStyles[x].readOnly)" />
                </div>
                <el-select class="table_select" v-else-if="scope.row.cellStyles[x].type=='select'" v-model="scope.row[column.value]" @change="cellCallback(scope.row, column, column.index)" placeholder="请选择" :disabled="disabled(scope.row.readOnlyIndex, column, scope.row.cellStyles[x].readOnly)" clearable>
                  <el-option v-for="option in scope.row.cellStyles[x].options" :key="option.value" :label="option.label" :value="option.value" />
                </el-select>
                <span class="treeTable_text" v-else-if="!scope.row.cellStyles[x].type || scope.row.cellStyles[x].type==='text'">{{ scope.row[column.value] }}</span>
              </span>
            </span>
          </span>
          <!-- type=='text' 同时支持字符串和对象 -->
          <span class="treeTable_text" v-if="column.index!==0&&column.type=='text'&&!scope.row['isOver'+column.index]">
            <span class="treeTable_text" v-if="typeof scope.row[column.value] === 'Object'">{{ scope.row[column.value].value }}</span>
            <span v-else-if="column.precision">{{ scope.row[column.value] | currency }}</span>
            <span v-else>{{ scope.row[column.value] }}</span>
          </span>

          <!-- type=='input' -->
          <div v-if="column.index!==0&&column.type=='input'&&!scope.row['isOver'+column.index]" @keyup="cellChange(scope.row,column,column.index)">
            <!--<el-form-item :prop="column.value" :rules="column.rules">-->
            <el-input class="table_input" :class="column.colClass" v-model="scope.row[column.value]" @clear="cellChange(scope.row,column,column.index)" @blur="formatter(scope.row, column, scope.row[column.value], true),cellBlur(scope.row,column,column.index)" @focus="unFormatter(scope.row, column, scope.row[column.value])" :disabled="disabled(scope.row.readOnlyIndex, column)" clearable/>
            <!--</el-form-item>-->
          </div>

          <!-- type=='format-input' -->
          <div v-if="column.index!==0&&column.type=='format-input'&&!scope.row['isOver'+column.index]" @change="cellChange(scope.row,column,column.index)" @blur="formatter(scope.row, column, scope.row[column.value], true)" @focus="unFormatter(scope.row, column, scope.row[column.value])">
            <div v-if="isNaN(scope.row[column.value])" class="input_text_right">
              <!--该列是format-input但是莫一项是非数字的情况下-->
              <el-input class="table_input" :class="column.colClass" v-model="scope.row[column.value]" @clear="cellChange(scope.row,column,column.index)" @blur="formatter(scope.row, column, scope.row[column.value], true),cellBlur(scope.row,column,column.index)" @focus="unFormatter(scope.row, column, scope.row[column.value])" :disabled="disabled(scope.row.readOnlyIndex, column)" clearable/>
            </div>
            <div v-else>
              <format-input class="table_input input_text_right" @blur="cellBlur(scope.row,column,column.index)" @clear-callback="cellChange(scope.row,column,column.index)" :currency="column.currency" :separator="column.separator" :precision="column.precision" v-model="scope.row[column.value]" :empty-value="column.emptyValue" :minus="true" :read-only="disabled(scope.row.readOnlyIndex, column)" />
            </div>
          </div>

          <!-- type=='select' -->
          <el-select class="table_select" v-if="column.index!==0&&column.type=='select'&&!scope.row['isOver'+column.index]" v-model="scope.row[column.value]" @change="cellCallback(scope.row, column, column.index)" placeholder="请选择" :disabled="disabled(scope.row.readOnlyIndex, column)" clearable>
            <el-option v-for="item in column.options" :key="item.value" :label="item.label" :value="item.value">
              <!--<span style="float: left">{{ item.label }}</span>-->
              <!--<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>-->
            </el-option>
          </el-select>
        </span>
      </template>
      <column ref="treeTableColumn" v-if="column.children" :data="data" :expanded-callback="expandedCallback" :is-disabled="isDisabled" :columns="column.children" :cell-callback="cellCallback" />

    </el-table-column>
  </div>

</template>
<script>
import _ from 'lodash'
import formatInput from '@/components/formatInput/index'
export default {
  components: {
    formatInput
  },
  name: 'Column',
  props: {
    isDisabled: Boolean,
    // table类型：vertical[垂直展开]/horizontal[横向展开]
    type: {
      type: String,
      default: 'vertical'
    },
    // 数据
    data: {
      type: Array,
      required: true
    },
    // 固定列 true|false|left|right 默认false
    fixed: [String, Boolean],
    // 列配置项
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    // 单元格change回调
    cellCallback: Function,
    // 展开关闭回调
    expandedCallback: Function,
    cellBlurCallback: Function
  },
  watch: {
    columns() {
      this.columns.forEach(item => {
        item._render = false
      })
    }
  },
  methods: {
    // 是否禁用
    disabled(readOnlyIndex, column, readOnly) {
      if (this.isDisabled) return true
      if (readOnly !== undefined) return readOnly
      if (readOnlyIndex !== undefined) {
        if (readOnlyIndex instanceof Array) {
          for (let i = 0; i < readOnlyIndex.length; i++) {
            if (column.index === readOnlyIndex[i]) return true
          }
        }
        if (column.index === readOnlyIndex) return true
      }
      return column.readOnly
    },
    unFormatter(row, column, cellValue) {
      if (cellValue === '-') {
        row[column.value] = ''
      }
    },
    // 将'0'变成'-'
    formatter(row, column, cellValue, isBlur) {
      if (cellValue === '0' || cellValue === 0 || (isBlur && cellValue === '')) {
        // row[column.value] = '-'
      }
    },
    parentDoLayout(that) {
      if (that.$refs.singleTable) {
        this.$nextTick(function () {
        // DOM 现在更新了
        // `this` 绑定到当前实例
          that.$refs.singleTable.doLayout()
        })

      } else if (that.$parent) {
        this.$nextTick(function () {
          this.parentDoLayout(that.$parent)
        })
      }
    },
    // 展开关闭
    expanded(row) {
      this.setExpanded(row,row.mergeFlag !== undefined)
      this.$nextTick(function () {
        setTimeout(() => {
          this.parentDoLayout(this)
        },100)
      })

      // 展开关闭回调
      if (typeof this.expandedCallback === 'function') {
        this.expandedCallback()
      }
    },
    setExpanded(row, isMergeFlag, expanded) {
      if (expanded !== undefined) {
        row._expanded = expanded
        row.parent._expanded = expanded
      } else {
        row._expanded = !row._expanded
      }
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].parent && this.data[i].parent._id === row._id) {
          this.data[i].parent._expanded = row._expanded
          if (!this.data[i].children) {
            this.data[i]._expanded = row._expanded
          }
          if (isMergeFlag && (row._expanded || expanded) && this.data[i].children && this.data[i].children.length > 0) {
            for (let j = 0; j < this.data[i].children.length; j++) {
              this.setExpanded(this.data[i].children[j], isMergeFlag, true)
            }
          }
          // 关闭的时候判断当前子集是否有子集
          if (
            !row._expanded &&
            this.data[i].children &&
            this.data[i].children.length > 0
          ) {
            this.data[i]._expanded = false
            for (let j = 0; j < this.data[i].children.length; j++) {
              this.setExpanded(this.data[i].children[j], isMergeFlag, false)
            }
          }
        }
      }
    },
    /**
     * 动态渲染header
     */
    doThisInCapturingMode() {
    },
    // 获取事件
    getOn(name, parent) {
      if (parent) {
        for (const key in parent) {
          if (key === name && typeof parent[key] === 'function') {
            return parent[key]
          }
        }
        return this.getOn(name, parent.$parent)
      }
      return () => {}
    },
    // 获取jsx
    getHs(h, renderHeader, column, self) {
      if (typeof renderHeader === 'object') {
        let children = []
        if (renderHeader.children) {
          children = this.getHs(h, renderHeader.children)
        }
        if (renderHeader.on) {
          for (const key in renderHeader.on) {
            if (typeof renderHeader.on[key] === 'string') {
              if (key === 'input') {
                renderHeader.domProps.value = column.title
              }
              let OnEvent = this.getOn(
                renderHeader.on[key],
                this.$parent.$parent
              )
              renderHeader.on[key] = event => {
                if (key === 'input') {
                  column.title = event.target.value
                  self.$emit('input', event.target.value)
                }
                OnEvent(event, self)
              }
            }
          }
        }
        if (renderHeader.label != 'button' && renderHeader.label != 'el-button') {
          return h(renderHeader.label, renderHeader, children)
        } else {
          return h('div', [
            h('span',column.title),
            h(renderHeader.label, renderHeader, children)
          ])
        }
      } else if (renderHeader instanceof Array) {
        const renders = []
        for (let i = 0; i < renderHeader.length; i++) {
          renders.push(this.getHs(h, renderHeader[i]))
        }
        return renders
      } else if (typeof renderHeader === 'string') {
        return [renderHeader]
      }
    },
    // :render-header="renderHeader"
    renderHeader(h, { column, $index }) {
      if (this.columns.length > 0) {
        for (let i = 0; i < this.columns.length; i++) {
          if (this.columns[i].title === column.label && column.columnKey === i+'') {
            // 存在自定义表头
            if (this.columns[i].renderHeader) {
              return this.getHs(
                h,
                this.columns[i].renderHeader,
                this.columns[i],
                this
              )
            } else {
              return h('span', column.label)
            }
          }
        }
      }
      return h('span', column.label)
    },
    ruleForms(row, rowIndex, columnIndex, column, cellValue) {
      if (!row._ruleForm) {
        row._ruleForm = []
      }
      let isHad = false
      const _ruleForm = '_ruleForm' + rowIndex + columnIndex
      for (let i = 0; i < row._ruleForm.length; i++) {
        if (row._ruleForm[i] === _ruleForm) {
          isHad = true
          break
        }
      }
      if (!isHad) {
        row._ruleForm.push(_ruleForm)
      }
      this.formatter(row, column, cellValue)

    },
    /**
     * 单元格改变回调方法
     */
    cellChange: _.debounce(function(row, col, index,type) {
      if (row[col.value] === '-') row[col.value] = ''
      if (typeof this.cellCallback === 'function') {
        this.cellCallback(row, col, index)
      }
    }, 500),
    /**
     * 单元格失去焦点回调方法
     */
    cellBlur(row,column,index) {
      if(typeof this.cellBlurCallback === 'function'){
        this.cellBlurCallback(row,column,index)
      }
    },
    /**
     * 图标显示
     */
    iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$color-blue: #2196f3;
$space-width: 13px;

.treeTable_text_index {
  font-size: 12px;
}

.treeTable_text_icon {
  font-size: 10px;
}

.treeTable_text {
  margin: 15px;
  font-size: 12px;
}

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
</style>

