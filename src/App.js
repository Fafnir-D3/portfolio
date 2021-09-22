import Navbar from './Navbar';
import Home from './Home';
import Curriculo from './Curriculo';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

function App() {

  return (
    <Router>
      <div className="App w3-content" style={{maxWidth: 1400}}>
      <Navbar />
        <div className="content">
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
