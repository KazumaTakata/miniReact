import Component from 'lib/component'
import { SimpleNestedComponent } from './component2'

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'John',
      userName2: 'Karen',
      flag: true
    }

    this.handler = this.handler.bind(this)
  }

  handler() {
    console.log(`hello ${this.state.userName}`)
    let newName

    if (this.state.flag) {
      newName = 'John Jr'
    } else {
      newName = 'John'
    }

    this.setState({
      userName: newName,
      flag: !this.state.flag
    })
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handler}>Hello {this.state.userName}!</h1>
        <SimpleNestedComponent name="Alex" />
      </div>
    )
  }
}

export { SimpleComponent }
