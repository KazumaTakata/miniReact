import Component from 'lib/component'

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
    this.userName = 'John'
    this.userName2 = 'Karen'
    this.headerProperty = 'down'
    this.handler = this.handler.bind(this)
  }

  handler(id, e) {
    console.log(`hello ${this.userName}. My Id is ${id}`)
  }

  render() {
    let id = 'id_5'
    return (
      <div>
        <h1 onClick={e => this.handler(id, e)}>Hello {this.userName}!</h1>
      </div>
    )
  }
}

export { SimpleComponent }
