import { Link } from "react-router-dom";

import './../W3style.css'


export const NotFound = () => {
  return (
    <div className="w3-display-middle w3-text-white w3-jumbo">
        <p>
            Error 404 Page Not Found
        </p>
        <Link to={"/"} > Volver a Inicio </Link>
    </div>
  )
}
