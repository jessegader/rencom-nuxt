import h from 'vue'
import { NIcon } from 'naive-ui'

export default function (val) {
    return () => h(NIcon, null, { default: () => h(val) })
  }