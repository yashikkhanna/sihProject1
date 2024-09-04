import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
import mainPage from './Pages/mainPage';
import Councellor from './Pages/Councellor';
import VideoCall from './Pages/VideoCall';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/chats' component={ChatPage} />
          <Route path='/Mainpage' component={mainPage}/>
          <Route path='/Councellor' component={Councellor}></Route>
          <Route path='/VideoCall' component={VideoCall}></Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
