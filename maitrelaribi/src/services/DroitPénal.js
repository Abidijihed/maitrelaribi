import React from "react";
import './CriminalLawComponent.css'; // Add a separate CSS file for styling

const CriminalLawComponent = () => {
  return (
    <div className="criminal-law-container">
      <h2>Droit Pénal</h2>
      <img src='https://i.pinimg.com/564x/ad/95/4a/ad954aa4680ff83a1f82b7c1255e93fd.jpg' alt="Business Law" className="business-law-image" />

      <p>
        Notre rôle est d’aider notre client dans les démarches à effectuer pour le traitement de son dossier, se charger de le conseiller et de défendre ses intérêts. Avec notre bonne maîtrise du vocabulaire durant le procès, nous travaillons suivant un plan d’action efficace dans la défense de notre client devant les tribunaux tunisiens.
      </p>
    </div>
  );
};

export default CriminalLawComponent;
