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
      selBeast:{} 

      

    }
  }

  modal=(title)=>{  
    const SelectedBe=Data.find(beast=>beast.title===title);

    this.setState({
      modall:true,
      selBeast:SelectedBe,
      selected:{}

     


    })
  }

  handleClose=()=>{  

    this.setState({
      modall:false


    })
  }

  choose=()=>{
    this.setState({
      selected:ll
    })
  }

  render(){
    
    return (
      <div>
        <Header/>
        <Myform/>
        <Main dataJson={Data} modell={this.modal}/> 
        {console.log("aaa",this.state.selBeast)}
        <SelectedBeast modalview ={this.state.modall} handle={this.handleClose} selBeast={this.state.selBeast}/>
       

        <Footer/>
      </div>
    )
  }

}

export default App