import React from "react";
import { h } from "../jsx/functions";
import { callback, manipulateDom, updateDom } from "./index";
h();

class Component {
  constructor() {
    this.callback = this.callback.bind(this);
    this.state = { text1: "text1111" };

    this.prevVDOM = {};
    this.currVDOM = {};
    this.parentNode = null;
    this.firstNode = null;
  }
  setState(obj) {
    this.prevVDOM = Object.assign({}, this.render());

    let keys = Object.keys(obj);
    keys.map(key => {
      this.state[key] = obj[key];
    });

    this.currVDOM = Object.assign({}, this.render());

    this.updateDom(
      this.parentNode,
      this.firstNode,
      this.currVDOM,
      this.prevVDOM
    );
  }

  callback() {
    this.setState({ text1: "text22222" });
  }

  manipulateDom(el, vdom, isfirst) {
    let Node = document.createElement(vdom.type);
    if (isfirst) {
      this.firstNode = Node;
    }
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

  renderin(parent) {
    this.parentNode = parent;
    this.manipulateDom(parent, this.render(), true);
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
        <li>{this.state.text1}</li>
        <li>texte2</li>
        <li>text3</li>
      </ul>
    );
  }
}

export default Component;
