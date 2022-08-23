import React from "react";


import Header from "./component/Header"
import Footer from "./component/Footer"
import Main from "./component/Main"
import Data from"./component/Data.json"
import SelectedBeast from "./component/SelectedBeast"
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      modall : 0

    }
  }

  modal=()=>{

    this.setState({
      modall:this.state.modall +1


    })
  }
  render(){
    return (
      <div>
        <Header/>
        <Main dataJson={Data} modell={this.modal}/>
        <SelectedBeast modalview ={this.state.modall}/>

        <Footer/>
      </div>
    )
  }

}

export default App