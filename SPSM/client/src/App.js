import React, { Component } from "react";
import Static from "./staticpage";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashbordStudent from "./components/DashbordStudent";
import DashbordProf from "./components/DashbordProf";
import Admin from "./components/DashbordAdmin"

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {/* Route Static page */}
            <Route exact path="/" component={Static} />
            <Route exact path="/admin" component={Admin} />

            {/* Route Student dash*/}
            <Route
              exact
              path="/dashStudent"
              render={() => <DashbordStudent r="p" />}
            />
            <Route
              exact
              path="/StudentProfil"
              render={() => <DashbordStudent r="p" />}
            />
            <Route
              exact
              path="/StudentClassmate"
              render={() => <DashbordStudent r="c" />}
            />
            <Route
              exact
              path="/StudentProf"
              render={() => <DashbordStudent r="sp" />}
            />
            <Route
              exact
              path="/StudentCourse"
              render={() => <DashbordStudent r="cr" />}
            />
            <Route
              exact
              path="/StudentScheduling"
              render={() => <DashbordStudent r="sc" />}
            />
            <Route
              exact
              path="/StudentReport"
              render={() => <DashbordStudent r="rp" />}
            />
            <Route
              exact
              path="/StudentChat"
              render={() => <DashbordStudent r="cht" />}
            />
            <Route
              exact
              path="/StudentEvent"
              render={() => <DashbordStudent r="se" />}
            />
            <Route
              exact
              path="/StudentForum"
              render={() => <DashbordStudent r="f" />}
            />

            {/* <Route path='/StudentForumPost/:id' render={props => <StudentForumPost index={props.match.params.id} />} /> */}
            <Route
              path="/StudentForumPost/:id"
              render={props => (
                <DashbordStudent postid={props.match.params.id} />
              )}
            />

            {/* Route Prof dash*/}
            <Route
              exact
              path="/dashProf"
              render={() => <DashbordProf r="p" />}
            />
            <Route
              exact
              path="/student"
              render={() => <DashbordProf r="c" />}
            />
            <Route exact path="/prof" render={() => <DashbordProf r="sp" />} />
            <Route
              exact
              path="/uploadcour"
              render={() => <DashbordProf r="cr" />}
            />
            <Route
              exact
              path="/profScheduling"
              render={() => <DashbordProf r="sc" />}
            />
            <Route
              exact
              path="/profReport"
              render={() => <DashbordProf r="rp" />}
            />

            <Route
              exact
              path="/ProfForum"
              render={() => <DashbordProf r="f" />}
            />
            <Route
              exact
              path="/ProfEvent"
              render={() => <DashbordProf r="ev" />}
            />

            {/* External Route */}
            <Route
              path="/cv"
              component={() => {
                window.location.href = "https://hamdirh.000webhostapp.com/";
                return null;
              }}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
