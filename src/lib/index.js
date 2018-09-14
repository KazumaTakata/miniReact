import React from "react";
import { h } from "../jsx/functions";
import Component from "./component";
import { callback } from "./index";
import NewComponent from "./index2";
h();

class Component1 extends Component {
  constructor() {
    super();
    this.callback = this.callback.bind(this);
    this.state = {
      text1: "text1111",
      classname: "blue",
      listdata: ["apple", "orange"],
    };
    this.setComponent = { newcomponent: new NewComponent() };
  }

  callback() {
    this.setState({ text1: "text22222" });
  }

  listrender() {
    let listitems = this.state.listdata.map(fruit => <li>{fruit}</li>);
    return <ul>{listitems}</ul>;
  }

  render() {
    return (
      <div>
        <ul id="cool" className={this.state.classname} onClick={this.callback}>
          <li>{this.state.text1}</li>
          <li>texte2</li>
          <li>text3</li>
        </ul>
        {this.listrender()}
      </div>
    );
  }
}

export default Component1;
