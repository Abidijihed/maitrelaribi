import React from "react";
import './CivilLawComponent.css'; // Add a separate CSS file for styling

const CivilLawComponent = () => {
  return (
    <div className="civil-law-container">
      <h2>Droit civil - Recouvrement de créances</h2>
      <img src='https://i.pinimg.com/564x/ca/34/b0/ca34b04df3a30bd16c052590f858c86b.jpg' alt="Business Law" className="business-law-image" />

      
      <p>
        Notre équipe d'avocats possède une vaste expérience dans la résolution de litiges judiciaires, extrajudiciaires, nationaux et transfrontaliers entre personnes physiques ou morales. Nous fournissons des conseils juridiques en matière de recouvrement de créances en voie amiable ou phase judiciaire.
      </p>
      <p>En savoir plus (s’ouvre : « contactez-nous directement pour recevoir notre assistance juridique par un avocat »)</p>
    </div>
  );
};

export default CivilLawComponent;
