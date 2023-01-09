import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/User/pages/Home';
// import PrivateRoute from './Components/User/components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import AddGameToDatabase from './Components/Admin/Pages/AddGameToDatabase';
import CheckOut from './Components/User/pages/CheckOut/CheckOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/sharedComponents(user+admin)/UI/NotFound/NotFound';
import Login from './Components/sharedComponents(user+admin)/Pages/Login';
import SignUp from './Components/sharedComponents(user+admin)/Pages/SignUp';
import EditGames from './Components/Admin/Pages/EditGames';
import DeleteGame from './Components/Admin/Pages/DeleteGame';
// import Orders from './Components/User/pages/Orders/Orders';


export const UserContext = createContext();


function App() {

  document.title = "The game shop";
  const [loggedInUser, setLoggedInUser] = useState({
    email: "bkashkumar.bk@gmail.com",
    img: '',
    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJrYXNoa3VtYXIuYmtAZ21haWwuY29tIiwiaWF0IjoxNjcxOTY4OTc3LCJleHAiOjE2NzIyMjgxNzd9.ufUruNxSk5Ta4OYjCDW6oP3-uNykGA0KYEWkl8nQYS4"
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/signUp" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/checkout/:id" component={CheckOut} />

          {/* <PrivateRoute path="/my-games">
            <Orders />
          </PrivateRoute> */}

          <Route path="/admin/add">
            <AddGameToDatabase />
          </Route>

          <Route path="/admin/edit">
            <EditGames />
          </Route>

          <Route path="/admin/delete">
            <DeleteGame />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
