import React, { useState } from 'react';
import './login.css';
import { FaUser } from 'react-icons/fa';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Config/firebas';
import { useNavigate } from 'react-router-dom';
import Home from '../../../Pages/Acceuil/Home';

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successful!');
            setLoginError('');
            setEmail('');
            setPassword('');
            // Redirect to the client space page
            navigate('/Home');
        } catch (error) {
            console.error('Login error:', error.message);
            setLoginError('Erreur de connexion. Veuillez vérifier votre email et mot de passe.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation de l'email
        if (!email) {
            setEmailError('Veuillez entrer votre email.');
        } else {
            setEmailError('');
        }

        // Validation du mot de passe
        if (!password) {
            setPasswordError('Veuillez entrer votre mot de passe.');
        } else {
            setPasswordError('');
        }

        // Si les champs sont valides, vous pouvez ajouter ici une logique pour soumettre les données
        if (email && password) {
            // Ajoutez votre logique de soumission ici
            login(); // Call the login function
        }
    };

    return (
        <div className='LoginPage'>
            <form className='loginStyleForm' onSubmit={handleSubmit}>
                <FaUser className='icon' />
                <h5 className='fs-4 mt-4'>Email</h5>
                <input
                    type="email"
                    className='loginStyleMail'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <p className="error">{emailError}</p>

                <h5>Password</h5>
                <input
                    type="password"
                    className='loginStylePass'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <p className="error">{passwordError}</p>

                <p className="error">{loginError}</p>

                <button type="submit" className='loginSignButton'>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;




