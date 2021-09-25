import Navbar from './Navbar';
import Home from './Home';
import Curriculo from './Curriculo';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import data from './db.json';

function App() {

  return (
    <Router>
      <div className=" w3-content light-grey" style={{maxWidth:2000, marginTop:46}}>
      <Navbar projects={data.projects}/>
        <div>
          <Switch>
            <Route exact path="/">
              <Home projects={data.projects}/>
            </Route>
            <Route path="/curriculo">
              <Curriculo curriculo={data.curriculo}/>
            </Route>
            <Route path="/ProjectDetail/:id">
              <ProjectDetail projects={data.projects}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
