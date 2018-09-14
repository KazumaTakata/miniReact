import Component from "../../lib/component";
import { h } from "../../jsx/functions";

class ListComponent extends Component {
  constructor() {
    super();
    this.callback = this.callback.bind(this);
    this.state = {
      listdata: ["apple", "orange", "purple"],
    };
  }

  callback() {
    let tmp = this.state["listdata"]
    let tmp2 = tmp.concat(["greeen", "greeen2"])
    this.setState({ listdata: tmp2 });
  }

  listrender() {
    let listitems = this.state.listdata.map(fruit => <li>{fruit}</li>);
    return <ul>{listitems}</ul>;
  }

  render() {
    return (
      <div onClick={this.callback}>
        {this.listrender()}
      </div>
    );
  }
}

export default ListComponent;
