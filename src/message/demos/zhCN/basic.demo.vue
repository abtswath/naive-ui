<markdown>
# 基础用法
</markdown>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function info() {
  message.info('I don\'t know why nobody told you how to unfold your love', {
    keepAliveOnHover: true
  })
}

function error() {
  message.error('Once upon a time you dressed so fine')
}

function warning() {
  message.warning('How many roads must a man walk down')
}

function success() {
  message.success('\'Cause you walked hand in hand With another man in my place')
}

function loading() {
  message.loading(
    'If I were you, I will realize that I love you more than any other guy'
  )
}
</script>

<template>
  <n-space>
    <n-button @click="info">
      信息（Hover不消失）
    </n-button>
    <n-button @click="error">
      错误
    </n-button>
    <n-button @click="warning">
      警告
    </n-button>
    <n-button @click="success">
      成功
    </n-button>
    <n-button @click="loading">
      加载中
    </n-button>
  </n-space>
</template>
