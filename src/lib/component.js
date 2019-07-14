import ManipulateAttribute from './attrbute/attribute'

class Component extends ManipulateAttribute {
  constructor(props) {
    super()
    this.prevVDOM = {}
    this.currVDOM = {}
    this.parentDom = null
    this.rootDom = null
    this.state = {}
    if (props == undefined) {
      props = {}
    }
    this.props = props
    this.setComponent = {}
    this.$refs = {}
  }
  setState(obj) {
    this.prevVDOM = Object.assign({}, this.render())

    let keys = Object.keys(obj)
    keys.map(key => {
      this.state[key] = obj[key]
    })

    this.currVDOM = Object.assign({}, this.render())

    this.updateDom(this.parentDom, this.rootDom, this.currVDOM, this.prevVDOM)
  }

  manipulateDom(parentDom, vdom, isfirst) {
    if (typeof vdom.type == 'function') {
      let component = new vdom.type(vdom.props)
      let node = component.renderIn(parentDom)
      if (isfirst) {
        this.rootDom = node
      }
      return node
    } else if (typeof vdom == 'string' || typeof vdom == 'number') {
      if (typeof vdom == 'number') {
        vdom = String(vdom)
      }
      let textNode = document.createTextNode(vdom)
      parentDom.appendChild(textNode)
    } else {
      let Node = document.createElement(vdom.type)
      if (isfirst) {
        this.rootDom = Node
      }
      if (vdom.props !== null) {
        this.setProps(Node, vdom.props)
      }

      parentDom.appendChild(Node)
      if (Array.isArray(vdom.child)) {
        vdom.child.map(vd => {
          if (vd != undefined) {
            this.manipulateDom(Node, vd)
          }
        })
      } else {
        this.manipulateDom(Node, vdom.child)
      }

      return Node
    }
  }

  createElement(type, props, ...child) {
    let children = child
    if (children.length === 1) {
      children = children[0]
    }
    return { type, props, child: children }
  }

  renderIn(parent) {
    this.parentDom = parent
    let node = this.manipulateDom(parent, this.render(), true)
    return node
  }

  render() {
    console.warn('overwrite this method')
  }

  updateDomAppendNode(currVDOM, parentDom) {
    if (typeof currVDOM.type == 'function') {
      let component = new currVDOM.type(currVDOM.props)
      let node = component.renderIn(parentDom)
    } else {
      let Node = document.createElement(currVDOM.type)
      parentDom.appendChild(Node)
      if (Array.isArray(currVDOM.child)) {
        currVDOM.child.map(chVDOM => {
          this.updateDom(Node, null, chVDOM, null)
        })
      } else {
        if (
          typeof currVDOM.child === 'string' ||
          typeof currVDOM.child == 'number'
        ) {
          Node.textContent = currVDOM.child
        } else {
          this.updateDom(Node, null, currVDOM.child, null)
        }
      }
    }
  }

  updateDom(parentDom, currentDom, currVDOM, prevVDOM) {
    if (prevVDOM != undefined) {
      if (typeof currVDOM == 'string' || typeof currVDOM == 'number') {
        if (currVDOM != prevVDOM) {
          if (typeof currVDOM == 'number') {
            currentDom.textContent = currVDOM.toString()
          } else {
            currentDom.textContent = currVDOM
          }
        }
      } else {
        if (currVDOM.type !== prevVDOM.type) {
          currentDom.remove()
          this.updateDomAppendNode(currVDOM, parentDom)
        } else {
          this.updateProps(currentDom, currVDOM.props, prevVDOM.props)
          if (
            typeof currVDOM.child === 'string' ||
            typeof currVDOM.child == 'number'
          ) {
            if (currVDOM.child !== prevVDOM.child) {
              if (typeof currVDOM.child == 'number') {
                currentDom.textContent = currVDOM.child.toString()
              } else {
                currentDom.textContent = currVDOM.child
              }
            }
          } else if (Array.isArray(currVDOM.child)) {
            currVDOM.child.map((chVDOM, index) => {
              this.updateDom(
                currentDom,
                currentDom.childNodes[index],
                chVDOM,
                prevVDOM.child[index]
              )
            })
            if (currVDOM.child.length < prevVDOM.child.length) {
              let prev_index = currVDOM.child.length
              for (let i = prev_index; i < prevVDOM.child.length; i++) {
                currentDom.childNodes[prev_index].remove()
              }
            }
          } else {
            this.updateDom(
              currentDom,
              currentDom.childNodes[0],
              currVDOM.child,
              prevVDOM.child
            )
          }
        }
      }
    } else {
      this.updateDomAppendNode(currVDOM, parentDom)
    }
  }
}
export default Component
