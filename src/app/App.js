import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from "./Routes"

const App = () => {
  return (
    <Router>

        {/* <header>
          <Navbar />
        </header> */}

      <main>
        <Routes />
      </main>

      {/* <footer>
        <Footer />
      </footer> */}
      
    </Router>
  )
};

export default App;