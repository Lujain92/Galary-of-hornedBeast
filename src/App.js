import React from "react";


import Header from "./component/Header"
import Footer from "./component/Footer"
import Main from "./component/Main"
import Data from"./component/Data.json"
import SelectedBeast from "./component/SelectedBeast"
import Myform from "./component/Myform";
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      modall : false,
      selbeast:{} 
      // selbeast is the data that I want to send so I create selbeast state with empty data

    }
  }

  modal=()=>{  

    this.setState({
      modall:true,
      


    })
  }

  handleClose=()=>{  

    this.setState({
      modall:false


    })
  }

  render(){
    return (
      <div>
        <Header/>
        <Myform/>
        <Main dataJson={Data} modell={this.modal}/> 
        
        <SelectedBeast modalview ={this.state.modall} handle={this.handleClose}/>
       

        <Footer/>
      </div>
    )
  }

}

export default App