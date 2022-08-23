import React from "react";


import Header from "./component/Header"
import Footer from "./component/Footer"
import Main from "./component/Main"
import Data from"./component/Data.json"
class App extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <Main dataJson={Data}/>

        <Footer/>
      </div>
    )
  }

}

export default App