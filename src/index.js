import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Routes from "./Routes"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
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
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
