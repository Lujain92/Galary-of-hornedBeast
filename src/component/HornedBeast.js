import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image} onClick={this.incrementfav} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.des} 
        favourite :{this.state.description} 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


</div>


        )
    }
}

export default HornedBeast