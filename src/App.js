import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Routes} from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AllProducts from './components/AllProducts';
import Product from './components/Product';

export default function App() {
    return (
        <div>
            <Header/>
                <Routes>
                    <Route path={"/home"} element={<HeroSection />}></Route>
                    <Route path={"/allproducts"} element={<AllProducts />}></Route>
                    <Route path={"/product/:productId"} element={<Product />}></Route>

                </Routes>
            <Footer/>
        </div>
    );
}
