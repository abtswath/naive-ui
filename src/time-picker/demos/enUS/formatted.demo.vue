<markdown>
# Use formatted value

Use `formatted-value` to control formatted value.
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const formattedValue = ref('4~1~8')
</script>

<template>
  <pre>{{ formattedValue }}</pre>
  <n-time-picker
    v-model:formatted-value="formattedValue"
    value-format="H~m~s"
  />
</template>
