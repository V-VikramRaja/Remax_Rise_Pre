import "./App.css";
import NavBar from "./components/Pages/Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import { About } from "./components/Pages/About/About";
import Buy from "./components/Pages/Buy/Buy";
import { Sell } from "./components/Pages/Sell/Sell";
// import { Rent } from "./components/Pages/Rent/Rent";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Pages/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />

      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Contact />} />
          <Route path="/rent" element={<Buy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
