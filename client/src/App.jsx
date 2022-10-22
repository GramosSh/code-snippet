import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Snippet from "./components/Snippet";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:id" component={Snippet} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
