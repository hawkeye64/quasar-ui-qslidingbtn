import { QFab, Ripple } from 'quasar'

let uid = 0

export default {
  name: 'QSlidingBtn',

  directives: {
    Ripple
  },

  inject: {
    parent: {
      default () {
        console.error('QSlidingBtn components need to be child of QSlidingBtnGroup')
      }
    }
  },

  props: {
    value: Boolean,

    name: {
      type: [Number, String],
      default: () => `t_${uid++}`
    },

    label: [String, Number],
    icon: String,
    image: String,

    color: String,
    textColor: String,

    disable: Boolean,

    tabindex: [String, Number]
  },

  data () {
    return {
      isOpened: false,
      hasFocus: false
    }
  },

  mounted () {
    if (this.value !== void 0) {
      this.isOpened = this.value
      if (this.isOpened === true) {
        this.open()
      }
    }
  },

  computed: {
    computedTabIndex () {
      return this.disable === true || this.isOpened === true ? 0 : this.tabindex || 0
    },

    openedStyle () {
      const total = this.parent.panels.length
      const opened = this.parent.panels.filter(p => p.isOpened).length
      const closed = total - opened
      return {
        overflow: 'hidden',
        height: '100%',
        // width: `calc((100% - ${closed * this.innerWidthHeight}px) / ${opened})`,
        // transition: 'all 250ms ease-in-out',
        zIndex: this.hasFocus ? 1 : void 0
      }
    },

    closedStyle () {
      return {
        height: '100%',
        // width: this.innerWidthHeight + 'px',
        // transition: 'all 250ms ease-in-out',
        zIndex: this.hasFocus ? 1 : void 0
      }
    },

    filteredProps () {
      if (this.parent) {
        const props = {}
        Object.keys(this.parent.$props).forEach(key => {
          if (key !== 'value' && key !== 'multiple') {
            props[key] = this.parent.$props[key]
          }
        })
        return props
      }
      return {}
    }
  },

  watch: {
    value (val) {
      val === true
        ? this.parent.__activateTab(this.name, false)
        : this.parent.__deactivateTab(this.name, false)
    }
  },

  methods: {
    __findPanel () {
      // find this panel in list of panels
      return this.parent.panels.find(panel => panel.name === this.name)
    },

    isOpen () {
      return this.isOpened
    },

    open () {
      if (this.disable !== true) {
        this.parent.__activateTab(this.name, false)
      }
    },

    __open () {
      if (this.disable !== true) {
        this.isOpened = true
        this.$emit('input', this.isOpened)
        this.$emit('open')
        return true
      }
      return false
    },

    close () {
      this.parent.__deactivateTab(this.name, false)
    },

    __close () {
      this.isOpened = false
      this.$emit('input', this.isOpened)
      this.$emit('close')
    },

    toggle () {
      if (this.parent.multiple === true || this.parent.toggle === true || this.parent.current !== this.name) {
        this.isOpened !== true
          ? this.parent.__activateTab(this.name, false)
          : this.parent.__deactivateTab(this.name, false)
      }
    }
  },

  render (h) {
    const panel = this.__findPanel()
    if (panel === void 0) {
      // add this panel
      this.parent.panels.push(this)
    }

    return h(QFab, {
      staticClass: 'q-sliding-btn',
      style: this.isOpened === true ? this.openedStyle : this.closedStyle,
      directives: [{ name: 'ripple', modifiers: { stop: true }}],
      attrs: { tabindex: this.computedTabindex },
      props: {
        ...this.filteredProps,
        icon: this.icon,
        activeIcon: this.icon,
        label: this.label,
        color: this.color,
        textColor: this.textColor,
        hideLabel: this.isOpened !== true,
        disable: this.disable
      },
      on: {
        click: () => this.toggle(),
        keyup: e => { e.keyCode === 13 && this.toggle() }
      }
    })
  }
}
