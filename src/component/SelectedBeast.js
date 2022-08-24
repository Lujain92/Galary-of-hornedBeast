import React from "react";

//import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component{
    
    render() {
        return( 

            <div>
                {this.props.modalview}
                
                {/* <Modal show={this.props.modalview} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
   
            </div>
        )
    }

}
export default SelectedBeast


// save changes,close, x bottom to close it (change from true fo false )
//selsected beast to app to close it use function 