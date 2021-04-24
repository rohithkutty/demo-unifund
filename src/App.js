import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Loader from './components/Loader';
import Footer from './components/Footer';

import ErrorBoundary from './views/ErrorBoundary';

const LandingPage = lazy(() => import('./views/LandingPage'));
const Products = lazy(() => import('./views/Products'));
const About = lazy(() => import('./views/About'));
const Contact = lazy(() => import('./views/Contact'));

function App() {
  return (
    <div className='App'>
      <Router>
        <ErrorBoundary>
          <Header />
          <div style={{ margin: '50px 0 -225px 0' }}>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path='/products' component={Products} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/' component={LandingPage} />
              </Switch>
            </Suspense>
          </div>
          <Footer />
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
