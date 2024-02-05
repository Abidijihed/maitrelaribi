import React from "react";
import './CivilLawComponent.css'; // Add a separate CSS file for styling

const CivilLawComponent = ({ selectedLanguage }) => {
  return (
    <div className="civil-law-container">
      <h2>
        {selectedLanguage === 'ar'
          ? 'القانون المدني - استرداد الديون'
          : selectedLanguage === 'fr'
          ? 'Droit civil - Recouvrement de créances'
          : 'Civil Law - Debt Recovery'}
      </h2>
      <img src='https://i.pinimg.com/564x/ca/34/b0/ca34b04df3a30bd16c052590f858c86b.jpg' alt="Business Law" className="business-law-image" />

      <p>
        {selectedLanguage === 'ar'
          ? 'تتمتع فريقنا من المحامين بخبرة واسعة في حل النزاعات القضائية والقضائية، سواء كانت وطنية أو دولية بين الأفراد أو الكيانات القانونية. نحن نقدم استشارات قانونية في مجال استرداد الديون بطرق ودية أو في المرحلة القضائية.'
          : selectedLanguage === 'fr'
          ? 'Notre équipe d\'avocats possède une vaste expérience dans la résolution de litiges judiciaires, extrajudiciaires, nationaux et transfrontaliers entre personnes physiques ou morales. Nous fournissons des conseils juridiques en matière de recouvrement de créances en voie amiable ou phase judiciaire.'
          : 'Our team of lawyers has extensive experience in resolving judicial and extrajudicial disputes, whether national or international, between individuals or legal entities. We provide legal advice in the field of debt recovery through amicable methods or in the judicial phase.'}
      </p>
      <p>
        {selectedLanguage === 'ar'
          ? 'تعرف على المزيد (يفتح: "تواصل معنا مباشرة للحصول على مساعدتنا القانونية من قبل محامٍ")'
          : selectedLanguage === 'fr'
          ? 'En savoir plus (s’ouvre : « contactez-nous directement pour recevoir notre assistance juridique par un avocat »)'
          : 'Learn more (opens: "Contact us directly to receive our legal assistance from a lawyer")'}
      </p>
    </div>
  );
};

export default CivilLawComponent;
