import Component from 'lib/component'

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5, 'fuck'],
      counter: 6
    }
    this.handler = this.handler.bind(this)
  }

  handler() {
    this.setState({
      numbers: [...this.state.numbers, this.state.counter],
      counter: this.state.counter + 1
    })
  }

  render() {
    const listItems = this.state.numbers.map(number => <li>{number}</li>)

    return (
      <div>
        <button onClick={this.handler}>add</button>
        <ul>{listItems}</ul>
      </div>
    )
  }
}

export { SimpleComponent }
