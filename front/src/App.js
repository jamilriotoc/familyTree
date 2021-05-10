import './App.css';
import Home from './pages/Home.js';
import Members from './pages/Members.js';
import CreateMember from './pages/CreateMember.js';
import EditMember from './pages/EditMember.js';

import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/createMember" component={CreateMember}/>
     <Route exact path="/members" component={Members}/>
     <Route path="/editMember/:id" component={EditMember}/>
    </Switch>
    </Router>
  );
}

export default App;
