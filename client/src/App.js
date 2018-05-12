import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import moment from 'moment';

// components
// import Nav from "./components/Nav";
import Container from "./components/Container";
import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import "./App.css";

const CHILD =
  [
    {
      name: "Test",
      birthDate: null
    },
    {
      name: "Test Two",
      birthDate: null
    },
    {
      name: "Test Three",
      birthDate: null
    }
  ];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("appState")) || {
      firstVisit: true,
      activeChild: null
    };
    this.setActiveChild = this.setActiveChild.bind(this);
    this.resetChild = this.resetChild.bind(this);
    this.syncState = this.syncState.bind(this);
  }

  setActiveChild(activeChild) {
    activeChild.birthDate = new moment().toString();
    let newState = {
      activeChild: activeChild,
      firstVisit: false
    };

    this.setState(newState, this.syncState);
  }

  syncState() {
    localStorage.setItem("appState", JSON.stringify(this.state))
  }

  resetChild() {
    let newState = {
      activeChild: null,
      firstVisit: true,
    };
    localStorage.clear();
    console.log(this.state);
    this.setState(newState, this.syncState);
  }

  render() {
    let { firstVisit, activeChild } = this.state;
    return (
      <Router>
        <div className="game-container text-center">
          {/* <header>
            <Nav />
          </header> */}
          <main>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/game" render={props => !!firstVisit && <Landing baskets={CHILD} setActiveChild={this.setActiveChild} {...props} />} />
              {!firstVisit && <Container child={activeChild} resetChild={this.resetChild} />}
            </div>
          </main>
          <footer className="footer">
            <div class="container">
              <div class="row hidden-xs">
                <div class="col-sm-12 voffset1 copyright text-center">
                  <small>Copyright <i className="fa fa-copyright" aria-hidden="true"></i> {moment().format('YYYY')}<a href="http://www.derekhaworth.com" rel="noopener noreferrer" target="_blank"> Derek Haworth</a></small>
                  <a href="http://www.github.com/derek-haworth/reality-check" target="_blank" rel="noopener noreferrer"> 
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x" aria-hidden="true"></i>
                      <i class="fa fa-github fa-stack-1x fa-inverse" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
