import React from "react";
import Loading from "./components/loading/loading";
import Home from "./components/home/home";
import Login2 from "./components/login/login2";
import Register2 from "./components/register/register2";

import Nav from "./components/nav/nav";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

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
      <Router>
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
                  <Route path="/login" component={Login2} />
                  <Route path="/register" component={Register2} />
                  <Route exact path="/" component={Home} />
                </div>
              </div>
            )}
          </div>
        </>
      </Router>
    );
  }
}

export default App;
