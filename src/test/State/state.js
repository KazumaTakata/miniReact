import Component from '../../lib/component'

class ConditionalComponent extends Component {
  constructor() {
    super()
    this.callback = this.callback.bind(this)
    this.state = {
      isLoggedIn: false
    }
  }

  callback() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  }

  render() {
    let button
    if (this.state.isLoggedIn) {
      button = <button>Login</button>
    } else {
      button = <button>Signup</button>
    }
    return <div onClick={this.callback}>{button}</div>
  }
}

export default ConditionalComponent
