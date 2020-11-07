import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import PreviewImage from './components/PreviewImage/PreviewImage';
import ShirtDesign from './components/ShirtDesign/ShirtDesign';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shirt">
            <ShirtDesign />
          </Route>
          <Route path="/previewImage">
            <PreviewImage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;