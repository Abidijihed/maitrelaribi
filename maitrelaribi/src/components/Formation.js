import React from "react";
import './FormationComponent.css'; // Add a separate CSS file for styling

const FormationComponent = () => {
  return (
    <div className="formation-container">
      <h2>Formation</h2>
      <p>
        LAARIBI LAW FIRM propose des sessions de formation sur mesure et adaptées aux besoins opérationnels des entreprises, ONG et de leurs cadres. Les formations proposées couvrent un large éventail de sujets :
      </p>
      <ul>
        <li>Droit bancaire</li>
        <li>Droit de l’Énergie</li>
        <li>Droit de la concurrence</li>
        <li>Protection des données personnelles</li>
        <li>Droit international pénal</li>
        <li>Droit international humanitaire</li>
        <li>Lutte contre le financement du terrorisme et le blanchiment d’argent</li>
        <li>Droit et contentieux administratifs</li>
        <li>Gouvernance et lutte contre la corruption</li>
      </ul>
    </div>
  );
};

export default FormationComponent;
