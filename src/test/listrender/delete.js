import Component from '../../lib/component'

class ListComponent extends Component {
  constructor() {
    super()
    this.callback = this.callback.bind(this)
    this.state = {
      listdata: ['apple', 'orange', 'purple', 'greeeeen']
    }
  }

  callback() {
    this.setState({ listdata: this.state.listdata.slice(2) })
  }

  listrender() {
    let listitems = this.state.listdata.map(fruit => <li>{fruit}</li>)
    return <ul>{listitems}</ul>
  }

  render() {
    return <div onClick={this.callback}>{this.listrender()}</div>
  }
}

export default ListComponent
