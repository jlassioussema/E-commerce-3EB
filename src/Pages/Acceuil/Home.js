import React, { useState, useEffect } from "react";
import logg from './../Acceuil/body1.jpg';
import log1 from './../Acceuil/body2.jpg';
import Geoloc from "../../Geo/Geoloc";
import Contact from "../PageContact/ContactPage";


function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { src: logg, alt: "" },
        { src: log1, alt: "" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [])

    return (


        <div className="w3-content" style={{ maxWidth: "900px", marginTop: "15px" }}>
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`mySlides w3-display-container w3-center ${index === currentSlide ? '' : 'w3-hide'}`}
                >
                    <img
                        src={slide.src}
                        alt={slide.alt}
                        style={{ width: "90%", height: "50" }}
                    />

                    <div className="w3-container w3-content w3-center w3-padding-64" style={{ maxWidth: '800px' }} >
                        <h2 className="w3-wide">beTunisi</h2>
                        <p className="w3-opacity">notre site</p>
                        <p className="w3-justify">
                            Bienvenue à votre destination en ligne pour découvrir et acquérir des trésors artisanaux uniques, tous fabriqués avec amour et habileté par des artisans talentueux en Tunisie. Plongez dans notre collection exceptionnelle de produits faits à la main, où chaque pièce raconte une histoire et incarne le riche héritage artisanal de notre belle nation. Parcourez notre boutique en ligne avec l'assurance que chaque produit que vous choisissez a été sélectionné avec soin pour sa qualité exceptionnelle et son caractère distinctif. BeTunsi est bien plus qu'un simple site de vente en ligne ; c'est une plateforme où l'art et la tradition se rencontrent pour créer une expérience d'achat significative.

                            Merci de faire partie de notre voyage artisanal. Découvrez la magie du "handmade" tunisien et laissez-vous inspirer par la créativité infinie de nos artisans exceptionnels.
                        </p>
                        <div className="w3-row w3-padding-32">

                        </div>
                    </div>
                </div>


            ))}



            <div style={{ flex: 1 }}>
                <Contact />
                <Geoloc />
            </div>

        </div>

    );
}

export default Home;


