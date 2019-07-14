import Component from 'lib/component'

class SimpleNestedComponent extends Component {
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
    console.log(`hello`)
    let newName
    if (this.state.flag) {
      newName = 'Karen Jr'
    } else {
      newName = 'Karen'
    }

    this.setState({
      userName2: newName,
      flag: !this.state.flag
    })
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handler}>
          Hello {this.state.userName2} from nested component!
        </h1>
      </div>
    )
  }
}

export { SimpleNestedComponent }
