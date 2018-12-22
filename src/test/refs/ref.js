import Component from '../../lib/component'
// h();
class ConditionalComponent extends Component {
  constructor() {
    super()
    this.callback = this.callback.bind(this)
  }

  callback() {
    console.log('clicked')
    let ref = this.$refs['reftest']
    ref.innerText = 'cule'
  }

  render() {
    return (
      <div onClick={this.callback} className={this.state.classname}>
        <div ref="reftest">fwe</div>
        <div>fewe</div>
        <SimpleComponent />
      </div>
    )
  }
}

class SimpleComponent extends Component {
  render() {
    return <div>ee</div>
  }
}

export default ConditionalComponent
