import React from "react";
import './FormationComponent.css'; // Add a separate CSS file for styling

const FormationComponent = ({ selectedLanguage }) => {
  return (
    <div className="formation-container" style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>
      <h2>
        {selectedLanguage === 'ar'
          ? 'التدريب'
          : selectedLanguage === 'fr'
          ? 'Formation'
          : 'Training'}
      </h2>
      <img src='https://i.pinimg.com/564x/6c/85/18/6c851852490202c35b8602f5c02651ff.jpg' alt="Formation" className="business-law-image" />

      <p>
        {selectedLanguage === 'ar'
          ? 'تقدم LAARIBI LAW FIRM جلسات تدريب مخصصة ومتكاملة ومتكيفة مع احتياجات الشركات والجمعيات غير الحكومية وموظفيها. تغطي الدورات التدريبية المقدمة مجموعة واسعة من المواضيع:'
          : selectedLanguage === 'fr'
          ? 'LAARIBI LAW FIRM propose des sessions de formation sur mesure et adaptées aux besoins opérationnels des entreprises, ONG et de leurs cadres. Les formations proposées couvrent un large éventail de sujets :'
          : 'LAARIBI LAW FIRM offers customized, comprehensive, and tailored training sessions to meet the needs of companies, non-governmental organizations, and their employees. The training courses cover a wide range of topics:'}
      </p>
      <ul>
        <li>{selectedLanguage === 'ar' ? 'القانون المصرفي' : selectedLanguage === 'fr' ? 'Droit bancaire' : 'Banking Law'}</li>
        <li>{selectedLanguage === 'ar' ? 'قانون الطاقة' : selectedLanguage === 'fr' ? 'Droit de l’Énergie' : 'Energy Law'}</li>
        <li>{selectedLanguage === 'ar' ? 'قانون المنافسة' : selectedLanguage === 'fr' ? 'Droit de la concurrence' : 'Competition Law'}</li>
        <li>{selectedLanguage === 'ar' ? 'حماية البيانات الشخصية' : selectedLanguage === 'fr' ? 'Protection des données personnelles' : 'Personal Data Protection'}</li>
        <li>{selectedLanguage === 'ar' ? 'القانون الجنائي الدولي' : selectedLanguage === 'fr' ? 'Droit international pénal' : 'International Criminal Law'}</li>
        <li>{selectedLanguage === 'ar' ? 'القانون الدولي الإنساني' : selectedLanguage === 'fr' ? 'Droit international humanitaire' : 'International Humanitarian Law'}</li>
        <li>{selectedLanguage === 'ar' ? 'مكافحة تمويل الإرهاب وغسيل الأموال' : selectedLanguage === 'fr' ? 'Lutte contre le financement du terrorisme et le blanchiment d’argent' : 'Combating Terrorism Financing and Money Laundering'}</li>
        <li>{selectedLanguage === 'ar' ? 'القانون والتحكيم الإداري' : selectedLanguage === 'fr' ? 'Droit et contentieux administratifs' : 'Administrative Law and Arbitration'}</li>
        <li>{selectedLanguage === 'ar' ? 'الحوكمة ومكافحة الفساد' : selectedLanguage === 'fr' ? 'Gouvernance et lutte contre la corruption' : 'Governance and Anti-Corruption'}</li>
      </ul>
    </div>
  );
};

export default FormationComponent;
