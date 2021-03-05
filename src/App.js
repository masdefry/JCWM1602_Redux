import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import DetailProduct from './DetailProduct'

// REACT ROUTER DOM


class App extends React.Component{
  render(){
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/detail-product' component={DetailProduct} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
