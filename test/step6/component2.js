import Component from 'lib/component'

class SimpleNestedComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name} from nested component!</h1>
      </div>
    )
  }
}

export { SimpleNestedComponent }
