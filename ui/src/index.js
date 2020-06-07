import { version } from '../package.json'
import QSlidingBtnGroup from './components/QSlidingBtnGroup'
import QSlidingBtn from './components/QSlidingBtn'

export {
  version,
  QSlidingBtn
}

export default {
  version,
  QSlidingBtnGroup,
  QSlidingBtn,

  install (Vue) {
    Vue.component(QSlidingBtnGroup.name, QSlidingBtnGroup)
    Vue.component(QSlidingBtn.name, QSlidingBtn)
  }
}
