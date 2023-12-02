// Mycontext.js
import React, { createContext, useContext, useState } from 'react';


// Create a context for the shopping cart
const CartContext = createContext();

// Create a provider for the shopping cart
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    // Create the value object to be passed to consumers of the context
    const value = {
        cartItems,
        addItemToCart,
        removeItemFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Create a custom hook to use the cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}; 
