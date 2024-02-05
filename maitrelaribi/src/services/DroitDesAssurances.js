import React from "react";
import './InsuranceDamageComponent.css'; // Add a separate CSS file for styling

const InsuranceDamageComponent = ({ selectedLanguage }) => {
  return (
    <div className="insurance-damage-container">
      <h2>
        {selectedLanguage === 'ar'
          ? 'قانون التأمين وتعويض الأضرار'
          : selectedLanguage === 'fr'
          ? 'Droit des assurances et indemnisation des dommages'
          : 'Insurance Law and Damage Compensation'}
      </h2>

      <img src='https://i.pinimg.com/564x/f6/81/ef/f681efab15ae0e8b5a2696d0f9b0ec6d.jpg' alt={selectedLanguage === 'ar' ? 'قانون التأمين وتعويض الأضرار' : 'Insurance Law and Damage Compensation'} className="business-law-image" />

      <p>
        {selectedLanguage === 'ar'
          ? 'يمتلك قسم قانون التأمين خبرة واسعة في الجوانب الغير قضائية والقضائية وجميع الجوانب المتعلقة بالتعويض عن الأضرار في حالة الحوادث مع وسائل النقل، والحوادث التي يتعرض لها المواطنون، والأخطاء الطبية، وحوادث العمل.'
          : selectedLanguage === 'fr'
          ? 'Le Département du droit des assurances possède une vaste expérience dans les aspects extrajudiciaires, judiciaires et tous les aspects liés aux actions de dommages et intérêts en cas d\'accidents avec des moyens de transport, d\'accidents subis par des citoyens, d’erreur médicale et d\'accidents du travail.'
          : 'The Insurance Law Department has extensive experience in non-judicial and judicial aspects and all aspects related to compensation for damages in case of accidents with means of transport, accidents suffered by citizens, medical errors, and workplace accidents.'}
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

export default InsuranceDamageComponent;
