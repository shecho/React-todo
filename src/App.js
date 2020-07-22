import React from "react";

import "./App.css";
import Loading from "./components/loading/loading";
import Login from "./components/login/login";
import Register from "./components/register/register";

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
    }, 500);
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="row justify-content-center">
            <Login />
            <Register />
          </div>
        )}
      </div>
    );
  }
}

export default App;
