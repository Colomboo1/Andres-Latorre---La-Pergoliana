import React from 'react';
import "./scss/styles/styles.scss"

/* IMPORTAMOS DE react-router-dom */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import ListProducts from "./components/ListProducts";
import ItemDetailContainer from './components/ItemDetailContainer';
import SizeClothes from './pages/SizeClothes';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Home from "./pages/Home"
import CheckOut from './components/CheckOut';
import FormOfBuy from './pages/FormOfBuy';

export default function App() {
  return (
    /* envolvemos todo en BrowserRouter */
    <BrowserRouter>
      {/* La Navbar afuera de Routes para que se muestre en todas las rutas */}
      <NavBar />

      {/* aca empiezan las rutas */}
      <Routes>
        {/* la HOME */}
        <Route path="/" element={<Home/>} />
        {/* filtramos por categoria */}
        <Route
          path="/category/:category"
          element={<ListProducts />}
        />
        {/* vista de detalle */}
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
        {/*rutas que no existen se redireccionan */}
        <Route path="*" element={<Navigate to="/" />} />
        {/*Tabla de medidas */}
        <Route path="/Size" element={<SizeClothes />} />
        {/*Contacto */}
        <Route path="/Contact" element={<Contact />} />
        {/*Contacto */}
        <Route path="/AboutUs" element={<AboutUs />} />
        {/*productos */}
        <Route path="/products" element={<ListProducts />} />
        {/*cartview */}
        <Route path="/checkout" element={<CheckOut />} />
        {/*formulario de compra */}
        <Route path="/formofbuy" element={<FormOfBuy />} />
      </Routes>
    </BrowserRouter>
  );
}
