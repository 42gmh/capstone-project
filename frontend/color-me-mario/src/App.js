import logo from './logo.svg';
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
import Mario from './components/Mario';
import Login from './components/Login';


function App() {
  return (
      <MarioContextConsumer>{
        (value) => {
          const {isLoggedIn} = value;
          console.log("?????????:", isLoggedIn);
          return (
            <>
              <NavBar/>
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/singup" component={Signup} />
                {"true" === isLoggedIn ? <Route exact path="/colormario" component={Mario} /> : null }
                {"true" === isLoggedIn ? <Route exact path="/dashboard" component={Mario} /> : null }
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
