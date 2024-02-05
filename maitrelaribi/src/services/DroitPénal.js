import React from "react";
import './CriminalLawComponent.css'; // Add a separate CSS file for styling

const CriminalLawComponent = ({ selectedLanguage }) => {
  return (
    <div className="criminal-law-container">
      <h2>
        {selectedLanguage === 'ar'
          ? 'القانون الجنائي'
          : selectedLanguage === 'fr'
          ? 'Droit Pénal'
          : 'Criminal Law'}
      </h2>
      <img src='https://i.pinimg.com/564x/ad/95/4a/ad954aa4680ff83a1f82b7c1255e93fd.jpg' alt={selectedLanguage === 'ar' ? 'القانون الجنائي' : 'Criminal Law'} className="business-law-image" />

      <p>
        {selectedLanguage === 'ar'
          ? 'دورنا هو مساعدة عملائنا في الإجراءات التي يجب اتخاذها لمعالجة ملفهم، وتقديم النصائح والدفاع عن مصالحهم. بفضل إلمامنا الجيد بمفردات المحكمة خلال القضية، نعمل وفقًا لخطة عمل فعّالة في الدفاع عن عملائنا أمام المحاكم التونسية.'
          : selectedLanguage === 'fr'
          ? 'Notre rôle est d’aider notre client dans les démarches à effectuer pour le traitement de son dossier, se charger de le conseiller et de défendre ses intérêts. Avec notre bonne maîtrise du vocabulaire durant le procès, nous travaillons suivant un plan d’action efficace dans la défense de notre client devant les tribunaux tunisiens.'
          : 'Our role is to assist our clients in the procedures to be taken to process their file, provide advice, and defend their interests. Thanks to our good command of the courtroom vocabulary during the case, we work according to an effective action plan in defending our clients before Tunisian courts.'}
      </p>
    </div>
  );
};

export default CriminalLawComponent;
