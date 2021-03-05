import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import DetailProduct from './DetailProduct'

class App extends React.Component{

  state = {
    totalCarts: 0
  }

  updateTotalCarts = (data) => {
    this.setState({totalCarts: data})
    console.log(data)
  }

  render(){
    return (
      <>
        <BrowserRouter>
          <Navbar dataCart = {this.state.totalCarts} />
          <Switch>
            <Route path='/detail-product' render={() => <DetailProduct bebas={this.updateTotalCarts} />} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
