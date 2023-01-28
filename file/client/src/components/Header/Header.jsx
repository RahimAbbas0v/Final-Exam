import React from 'react'
import { Button } from 'reactstrap';
import "./Header.css"
function Header() {
  return (
    <header>
        <div className="container" id='container'>
            <div className="left">
                <h2>Notary Public & Legal Solutions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
            </div>
            <div className="right">
                <form action="" id='form'>
                    <h3>Book an Appointment</h3>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                <input type="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                <input type="date" class="form-control"  aria-label="Username" placeholder="Select your date" aria-describedby="basic-addon1" />
                <button>Book Apoitment</button>
                </form>
            </div>
        </div>
    </header>
  )
}

export default Header