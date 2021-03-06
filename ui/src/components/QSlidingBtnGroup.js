import { slot } from 'quasar/src/utils/slot.js'

export default {
  name: 'QSlidingBtnGroup',

  provide () {
    return {
      parent: this
    }
  },

  props: {
    // currently active btn
    value: [Number, String, Array],
    multiple: Boolean,
    toggle: Boolean,

    type: {
      type: String,
      default: 'a'
    },

    outline: Boolean,
    push: Boolean,
    flat: Boolean,
    glossy: Boolean,
    square: Boolean,
    unelevated: Boolean,
    padding: String
  },

  data () {
    return {
      panels: [],
      current: this.value
    }
  },

  mounted () {
    if (this.value !== void 0) {
      this.$nextTick(() => {
        if (Array.isArray(this.value)) {
          this.value.forEach(name => {
            this.__activateTab(name, false)
          })
        } else {
          this.__activateTab(this.value, false)
        }
      })
    }
  },

  watch: {
    value (name) {
      this.__activateTab(name, true)
    }
  },

  methods: {
    isOpened (name) {
      const tab = this.__getTab(name)
      if (tab) {
        return tab.isOpened()
      }
      return false
    },

    openTab (name) {
      this.__activateTab(name, false)
    },

    closeTab (name) {
      this.__deactivateTab(name, false)
    },

    __getTab (name) {
      return this.panels.find(panel => panel.name === name)
    },

    __openTab (name) {
      const tab = this.__getTab(name)
      if (tab !== void 0) {
        return tab.__open()
      }
      return false
    },

    __closeTab (name) {
      const tab = this.__getTab(name)
      if (tab !== void 0) {
        tab.__close()
      }
    },

    __activateTab (name, skipEmit) {
      if (this.multiple === true) {
        if (Array.isArray(this.current) !== true) {
          this.current = []
        }
        const panel = this.__findPanel(name)
        if (panel) {
          if (panel.disable !== true && this.current.includes(name) !== true) {
            this.current.push(name)
          }
        }
      } else if (this.current !== name) {
        this.current = name
        this.__closeAllExcept(name)
      }
      if (this.__openTab(name)) {
        skipEmit !== true && this.$emit('input', name)
        skipEmit !== true && this.$emit('open', name)
        return true
      }
      return false
    },

    __deactivateTab (name, skipEmit) {
      if (this.multiple === true) {
        const ind = this.current.indexOf(name)
        if (ind === -1) {
          // already accounted for
          return
        }
        this.current.splice(ind, 1)
      } else {
        if (this.current === name) {
          this.current = ''
        }
      }
      this.__closeTab(name)
      skipEmit !== true && this.$emit('input', this.current)
      skipEmit !== true && this.$emit('close', name)
    },

    __findPanel (name) {
      return this.panels.find(panel => panel.name === name)
    },

    __closeAllExcept (name) {
      this.panels.forEach(panel => {
        if (panel.name !== name) {
          panel.__close()
        }
      })
    }
  },

  render (h) {
    return h('div', {
      staticClass: 'q-sliding-btn-group',
      on: {
        ...this.$listeners
      },
      attrs: { role: 'tablist' }
    }, slot(this, 'default'))
  }
}
