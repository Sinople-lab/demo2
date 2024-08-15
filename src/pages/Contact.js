import { Link } from 'react-router-dom'

import './../W3style.css'

const Contact = () => {
  return (
    <div id="contact" class="">
        <div class="w3-modal-content w3-animate-zoom">
            <div class="w3-container w3-black">
                <Link to={'/'}  class="w3-button w3-display-topright w3-large">x</Link>
                <h1>Contacto</h1>
            </div>
            <div class="w3-container">
                <p>Reserva una cita, dime si tienes una duda o solo enviame un mensaje:</p>
                <form action="/action_page.php" target="">
                    <p><input
                        class="w3-input w3-padding-16 w3-border"
                        type="text"
                        placeholder="Nombre"
                        required name="Name" /></p>
                    <p><input
                        class="w3-input w3-padding-16 w3-border"
                        type="number"
                        placeholder="Cuantas personas"
                        required name="People"/></p>
                    <p><input
                        class="w3-input w3-padding-16 w3-border"
                        type="datetime-local"
                        placeholder="Fecha y hora"
                        required name="date"
                        value="2024-08-16T20:00"/></p>
                    <p><input
                        class="w3-input w3-padding-16 w3-border"
                        type="text"
                        placeholder="Mensaje \ Preguntas"
                        required name="Message"/></p>
                    <p><button
                        class="w3-button"
                        type="submit">ENVIAR MENSAJE
                    </button></p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact