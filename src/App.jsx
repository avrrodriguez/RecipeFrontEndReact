import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search pageTitle="Search" />} />
            <Route path="/login" element={<Login pageTitle="Login" />} />
            <Route path="/signup" element={<Signup pageTitle="Signup" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
