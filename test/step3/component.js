import Component from 'lib/component'

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
    this.userName = 'John'
    this.userName2 = 'Karen'
    this.headerProperty = 'down'
  }

  render() {
    return (
      <div>
        <h1 className="top">Hello {this.userName}!</h1>
        <h1 className={this.headerProperty}>Hello {this.userName2}!</h1>
      </div>
    )
  }
}

export { SimpleComponent }
