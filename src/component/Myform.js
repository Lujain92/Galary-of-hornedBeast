import React from "react"
import Form from 'react-bootstrap/Form'



class Myform extends React.Component{
    render() {
        return(
            <>
            <h2>my form</h2>
            
      <Form.Group className="mb-3">
        <Form.Label>number of horns</Form.Label>
        <Form.Select >
          <option>one</option>
          <option>two</option>
          <option>more</option>
        </Form.Select>
      </Form.Group>






            </>
        )
    }
}

export default Myform