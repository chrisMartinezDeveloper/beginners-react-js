import React, { Component } from "react";
import Counters from "./components/countersComponent";
import Navbar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
    console.log("Perfect place to make AJAX calls");
  }

  handleIncrement(counter) {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrease(counter) {
    if (counter.value === 0) return;
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }

  handleDelete(counterID) {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterID
    );
    this.setState({ counters });
  }

  handleReset() {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  }

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <Navbar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            onIncrement={this.handleIncrement.bind(this)}
            onDecrease={this.handleDecrease.bind(this)}
            onDelete={this.handleDelete.bind(this)}
            onReset={this.handleReset.bind(this)}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
