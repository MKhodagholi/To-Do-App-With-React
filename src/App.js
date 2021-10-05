import React, { Component } from "react";

import Card from "./components/UI/Card";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";

class App extends Component {
  /*   constructor() {
    super();
  } */
  state = {
    works: [],
    title: "",
  };

  addWorkHandler = () => {
    if (this.state.title !== "") {
      const work = {
        id: Math.random().toString(),
        title: this.state.title,
        date: new Date(),
        isLineThrough: false,
        style: {textDecoration: "none"}
      };
      const works = [...this.state.works];
      works.push(work);
      this.setState({ works, title: "" });
    }
  };

  setWorkHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  deleteWorkHandler = (id) => {
    const works = [...this.state.works];
    const filteredWorks = works.filter((w) => w.id !== id);
    this.setState({ works: filteredWorks });
  };


  finishHandler = (id) => {
    let works = [...this.state.works];
    const workIndex = works.findIndex((w) => w.id === id);
    works[workIndex].isLineThrough = !works[workIndex].isLineThrough;
    const work = works[workIndex];
    if (work.isLineThrough)
      works[workIndex].style = {textDecoration: "line-through"};
    else 
      works[workIndex].style = {textDecoration: "none"};
    
    this.setState({ works });
  };

  render() {
    let works = null;
    works = (
      <Work
        works={this.state.works}
        onDeleteWork={this.deleteWorkHandler}
        onFinish={this.finishHandler}
      />
    );

    return (
      <div>
        <Card>
          <Header
            onAddWork={this.addWorkHandler}
            onSetWork={this.setWorkHandler}
            title={this.state.title}
          ></Header>
          {works}
        </Card>
      </div>
    );
  }
}

export default App;
