import React from "react";

import "./App.css";
import Loading from "./components/loading/loading";
import Login2 from "./components/login/login2";
import Register2 from "./components/register/register2";
import Nav from "./components/nav/nav";

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
      <>
        <div className="">
          {this.state.loading ? (
            <Loading />
          ) : (
            <div>
              <div className="">
                <Nav />
              </div>
              <div className="row justify-content-center">
                <Login2 />
                <Register2 />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
