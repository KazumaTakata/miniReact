import ReactDom from '../../lib/reactdom'
import Component from './state'

let component = new Component()

let main = document.getElementById('main')
ReactDom.render(component, main)
