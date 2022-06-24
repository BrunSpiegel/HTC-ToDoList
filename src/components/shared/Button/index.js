import { importCss } from "../../../modules/importCss/index.js"
import { Icon } from "../icon/index.js"

importCss('./components/shared/button/styles.css')

export const Button = (props) => {
  //icon
  //name
  //backgroundColor
  //fontWeight
  const _button = document.createElement('button')
  _button.classList.add('button')
  const _icon = Icon(props?.icon)
  props?.icon && _button.append(_icon)
  props?.buttonName && _button.append(props.buttonName)
  props?.width && (_button.style.width = props.width)
  props?.backgroundColor && (_button.style.backgroundColor = props.backgroundColor)
  props?.font && (_button.style.fontWeight = props.fontWeight)

  return _button
}