<markdown>
# 自定义每项分隔符

使用 separator prop 或 separator slot 自定义每一项的分隔符。如果二者均提供，将优先使用 separator slot。
</markdown>

<script lang="ts">
import { MdCash } from '@vicons/ionicons4'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    MdCash
  }
})
</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item separator=">">
      <n-icon><MdCash /></n-icon> 北京总行
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon><MdCash /></n-icon> 天津分行<template #separator>
        ~
      </template>
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon><MdCash /></n-icon> 平山道支行
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
