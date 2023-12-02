import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../../Context/Mycontext';
import logg from '../../../../src/be.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../Config/firebas';
import './header.css';

function Header() {
    const { cartItems } = useCart();
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('Déconnexion réussie !');
        } catch (error) {
            console.error('Erreur de déconnexion :', error.message);
        }
    };

    return (
        <nav className="header_choix">
            <span
                className="p-3"
                onClick={() => navigate('/Home')}
                style={{ cursor: 'pointer', backgroundColor: "white", fontFamily: "fantasy" }}
            >
                BeTounsi
            </span>
            {/* Le reste de votre code ... */}
            <div className="header_choix">
                <Link to="/cart" className="header_choixthree">
                    Produit
                </Link>

                <div style={{ position: 'relative' }}>
                    {isAuth && (
                        <div
                            style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '20px',
                                backgroundColor: 'orange',
                                position: 'absolute',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                bottom: '10px',
                                left: '6px',
                            }}
                        >
                            {cartItems.length}
                        </div>
                    )}

                    {isAuth && (
                        <FaShoppingCart
                            onClick={() => navigate('/pannier')}
                            className="useicone"
                        />
                    )}
                </div>
                <Link to="/ContactPage" className="header_choixthree">
                    Contact
                </Link>
                {!isAuth && (
                    <>
                        <FaUser className="useicone" />
                        <Link to="/Signin" className="header_choixone">
                            Se connecter
                        </Link>
                    </>
                )}
                {isAuth && (
                    <Link to="/Espaceclients" className='header_choixfour'>
                        Espace client
                    </Link>
                )}
                <FaUser className="useicone" />
                {!isAuth && (
                    <Link to="/LoginPage" className="header_choixtwo">
                        Connexion
                    </Link>
                )}
                {isAuth && <button onClick={handleLogout}>Déconnexion</button>}
            </div>
        </nav>
    );
}

export default Header;
