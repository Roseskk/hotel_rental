import {
    Route,
    Switch
} from "react-router-dom";
import { YMaps } from '@pbe/react-yandex-maps';
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Rooms from "./pages/Rooms";


function App() {
  return (
      <YMaps>
          <Switch>
              <Route exact path={"/"} component={Home}/>
              <Route exact path={"/hotels/:position/:hotelId"} component={Rooms}/>
              <Route exact path={"/hotels/:position"} component={Hotels}/>
          </Switch>
      </YMaps>
  );
}

export default App;
