import {
    Route,
    Switch
} from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";


function App() {
  return (
      <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/hotels/:position/:hotelId/:roomId"} component={Room} />
          <Route exact path={"/hotels/:position/:hotelId"} component={Rooms}/>
          <Route exact path={"/hotels/:position"} component={Hotels}/>
      </Switch>
  );
}

export default App;
