import React from "react"
import Form from 'react-bootstrap/Form'

class Myform extends React.Component{

    render() {
        return(
            <>
            <h2>my form</h2>
            
      <Form.Group className="mb-3">
        <Form.Label>number of horns</Form.Label>
        <Form.Select id="number">
          <option value= "1" >one</option>
          <option value="2" >two</option>
          <option value="3" >more</option>
        </Form.Select>
      </Form.Group>






            </>
        )
    }
}

export default Myform