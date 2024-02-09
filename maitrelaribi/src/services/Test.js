import React from 'react';
import { BsHouseDoor } from 'react-icons/bs'; // You can replace this icon with the one you need
import 'bootstrap/dist/css/bootstrap.min.css';
import './YourComponent.css'; // You can create a separate CSS file for additional styling
import { useNavigate } from "react-router-dom";

const PracticeItem = ({selectedLanguage}) => {
    const navigate = useNavigate();

  return (
    <div className='row'>
    <div className="col-sm-4" onClick={() => navigate('/DroitImmobilier')}>
      <div className="practice-item" style={{ backgroundImage: "url('https://www.sharda.ac.in/blog/attachments/blog_images/4-Main-Types-of-Law-Which-One-Is-the-Best-For-You-1170x614-min.jpg')" }}>
       <div className='test'>
       <div className="practice_inner">
          <div className="practice-icon">
            <BsHouseDoor size={50} /> {/* Replace with the appropriate icon from react-icons */}
          </div>
          <div className="title">
            {selectedLanguage === 'ar' ? 'قانون العقارات والضرائب' : selectedLanguage === 'fr' ? 'Droit Immobilier et Fiscal' : 'Real Estate and Tax Law'}
          </div>
          <div className="descr">
            {selectedLanguage === 'ar'
              ? '...يتوفر المكتب على فريق من المحامين والمتعاونين المتخصصين في التحكيم العقاري والقضايا الضريبية'
              : selectedLanguage === 'fr'
              ? 'Le cabinet dispose d\'une équipe d\'avocats et collaborateurs spécialisés dans les litiges immobiliers et fiscales...'
              : 'The office has a team of specialized lawyers and collaborators in real estate arbitration and tax cases...'}
          </div>
        </div>
       </div>
      </div>
    </div>
    </div>
  );
};

export default PracticeItem;
