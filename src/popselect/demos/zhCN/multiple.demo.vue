<markdown>
# 多选

在弹出选择选中多个值。
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string[] | null>(null)
const options = [
  {
    label: 'Go Let It Out',
    value: 'Go Let It Out'
  },
  {
    label: 'Who Feels Love?',
    value: 'Who Feels Love?'
  },
  {
    label: 'Sunday Morning Call',
    value: 'Sunday Morning Call',
    disabled: true
  },
  {
    label: 'Roll It Over',
    value: 'Roll It Over'
  }
]
</script>

<template>
  <n-popselect v-model:value="value" multiple :options="options">
    <n-button>
      {{ Array.isArray(value) && value.length ? value : '没了' }}
    </n-button>
  </n-popselect>
</template>
