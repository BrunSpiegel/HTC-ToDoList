export const Element = (props) => {
  const _element = document.createElement(props.type)

  if (props.textContent) _element.textContent = props.textContent
  if (props.innerHTML) _element.innerHTML = props.innerHTML

  if (props.className) {
    const splittedClasses = props.className.split(" ")

    splittedClasses.forEach((className) => {
      if (className) _element.classList.add(className);
    })
  }

  if (props.attr) {
    const arrayKeys = Object.keys(props.attr)

    arrayKeys.forEach((key) => {
      _element.setAttribute(key, props.attr[key])
    });
  }

  if (props.children) _element.append(...props.children)

  if (props.events) {
    const arrayKeys = Object.keys(props.events) 

    arrayKeys.forEach((key) => {
      _element.addEventListener(key, props.events[key])
    })
  }

  return _element;
};
