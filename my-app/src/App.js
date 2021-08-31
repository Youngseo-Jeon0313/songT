import './App.css';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import Transition from './components/transition';
import MainPage from './components/main';
import MapContainer from './components/map';
import Page from './components/page';
import TeacherPage from './components/teacher';

function App() {


  return (
    <BrowserRouter>


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
      <Route exact={true} path="./components/page">
            <Page/>
      </Route>
      <Route exact={true} path="./components/map">
        <MapContainer/>
      </Route>
          </Switch>


          <MainPage/>
          <TeacherPage/>
          <Nav/>
          <Page/>
          <MapContainer/>



     </BrowserRouter>
  );
}

export default App;
