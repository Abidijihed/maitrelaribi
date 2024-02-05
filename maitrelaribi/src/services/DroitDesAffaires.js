import React from "react";
import './BusinessLawComponent.css'; // Add a separate CSS file for styling

const BusinessLawComponent = ({ selectedLanguage }) => {
  return (
    <div className="business-law-container">
      <h2>
        {selectedLanguage === 'ar'
          ? 'قانون الأعمال'
          : selectedLanguage === 'fr'
          ? 'Droit des affaires'
          : 'Business Law'}
      </h2>
      <img src='https://i.pinimg.com/564x/c9/b5/7d/c9b57dead6b25c2c9f4d6bf0fa57f6d6.jpg' alt={selectedLanguage === 'ar' ? 'قانون الأعمال' : 'Business Law'} className="business-law-image" />
      <p>
        {selectedLanguage === 'ar'
          ? 'يقدم قسم قانون الأعمال وقانون الشركات والقانون التجاري استشارات قانونية للشركات والمؤسسات والجهات المالية والتأمين والصناعية عند إنشاء الشركات، في الأنشطة العادية والاستثنائية للشركة.'
          : selectedLanguage === 'fr'
          ? 'Le Département du droit des affaires, droit sociétés et droit commercial conseille juridiquement les entreprises, les opérateurs institutionnels, financiers, d\'assurance et industriels lors de la création de sociétés, dans les activités ordinaires et extraordinaires de l\'entreprise.'
          : 'The Business Law, Corporate Law, and Commercial Law Department provides legal consultations to companies, financial institutions, insurance, and industrial entities when establishing companies, in the ordinary and extraordinary activities of the company.'}
      </p>
      <h3>
        {selectedLanguage === 'ar'
          ? 'المهام'
          : selectedLanguage === 'fr'
          ? 'Missions'
          : 'Missions'}
      </h3>
      <ul>
        <li>
          {selectedLanguage === 'ar'
            ? 'إنشاء شركات تونسية أو أجنبية، جزئياً أو كلياً تصديرية أو غير مقيمة.'
            : selectedLanguage === 'fr'
            ? 'Création de sociétés tunisiennes ou étrangères, partiellement ou totalement exportatrices résidente ou non résidente.'
            : 'Establishment of Tunisian or foreign companies, partially or entirely export-oriented, resident or non-resident.'}
        </li>
        {/* Add other list items based on the selected language */}
        {/* ... */}
        <li>
          {selectedLanguage === 'ar'
            ? 'التحكيم: مساعدة في إجراءاتك والاستفادة من كفاءته إما كمستشار قانوني أو كحكم تحكيم.'
            : selectedLanguage === 'fr'
            ? 'Arbitrage: assister dans vos démarches et vous fera profiter de sa compétence soit en tant qu’AVOCAT CONSEIL soit en tant qu’ARBITRE.'
            : 'Arbitration: assist in your procedures and benefit from its competence either as a legal advisor or as an arbitrator.'}
        </li>
        {/* ... */}
      </ul>
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

export default BusinessLawComponent;
