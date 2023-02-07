import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./counterComponent";
// import { counter } from "@fortawesome/fontawesome-svg-core";

// Controlled / Child Component
class Counters extends Component {
  render() {
    const { onIncrement, onDecrease, onReset, onDelete, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => {
          return (
            <div>
              <Counter
                onIncrement={onIncrement}
                onDecrease={onDecrease}
                onDelete={onDelete}
                key={counter.id}
                counter={counter}
              />
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Counters;
