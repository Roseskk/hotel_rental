import {
    Route,
    Switch
} from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";


function App() {
  return (
      <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/hotels"} component={Hotels}/>
      </Switch>
  );
}

export default App;
