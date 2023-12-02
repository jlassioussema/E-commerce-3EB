import React, { useState } from 'react';
import { collection, addDoc } from "@firebase/firestore";
import { db } from '../../Config/firebas';

const Contact = () => {
    const [email, setEmail] = useState("");
    const [nomclt, setNomclt] = useState("");
    const [nmsg, setNmsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const clientNoteCollection = collection(db, "produits");

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            setLoading(true);

            if (!nomclt || !email || !nmsg) {
                throw new Error("Please fill out all fields");
            }

            await addDoc(clientNoteCollection, { Email: email, Nom: nomclt, msg: nmsg });

            setEmail("");
            setNomclt("");
            setNmsg("");
            setError("");
        } catch (error) {
            console.error("Erreur lors de l'ajout de la note :", error);
            setError("Échec de la soumission. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="w3-container w3-content w3-padding-64" style={{ maxWidth: '800px' }} id="contact">
            <h2 className="w3-wide w3-center">CONTACT</h2>
            <p className="w3-opacity w3-center"><i>Client? Laisse une note!</i></p>
            <div className="w3-row w3-padding-32">
                <div className="w3-col m6 w3-large w3-margin-bottom">
                    <i className="fa fa-map-marker" style={{ width: '30px' }}></i>Tunis, TN<br />
                    <i className="fa fa-phone" style={{ width: '30px' }}></i> Phone: +216 51924240<br />
                    <i className="fa fa-envelope" style={{ width: '30px' }}> </i> Email: oussemajlassi@gmail.com<br />
                </div>
                <div className="w3-col m6">
                    <form onSubmit={handleFormSubmit}>
                        <div className="w3-row-padding" style={{ margin: '0 -16px 8px -16px' }}>
                            <div className="w3-half">
                                <input
                                    className="w3-input w3-border"
                                    type="text"
                                    placeholder="Nom"
                                    required
                                    name="Nom"
                                    value={nomclt}
                                    onChange={(event) => setNomclt(event.target.value)}
                                />
                            </div>
                            <div className="w3-half">
                                <input
                                    className="w3-input w3-border"
                                    type="text"
                                    placeholder="Email"
                                    required
                                    name="Email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                        </div>
                        <input
                            className="w3-input w3-border"
                            type="text"
                            placeholder="Message"
                            required
                            name="Message"
                            value={nmsg}
                            onChange={(event) => setNmsg(event.target.value)}
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {loading && <p>Loading...</p>}
                        <button className="w3-button w3-black w3-section w3-right" type="submit" disabled={loading}>
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
