import React from 'react';
import './Basket.css';

class Basket extends React.Component {
  render() {
    let { name } = this.props;
    return (
      <div className="basket">
        <img onClick={() => this.props.setActiveChild()} src={`./assets/images/${name}.png`} alt="basket" />
      </div>
    )
  }
}

export default Basket;
