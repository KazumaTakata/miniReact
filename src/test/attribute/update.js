import Component from "../../lib/component";
import { h } from "../../jsx/functions";


class ConditionalComponent extends Component {
  constructor() {
    super();
    this.state = { classname: "green" }
    this.callback = this.callback.bind(this);
  }

  callback() {
    console.log("clicked")
    this.setState( {classname: "blue"} )
  }


  render() {
    return (
     <div onClick={this.callback} className={this.state.classname}>
        <div id="eee">
        fwe
        </div>
        <div>
        fewe
        </div>
    </div>
    );
  }
}

export default ConditionalComponent;
