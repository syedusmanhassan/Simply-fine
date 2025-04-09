
import './App.css';
import Navbar from './Navbar';
import HeroSection from "./HeroSection"
import Learn from './Learn';
import Solution from "./Solution"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <Learn/>
     <Solution/>
    </div>
  );
}

export default App;
