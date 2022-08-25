import React from "react";

import {Modal,Button} from 'react-bootstrap'; // put two import together instead of two line 


class SelectedBeast extends React.Component{

    render() {
        return( 

            <div>
                
           {/* {console.log(this.props.selBeast)}      */}
        <Modal show={this.props.modalview} onHide={this.props.handle}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.selBeast.image_url} alt={this.props.selBeast.title}/> 

         <p>{this.props.selBeast.description}</p> 
        </Modal.Body>
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




