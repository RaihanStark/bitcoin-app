import React from 'react';

import './App.css';
import HomePage from './pages/Home/HomePage';
import ConvertToBTC from './pages/ConvertToBTC/ConvertToBTCPage';
import ConvertToRupiah from './pages/ConvertToRupiah/ConvertToRupiahPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">

          <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/toRupiah"><button>Konversi Ke Rupiah</button></Link>
            <Link to="/toBTC"><button>Konversi ke BTC</button></Link>
          </nav>
          <Switch>
            <Route path="/toRupiah">
              <ConvertToRupiah></ConvertToRupiah>
            </Route>
            <Route path="/toBTC">
              <ConvertToBTC></ConvertToBTC>
            </Route>
            <Route path="/">
              <HomePage></HomePage>
            </Route>
          </Switch>



        </header>

      </div>
    </Router>
  );
}

export default App;
