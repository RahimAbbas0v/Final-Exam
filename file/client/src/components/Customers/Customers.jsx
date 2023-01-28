import React from 'react'
import { Button } from 'reactstrap';
import "./Customers.css"

function Customers() {
    return (
        <>
        <div className="background">
            <section id='section4'>
                <div className="container">
                    <h2>Happy Customers</h2>
                    <div className="row">
                        <div className="col-4">
                            <div className="card3">
                                <div className="card-head">
                                    <img src="https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp" alt="" />
                                    <div className="card-name">
                                        <p>Lina Gold</p>
                                        <p style={{color:"grey"}}>Owner, Ford</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                                </div>
                            </div></div>
                            <div className="col-4">
                            <div className="card3">
                                <div className="card-head">
                                    <img src="https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp" alt="" />
                                    <div className="card-name">
                                        <p>Mike Fisher</p>
                                        <p style={{color:"grey"}}>Owner, Ford</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                                </div>
                            </div></div>
                            <div className="col-4">
                            <div className="card3">
                                <div className="card-head">
                                    <img src="https://preview.colorlib.com/theme/notary/images/person_3.jpg.webp" alt="" />
                                    <div className="card-name">
                                        <p>Sheen Yu</p>
                                        <p style={{color:"grey"}} >Owner, Ford</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                                </div>
                            </div></div>
                    </div>
                </div>
            </section></div>
        </>
    )
}

export default Customers