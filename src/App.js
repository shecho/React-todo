import React from "react";

import "./App.css";
import Loading from "./components/loading/loading";
import Login from "./components/login/login";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      open: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  render() {
    return (
      <div className="App">{this.state.loading ? <Loading /> : <Login />}</div>
    );
  }
}

export default App;
