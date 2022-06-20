export const importCss = (path) => {
  const $head = document.querySelector('head')

  const _link = document.createElement('link')
  _link.setAttribute('rel', 'stylesheet')
  _link.setAttribute('href', path)

  $head.appendChild(_link)
}

