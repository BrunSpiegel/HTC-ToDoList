import { importCss } from '../../../modules/importCss/index.js'
import { Icon } from '../icon/index.js'

importCss('./components/shared/Input/styles.css')

export const Input = (props) => {
  // icone
  // placeholder
  const _container = document.createElement('div')
  _container.classList.add('input')
  props?.width && (_container.style.width = props.width)

  const _input = document.createElement('input')
  _input.classList.add('input-field')
  if (!props.icon) _input.classList.add('input-field--no-icon')
  props?.placeholder && _input.setAttribute('placeholder', props.placeholder)

  const _icon = Icon(props?.icon)

  _container.addEventListener('click', () => {
    _input.focus()
  })

  props?.icon && _container.append(_icon)
  _container.append(_input)

  return _container
}