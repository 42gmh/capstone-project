import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/NavBar';
import { MarioContextConsumer } from './components/MarioContext';
import { 
  Switch,
  Route
} from "react-router-dom";
import About from './components/About';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ColorMario from './components/ColorMario';


function App() {
  return (
      <MarioContextConsumer>{
        (value) => {
          const {isLoggedIn} = value;
          console.log("Logged in:", isLoggedIn);
          return (
            <>
              <NavBar/>
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/singup" component={Signup} />
                {"true" === isLoggedIn ? <Route exact path="/colormario" component={ColorMario} /> : null }
                {"true" === isLoggedIn ? <Route exact path="/dashboard" component={Dashboard} /> : null }
                <Route exact path="/login" component={Login} />
                <Route component={"true" === isLoggedIn? Dashboard: Login} />
            </Switch>
            </>
          )
        }
      }
      </MarioContextConsumer>
);
}

export default App;
