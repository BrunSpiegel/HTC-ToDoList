import { importCss } from "../../../modules/importCss/index.js";
import { Icon } from "../icon/index.js";
import { Button } from "../Button/index.js";
import { Element } from "../Element/index.js";

importCss("./components/shared/Input/styles.css");

export const Input = (props) => {
  const _icon = Icon(props?.icon);

  const _input = Element({
    type: "input",
    className: `input-field ${!props.icon ? "input-field--no-icon" : ""}`,
    attr: {
      placeholder: props.placeholder,
    },
  });

  const _container = Element({
    type: "div",
    className: "input",
    children: _icon ? [_icon, _input] : [_input],
    attr: {
      style: `width: ${props?.width}`,
    },
    events: {
      click: () => _input.focus()
    },
  });

  _container.addEventListener("click", () => _input.focus());

  return _container;
};
