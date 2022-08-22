import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component{
    render(){
        return(
            // <div>
            // <h2>
            //     {this.props.title}

            // </h2>
            // <img src= {this.props.image} alt={this.props.title}></img>
            //     <p>
            //         {this.props.des}

            //     </p>
            // </div>
<div>

    {/* <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={this.props.image} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.des}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row> */}


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.des}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>


        )
    }
}

export default HornedBeast