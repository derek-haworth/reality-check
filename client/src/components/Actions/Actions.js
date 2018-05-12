import React from 'react';
import {ButtonToolbar, Button, Modal} from 'react-bootstrap'
import './Actions.css'

class Actions extends React.Component{
  constructor(props){
    super(props);
    this.state= {showModal: false};
    this.showConfirmResetModal = this.showConfirmResetModal.bind(this);
    this.closeConfirmResetModal = this.closeConfirmResetModal.bind(this);
  }

  showConfirmResetModal() {
    this.setState({ showModal: true});
  }

  closeConfirmResetModal() {;
    this.setState({showModal: false});
  }
  
  render(){
    return(
      <div id="actions-all">
        <ButtonToolbar id="actions-button-bar" className="text-center">
          <Button onClick={()=>{this.props.setChildStatus("feed")}} bsSize="large" bsStyle="danger">Feed</Button>
          <Button onClick={()=>{this.props.setChildStatus("play")}} bsSize="large" bsStyle="info">Play</Button>
          <Button onClick={()=>{this.props.setChildStatus("groom")}} bsSize="large" bsStyle="warning">Change</Button>
          <Button onClick={()=>{this.props.setChildStatus("sleep")}}bsSize="large" bsStyle="success"> Sleep </Button>
          <Button onClick={this.showConfirmResetModal} id="actions-reset" bsSize="large" bsStyle=""> Reset </Button>

          <Modal show={this.state.showModal}>
            <Modal.Title> Reset </Modal.Title>
            <Modal.Body>
              Are you sure you want to reset? Your child's age and statistics will all be reset. You don't get a fresh start in life.
            </Modal.Body>
            <Modal.Footer> <Button onClick={()=>{this.props.resetChild()}} id="actions-reset" bsSize="large" bsStyle="danger">Confirm Reset </Button> <Button onClick={this.closeConfirmResetModal} bsSize="large" bsStyle="primary"> Cancel </Button></Modal.Footer>
          </Modal>
          
        </ButtonToolbar>
      </div>
    )
  }
}

export default Actions;

