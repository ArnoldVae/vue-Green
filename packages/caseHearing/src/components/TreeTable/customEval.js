'use strict'
import Vue from 'vue'
export function treeToArray(data, parent, level, expandedAll, item, expandedLevel, parentIndex) {
  const marLTemp = []
  let tmp = []
  let rowIndex = 0
  Array.from(data).forEach(function(record) {
    const _level = (level !== undefined && level !== null) ? level : 1
    Vue.set(record, '_level',_level)
    if (!record._expanded) {
      if (expandedAll) {
        Vue.set(record, '_expanded', expandedAll)
      } else if (_level < expandedLevel) {
        Vue.set(record, '_expanded', true)
      } else {
        Vue.set(record, '_expanded', false)
      }
    }
    record._rowIndex = rowIndex + ''
    if (parentIndex) record._rowIndex = parentIndex + '.' +rowIndex
    rowIndex++
    if (record._id === undefined) {
      Vue.set(record, '_id', record._rowIndex + '_' + Math.floor(Math.random() * 999))
    }
    // 如果有父元素
    if (parent) {
      const childrenParent = {}
      for (const key in parent) {
        if (key !== 'children') childrenParent[key] = parent[key]
      }
      Vue.set(record, 'parent', childrenParent)
      // 如果父元素有偏移量，需要计算在this的偏移量中
      // 偏移量还与前面同级元素有关，需要加上前面所有元素的长度和
      if (!marLTemp[_level]) {
        marLTemp[_level] = 0
      }
      Vue.set(record, '_marginLeft', marLTemp[_level] + parent._marginLeft)
      Vue.set(record, '_width', record[item] / parent[item] * parent._width)
      // 在本次计算过偏移量后加上自己长度，以供下一个元素使用
      marLTemp[_level] += record._width
    } else {
      // 如果为根
      // 初始化偏移量存储map
      marLTemp[record.id] = []
      // map中是一个数组，存储的是每级的长度和
      // 初始情况下为0
      marLTemp[record.id][_level] = 0
      Vue.set(record, '_marginLeft', 0)
      Vue.set(record, '_width', 1)
    }
    tmp.push(record)
    if (record.children && record.children.length > 0) {
      const children = treeToArray(record.children, record, _level + 1, expandedAll, item, expandedLevel, record._rowIndex)
      tmp = tmp.concat(children)
    }
  })
  return tmp
}

export function equalsArray() {
  // Warn if overriding existing method
  if(Array.prototype.equals)
    return false
// attach the .equals method to Array's prototype to call it on any array
  Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
      return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
      return false;

    for (var i = 0, l = this.length; i < l; i++) {
      // Check if we have nested arrays
      if (this[i] instanceof Array && array[i] instanceof Array) {
        // recurse into the nested arrays
        if (!this[i].equals(array[i]))
          return false;
      }
      else if (this[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        return false;
      }
    }
    return true;
  }
// Hide method from for-in loops
  Object.defineProperty(Array.prototype, "equals", {enumerable: false});
}
