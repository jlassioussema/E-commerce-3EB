import React, { useState } from 'react';
import './signin.css';
import { FaUser } from 'react-icons/fa';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Config/firebas';

function Signin() {
    const [registreemail, setregistreemail] = useState('');
    const [registrepassword, setregistrepassword] = useState('');
    const [error, setError] = useState(null);

    const register = async () => {
        try {
            // Valider l'email et le mot de passe
            if (!registreemail || !registrepassword) {
                setError("Veuillez remplir tous les champs.");
                return;
            }

            // Valider la longueur du mot de passe (vous pouvez ajouter d'autres validations)
            if (registrepassword.length < 6) {
                setError("Le mot de passe doit contenir au moins 6 caractères.");
                return;
            }

            // Créer l'utilisateur si l'email et le mot de passe sont valides
            await createUserWithEmailAndPassword(auth, registreemail, registrepassword);

            // Réinitialiser les champs et les erreurs après une inscription réussie
            setregistreemail('');
            setregistrepassword('');
            setError(null);
        } catch (error) {
            // Gérer les erreurs Firebase ici
            setError(error.message);
        }
    };

    return (
        <div className='Signin'>
            <form className='styleform'>
                <FaUser className='icon' />
                <h5>Email</h5>
                <input
                    type="email"
                    className='stylemail'
                    value={registreemail}
                    onChange={(event) => setregistreemail(event.target.value)}
                />

                <h5>Password</h5>
                <input
                    type="password"
                    className='sylepass'
                    value={registrepassword}
                    onChange={(event) => setregistrepassword(event.target.value)}
                />

                {error && <p className="error-message">{error}</p>}

                <button type="button" className='sign_button' onClick={register}>
                    Signin
                </button>
            </form>
        </div>
    );
}

export default Signin;
