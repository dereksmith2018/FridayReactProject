import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counts => {
      counts.value = 0;
      return counts;
    });
    this.setState({ counters: counters });
  };
  handleMinus = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      count => count.id !== counterId
    );
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div className="bodyImg">
        <style jsx>{`
          .bodyImg {
            background-position: center;
            background-size: 100%;
            height: 680px;

            background-image: url(https://www.millercoors.com/sites/millercoors/files/compelling-story/Beer_Bottles_2500x1250px.jpg);
          }
        `}</style>
        <style jsx>{`
          .bodyImg {
            background-position: center;
            background-size: 100%;
            height: 680px;

            background-image: url(https://www.millercoors.com/sites/millercoors/files/compelling-story/Beer_Bottles_2500x1250px.jpg);
          }
        `}</style>
        <NavBar
          totalCounters={
            this.state.counters.filter(count => count.value > 0).length
          }
          totalClicked={this.state.handleIncrement}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onMinus={this.handleMinus}
          />
        </main>
      </div>
    );
  }
}

export default App;
