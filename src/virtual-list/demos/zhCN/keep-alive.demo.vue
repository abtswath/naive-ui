<markdown>
  # 保持状态
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const showVirtualList = ref(true)

const avatars = [
  'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
  'https://avatars.githubusercontent.com/u/20943608?s=60&v=4',
  'https://avatars.githubusercontent.com/u/46394163?s=60&v=4',
  'https://avatars.githubusercontent.com/u/39197136?s=60&v=4',
  'https://avatars.githubusercontent.com/u/19239641?s=60&v=4'
]

const items = Array.from({ length: 10000 }, (_, i) => ({
  key: `${i}`,
  value: i,
  avatar: avatars[i % avatars.length]
}))
</script>

<template>
  <n-space vertical>
    <n-button @click="showVirtualList = !showVirtualList">
      切换可见性
    </n-button>
    <keep-alive>
      <n-virtual-list
        v-if="showVirtualList"
        style="max-height: 240px"
        :item-size="42"
        :items="items"
      >
        <template #default="{ item, index }">
          <div :key="item.key" class="item" style="height: 42px">
            <img class="avatar" :src="item.avatar" alt="">
            <span> {{ index }}</span>
          </div>
        </template>
      </n-virtual-list>
    </keep-alive>
  </n-space>
</template>

<style>
.item {
  display: flex;
}
.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
