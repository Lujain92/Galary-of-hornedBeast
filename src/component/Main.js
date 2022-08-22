import React from "react";
import HornedBeast from "./HornedBeast";
import Data from "./Data.json";
class Main extends React.Component{
    render(){
        return(
            <div>
              {Data.map((animal, i) => <HornedBeast title={animal.title} image={animal.image_url} des={animal.description} /> )}
    
            </div>
        )
    }
}

export default Main