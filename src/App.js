import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import DetailProduct from './DetailProduct'

// REDUX
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducer from './Redux/Reducers/index'

const store = createStore(allReducer)

class App extends React.Component{
  render(){
    return (
      <>
        <Provider store={store}>

          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path='/detail-product' component={DetailProduct}/>
            </Switch>
          </BrowserRouter>
          
        </Provider>
      </>
    );
  }
}

export default App;
