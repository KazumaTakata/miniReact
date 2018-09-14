import Component from "./test/attribute/update";
let component = new Component();

function render(el) {
  component.renderin(el);
}

let main = document.getElementById("main");
render(main);
