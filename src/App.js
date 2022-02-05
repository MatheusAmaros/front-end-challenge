import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import Home from './pages/Home'
import Book from "./pages/Book";
import Chapter from "./pages/Chapter";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

    

    return(
    
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:book" element={<Book />} />
            <Route path="/book/:book/:chapter" element={<Chapter />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    
    );
}  
export default App;