// BannerComponent.js
import React from "react";
import "./Flags.css";
// import { Link } from "react-router-dom";
// import { useNavigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const BannerComponent = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h1>Services / Activités - Expertise pluridisciplinaire</h1>
      <ul id="bannerList">
      {/* <li className="bannerItem" style={{ "--accent-color": "#001f3f" }}>
          <div className="title">Droit civil - Recouvrement de créances</div>
          <div className="descr">
          Notre équipe d'avocats possède une vaste expérience dans la résolution de litiges judiciaires, extrajudiciaires, nationaux et transfrontaliers entre personnes physiques ou morales. Nous fournissons des conseils juridiques en matière de recouvrement de créances en voie amiable ou phase judiciaire...
          </div>
        </li> */}
        <li className="bannerItem" style={{ "--accent-color": "rgb(0, 31, 63)",cursor:"pointer"}} onClick={()=>navigate('/DroitDesAffaires')} >
       <div className="title">Droit des affaires</div>
          <div className="descr">
            Le Département du droit des affaires, droit sociétés et droit
            commercial conseille juridiquement les entreprises, les opérateurs
            institutionnels, financiers, d'assurance et industriels lors de la
            création de sociétés, dans les activités ordinaires et
            extraordinaires de l'entreprise.Missions...
          </div>
          <button className="read-more-button" style={{ backgroundColor: "rgb(255, 215, 0)", fontSize: "12px", padding: "5px 8px", width: "80px",marginLeft:"40px" }} onClick={() => navigate('/DroitDesAffaires')}>
            Lire la suite
          </button>
        </li>
        <li className="bannerItem" style={{ "--accent-color": "rgb(0, 31, 63)" ,cursor:"pointer"}} onClick={()=>navigate('/DroitCivil')}>
          <div className="title">Droit civil - Recouvrement de créances</div>
          <div className="descr">
            Notre équipe d'avocats possède une vaste expérience dans la
            résolution de litiges judiciaires, extrajudiciaires, nationaux et
            transfrontaliers entre personnes physiques ou morales.
          </div>
          <button className="read-more-button" style={{ backgroundColor: "rgb(255, 215, 0)", fontSize: "12px", padding: "5px 8px", width: "80px",marginLeft:"40px" }} onClick={() => navigate('/DroitDesAffaires')}>
            Lire la suite
          </button>
        </li>
        <li className="bannerItem" style={{ "--accent-color": "rgb(0, 31, 63)" ,cursor:"pointer"}} onClick={()=>navigate('/DroitImmobilier')}>
          <div className="title">Droit Immobilier et Fiscal</div>
          <div className="descr">
          Le cabinet dispose d'une équipe d'avocats et collaborateurs spécialisés dans les litiges immobiliers et fiscales,. 
          </div>
          <button className="read-more-button" style={{ backgroundColor: "rgb(255, 215, 0)", fontSize: "12px", padding: "5px 8px", width: "80px",marginLeft:"40px" }} onClick={() => navigate('/DroitDesAffaires')}>
            Lire la suite
          </button>
        </li>
        <li className="bannerItem" style={{ "--accent-color": "rgb(0, 31, 63)"  ,cursor:"pointer"}} onClick={()=>navigate('/DroitDesAssurances')}>
          <div className="title">Droit des assurances et indemnisation des dommages</div>
          <div className="descr">
          Le Département du droit des assurances possède une vaste expérience dans les aspects extrajudiciaires...
          </div>
          <button className="read-more-button" style={{ backgroundColor: "rgb(255, 215, 0)", fontSize: "12px", padding: "5px 8px", width: "80px",marginLeft:"40px" }} onClick={() => navigate('/DroitDesAffaires')}>
            Lire la suite
          </button>
        </li>
        <li className="bannerItem" style={{ '--accent-color': "rgb(0, 31, 63)",cursor:"pointer"}} onClick={()=>navigate('/DroitPénal')}>
          <div className="title">Droit Pénal</div>
          <div className="descr">
          Notre rôle est d’aider notre  client dans les démarches à effectuer pour le traitement de son dossier,
           se charger de le conseiller et de défendre ses intérêts...
          </div>
          <button className="read-more-button" style={{ backgroundColor: "rgb(255, 215, 0)", fontSize: "12px", padding: "5px 8px", width: "80px",marginLeft:"40px" }} onClick={() => navigate('/DroitDesAffaires')}>
            Lire la suite
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BannerComponent;
