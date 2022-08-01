import { importCss } from '../../../modules/importCss/index.js'
import { Element } from '../Element/index.js'
import { ICONS } from './icons.js'

importCss('./components/shared/Icon/styles.css')

export const Icon = (name) => {
  if(!ICONS[name]) return ''

  const _container = Element({
    type: 'div',
    className: 'icon-container',
    innerHTML: ICONS[name]
  })

  return _container
}