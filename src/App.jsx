import './App.css';
import Logo from "./images/logo.svg"
import Vr from "./images/desktop/image-interactive.jpg"
import DeepEarth from "./images/desktop/image-deep-earth.jpg"
import NightArcade from "./images/desktop/image-night-arcade.jpg"
import SoccerTeam from "./images/desktop/image-soccer-team.jpg"
import TheGrid from "./images/desktop/image-grid.jpg"
import Above from "./images/desktop/image-from-above.jpg"
import Pocket from "./images/desktop/image-pocket-borealis.jpg"
import Curiosity from "./images/desktop/image-curiosity.jpg"
import Fisheye from "./images/desktop/image-fisheye.jpg"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="nav">
            <div className="nav-item">About</div>
            <div className="nav-item">Careers</div>
            <div className="nav-item">Events</div>
            <div className="nav-item">Products</div>
            <div className="nav-item">Support</div>
          </div> 
        </div>  
        <div className="immersive">
          <h2>Immersive experiences that deliver</h2>
        </div>
      </div>
      
      <div className="main">
        <div className="main2">
          <div className="vr">
            <img src={Vr} alt='vr'/>
          </div>
          <div className="leader">
            <h2>The leader in interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class virtual reality 
              projects for some of the best companies around the globe. Our award-winning 
              creations have transformed businesses through digital experiences that bind 
              to their brand.
            </p>
          </div>
        </div>
        
        <div className="main3">
          <div className="creations">
            <h2>Our creations</h2>
            <button>
              <p>See all</p>
            </button>
          </div>
          
          <div className="rows">
            <div className="row1">
              <div className="card">
                <img src={DeepEarth} alt='deep earth'/>
                <h3>Deep earth</h3>
              </div>
              <div className="card2">
                <img src={NightArcade} alt='night arcade'/>
                <h3>Night arcade</h3>
              </div>
              <div className="card3">
                <img src={SoccerTeam} alt='soccer team'/>
                <h3>Soccer team VR</h3>
              </div>
              <div className="card4">
                <img src={TheGrid} alt='the grid'/>
                <h3>The grid</h3>
              </div>
            </div>
            
            <div className="row2">
              <div className="card5">
                <img src={Above} alt='from above'/>
                <h3>From up above VR</h3>
              </div>
              <div className="card6">
                <img src={Pocket} alt='pocket borealis'/>
                <h3>Pocket borealis</h3>
              </div>
              <div className="card7">
                <img src={Curiosity} alt='the curiosity'/>
                <h3>The curiosity</h3>
              </div>
              <div className="card8">
                <img src={Fisheye} alt='make it fisheye'/>
                <h3>Make it fisheye</h3>
              </div>
            </div>
          </div>
        </div>
      
        <div className="footer">
          <Footer />
          </div>
      </div>
    </div>
  );
}

export default App;