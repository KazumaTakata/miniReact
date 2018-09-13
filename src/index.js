import{h}from "./jsx/functions";
import { manipulateDom, callback } from "./lib/index"

let state = { text1: "text1111" };

function view() {
  return (
    <ul id="cool" className="foo" onClick={callback}>
      <li>{state.text1}</li>
      <li>texte2</li>
      <li>text3</li>
    </ul>
  );
}


function render(el) {
  manipulateDom(el, view());
}

let main = document.getElementById("main");
render(main);

console.log(view());
