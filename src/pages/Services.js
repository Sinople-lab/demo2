import { Link } from 'react-router-dom'

import './../W3style.css'

const Services = () => {
  return (
    <div id="menu" class="">
        <div class="w3-modal-content w3-animate-zoom">
            <div class="w3-container w3-black w3-display-container">
                <Link to={"/"} class="w3-button w3-display-topright w3-large">x</Link>
                <h1>Servicios Basicos</h1>
            </div>
            <div class="w3-container">
                <h5>Retiro de Esmalte <b>$20.50</b></h5>
                <h5>Esmaltado Tradicional <b>$100.50</b></h5>
                <h5>Decorado Frances <b>$100.00</b></h5>
            </div>
            <div class="w3-container w3-black">
                <h1>Manicura con Gel</h1>
            </div>
            <div class="w3-container">
                <h5>Retiro de Gel en manos <b>$80.50</b></h5>
                <h5>Aplicacion de Gel <b>$50.50</b></h5>
                <h5>Manicura Rusa <b>$40.00</b></h5>
                <h5>Decorado Frances <b>$60.50</b></h5>
            </div>
        </div>
    </div>
  )
}

export default Services