
import './App.css';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route,withRouter} from 'react-router-dom';
import Home from './pages/home/home';



function App(props) {
  return (
    <Fragment>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
    </Fragment>
  );
}

export default withRouter(App);
