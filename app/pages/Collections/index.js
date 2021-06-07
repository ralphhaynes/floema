import Page from 'classes/Page'

export default class extends Page {
  constructor () {
    super({
      id: 'collections',

      classes: {
        active: 'collections--active'
      },

      element: '.collections',
      elements: {
        wrapper: '.collections__wrapper'
      }
    })
  }

  /**
   * Animations.
   */
  async show (url) {
    this.element.classList.add(this.classes.active)

    return super.show(url)
  }

  async hide (url) {
    this.element.classList.remove(this.classes.active)

    return super.hide(url)
  }
}
