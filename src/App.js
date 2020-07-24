import React from "react";
import Loading from "./components/loading/loading";
import Home from "./components/home/home";
import Login2 from "./components/login/login2";
import Register2 from "./components/register/register2";
import Tasks from "./components/tasks/tasks";

import Nav from "./components/nav/nav";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      open: false,
      loggedInStatus: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  }

  handleLogStatus = (status) => {
    this.setState({ loggedInStatus: status });
  };
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
                  {/* <Route path="/login" component={Login2} /> */}
                  <Switch>
                    <Route path="/register" component={Register2} />
                    <Route exact path="/tasks" component={Tasks} />
                    <Route exact path="/login">
                      {this.state.loggedInStatus === true ? (
                        <Redirect from="/login" to="/tasks" />
                      ) : (
                        <Login2 handleLogStatus={this.handleLogStatus} />
                      )}
                    </Route>

                    <Route exact path="/" component={Home} />
                  </Switch>
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
