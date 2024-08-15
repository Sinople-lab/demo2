import { Link} from 'react-router-dom';
import './../W3style.css'

const Menu = () => {
  return (
    <div className='w3-display-topleft w3-container w3-xlarge'>
        <p><Link to={"/servicios"}  class="w3-button w3-black">Servicios</Link></p>
        <p><Link to={"/contacto"} class="w3-button w3-black">Contacto</Link></p>
    </div>
  )
}

export default Menu