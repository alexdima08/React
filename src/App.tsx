import React from 'react';
import SignIn from './pages/SignIn/signin';
import WelcomePage from './pages/WelcomePage/welcome';
import RegisterPage from './pages/Register/registerpage';
import NotFound from './pages/NotFound/error404';
import UserPage from './pages/User/user';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Nav from './Layout/Nav/nav';


function App() {
  return (
    <Router>
      {/* <Nav/> */}
      <Routes>
        {JSON.parse(sessionStorage.getItem('loggedUser')!)==null || <Route path ="*" element = {<NotFound/>} /> }
        <Route path="/user" element = {<UserPage/>} />
        <Route path="/signin" element = {<SignIn />} />
        <Route path="/registerpage" element = {<RegisterPage />} />
        <Route path="/welcome" element = {<WelcomePage />} />
        <Route path="/" element = {<WelcomePage />} />
        <Route path ="*" element = {<NotFound/>} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
