import React from "react";
import HornedBeast from "./HornedBeast";
import Data from "./Data.json";


import Row from 'react-bootstrap/Row';
class Main extends React.Component{
    render(){
        return(
            <div>
                <Row xs={1} md={5} className="g-4">
              {Data.map((animal, i) => <HornedBeast title={animal.title} image={animal.image_url} des={animal.description} /> )}
              </Row>
            </div>
        )
    }
}

export default Main