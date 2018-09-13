import Component from "./lib/index";
import {h} from "./jsx/functions"
let component = new Component();

function render(el) {
  component.manipulateDom(el, component.render());
}

let main = document.getElementById("main");
render(main);

