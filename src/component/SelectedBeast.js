import React from "react";

import {Modal,Button} from 'react-bootstrap'; // put two import together instead of two line 


class SelectedBeast extends React.Component{
    
    render() {
        return( 

            <div>
                
                
                <Modal show={this.props.modalview} onHide={this.props.handle}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handle}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.handle}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

     
   
            </div>
        )
    }

}
export default SelectedBeast
 //  modal contain 
// show value , it is truly falsy value, if this value become true the modal show and if false the modal dissaper 
// handleClose function  to make the show value false
// and contain modal header,body,footer




