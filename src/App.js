import React from "react";
import HornedBeast from "./component/HornedBeast";

class App extends React.Component{
  render(){
    return (
      <div>
        <header>
          <h1>
            My first react app
          </h1>
          <HornedBeast name='dog' des='bite'/>
        <HornedBeast name='Cat'  des='cute'/>

        </header>

        <main>

        </main>

        <footer>
          <p>
            &copy; copy right for lujain aljarrah
          </p>

        </footer>
        
      </div>
    )
  }

}

export default App