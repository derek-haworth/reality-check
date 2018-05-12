import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Child from '../Child';
import Actions from '../Actions';
import Stats from '../Stats';
import Info from '../Info';
import Death from '../Death';
import './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("childState")) || {
      name: this.props.child.name,
      status: "visit",
      fullness: 99,
      happiness: 99,
      hygiene: 99,
      energy: 99,
      birthDate: this.props.child.birthDate,
      age: 0,
      alive: true,
      causeOfDeath: null,
    };

    this.setChildStatus = this.setChildStatus.bind(this);
    this.toggleAlive = this.toggleAlive.bind(this);
    this.decreaseStats = this.decreaseStats.bind(this);
    this.getAge = this.getAge.bind(this);

  }

  setChildStatus(status) {
    let newState = {
      status: status
    };
    let stat;
    switch (status) {
      case "feed":
        stat = 'fullness';
        break;
      case "play":
        stat = 'happiness';
        break;
      case "groom":
        stat = 'hygiene';
        break;
      case "sleep":
        stat = 'energy';
        break;
      default:
        stat = null;
    }

    let current = this.state[stat];
    if (current <= 95) {
      current += 5;
    } else {
      current = 100;
    }
    newState[stat] = current;
    this.setState(newState, () => {
      setTimeout(() => this.setState({ status: 'visit' }, this.syncState), 8000);
    });
  }

  syncState() {
    // console.log(this.state);
    localStorage.setItem("childState", JSON.stringify(this.state))
  }

  decreaseStats() {
    let newState = {};

    if ((this.state.fullness > 0) && (this.state.happiness > 0) && (this.state.hygiene > 0) && (this.state.energy)) {
      newState = {
        fullness: this.state.fullness - 5,
        happiness: this.state.happiness - 2,
        hygiene: this.state.hygiene - 4,
        energy: this.state.energy - 2,
      }
    } else if (this.state.fullness <= 0) {
      newState.alive = false;
      newState.causeOfDeath = "Starvation";
    } else if (this.state.happiness <= 0) {
      newState.alive = false;
      newState.causeOfDeath = "Boredom";
    } else if (this.state.hygiene <= 0) {
      newState.alive = false;
      newState.causeOfDeath = "Poopy Diaper";
    } else if (this.state.energy <= 0) {
      newState.alive = false;
      newState.causeOfDeath = "Exhaustion";
    }

    this.setState(newState, this.syncState);
  }


  getAge() {

    let diff = moment(this.state.birthDate).from(new moment(), true);
    let ageStr = diff.toString();
    let newState = {
      age: ageStr
    };
    this.setState(newState, this.syncState);
  }


  //lose one point from each stat every five minutes
  componentDidMount() {
    //development/demo interval 3
    setInterval(this.decreaseStats, 3000);
    //live application interval 5 minutes 
    // setInterval(this.decreaseStats, 300000);
    setInterval(this.getAge, 100)
  }

  toggleAlive() {
    this.setState({ alive: !this.state.alive }, this.syncState);
  }

  render() {
    let { name, status, age, birthDate, fullness, happiness, hygiene, energy, alive, causeOfDeath } = this.state;
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-md-8">
            {!alive && <Death name={name} causeOfDeath={causeOfDeath} toggleAlive={this.toggleAlive} resetChild={this.props.resetChild} />}
            {!!alive && <Info name={name} age={age} birthDate={birthDate} />}
            {/* {!!alive && <Child name={name} status={status} />} */}
            {!!alive && <Actions setChildStatus={this.setChildStatus} resetChild={this.props.resetChild} />}
          </div>
          <div className="col-md-4">
            <Stats fullness={fullness} happiness={happiness} hygiene={hygiene} energy={energy} />
          </div>
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  child: PropTypes.object
};

export default Container;

