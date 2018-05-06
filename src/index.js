import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './scripts/store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './scripts/pages/App';
import './assets/styles/css/main.css';

// import { createBrowserHistory } from 'history';
// import ReactGA from 'react-ga';

// const trackPageView = location => {
//     ReactGA.set({ page: location.pathname });
//     ReactGA.pageview(location.pathname);
// };

// const initGa = history => {
//     ReactGA.initialize('UA-84128483-1', {
//         debug: true
//     });
//     trackPageView(history.location);
//     history.listen(trackPageView);
// };

// const updateGa = history => {
//     ReactGA.initialize('UA-84128483-1', {
//         debug: true
//     });
//     trackPageView(history.location);
//     history.listen(trackPageView);
// };

// const store = configureStore();
// const history = createBrowserHistory();
// initGa(history);

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
