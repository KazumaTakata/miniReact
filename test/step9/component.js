import Component from 'lib/component'

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handler = this.handler.bind(this)
  }

  handler(event) {
    this.setState({ value: event.target.value })
    console.log(this.state.value)
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onInput={this.handler} />
      </div>
    )
  }
}

export { SimpleComponent }
