import axios from 'axios'
import React from 'react'

export default class Navbar extends React.Component{

    state = {
        totalCarts: 0
    }

    componentDidMount(){
        // axios.get('http://localhost:2000/carts?userId=3')
        // .then((res) => {
        //     console.log(res.data.length)
        //     this.setState({totalCarts: res.data.length})
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }

    render(){
        return(
            <div className='bg-warning' style={{height: '75px'}}>
                <div className="container">
                    <div className="row align-items-center" style={{height: '75px'}}>
                        <div className="col-12">
                            {/* Keranjang Belanja Anda : {
                                this.state.totalCarts?
                                    this.state.totalCarts
                                :
                                    0
                            } */}
                            Keranjang Belanja Anda : {this.props.dataCart}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}