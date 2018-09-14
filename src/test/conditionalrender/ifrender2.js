import Component from "../../lib/component";
import { h } from "../../jsx/functions";

class ConditionalComponent extends Component {
  constructor() {
    super();
    this.callback = this.callback.bind(this);
    this.state = {
      listdata: ["apple", "orange", "purple"],
      isLoggedIn: false
    };
  }

  callback() {
    this.setState({isLoggedIn: !this.state.isLoggedIn})
  }


  render() {
    let button;
    if (this.state.isLoggedIn) {
        button = <button >Login</button>;
      } else {
        button = <div>
                    <div>one</div>
                    <div>one</div>
                </div>    
      }
    return (
      <div onClick={this.callback}>
        {button}
      </div>
    );
  }
}

export default ConditionalComponent;
