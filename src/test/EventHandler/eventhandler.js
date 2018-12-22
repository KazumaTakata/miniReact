import Component from '../../lib/component'

class EventHandlerComponent extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('clicked')
  }

  render() {
    return <div onClick={this.handleClick}>Click me</div>
  }
}

export default EventHandlerComponent
