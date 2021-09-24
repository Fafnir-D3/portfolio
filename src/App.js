import Navbar from './Navbar';
import Home from './Home';
import Curriculo from './Curriculo';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

function App() {

  return (
    <Router>
      <div className=" w3-content light-grey" style={{maxWidth:2000, marginTop:46}}>
      <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/curriculo">
              <Curriculo/>
            </Route>
            <Route path="/ProjectDetail/:id">
              <ProjectDetail/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
