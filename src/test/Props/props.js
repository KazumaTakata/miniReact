import Component from '../../lib/component'

class PropComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>{this.props.greeting}</div>
        <SimpleComponent greeting2="goodbye" />
      </div>
    )
  }
}

class SimpleComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>{this.props.greeting2}</div>
  }
}

export default PropComponent
