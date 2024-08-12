import Menu from './components/Menu';
import Info from './components/Info';
import Logo from './components/Logo';

import './W3style.css';
import './App.css';
import background from './images/background.jpg'

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
        <Logo />
        <Menu />
        <Info />
    </div>
  );
}

export default App;
