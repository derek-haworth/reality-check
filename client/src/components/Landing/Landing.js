import React from 'react';
import PropTypes from 'prop-types';
import Basket from '../Basket';
import './Landing.css';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedBasket: null,
    }
  }

  render(){
    let {baskets} = this.props;
    return(
      <div className="basket">
        <h1>Choose your offspring!</h1>
        <h3>Click a basket to begin caring for your new digital child!</h3>
        { baskets.map((child, i) =>
          <Basket name={child.name} key={i} setActiveChild={() => this.props.setActiveChild(child)}/>
         )}
      </div>
    )
  }
}

Landing.propTypes = {
  child: PropTypes.object
};

export default Landing;
