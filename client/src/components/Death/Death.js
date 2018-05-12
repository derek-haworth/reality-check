import React from 'react';
import './Death.css';
import {Button} from 'react-bootstrap';


class Death extends React.Component {
  render(){
    let {name, causeOfDeath} =this.props;

    return(
      <div className='dead'>
        <h1>You're a bad parent!</h1>
        <h1> { name } died of { causeOfDeath }</h1>
        <div id="dead-img">
        </div>
          <Button onClick={()=>{this.props.resetChild()}} bsSize="large" bsStyle="danger"> Restart </Button>
      </div>
    )
  }
}


export default Death;