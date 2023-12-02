import React from 'react';
import Signin from './Components/Layout/auth/Signin';
import LoginPage from './Components/Layout/auth/LoginPage';
import Pannier from '../src/Pages/Panier/Pannier';
import Home from './Pages/Acceuil/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produit from './Pages/Produits/cart';
import { CartProvider, useCart } from './Context/Mycontext';

import './App.css'
import Page from './Components/Layout/Page';
import Contact from './Pages/PageContact/ContactPage';
import Profile from './Pages/Espaceclient/Espaceclients';




function App() {
  return (
    < div className="App">



      <BrowserRouter>
        <CartProvider>

          <Page>


            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Espaceclients" element={<Profile />} />


              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/loginPage" element={<LoginPage />} />
              <Route path="/pannier" element={<Pannier />} />
              <Route path="/cart" element={<Produit />} />
              <Route path="/ContactPage" element={<Contact />} />
            </Routes>
          </Page>
        </CartProvider>
      </BrowserRouter>





    </div>
  );
}

export default App;



