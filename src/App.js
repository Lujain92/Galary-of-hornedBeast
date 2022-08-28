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
      selBeast:{},
      selected:Data

      

    }
  }

  modal=(title)=>{  
    const SelectedBe=Data.find(beast=>beast.title===title);

    this.setState({
      modall:true,
      selBeast:SelectedBe
      

     


    })
  }

  handleClose=()=>{  

    this.setState({
      modall:false


    })
  }
//parseInt(e.target.numberOf.value ===x.horns)
  choose=(e)=>{
    const sel= Data.filter((x)=> 1
    )

      this.setState({
      selected:sel
    })
    console.log("ddd",e.target.numberOf.value)

  }
   

  render(){
    
    return (
      <div>
        <Header/>
        <Myform choose={()=>{this.choose(this.props.e)}}/>
        {console.log("selected",this.state.selected)}

    
        <Main dataJson={Data} modell={this.modal} selected={this.state.selected} /> 
        {/* {console.log("aaa",this.state.selBeast)} */}
        <SelectedBeast modalview ={this.state.modall} handle={this.handleClose} selBeast={this.state.selBeast}/>
       

        <Footer/>
      </div>
    )
  }

}

export default App