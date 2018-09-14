import Component from "./test/refs/ref";
let component = new Component();

function render(el) {
  component.renderin(el);
}

let main = document.getElementById("main");
render(main);
