import {
    Route,
    Switch
} from "react-router-dom";
import Hotels from "./pages/hotels/Hotels";


function App() {
  return (
      <Switch>
          <Route exact path={"/"} component={Hotels}/>
      </Switch>
  );
}

export default App;
