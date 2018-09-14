import Component from "../../lib/component";
import { h } from "../../jsx/functions";
import NewComponent from "./ifrender"

class ConditionalComponent extends Component {
  constructor() {
    super();
    this.callback = this.callback.bind(this);
  }

  callback() {
    this.setState({isLoggedIn: !this.state.isLoggedIn})
  }


  render() {
    return (
     <div>
        <div>
        fwe
        </div>
        <div>
        few
        </div>
    </div>
    );
  }
}

export default ConditionalComponent;
