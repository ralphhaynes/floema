import GSAP from 'gsap'
import CustomEase from 'utils/CustomEase'

GSAP.registerPlugin(CustomEase)

export const DEFAULT = CustomEase.create('default', '0.19, 0.1, 0.22, 1')
export const CSS = 'cubic-bezier(0.19, 1, 0.22, 1)'
