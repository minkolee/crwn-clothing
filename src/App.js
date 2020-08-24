import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props)=>{
    return(
    <div>
        <h1>HATS PAGE</h1>
        <p>This is No.{props.match.params.hatsId} hat.</p>
    </div>
)}

function App() {
  return (
    <div>
    <Switch>
        <Route path='/hats/:hatsId' component = {HatsPage}/>
        <Route path='/' component = {HomePage}/>
    </Switch>

    <Link to='/hats/11'>No.11</Link>
    </div>
  );
}


export default App;
