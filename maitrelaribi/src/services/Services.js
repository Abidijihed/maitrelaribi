import React from "react";
import "./Flags.css";
import { useNavigate } from "react-router-dom";

const BannerComponent = ({ selectedLanguage }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>
        {selectedLanguage === 'ar'
          ? 'الخدمات / الأنشطة - الخبرة متعددة التخصصات'
          : selectedLanguage === 'fr'
          ? 'Services / Activités - Expertise pluridisciplinaire'
          : 'Services / Activities - Multidisciplinary Expertise'}
      </h1>
      <ul id="bannerList">
        <li className="bannerItem" style={{ "--accent-color": "rgb(0, 31, 63)", cursor: "pointer" }} onClick={() => navigate('/DroitDesAffaires')} >
          <div className="title">
            {selectedLanguage === 'ar' ? 'قانون الأعمال' : selectedLanguage === 'fr' ? 'Droit des affaires' : 'Business Law'}
          </div>
          <div className="descr">
            {selectedLanguage === 'ar'
              ? 'يقدم قسم القانون التجاري وقانون الشركات والقانون التجاري استشارات قانونية للشركات والمؤسسات والمؤسسات المالية والتأمين والصناعية خلال إنشاء الشركات، في الأنشطة العادية والاستثنائية للشركة. المهمات...'
              : selectedLanguage === 'fr'
              ? 'Le Département du droit des affaires, droit sociétés et droit commercial conseille juridiquement les entreprises, les opérateurs institutionnels, financiers, d\'assurance et industriels lors de la création de sociétés...'
              : 'The Business Law Department provides legal consultations for companies, financial institutions, and industrial entities during the establishment of companies, in both regular and exceptional business activities. The tasks...'}
          </div>
          <button className="read-more-button" style={{ backgroundColor: "rgb(255, 215, 0)", fontSize: "12px", padding: "5px 8px", width: "80px", marginLeft: "40px" }} onClick={() => navigate('/DroitDesAffaires')}>
            {selectedLanguage === 'ar' ? 'قراءة المزيد' : selectedLanguage === 'fr' ? 'Lire la suite' : 'Read More'}
          </button>
        </li>
        <li className="bannerItem" style={{ "--accent-color": "rgb(0, 31, 63)", cursor: "pointer" }} onClick={() => navigate('/DroitCivil')}>
          <div className="title">
            {selectedLanguage === 'ar' ? 'قانون المدني - تحصيل الديون' : selectedLanguage === 'fr' ? 'Droit civil - Recouvrement de créances' : 'Civil Law - Debt Collection'}
          </div>
          <div className="descr">
            {selectedLanguage === 'ar'
              ? 'تمتلك فريقنا من المحامين خبرة واسعة في حل النزاعات القضائية والوساطة، على الصعيدين الوطني والعابر للحدود بين الأفراد أو الكيانات. نحن نقدم استشارات قانونية في مجال تحصيل الديون في المرحلة الودية أو المرحلة القضائية.'
              : selectedLanguage === 'fr'
              ? 'Notre équipe d\'avocats possède une vaste expérience dans la résolution de litiges judiciaires, extrajudiciaires, nationaux et transfrontaliers entre personnes physiques ou morales...'
              : 'Our team of lawyers has extensive experience in resolving judicial disputes and mediating at both the national and cross-border levels between individuals or entities. We provide legal advice in the field of debt collection in both the amicable and judicial stages.'}
          </div>
          <button className="read-more-button" style={{ backgroundColor: "rgb(255, 215, 0)", fontSize: "12px", padding: "5px 8px", width: "80px", marginLeft: "40px" }} onClick={() => navigate('/DroitDesAffaires')}>
            {selectedLanguage === 'ar' ? 'قراءة المزيد' : selectedLanguage === 'fr' ? 'Lire la suite' : 'Read More'}
          </button>
        </li>
        <li className="bannerItem" style={{ "--accent-color": "rgb(0, 31, 63)", cursor: "pointer" }} onClick={() => navigate('/DroitImmobilier')}>
          <div className="title">
            {selectedLanguage === 'ar' ? 'قانون العقارات والضرائب' : selectedLanguage === 'fr' ? 'Droit Immobilier et Fiscal' : 'Real Estate and Tax Law'}
          </div>
          <div className="descr">
            {selectedLanguage === 'ar'
              ? 'يتوفر المكتب على فريق من المحامين والمتعاونين المتخصصين في التحكيم العقاري والقضايا الضريبية.'
              : selectedLanguage === 'fr'
              ? 'Le cabinet dispose d\'une équipe d\'avocats et collaborateurs spécialisés dans les litiges immobiliers et fiscales.'
              : 'The office has a team of specialized lawyers and collaborators in real estate arbitration and tax cases.'}
          </div>
          <button className="read-more-button" style={{ backgroundColor: "rgb(255, 215, 0)", fontSize: "12px", padding: "5px 8px", width: "80px", marginLeft: "40px" }} onClick={() => navigate('/DroitDesAffaires')}>
            {selectedLanguage === 'ar' ? 'قراءة المزيد' : selectedLanguage === 'fr' ? 'Lire la suite' : 'Read More'}
          </button>
        </li>
        <li className="bannerItem" style={{ "--accent-color": "rgb(0, 31, 63)", cursor: "pointer" }} onClick={() => navigate('/DroitDesAssurances')}>
          <div className="title">
            {selectedLanguage === 'ar' ? 'قانون التأمين وتعويض الأضرار' : selectedLanguage === 'fr' ? 'Droit des assurances et indemnisation des dommages' : 'Insurance Law and Compensation of Damages'}
          </div>
          <div className="descr">
            {selectedLanguage === 'ar'
              ? 'يمتلك قسم قانون التأمين خبرة واسعة في الجوانب الوساطية خارج المحكمة...'
              : selectedLanguage === 'fr'
              ? 'Le Département du droit des assurances possède une vaste expérience dans les aspects extrajudiciaires...'
              : 'The Insurance Law Department has extensive experience in extrajudicial aspects...'}
          </div>
          <button className="read-more-button" style={{ backgroundColor: "rgb(255, 215, 0)", fontSize: "12px", padding: "5px 8px", width: "80px", marginLeft: "40px" }} onClick={() => navigate('/DroitDesAffaires')}>
            {selectedLanguage === 'ar' ? 'قراءة المزيد' : selectedLanguage === 'fr' ? 'Lire la suite' : 'Read More'}
          </button>
        </li>
        <li className="bannerItem" style={{ '--accent-color': "rgb(0, 31, 63)", cursor: "pointer" }} onClick={() => navigate('/DroitPénal')}>
          <div className="title">
            {selectedLanguage === 'ar' ? 'القانون الجنائي' : selectedLanguage === 'fr' ? 'Droit Pénal' : 'Criminal Law'}
          </div>
          <div className="descr">
            {selectedLanguage === 'ar'
              ? 'يتمثل دورنا في مساعدة عميلنا في الإجراءات التي يجب اتخاذها لمعالجة ملفه، ونقوم بتقديم النصح والدفاع عن مصالحه...'
              : selectedLanguage === 'fr'
              ? 'Notre rôle est d’aider notre  client dans les démarches à effectuer pour le traitement de son dossier, se charger de le conseiller et de défendre ses intérêts...'
              : 'Our role is to assist our client in the procedures to be taken to process their file, provide advice, and defend their interests...'}
          </div>
          <button className="read-more-button" style={{ backgroundColor: "rgb(255, 215, 0)", fontSize: "12px", padding: "5px 8px", width: "80px", marginLeft: "40px" }} onClick={() => navigate('/DroitDesAffaires')}>
            {selectedLanguage === 'ar' ? 'قراءة المزيد' : selectedLanguage === 'fr' ? 'Lire la suite' : 'Read More'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BannerComponent;
