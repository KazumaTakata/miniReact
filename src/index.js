import ListComponent from "./test/listrender/delete";
let listcomponent = new ListComponent();

function render(el) {
  listcomponent.renderin(el);
}

let main = document.getElementById("main");
render(main);
