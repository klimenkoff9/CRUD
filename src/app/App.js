import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import Routes from "./Routes"
import Navbar from "../components/Navbar/Navbar"

const App = () => {
  return (
    <Router>
    <div>
      <header>
      <Navbar />
      </header>
      
      <main>
      <Routes />
      </main>

    </div>
    </Router>
  );
};

export default App;