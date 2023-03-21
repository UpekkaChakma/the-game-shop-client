import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/User/pages/Home';
import PrivateRoute from './Components/User/components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import AddGameToDatabase from './Components/Admin/Pages/AddGameToDatabase';
import CheckOut from './Components/User/pages/CheckOut/CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/sharedComponents(user+admin)/UI/NotFound/NotFound';
import Login from './Components/sharedComponents(user+admin)/Pages/Login';
import SignUp from './Components/sharedComponents(user+admin)/Pages/SignUp';
import EditGames from './Components/Admin/Pages/EditGames';
import DeleteGame from './Components/Admin/Pages/DeleteGame';
import Library from './Components/User/pages/Library';


export const UserContext = createContext();


function App() {

  document.title = "The game shop";
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Router>
        <Switch>

          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/checkout/:id" component={CheckOut} />
          <Route path="/my-library" component={Library} />
          <Route exact path="/" component={Home} />

          <PrivateRoute path="/admin/add">
            <AddGameToDatabase />
          </PrivateRoute>
          <PrivateRoute path="/admin/edit">
            <EditGames />
          </PrivateRoute>
          <PrivateRoute path="/admin/delete">
            <DeleteGame />
          </PrivateRoute>

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
