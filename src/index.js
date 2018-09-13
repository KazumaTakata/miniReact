import Component from "./lib/index";
let component = new Component();

function render(el) {
  component.renderin(el);
}

let main = document.getElementById("main");
render(main);
