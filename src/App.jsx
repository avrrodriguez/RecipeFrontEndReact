
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import { Home } from "./pages/Home";
import { Search } from './pages/Search';
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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
