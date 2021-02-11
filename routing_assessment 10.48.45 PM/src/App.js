import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';

import './App.css';
import  Welcome from './components/welcome/Welcome'
import clock from './components/clock/Clock';
import contract from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import NotFound404 from './components/notFound404/NotFound404'


function App() {
  return (
    <div className="App">
      <div className="App">
      <Navigation/>
      <Switch>
      <Route exact path="/" 
      render={(props) => <Welcome {...props} name="Sidique" />
      }
     />
     <Route
      path='/welcome/:name'
      render={(props) => (
        <welcome {...props} name={props.match.params.name}/>
      )}
      />

      {/* <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} /> */}

      </Switch>
    </div>
      
    </div>
  );
}

export default App;




// JEOPARDY



// import './App.css';
// import  Welcome from './components/welcome/Welcome'
// import  Jeopardy from './components/Jeopardy/Jeopardy'
// import  Navigation from './components/navigation/Navigation'
// import  NotFound from './components/notFound/NotFound'
// import  {Router, Switch }  from 'react-router-dom'


// function App() {
//   return (
//     <div className="App">
//       <Navigation/>
//       <Switch>
//       <Route exact path="/" component={Jeopardy} />
//       <Router path="welcome/:name" component={Welcome} />
//       <Router><NotFound/></Router>
      
//      </Switch> 

//      </div>
//   );
// }

// export default App;
