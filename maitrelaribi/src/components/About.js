// PhotoSection.js

import React from "react";
import "./Presentation.css"; // Import the corresponding CSS file
import image from "./fouzi.jpg";

const PhotoSection = () => {
  return (
    <section className="photo-section">
      <div className="content-container">
        <div className="presentation-container">
  <h2 className="presentation-title">Présentation</h2>
  <p className="presentation-text">
    Le Cabinet d’Avocat LAARIBI LAW FIRM se distingue en tant que leader
    dans le domaine du <a href="#">droit des affaires en Tunisie</a>. Avec de nombreuses
    années d’expérience à notre actif, notre cabinet s’est spécialisé
    dans divers domaines, y compris les droits des Tunisiens à
    l’étranger, les expatriés en Tunisie et les investissements dans le
    pays. Notre engagement envers nos clients va au-delà du simple
    conseil juridique. Nous nous efforçons également de les représenter
    de manière vigoureuse devant les tribunaux, protégeant ainsi
    activement leurs intérêts. Chez LAARIBI LAW FIRM, nous mettons tout
    en œuvre pour accompagner nos clients tout au long de leur parcours
    juridique. Notre équipe d’avocats expérimentés s’engage à fournir un
    service juridique exceptionnel, offrant des solutions sur mesure et
    adaptées à chaque situation. Que vous soyez un tunisien à l’étranger
    cherchant à protéger vos droits, un expatrié ayant besoin
    d’assistance en Tunisie ou un investisseur envisageant des
    opportunités dans le pays, notre cabinet est là pour vous offrir un
    soutien professionnel et compétent pour naviguer dans le monde
    complexe du droit des affaires en Tunisie.
  </p>
</div>

      </div>
    </section>
  );
};

export default PhotoSection;
