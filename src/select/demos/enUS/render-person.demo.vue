<markdown>
# Select person

I've found that people often want to make a people picker. Here is an example that shows you how that can be done with a select.
</markdown>

<script lang="ts" setup>
import type { SelectRenderLabel, SelectRenderTag } from 'naive-ui'
import { NAvatar, NTag, NText } from 'naive-ui'
import { h } from 'vue'

const renderMultipleSelectTag: SelectRenderTag = ({ option, handleClose }) => {
  return h(
    NTag,
    {
      style: {
        padding: '0 6px 0 4px'
      },
      round: true,
      closable: true,
      onClose: (e) => {
        e.stopPropagation()
        handleClose()
      }
    },
    {
      default: () =>
        h(
          'div',
          {
            style: {
              display: 'flex',
              alignItems: 'center'
            }
          },
          [
            h(NAvatar, {
              src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
              round: true,
              size: 22,
              style: {
                marginRight: '4px'
              }
            }),
            option.label as string
          ]
        )
    }
  )
}

const renderSingleSelectTag: SelectRenderTag = ({ option }) => {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    [
      h(NAvatar, {
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
        round: true,
        size: 24,
        style: {
          marginRight: '12px'
        }
      }),
      option.label as string
    ]
  )
}

const renderLabel: SelectRenderLabel = (option) => {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    [
      h(NAvatar, {
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
        round: true,
        size: 'small'
      }),
      h(
        'div',
        {
          style: {
            marginLeft: '12px',
            padding: '4px 0'
          }
        },
        [
          h('div', null, [option.label as string]),
          h(
            NText,
            { depth: 3, tag: 'div' },
            {
              default: () => 'description'
            }
          )
        ]
      )
    ]
  )
}

const options = [
  {
    label: '07akioni',
    value: '07akioni'
  },
  {
    label: '08akioni',
    value: '08akioni'
  },
  {
    label: '09akioni',
    value: '09akioni'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select
      :options="options"
      :render-label="renderLabel"
      :render-tag="renderSingleSelectTag"
    />
    <n-select
      :options="options"
      :render-label="renderLabel"
      :render-tag="renderSingleSelectTag"
      filterable
    />
    <n-select
      multiple
      :options="options"
      :render-label="renderLabel"
      :render-tag="renderMultipleSelectTag"
    />
    <n-select
      multiple
      :options="options"
      :render-label="renderLabel"
      :render-tag="renderMultipleSelectTag"
      filterable
    />
  </n-space>
</template>
