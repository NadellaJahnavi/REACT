import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";
import Author from "./components/author";
import { Route, Switch, Redirect } from "react-router-dom";
import UpdateAuthor from "./components/updateauthor";
import Login from "./components/login";
import Home from "./components/home";
import Addauthor from "./components/addauthor";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/author" component={Author} />
        <Route exact path="/authors/add" component={Addauthor} />
        <Route path="/authors/update/:authorId" component={UpdateAuthor} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
      </Switch>
    </div>
  );
}

export default App;
