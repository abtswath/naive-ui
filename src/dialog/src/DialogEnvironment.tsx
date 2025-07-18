import type { ModalDraggableOptions } from '../../modal/src/interface'
// use absolute path to make sure no circular ref of style
// this -> modal-index -> modal-style
import {
  type CSSProperties,
  defineComponent,
  h,
  normalizeClass,
  type PropType,
  ref
} from 'vue'
import { keep } from '../../_utils'
import NModal from '../../modal/src/Modal'
import { NDialog } from './Dialog'
import { dialogPropKeys, dialogProps } from './dialogProps'

export const exposedDialogEnvProps = {
  ...dialogProps,
  onAfterEnter: Function as PropType<() => void>,
  onAfterLeave: Function as PropType<() => void>,
  transformOrigin: String as PropType<'center' | 'mouse'>,
  blockScroll: { type: Boolean, default: true },
  closeOnEsc: { type: Boolean, default: true },
  onEsc: Function as PropType<() => void>,
  autoFocus: {
    type: Boolean,
    default: true
  },
  internalStyle: [String, Object] as PropType<string | CSSProperties>,
  maskClosable: {
    type: Boolean,
    default: true
  },
  zIndex: Number,
  onPositiveClick: Function as PropType<
    (e: MouseEvent) => Promise<unknown> | unknown
  >,
  onNegativeClick: Function as PropType<
    (e: MouseEvent) => Promise<unknown> | unknown
  >,
  onClose: Function as PropType<() => Promise<unknown> | unknown>,
  onMaskClick: Function as PropType<(e: MouseEvent) => void>,
  draggable: [Boolean, Object] as PropType<boolean | ModalDraggableOptions>
} as const

export const NDialogEnvironment = defineComponent({
  name: 'DialogEnvironment',
  props: {
    ...exposedDialogEnvProps,
    internalKey: {
      type: String,
      required: true
    },
    to: [String, Object] as PropType<string | HTMLElement>,
    // private
    onInternalAfterLeave: {
      type: Function as PropType<(key: string) => void>,
      required: true
    }
  },
  setup(props) {
    const showRef = ref(true)
    function handleAfterLeave(): void {
      const { onInternalAfterLeave, internalKey, onAfterLeave } = props
      if (onInternalAfterLeave)
        onInternalAfterLeave(internalKey)
      if (onAfterLeave)
        onAfterLeave()
    }
    function handlePositiveClick(e: MouseEvent): void {
      const { onPositiveClick } = props
      if (onPositiveClick) {
        void Promise.resolve(onPositiveClick(e)).then((result) => {
          if (result === false)
            return
          hide()
        })
      }
      else {
        hide()
      }
    }
    function handleNegativeClick(e: MouseEvent): void {
      const { onNegativeClick } = props
      if (onNegativeClick) {
        void Promise.resolve(onNegativeClick(e)).then((result) => {
          if (result === false)
            return
          hide()
        })
      }
      else {
        hide()
      }
    }
    function handleCloseClick(): void {
      const { onClose } = props
      if (onClose) {
        void Promise.resolve(onClose()).then((result) => {
          if (result === false)
            return
          hide()
        })
      }
      else {
        hide()
      }
    }
    function handleMaskClick(e: MouseEvent): void {
      const { onMaskClick, maskClosable } = props
      if (onMaskClick) {
        onMaskClick(e)
        if (maskClosable) {
          hide()
        }
      }
    }
    function handleEsc(): void {
      const { onEsc } = props
      if (onEsc) {
        onEsc()
      }
    }
    function hide(): void {
      showRef.value = false
    }
    function handleUpdateShow(value: boolean): void {
      showRef.value = value
    }
    return {
      show: showRef,
      hide,
      handleUpdateShow,
      handleAfterLeave,
      handleCloseClick,
      handleNegativeClick,
      handlePositiveClick,
      handleMaskClick,
      handleEsc
    }
  },
  render() {
    const {
      handlePositiveClick,
      handleUpdateShow,
      handleNegativeClick,
      handleCloseClick,
      handleAfterLeave,
      handleMaskClick,
      handleEsc,
      to,
      zIndex,
      maskClosable,
      show
    } = this
    return (
      <NModal
        show={show}
        onUpdateShow={handleUpdateShow}
        onMaskClick={handleMaskClick}
        onEsc={handleEsc}
        to={to}
        zIndex={zIndex}
        maskClosable={maskClosable}
        onAfterEnter={this.onAfterEnter}
        onAfterLeave={handleAfterLeave}
        closeOnEsc={this.closeOnEsc}
        blockScroll={this.blockScroll}
        autoFocus={this.autoFocus}
        transformOrigin={this.transformOrigin}
        draggable={this.draggable}
        internalAppear
        internalDialog
      >
        {{
          default: ({ draggableClass }: { draggableClass: string }) => (
            <NDialog
              {...keep(this.$props, dialogPropKeys)}
              titleClass={normalizeClass([this.titleClass, draggableClass])}
              style={this.internalStyle}
              onClose={handleCloseClick}
              onNegativeClick={handleNegativeClick}
              onPositiveClick={handlePositiveClick}
            />
          )
        }}
      </NModal>
    )
  }
})
