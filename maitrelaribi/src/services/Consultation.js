import React from "react";
import './ConsultationComponent.css'; // Add a separate CSS file for styling

const ConsultationComponent = () => {
  return (
    <div className="consultation-container" style={{marginTop:"25px"}}>
      <h2>Désirez-vous une consultation?</h2>
      <p>
        Dites-nous ce qui vous est arrivé :
      </p>
      <ul>
        <li>Vous souhaitez créer ou transférer une société?</li>
        <li>Avez-vous besoin d'une assistance juridique pour les successions, les héritages et les testaments?</li>
        <li>Vous recherchez des avocats spécialisés dans le contentieux et le règlement des différends?</li>
        <li>Avez-vous besoin d'aide pour un recours administratif?</li>
        <li>Avez-vous besoin de conseils juridiques en matière de droit pénal ou civil?</li>
        <li>Voulez-vous l'avis d'un avocat spécialisé en divorce ou mariage?</li>
        <li>Problèmes avec la banque pour un prêt ou compte courant?</li>
      </ul>
    </div>
  );
};

export default ConsultationComponent;
