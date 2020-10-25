import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import BannersPage from './pages/BannersPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage}  />
              <Route path="/article-list" component={ArticlesListPage}  />
              <Route path="/article/:name" component={ArticlePage}  />
              <Route path="/banners" component={BannersPage}  />
              <Route component={NotFoundPage}  />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
