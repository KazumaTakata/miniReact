import React from "react";
import { callback, manipulateDom, updateDom } from "./index";
import {h} from "../jsx/functions"
let state = { text1: "text1111" };

class Component {
  constructor() {
    this.callback = this.callback.bind(this) 
  }

  callback() {
    console.log("callback");
    let prevVDOM = Object.assign({}, this.render());
    state.text1 = "text22222";
    let currVDOM = Object.assign({}, this.render());
    console.log(prevVDOM);
    console.log(currVDOM);

    let rootDom = document.getElementById("main");

    this.updateDom(rootDom, rootDom.childNodes[0], currVDOM, prevVDOM);
  }

  manipulateDom(el, vdom) {
    let Node = document.createElement(vdom.type);
    if (vdom.props !== null) {
      Object.keys(vdom.props).map(attr => {
        if (attr === "className") {
          Node.setAttribute("class", vdom.props[attr]);
        } else if (attr.startsWith("on")) {
          let eventKind = attr.split("on")[1].toLowerCase();
          Node.addEventListener(eventKind, vdom.props[attr]);
        } else {
          Node.setAttribute(attr, vdom.props[attr]);
        }
      });
    }
    if (typeof vdom.child === "string") {
      let textNode = document.createTextNode(vdom.child);
      Node.appendChild(textNode);
      el.appendChild(Node);
    } else {
      el.appendChild(Node);
      vdom.child.map(vd => {
        this.manipulateDom(Node, vd);
      });
    }
  }

  updateDom(parentNode, CurrentNode, currVDOM, prevVDOM) {
    if (currVDOM.type !== prevVDOM.type) {
      CurrentNode.remove();
      let Node = document.createElement(currVDOM.type);
      parentNode.appendChild(Node);
      currVDOM.child.map(chVDOM => {
        updateDom(Node, null, chVDOM, null);
      });
    } else {
      if (typeof currVDOM.child === "string") {
        if (currVDOM.child !== prevVDOM.child) {
          CurrentNode.textContent = currVDOM.child;
        }
      } else if (Array.isArray(currVDOM.child)) {
        let currKeysSet = new Set(
          currVDOM.child.map(ch => {
            return ch.key;
          })
        );
        let prevKeys = prevVDOM.child.map(ch => {
          return ch.key;
        });
        let deletedKeys = prevKeys.filter(key => currKeysSet.has(key));

        currVDOM.child.map((chVDOM, index) => {
          this.updateDom(
            CurrentNode,
            CurrentNode.childNodes[index],
            chVDOM,
            prevVDOM.child[index]
          );
        });
      }
    }
  }

  render() {
    return (
      <ul id="cool" className="foo" onClick={this.callback}>
        <li>{state.text1}</li>
        <li>texte2</li>
        <li>text3</li>
      </ul>
    );
  }
}

export default Component;
