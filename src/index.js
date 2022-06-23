import { Container } from './components/Container/index.js'
import { Input } from './components/shared/Input/index.js'
import { Icon } from './components/shared/icon/index.js'

const $root = document.querySelector('#root')

const icon = Icon('plus')

const input = Input({
  icon: 'search',
  placeholder: 'Digite sua pesquisa aqui...',
  width: '500px'
})

const container = Container({children: input })

$root.appendChild(container)