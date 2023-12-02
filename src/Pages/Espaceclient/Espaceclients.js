// UserPurchases.js

import React, { useState, useEffect } from 'react';
import { auth, db } from '../../Config/firebas';
import { collection, getDocs, query, where } from 'firebase/firestore';

function UserPurchases() {
    const [userPurchases, setUserPurchases] = useState([]);

    useEffect(() => {
        // Fetch user's purchases when the component mounts
        const fetchUserPurchases = async () => {
            const currentUser = auth.currentUser;
            if (currentUser) {
                const achatsQuery = query(collection(db, 'achats'), where('email', '==', currentUser.email));
                const achatsSnapshot = await getDocs(achatsQuery);
                const purchases = achatsSnapshot.docs.map(doc => doc.data());
                setUserPurchases(purchases);
            }
        };

        fetchUserPurchases();
    }, []);

    return (
        <div className="w3-container w3-content w3-padding-64" style={{ maxWidth: '800px' }} id="contact">
            <h2 className="w3-wide w3-center">Liste d'achats</h2>

            <div className="w3-row-padding" style={{ margin: '0 -16px 8px -16px', display: "flex" }}>
                <div className="w3-half">
                    {/* You may want to add some content or components here */}


                    <ul>
                        {userPurchases.map((purchase, index) => (
                            <li key={index}>
                                <p >Email: {purchase.email}</p>
                                <p>Produits achetés: {purchase.nomProduit}</p>
                                <p>Prix: {purchase.montant}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default UserPurchases;



