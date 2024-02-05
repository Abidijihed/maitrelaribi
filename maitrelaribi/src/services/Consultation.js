import React from "react";
import './ConsultationComponent.css'; // Add a separate CSS file for styling

const ConsultationComponent = ({ selectedLanguage }) => {
  return (
    <div className="consultation-container" style={{ marginTop: "25px", direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>
      <h2>
        {selectedLanguage === 'ar'
          ? 'هل ترغب في استشارة؟'
          : selectedLanguage === 'fr'
          ? 'Désirez-vous une consultation?'
          : 'Would you like a consultation?'}
      </h2>
      <p>
        {selectedLanguage === 'ar'
          ? 'قل لنا ما حدث لك:'
          : selectedLanguage === 'fr'
          ? 'Dites-nous ce qui vous est arrivé :'
          : 'Tell us what happened to you:'}
      </p>
      <ul>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل ترغب في إنشاء أو نقل شركة؟'
            : selectedLanguage === 'fr'
            ? 'Vous souhaitez créer ou transférer une société?'
            : 'Do you want to create or transfer a company?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل تحتاج إلى مساعدة قانونية في قضايا الإرث والتركات والوصايا؟'
            : selectedLanguage === 'fr'
            ? 'Avez-vous besoin d\'une assistance juridique pour les successions, les héritages et les testaments?'
            : 'Do you need legal assistance for inheritance, wills, and estates?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل تبحث عن محامين متخصصين في التحكيم وتسوية النزاعات؟'
            : selectedLanguage === 'fr'
            ? 'Vous recherchez des avocats spécialisés dans le contentieux et le règlement des différends?'
            : 'Are you looking for lawyers specialized in arbitration and dispute resolution?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل تحتاج إلى مساعدة في الطعون الإدارية؟'
            : selectedLanguage === 'fr'
            ? 'Avez-vous besoin d\'aide pour un recours administratif?'
            : 'Do you need assistance with administrative appeals?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل تحتاج إلى استشارات قانونية في قضايا القانون الجنائي أو المدني؟'
            : selectedLanguage === 'fr'
            ? 'Avez-vous besoin de conseils juridiques en matière de droit pénal ou civil?'
            : 'Do you need legal advice in criminal or civil law cases?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? 'هل ترغب في رأي محامٍ متخصص في قضايا الطلاق أو الزواج؟'
            : selectedLanguage === 'fr'
            ? 'Voulez-vous l\'avis d\'un avocat spécialisé en divorce ou mariage?'
            : 'Do you want the opinion of a lawyer specializing in divorce or marriage?'}
        </li>
        <li>
          {selectedLanguage === 'ar'
            ? 'مشاكل مع البنك بسبب قرض أو حساب جاري؟'
            : selectedLanguage === 'fr'
            ? 'Problèmes avec la banque pour un prêt ou compte courant?'
            : 'Issues with the bank due to a loan or current account?'}
        </li>
      </ul>
    </div>
  );
};

export default ConsultationComponent;
