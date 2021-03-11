import './SCSS/App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './Home/Home';

//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  return (
    /*<Router>
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
       <div className="content">
         <Switch>
           <Route path="/">
           </Route>
         </Switch>
       </div>
      </header>
    </div>
    </Router>*/
    
    <div className="App">
      <Navbar />
        <div className="content">
            <Home />
            
        </div>
        <Footer />
    </div>
  );
}

export default App;
