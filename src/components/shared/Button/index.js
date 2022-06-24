import { importCss } from "../../../modules/importCss/index.js"
import { Icon } from "../icon/index.js"

importCss('./components/shared/button/styles.css')

export const Button = (props) => {
  //icon
  //name
  const _button = document.createElement('button')
  _button.classList.add('button')

  const _icon = Icon(props.icon)

  _button.append(_icon)

  return _button
}