<markdown>
# 省略

通过设定 `column.ellipsis` 省略单元格内容。
</markdown>

<script lang="ts" setup>
const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address',
    width: 100,
    ellipsis: true
  },
  {
    title: 'Another Address',
    key: 'anotherAddress',
    width: 100,
    ellipsis: true
  }
]

const data = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    anotherAddress: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    anotherAddress: 'New York No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    anotherAddress: 'New York No. 1 Lake Park'
  }
]

const pagination = { pageSize: 10 }
</script>

<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" />
</template>
