<markdown>
# Fixed header and column

Note that: If you have set fixed column, you should also set `scroll-x`.
</markdown>

<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { h } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

function createColumns(): DataTableColumns<RowData> {
  return [
    {
      type: 'selection',
      fixed: 'left'
    },
    {
      title: 'Name',
      key: 'name',
      width: 200,
      fixed: 'left'
    },
    {
      title: 'Age',
      key: 'age',
      width: 100,
      fixed: 'left'
    },
    {
      title: 'Row',
      key: 'row',
      render(row, index) {
        return h('span', ['row ', index])
      }
    },
    {
      title: 'Row1',
      key: 'row1',
      render(row, index) {
        return h('span', ['row ', index])
      }
    },
    {
      title: 'Row2',
      key: 'row2',
      render(row, index) {
        return h('span', ['row ', index])
      },
      width: 100,
      fixed: 'right'
    },
    {
      title: 'Address',
      key: 'address',
      width: 200,
      fixed: 'right'
    }
  ]
}

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))
const columns = createColumns()
const pagination = { pageSize: 10 }
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :max-height="250"
    :scroll-x="1800"
  />
</template>
