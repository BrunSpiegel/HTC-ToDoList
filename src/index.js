import { Container } from './components/Container/index.js'
import { Input } from './components/shared/Input/index.js'
import { Icon } from './components/shared/icon/index.js'
import { Button } from './components/shared/Button/index.js'

const $root = document.querySelector('#root')

const icon = Icon()

const input = Input({
  icon: 'search',
  placeholder: 'Digite sua pesquisa aqui...',
  width: '500px'
})

const button = Button({
  icon: 'whitePlus'
})

const container = Container({
  children: input,
  button: button,
  name: 'Olá'

})


$root.appendChild(container)