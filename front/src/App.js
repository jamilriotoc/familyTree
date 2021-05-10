import './App.css';
import Dashboard from './pages/Dashboard.js';
import Heroes from './pages/Heroes.js';
import EditForm from './components/EditForm.js';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Switch>
     <Route exact path="/" component={Dashboard}/>
     <Route exact path="/edit" component={EditForm}/>
     <Route exact path="/heroes" component={Heroes}/>
    </Switch>
    </Router>
  );
}

export default App;
