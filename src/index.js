import ConditionalComponent from "./test/conditionalrender/ifrender3";
let conditionalComponent = new ConditionalComponent();

function render(el) {
  conditionalComponent.renderin(el);
}

let main = document.getElementById("main");
render(main);
