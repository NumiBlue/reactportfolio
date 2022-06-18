import About from "./components/About";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <div>
      <Intro />
      <Navbar />

      <About />
    </div>
  );
}

export default App;
