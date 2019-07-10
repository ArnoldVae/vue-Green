<template>
  <div class="app-container">
    <tree-table
      type="horizontal"
      :data="data"
      :columns="columns"
      :max-height="500"
      :stripe="true"
      border
    ></tree-table>
  </div>
</template>

<script>
import treeTable from '@/components/TreeTable'

export default {
  name: 'Tree',
  components: {
    treeTable,
  },
  data() {
    return {
      columns: [
        {
          title: 'title1',
          value: 'id',
          type: 'text',
          width: 300,
          fixed: 'left',
        },
        {
          title: 'title2',
          value: 'value1',
          type: 'text',
          width: 200,
        },
        {
          title: 'title3',
          value: 'value2',
          type: 'text',
          width: 200
        },
        {
          title: 'title4',
          value: 'comment1',
          type: 'text',
          width: 200
        },
        {
          title: 'title5',
          value: 'comment2',
          type: 'text',
          width: 200
        },
        {
          title: 'title6',
          value: 'comment3',
          type: 'text',
          width: 200
        },
        {
          title: 'title7',
          value: 'comment4',
          type: 'text',
          width: 200
        },
        {
          title: 'title8',
          value: 'comment5',
          type: 'text',
          width: 200
        },
        {
          title: 'title9',
          value: 'comment6',
          type: 'text',
          width: 200
        },
        {
          title: 'title8',
          value: 'comment7',
          type: 'text',
          width: 200
        },
        {
          title: 'title8',
          value: 'comment8',
          type: 'text',
          width: 200
        }
      ],
      data: [
        {
          id: 1, // 唯一标识
          title: '外立面',
          children: [
            {
              id: 11, // 唯一标识
              parentId: 1,
              checked: false,
              value1: '选项2',
              value2: 777,
              event: '事件2',
              comment: '无',
              children: [
                {
                  id: 111, // 唯一标识
                  parentId: 11,
                  checked: false,
                  value1: '选项2',
                  value2: '2-1',
                  event: '事件71',
                  comment: 'xx'
                },
                {
                  id: 112, // 唯一标识
                  parentId: 11,
                  checked: false,
                  value1: '选项2',
                  value2: '2-2',
                  event: '事件72',
                  comment: 'xx'
                },
                {
                  id: 113, // 唯一标识
                  parentId: 11,
                  checked: false,
                  value1: '选项2',
                  value2: '2-3',
                  event: '事件73',
                  comment: 'xx'
                }
              ]
            },
            {
              id: 12, // 唯一标识
              parentId: 1,
              checked: false,
              value1: '选项2',
              value2: 777,
              event: '事件3',
              comment: '无',
              children: [
                {
                  id: 121, // 唯一标识
                  parentId: 12,
                  checked: false,
                  value1: '选项2',
                  value2: 777,
                  event: '事件4',
                  comment: '无'
                },
                {
                  id: 122, // 唯一标识
                  parentId: 12,
                  checked: false,
                  value1: '选项2',
                  value2: 777,
                  event: '事件5',
                  comment: '无'
                },
                {
                  id: 123, // 唯一标识
                  parentId: 12,
                  checked: false,
                  value1: '选项2',
                  value2: 777,
                  event: '事件6',
                  comment: '无',
                  children: [
                    {
                      id: 1231, // 唯一标识
                      parentId: 123,
                      checked: false,
                      value1: '选项2',
                      value2: 777,
                      event: '事件7',
                      comment: '无',
                      children: [
                        {
                          id: 12311, // 唯一标识
                          parentId: 1231,
                          checked: false,
                          value1: '选项2',
                          value2: '7-1',
                          event: '事件71',
                          comment: 'xx'
                        },
                        {
                          id: 12312, // 唯一标识
                          parentId: 1231,
                          checked: false,
                          value1: '选项2',
                          value2: '7-2',
                          event: '事件72',
                          comment: 'xx'
                        },
                        {
                          id: 12313, // 唯一标识
                          parentId: 1231,
                          checked: false,
                          value1: '选项2',
                          value2: '7-3',
                          event: '事件73',
                          comment: 'xx'
                        }
                      ]
                    },
                    {
                      id: 1232, // 唯一标识
                      parentId: 123,
                      checked: false,
                      value1: '选项2',
                      value2: 777,
                      event: '事件8',
                      comment: '无'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2, // 唯一标识
          title: '外立面2',
          children: [
            {
              id: 21, // 唯一标识
              parentId: 2,
              checked: false,
              value1: '选项2',
              value2: 777,
              event: '事件2',
              comment: '无'
            }
          ]
        }
      ]
    }
  }
}
</script>
