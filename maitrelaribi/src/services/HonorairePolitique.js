import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './HonorairesPolitiqueComponent.css';

const HonorairesPolitiqueComponent = () => {
  return (
    <div className="honoraires-politique-container" style={{marginTop:"25px"}}>
      <h2>Politique d’honoraires</h2>
      <p>
        A l'heure (avec fiche de temps passé)
      </p>
      <p>
        Le taux horaire variera suivant la complexité du dossier, la qualité et l’expérience des intervenants.
      </p>
      <Link to="/contact" className="contact-link">CONTACT</Link>

      <p>
        Au forfait
      </p>
      <p>
        Dès le début du dossier, nous convenons avec le client d’un honoraire fixe, dont le montant est ferme et définitif indépendamment du temps passé sur le dossier.
      </p>
      <Link to="/contact" className="contact-link">CONTACT</Link>

      <p>
        Au forfait réduit et complément de résultat
      </p>
      <p>
        Les honoraires forfaitaires peuvent également donner lieu à un honoraire de résultat en fonction de l'intérêt du dossier et de la contribution apportée par le Cabinet à son succès.
      </p>
      <Link to="/contact" className="contact-link">CONTACT</Link>

      <p>
        Selon une convention d’assistance annuelle
      </p>
      <p>
        L’intérêt de cette approche réside dans le développement d’une relation durable et dans l’acquisition d’une réelle connaissance de l’Entreprise au quotidien. Le client pourra ainsi faire appel aux services mis en place sans se soucier des honoraires devant être supportés.
      </p>
      <Link to="/contact" className="contact-link">CONTACT</Link>
    </div>
  );
};

export default HonorairesPolitiqueComponent;
