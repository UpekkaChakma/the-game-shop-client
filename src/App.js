import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Admin from './Components/Admin/Admin';
import CheckOut from './Components/CheckOut/CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import ManageGames from './Components/ManageGames/ManageGames';
import Orders from './Components/Orders/Orders';


export const UserContext = createContext();


function App() {
  document.title = "The game shop";

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>

          <PrivateRoute path="/orderList">
            <Orders></Orders>
          </PrivateRoute>

          <PrivateRoute path="/admin/addGame">
            <Admin></Admin>
          </PrivateRoute>

          <PrivateRoute path="/admin/manageGames">
            <ManageGames></ManageGames>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
