import Component from 'lib/component'

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
    this.userName = 'John'
    this.userName2 = 'Karen'
  }

  render() {
    return (
      <div>
        <h1>Hello {this.userName}!</h1>
        <h1>Hello {this.userName2}!</h1>
      </div>
    )
  }
}

export { SimpleComponent }
