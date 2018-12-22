import ReactDom from '../../lib/reactdom'
import Component from './props'

let props = { greeting: 'Heloo!' }

let component = new Component(props)

let main = document.getElementById('main')
ReactDom.render(component, main)
