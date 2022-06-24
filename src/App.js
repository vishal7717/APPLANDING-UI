import React from "react";
import Hearder from './Components/Hearder.jsx';
import Feature from "./Components/Feature.jsx";
import About from "./Components/About.jsx";
import Presentation from "./Components/Presentation.jsx";
import Contact from "./Components/Contact.jsx";
import aboutimage from './images/ggggg.png';
import aboutimage1 from './images/download.png';

function App() {
  return (
    <div className="App">
     <Hearder/>
     <Feature/>
     <About image={aboutimage} alt="about" title='Comes with All You Need For Daily Life' button='Get More'/>
     <Presentation/>
     <About image={aboutimage1} title='Download And Get The App' button='Download'/>
     <Contact/>
    </div>
  );
}

export default App;
