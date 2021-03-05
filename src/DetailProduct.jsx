import axios from "axios"
import React from "react"

class DetailProduct extends React.Component {

    updateCart = () => {
        let dataToSend = {
            userId: 3,
            productId: 2,
            quantity: 1
        }

        axios.post('http://localhost:2000/carts', dataToSend)
        .then((res) => {
            axios.get('http://localhost:2000/carts?userId=3')
            .then((res) => {
                this.props.bebas(res.data.length)
            })
            .catch((err) => {
                console.log(err)
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render () {
        return (
            <div className= "container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div>
                            <img src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/728/0172811_PE327002_S4.jpg" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="mt-5">
                            <h1>
                                Meja Kantor
                            </h1>
                            <p className="font-italic">
                                Sold : 2 Products
                            </p>
                            <h3>
                                Rp. 5.000.000
                            </h3>
                            <hr/>
                        </div>

                        <div>
                            <p>
                                Stock : 20 items
                            </p>

                            <p>
                                Weight: 7 kg
                            </p>
                            <hr/>
                        </div>

                        <div>
                            <h5>
                                Category :
                            </h5>
                            <p>
                                Perabotan Kantor
                            </p>
                        </div>

                        <div className="mt-5 mb-3 d-flex justify-content-center">
                            <input type="button" value="Add To Cart" className="btn btn-primary" style={{width: "300px"}} onClick={this.updateCart} />
                        </div>


                    </div>
    
                </div>
            </div>
        )
    }

}

export default DetailProduct