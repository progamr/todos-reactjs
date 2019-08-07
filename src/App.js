import React from 'react';
import {Route} from "react-router-dom";
import TodosListPage from "./pages/TodosListPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegisterPage";

const App = () => (

    <section className="hero">
      <Route path="/" exact component = {LandingPage}/>
      <Route path="/login" exact component = {LoginPage}/>
      <Route path="/register" exact component = {RegistrationPage}/>
      <Route path="/todos" exact component = {TodosListPage}/>

    </section>
);

export default App;
