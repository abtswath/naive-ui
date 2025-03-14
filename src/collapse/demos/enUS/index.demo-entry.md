# Collapse

I saw it appears in many side control panels.

## Demos

```demo
basic.vue
arrow-placement.vue
accordion.vue
nested.vue
display-directive.vue
item-header-click.vue
customize-icon.vue
default-expanded.vue
header-extra.vue
disabled.vue
trigger-areas.vue
```

## API

### Collapse Props

| Name | Type | Default | Description | Version |
| --- | --- | --- | --- | --- |
| accordion | `boolean` | `false` | Only allow one panel open at a time. |
| arrow-placement | `'left' \| 'right'` | `'left'` | Arrow placement side of text. |
| default-expanded-names | `string \| number \| Array<string \| number> \| null` | `null` | Pre-expanded panels that can still be collapsed. If `accordion` mode is set, it should be a non-array value. |
| display-directive | `'if' \| 'show'` | `'if'` | The display directive to use when `n-collapse-item` renders content. `'if'` corresponds to `v-if` and `'show'` corresponds to `v-show`. |
| expanded-names | `string \| number \| Array<string \| number> \| null` | `undefined` | Expanded panels that cannot be collapsed. If `accordion` mode is set, it should be a non-array value. |
| trigger-areas | `Array<'main' \| 'arrow' \| 'extra'>` | `['main', 'arrow', 'extra']` | Expansion trigger areas. If you don't want to trigger expansion on some areas, you can use the prop. | 2.37.1 |
| on-item-header-click | `(data: { name: string \| number, expanded: boolean, event: MouseEvent }) => void` | `undefined` | Callback function triggered when the title is clicked. |
| on-update:expanded-names | `(expandedNames: Array<string \| number> \| string \| number \| null) => void` | `undefined` | Callback function triggered when the expanded-names array is changed. |

### CollapseItem Props

| Name | Type | Default | Description | Version |
| --- | --- | --- | --- | --- |
| disabled | `boolean` | `false` | Whether the item is disabled. | 2.32.2 |
| display-directive | `'if' \| 'show'` | `undefined` | The display directive to use when it is rendering its content. `'if'` corresponds to `v-if` and `'show'` corresponds to `v-show`. When it is set to `undefined` the value will follow its outer `n-collapse`. |  |
| name | `string \| number` | random string | Item identifier (should be unique). |  |
| title | `string` | `undefined` | Title. |  |

### Collapse Slots

| Name | Parameters | Description |
| --- | --- | --- |
| arrow | `(props: { collapsed: boolean })` | Custom icons for folding panels. |
| default | `()` | The contents of the collapsible panel. |
| header | `(props: { collapsed: boolean })` | The content of the header of the collapsed panel node. |

### CollapseItem Slots

| Name | Parameters | Description |
| --- | --- | --- |
| arrow | `(props: { collapsed: boolean })` | The custom icon of the node header of the collapsible panel. |
| default | `()` | The contents of the collapsible panel node. |
| header | `(props: { collapsed: boolean })` | The content of the header of the collapsed panel node. |
| header-extra | `(props: { collapsed: boolean })` | The extra content of the header of the collapsed panel node. |
