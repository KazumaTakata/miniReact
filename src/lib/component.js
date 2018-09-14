import { h } from "../jsx/functions";
import { updateProps} from "./attrfuncs"
h();

class Component {
  constructor() {
    this.prevVDOM = {};
    this.currVDOM = {};
    this.parentNode = null;
    this.firstNode = null;
    this.state = {};
    this.setComponent = {};
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

  manipulateDom(el, vdom, isfirst) {
    if (this.setComponent[vdom.type] != undefined) {
      let component = this.setComponent[vdom.type];
      let node = component.renderin(el);
      if (isfirst) {
        this.firstNode = node;
      }
      return node;
    } else {
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
        if (Array.isArray(vdom.child)) {
          vdom.child.map(vd => {
            this.manipulateDom(Node, vd);
          });
        } else {
          this.manipulateDom(Node, vdom.child);
        }
      }
      return Node;
    }
  }

  renderin(parent) {
    this.parentNode = parent;
    let node = this.manipulateDom(parent, this.render(), true);
    return node;
  }

  updateDomAppendNode(currVDOM, parentNode) {
    if (this.setComponent[currVDOM.type] != undefined) {
      let component = this.setComponent[currVDOM.type];
      let Node = component.renderin(parentNode);
    } else {
      let Node = document.createElement(currVDOM.type);
      parentNode.appendChild(Node);
      if (Array.isArray(currVDOM.child)) {
        currVDOM.child.map(chVDOM => {
          this.updateDom(Node, null, chVDOM, null);
        });
      } else {
        if (typeof currVDOM.child === "string") {
          Node.textContent = currVDOM.child;
        } else {
          this.updateDom(Node, null, currVDOM.child, null);
        }
      }
    }
  }

  updateDom(parentNode, CurrentNode, currVDOM, prevVDOM) {
    if (prevVDOM != undefined) {
      if (currVDOM.type !== prevVDOM.type) {
        CurrentNode.remove();
        this.updateDomAppendNode(currVDOM, parentNode);
      } else {
        updateProps(CurrentNode, currVDOM.props, prevVDOM.props )
        if (typeof currVDOM.child === "string") {
          if (currVDOM.child !== prevVDOM.child) {
            CurrentNode.textContent = currVDOM.child;
          }
        } else if (Array.isArray(currVDOM.child)) {
          currVDOM.child.map((chVDOM, index) => {
            this.updateDom(
              CurrentNode,
              CurrentNode.childNodes[index],
              chVDOM,
              prevVDOM.child[index]
            );
          });
          if (currVDOM.child.length < prevVDOM.child.length) {
            let prev_index = currVDOM.child.length;
            for (let i = prev_index; i < prevVDOM.child.length; i++) {
              CurrentNode.childNodes[prev_index].remove();
            }
          }
        } else {
          this.updateDom(
            CurrentNode,
            CurrentNode.childNodes[0],
            currVDOM.child,
            prevVDOM.child
          );
        }
      }
    } else {
      this.updateDomAppendNode(currVDOM, parentNode);
    }
  }
}

export default Component;
