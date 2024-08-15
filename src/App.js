import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import { NotFound } from './pages/NotFound';
import Services from './pages/Services';
import Contact from './pages/Contact';

import './W3style.css';
import './App.css';
import background from './images/background.jpg'
//import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    errorElement: <NotFound />
  },
  {
    path:'/servicios',
    element:<Services />,
  },
  {
    path:'contacto',
    element: <Contact />
  },

])

function App() {

  const myStyle = {
    backgroundImage:`url(${background})`,
    height: "100vh",
    //marginTop: "-70px",
    //fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle} className='w3-display-container'>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
