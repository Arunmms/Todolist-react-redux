import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import HomePage from './Components/HomePage';
import CompletedPage from './Components/CompletedPage';
import MyDayPage from './Components/MyDayPage';
import UpcomingPage from './Components/UpcomingPage';
import TrashPage from './Components/TrashPage';
import './index.css';

function App() {
  return (
    <div className="App">
       <p>Arunkumar </p>
        <div>
        <nav>
                <NavLink className='navitems' to='/'>Home</NavLink>
                <NavLink className='navitems' to='/myDay'>My Day</NavLink>
                <NavLink className='navitems' to='/upcoming'>Upcoming</NavLink>
                <NavLink className='navitems' to='/completed'>Completed</NavLink>
                <NavLink className='navitems' to='/trash'>Trash</NavLink>
          </nav>
        </div>


        <Switch>
            <Route exact path='/' render={() => <HomePage />}/>
            <Route exact path='/myDay' render={() => <MyDayPage />} />
            <Route exact path='/upcoming' render={() => <UpcomingPage />}/>
            <Route exact path='/trash' render={() => <TrashPage />}/>
            <Route exact path='/completed' render={() => <CompletedPage />}/>
          //  <Route render={() => <HomePage />} />
        </Switch>
    </div>
  );
}

export default App;
