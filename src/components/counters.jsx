import React, { Component } from "react";
import Counter from "./counter";
// import { Link } from "react-router-dom";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onMinus } = this.props;
    return (
      <div>
        {/* <Link
          to="drinks/new"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          Add A New Drink
        </Link> */}

        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            onMinus={onMinus}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset Your Order
        </button>
        <button className="btn-primary btn-sm m-2">
          <a href="./drinks" />
          Add A New Drink
        </button>
      </div>
    );
  }
}

export default Counters;
