import React from "react";
import './RealEstateTaxComponent.css'; // Add a separate CSS file for styling

const RealEstateTaxComponent = ({ selectedLanguage }) => {
  return (
    <div className="real-estate-tax-container">
      <h2>
        {selectedLanguage === 'ar'
          ? 'العقارات والضرائب'
          : selectedLanguage === 'fr'
          ? 'Droit Immobilier et Fiscal'
          : 'Real Estate and Tax Law'}
      </h2>
      <img src='https://i.pinimg.com/736x/bb/e9/16/bbe91630ce60be192f9a00d1f45d542c.jpg' alt={selectedLanguage === 'ar' ? 'العقارات والضرائب' : 'Real Estate and Tax Law'} className="business-law-image" />

      <p>
        {selectedLanguage === 'ar'
          ? 'يتوفر المكتب على فريق من المحامين والمتعاونين المتخصصين في التحكيم في النزاعات العقارية والضرائب.'
          : selectedLanguage === 'fr'
          ? 'Le cabinet dispose d\'une équipe d\'avocats et collaborateurs spécialisés dans les litiges immobiliers et fiscaux.'
          : 'The office has a team of lawyers and collaborators specialized in arbitration in real estate and tax disputes.'}
      </p>
      <p>
        {selectedLanguage === 'ar'
          ? 'معرفة المزيد (يفتح: "اتصل بنا مباشرة لتلقي المساعدة القانونية من قبل محامٍ")'
          : selectedLanguage === 'fr'
          ? 'En savoir plus (s’ouvre : « contactez-nous directement pour recevoir notre assistance juridique par un avocat »)'
          : 'Learn more (opens: "Contact us directly to receive our legal assistance from a lawyer")'}
      </p>
    </div>
  );
};

export default RealEstateTaxComponent;
