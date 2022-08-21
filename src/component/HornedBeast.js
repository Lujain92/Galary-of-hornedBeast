import React from "react";

class HornedBeast extends React.Component{
    render(){
        return(
            <div>
                <h2>
                    animal name is: {this.props.name}
                </h2>
                {/* <img src="" alt="" title=""> {this.props.img}</img> */}
                
                <p> animal description: {this.props.des}</p>
            </div>
        )
    }
}
export default HornedBeast