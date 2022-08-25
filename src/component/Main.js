import React from "react";
import HornedBeast from "./HornedBeast";



import Row from 'react-bootstrap/Row';
class Main extends React.Component{
    


    render(){
        return(
            <div>
                
              <Row xs={1} md={5} className="g-4">
              {this.props.dataJson.map((animal, i) => <HornedBeast title={animal.title} image={animal.image_url} des={animal.description} xx={this.props.modell} /> )}
              
              </Row>

            </div>
        )
    }
}

export default Main
