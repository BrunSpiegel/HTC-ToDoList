import { importCss } from "../../../modules/importCss/index.js"
import { Icon } from "../icon/index.js"
import { Element } from "../Element/index.js"

importCss('./components/shared/button/styles.css')

export const Button = (props) => {
  const _button = Element({
    type: 'button',
    className: 'button',
    textContent: props.text,
    attr: {
      style: `width: ${ props?.width}`
    }
  })


  const _icon = Icon(props?.icon)
  props?.icon && _button.append(_icon)
  props?.buttonName && _button.append(props.buttonName)
  props?.backgroundColor && (_button.style.backgroundColor = props.backgroundColor)
  props?.font && (_button.style.fontWeight = props.fontWeight)

  return _button
}