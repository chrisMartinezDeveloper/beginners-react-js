import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/counterComponent.css";

class Counter extends Component {
  styles = {
    fontSize: "10px",
    fontWeight: "bold",
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags.</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    let classes = this.getBadgeClasses();
    const id = this.props.counter.id;

    return (
      <div>
        <br></br>
        <span className={classes}>{this.props.counter.value}</span>
        <button
          onClick={() => this.props.onDecrease(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }

  // formatCount() {
  //   const { value: count } = this.state;
  //   return count === 0 ? "Zero" : count;
  // }
}

export default Counter;
