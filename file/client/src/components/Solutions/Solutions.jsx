import React from 'react'
import "./Solutions.css"
import { Button } from 'reactstrap';
import CheckIcon from '@mui/icons-material/Check';
function Solutions() {
  return (
  <>
  <section>
  <div className="container" id='container4'>
    <div className="first">
        <img src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp" alt="" />
    </div>
    <div className="middle">
        <h2>We Have <span id='span2'>Legal Solutions</span> </h2>
        <p id='firstp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
    <p id='secondp'>Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
    <span id="check"><CheckIcon />Aperiam iste nam molestias</span> <br />
    <span id="check"><CheckIcon />Modi perferendis ipsa</span> <br />
    <span id="check"><CheckIcon />Perspic iste culpa</span> <br />

    
    </div>
    <div className="third">
       
            <h3>How to download and register?</h3>
            < div id='up'><p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
        </div>
        <h3>How to download and register?</h3>
        <h3>How to download and register?</h3>
    </div>
  </div></section>

  </>
  )
}

export default Solutions