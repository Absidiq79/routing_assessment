import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className="Navigation">
     <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/clock">Clock</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>
    </div>
  );
}

export default Navigation;



// Jeopardy


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Jeopardy from '../jeopardy/Jeopardy';

// function Navigation(props) {
//   return (
//     <div className="Navigation">
//      <ul>
//   <li><Link to="/">Jeopardy</Link></li>
//   <li><Link to="/">Welcome/NoName</Link></li>

// </ul>
//     </div>
//   );
// }

// export default Navigation;