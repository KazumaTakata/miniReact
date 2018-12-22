import ReactDom from '../../lib/reactdom'
import Component from './eventhandler'

let component = new Component()

let main = document.getElementById('main')
ReactDom.render(component, main)
