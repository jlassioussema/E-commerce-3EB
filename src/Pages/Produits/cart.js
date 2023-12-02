import React, { useEffect, useState } from 'react';
import { useCart } from '../../Context/Mycontext';
import { collection, getDocs } from "@firebase/firestore";
import { db } from '../../Config/firebas';

const Produit = () => {
  const { addItemToCart } = useCart();
  const [produits, setProduits] = useState([]);

  const listProduitsRef = collection(db, "prod");

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const querySnapshot = await getDocs(listProduitsRef);
        const produitsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProduits(produitsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduits();
  }, [listProduitsRef]);

  return (
    <div className="w3-container w3-content w3-padding-64" style={{ maxWidth: '800px' }} id="contact">
      <h6 className="w3-wide w3-center">Merci de créer un compte avant de passer une commande</h6>

      <div className="product-grid p-3 d-flex flex-wrap justify-content-center">
        {produits.map((produit) => (
          <div key={produit.id} className="card m-2 shadow" style={{ flex: '0 0 30%', maxWidth: '25%' }}>
            <img
              src={produit.image}
              className="card-img-top rounded-top"
              alt={produit.nom}
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{produit.nom}</h5>
              <p className="card-title" style={{ textDecoration: "underline", fontWeight: 'bold' }}>Prix: {produit.prix}$</p>
              <button
                onClick={() => addItemToCart({
                  image: produit.image,
                  nom: produit.nom,
                  prix: produit.prix
                })}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produit;




