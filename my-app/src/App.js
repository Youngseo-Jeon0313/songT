import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import Transition from './components/transition';
import MainPage from './components/main';
import MapContainer from './components/map';
import TeacherPage from './components/teacher';
import Program from './components/programs';

function App() {


  return ( 
    
 
    <BrowserRouter>

   <MainPage/>
   <br/>
   <Nav/>
    <Transition/>
   <TeacherPage/>
    <MapContainer/>
      <Program/>


        <Switch>
      <Route exact={true} path="./components/nav">
        <Nav />
      </Route>
      <Route exact={true} path="./components/transition">
        <Transition/>
      </Route>
      <Route exact={true} path="./components/main">
        <MainPage/>
      </Route>
      <Route exact={true} path="./components/teacher">
        <TeacherPage/>
      </Route>
      <Route exact={true} path="./components/map">
        <MapContainer/>
      </Route>
      <Route exact={true} path="./components/programs">
        <Program/>
      </Route>
          </Switch>


       



     </BrowserRouter>
  );
}

export default App;
