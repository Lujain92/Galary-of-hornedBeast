import React from "react";
import HornedBeast from "./HornedBeast";



import Row from 'react-bootstrap/Row';
class Main extends React.Component{
    // let x = {this.props.dataJson};
    // constructor(props){
    // super(props)}


    render(){
        return(
            <div>
                
              <Row xs={1} md={5} className="g-4">
              {this.props.dataJson.map((animal, i) => <HornedBeast title={animal.title} image={animal.image_url} des={animal.description} xx={this.props.modell} /> )}
              
              </Row>

              {/* 2)1)send function from parent to child  */}
            </div>
        )
    }
}

export default Main
