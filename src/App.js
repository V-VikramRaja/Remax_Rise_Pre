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
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/Remax_Rise_Pre/" element={<Home />} />
            <Route path="/Remax_Rise_Pre/about" element={<About />} />
            <Route path="/Remax_Rise_Pre/buy" element={<Buy />} />
            <Route path="/Remax_Rise_Pre/sell" element={<Contact />} />
            <Route path="/Remax_Rise_Pre/rent" element={<Buy />} />
            <Route path="/Remax_Rise_Pre/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
