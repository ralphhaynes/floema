import Prefix from 'prefix'

import { BREAKPOINT_TABLET } from 'utils/breakpoints'
import { getOffset } from 'utils/dom'
import { map } from 'utils/math'

export default class {
  constructor ({ element }) {
    this.transform = Prefix('transform')

    this.element = element
    this.media = element.querySelector('img')

    if (!this.media) {
      this.media = element.querySelector('video')

      this.isVideo = true
    }

    this.isVisible = false

    this.onResize()

    this.parallax = {
      current: -this.amount,
      target: -this.amount
    }

    this.scale = {
      current: 1.15,
      target: 1.15
    }
  }

  onResize () {
    this.amount = window.innerWidth < BREAKPOINT_TABLET ? 10 : 150
    this.offset = getOffset(this.element)
  }

  update (scroll) {
    if (this.isVideo) {
      return
    }

    const { innerHeight } = window

    const offsetBottom = scroll.current + innerHeight

    if (offsetBottom >= this.offset.top) {
      this.parallax = map(this.offset.top - scroll.current, -this.offset.height, innerHeight, this.amount, -this.amount)
      this.scale = map(this.offset.top - scroll.current, -this.offset.height, innerHeight, 1, 1.15)

      this.media.style[this.transform] = `translate3d(0, ${this.parallax}px, 0) scale(${this.scale})`
    } else {
      this.media.style[this.transform] = `translate3d(0, -${this.amount}px, 0) scale(1.15)`
    }
  }
}
