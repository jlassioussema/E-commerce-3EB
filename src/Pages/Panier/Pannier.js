import React, { useState, useEffect } from 'react';
import { useCart } from '../../Context/Mycontext';
import PayPal from '../paypal';
import { auth, db } from '../../Config/firebas';
import { collection, addDoc } from 'firebase/firestore';


function Pannier() {
    const { cartItems, removeItemFromCart } = useCart();
    const [checkout, setCheckOut] = useState(false);

    const totalAmount = cartItems.reduce((acc, product) => acc + parseFloat(product.prix), 0);

    useEffect(() => {
    }, [cartItems]);

    const handleCheckout = async () => {
        // Enregistrez l'achat dans la collection 'achats'
        const currentUser = auth.currentUser;
        if (currentUser) {
            const achatsRef = collection(db, 'achats');

            cartItems.forEach(async (product) => {
                await addDoc(achatsRef, {
                    email: currentUser.email,
                    montant: parseFloat(product.prix),
                    nomProduit: product.nom,
                });
            });

            setCheckOut(true);
        }
    };


    const handleRemoveFromCart = (product) => {
        removeItemFromCart(product);
    };

    return (
        <div className="product-grid p-3 d-flex flex-wrap justify-content-center">
            {cartItems.map((product, index) => (
                <div key={index} className="card m-2 shadow" style={{ width: '18rem' }}>
                    <img
                        src={product.image}
                        className="rounded-top mx-auto d-block"
                        alt={product.nom}
                        style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.nom}</h5>
                        <p className="card-text">Price: ${product.prix}</p>
                        <button
                            onClick={() => handleRemoveFromCart(product)}
                            className="btn btn-danger"
                            style={{ width: '100%' }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            <div className="App">
                {cartItems.length > 0 && (
                    <div>
                        <p>Total Amount: ${totalAmount}</p>
                        {checkout ? (
                            <PayPal amount={totalAmount} onClick={handleCheckout} />
                        ) : (
                            <button className="btn btn-primary mt-2">
                                Checkout
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Pannier;
