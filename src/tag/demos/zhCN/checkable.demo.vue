<markdown>
# 可选择

它可以变成可选择的。
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <n-space>
    <n-tag v-model:checked="checked" checkable disabled>
      爱在西元前
    </n-tag>
    <n-tag v-model:checked="checked" checkable>
      不该
    </n-tag>
    <n-tag v-model:checked="checked" checkable>
      超人不会飞
    </n-tag>
    <n-tag v-model:checked="checked" checkable>
      手写的从前
    </n-tag>
    <n-tag v-model:checked="checked" checkable>
      哪里都是你
    </n-tag>
  </n-space>
</template>
