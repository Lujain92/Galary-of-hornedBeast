import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './Style.css'
class HornedBeast extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      description:0
    } }
    incrementfav=()=>{
      this.setState({
        description :this.state.description+1
      })
    }
  
    render(){
        return(
            
<div>
<Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image} onClick={this.incrementfav} className="image" />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.des} 
        <br></br>
        favourite :{this.state.description} 
        </Card.Text>
        <Button variant="primary" onClick={()=>this.props.xx(this.props.title)}>Show a MODAL</Button>
      </Card.Body>
    </Card></Col>
    


</div>


        )
    }
}

export default HornedBeast