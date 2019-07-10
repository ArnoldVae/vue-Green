// <template>
//   <div class="app-container">
//     <div id="example-container" class="wrapper">
//       <HotTable :root="root" :settings="hotSettings"/>
//     </div>
//   </div>
// </template>

// <script>
// import moment from 'moment' //引入handsontable依赖的插件
// import numbro from 'numbro'
// import pikaday from 'pikaday' //日期插件
// import Zeroclipboard from 'zeroclipboard'
// import Handsontable from 'handsontable'
// import HotTable from 'vue-handsontable-official'

// import { treeToArray, equalsArray } from './customEval'

// let currencyCodes = [
//   'EUR',
//   'JPY',
//   'GBP',
//   'CHF',
//   'CAD',
//   'AUD',
//   'NZD',
//   'SEK',
//   'NOK',
//   'BRL',
//   'CNY',
//   'RUB',
//   'INR',
//   'TRY',
//   'THB',
//   'IDR',
//   'MYR',
//   'MXN',
//   'ARS',
//   'DKK',
//   'ILS',
//   'PHP'
// ]
// let flagRenderer = function(
//   instance,
//   td,
//   row,
//   col,
//   prop,
//   value,
//   cellProperties
// ) {
//   let currencyCode = value
//   while (td.firstChild) {
//     td.removeChild(td.firstChild)
//   }
//   if (currencyCodes.indexOf(currencyCode) > -1) {
//     let flagElement = document.createElement('DIV')

//     flagElement.className = 'flag ' + currencyCode.toLowerCase()
//     flagElement.innerText = currencyCode.toLowerCase() + '+'
//     td.appendChild(flagElement)
//   } else {
//     let textNode = document.createTextNode(value === null ? '' : value)

//     td.appendChild(textNode)
//   }
// }

// export default {
//   name: 'SpeedTreetable',
//   components: {
//     HotTable
//   },
//   props: {
//     // 树数据
//     // 显示等级
//     showLevel: {
//       type: [String, Number],
//       default: 1
//     },
//     data: {
//       type: [Array, Object],
//       required: true
//     },
//     // 列配置项
//     columns: {
//       type: [Array, Function],
//       required: true,
//       default: () => []
//     }
//   },
//   watch: {
//     // data(newValue, oldValue) {
//     //   console.log('newValue')
//     //   if (newValue !== oldValue) this.hotSettings.data = this.formatData()
//     // }
//   },
//   methods: {
//     // 格式化数据源
//     formatData() {
//       let tmp
//       if (!Array.isArray(this.data)) {
//         tmp = [this.data]
//       } else {
//         tmp = this.data
//       }
//       const func = treeToArray
//       const args = this.evalArgs
//         ? Array.concat([tmp], this.evalArgs, [this.showLevel])
//         : [tmp, null, null, this.expandAll, '', this.showLevel]
//       console.log('加载了', func.apply(null, args).length + '条数据')
//       return func.apply(null, args)
//     }
//   },
//   data() {
//     return {
//       root: 'test-hot',
//       hotSettings: {
//         colHeaders: ['时间', 'Kia', 'Nissan', 'Toyota', 'Honda', '123'], //自定义列表头or 布尔值
//         data: this.formatData(),
//         columns: [
//           {
//             data: 'id',
//             type: 'numeric',
//             width: 40,
//             renderer: 'html'
//           },
//           {
//             data: 'flag',
//             renderer: flagRenderer
//           },
//           {
//             data: 'value',
//             type: 'text'
//           },
//           {
//             data: 'currency',
//             type: 'text'
//           },
//           {
//             data: 'level',
//             type: 'numeric',
//             numericFormat: {
//               pattern: '0.0000'
//             }
//           },
//           {
//             data: 'units',
//             type: 'text'
//           },
//           {
//             data: 'asOf',
//             type: 'date',
//             dateFormat: 'MM/DD/YYYY'
//           },
//           {
//             data: 'onedChng',
//             type: 'numeric',
//             numericFormat: {
//               pattern: '0.00%'
//             }
//           }
//         ],
//         startRows: 11, //行列范围
//         startCols: 6,
//         minRows: 5, //最小行列
//         minCols: 5,
//         maxRows: 20, //最大行列
//         maxCols: 20,
//         rowHeaders: true, //行表头
//         minSpareCols: 2, //列留白
//         minSpareRows: 2, //行留白
//         currentRowClassName: 'currentRow', //为选中行添加类名，可以更改样式
//         currentColClassName: 'currentCol', //为选中列添加类名
//         autoWrapRow: true, //自动换行
//         contextMenu: {
//           //自定义右键菜单，可汉化，默认布尔值
//           items: {
//             row_above: {
//               name: '上方插入一行'
//             },
//             row_below: {
//               name: '下方插入一行'
//             },
//             col_left: {
//               name: '左方插入列'
//             },
//             col_right: {
//               name: '右方插入列'
//             },
//             hsep1: '---------', //提供分隔线
//             remove_row: {
//               name: '删除行'
//             },
//             remove_col: {
//               name: '删除列'
//             },
//             make_read_only: {
//               name: '只读'
//             },
//             borders: {
//               name: '表格线'
//             },
//             commentsAddEdit: {
//               name: '添加备注'
//             },
//             commentsRemove: {
//               name: '取消备注'
//             },
//             freeze_column: {
//               name: '固定列'
//             },
//             unfreeze_column: {
//               name: '取消列固定'
//             },
//             hsep2: '---------'
//           }
//         }, //右键效果
//         fillHandle: true, //选中拖拽复制 possible values: true, false, "horizontal", "vertical"
//         fixedColumnsLeft: 0, //固定左边列数
//         fixedRowsTop: 0, //固定上边列数
//         mergeCells: [
//           //合并
//           { row: 1, col: 1, rowspan: 3, colspan: 3 }, //指定合并，从（1,1）开始行3列3合并成一格
//           { row: 3, col: 4, rowspan: 2, colspan: 2 }
//         ],
//         manualColumnFreeze: true, //手动固定列
//         manualColumnMove: true, //手动移动列
//         manualRowMove: true, //手动移动行
//         manualColumnResize: true, //手工更改列距
//         manualRowResize: true, //手动更改行距
//         comments: true, //添加注释
//         cell: [{ row: 1, col: 1, comment: { value: 'this is test' } }],
//         customBorders: [], //添加边框
//         columnSorting: true, //排序
//         stretchH: 'all' //根据宽度横向扩展，last:只扩展最后一列，none：默认不扩展
//       }
//     }
//   }
// }
// </script>

// <style lang="scss" rel="stylesheet/scss" scoped>
// button {
//   margin: 20px 20px;
// }
// .handsontable .currentRow {
//   background-color: #e7e8ef;
// }

// .handsontable .currentCol {
//   background-color: #f9f9fb;
// }
// #test-hot {
//   width: 800px;
//   height: 800px;
//   overflow: hidden;
// }
// .font_color_red .table_input {
//   color: red;
// }
// .font_color_red .table_input input {
//   color: red;
// }
// </style>
