import React from "react";
import { Link } from "react-router-dom";
import './HonorairesPolitiqueComponent.css';
import { useNavigate } from "react-router-dom";

const HonorairesPolitiqueComponent = ({ selectedLanguage }) => {
  const navigate = useNavigate();
  return (
    <div className="honoraires-politique-container" style={{ marginTop: "25px", direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}>
      {/* <h2>
        {selectedLanguage === 'ar'
          ? 'سياسة الرسوم'
          : selectedLanguage === 'fr'
          ? 'Politique d’honoraires'
          : 'Fee Policy'}
      </h2> */}
      <div className="row"  style={{border:"solid gray", padding:"25px",marginBottom:"15px"}}>
      <div className="col-8" >
      <p>
        {selectedLanguage === 'ar'
          ? 'في الساعة (مع صفحة زمنية)'
          : selectedLanguage === 'fr'
          ? 'A l\'heure (avec fiche de temps passé)'
          : 'Hourly (with time sheet)'}
      </p>
      <p>
        {selectedLanguage === 'ar'
          ? 'سيتغير الرسم الساعي وفقًا لتعقيد القضية وجودة وخبرة المشاركين.'
          : selectedLanguage === 'fr'
          ? 'Le taux horaire variera suivant la complexité du dossier, la qualité et l’expérience des intervenants.'
          : 'The hourly rate will vary according to the complexity of the case and the quality and experience of the participants.'}
      </p>
      <button className="btn" onClick={() => navigate('/contact')}>{selectedLanguage === 'ar' ? 'اتصل' : selectedLanguage === 'fr' ? 'CONTACT' : 'CONTACT'}</button>
      </div>
      <div className="col-4">
  <img src="https://i.pinimg.com/564x/69/b9/71/69b9710a7a6aa614fda39c674f73abbb.jpg" style={{width:"200px",height:"200px"}} />
      </div>
      </div>
      <div className="row"  style={{border:"solid gray", padding:"25px",marginBottom:"15px"}}>
      <div className="col-4">
  <img src="https://i.pinimg.com/564x/60/91/b5/6091b51121d30f25785c9052afbc0d30.jpg" style={{width:"200px",height:"200px"}} />
      </div>
      <div className="col-8" >
      <p>
        {selectedLanguage === 'ar'
          ? 'بمجموع'
          : selectedLanguage === 'fr'
          ? 'Au forfait'
          : 'Fixed Fee'}
      </p>
      <p>
        {selectedLanguage === 'ar'
          ? 'منذ بداية القضية، نتفق مع العميل على رسوم ثابتة، والتي تكون محددة ونهائية بصرف النظر عن الوقت الذي قضيناه في الملف.'
          : selectedLanguage === 'fr'
          ? 'Dès le début du dossier, nous convenons avec le client d’un honoraire fixe, dont le montant est ferme et définitif indépendamment du temps passé sur le dossier.'
          : 'From the beginning of the case, we agree with the client on a fixed fee, which is specific and final regardless of the time spent on the file.'}
      </p>
           <button className="btn" onClick={() => navigate('/contact')}>{selectedLanguage === 'ar' ? 'اتصل' : selectedLanguage === 'fr' ? 'CONTACT' : 'CONTACT'}</button>

</div>

</div>
<div className="row"  style={{border:"solid gray", padding:"25px",marginBottom:"15px"}}>
      <div className="col-8" >
      <p>
        {selectedLanguage === 'ar'
          ? 'بسعر ثابت مخفض ومكمل للنتائج'
          : selectedLanguage === 'fr'
          ? 'Au forfait réduit et complément de résultat'
          : 'Reduced flat rate and result supplement'}
      </p>
      <p>
        {selectedLanguage === 'ar'
          ? 'يمكن أن تؤدي الرسوم الثابتة أيضًا إلى رسوم على النتيجة تعتمد على مصلحة الملف والمساهمة التي قدمها المكتب في نجاحه.'
          : selectedLanguage === 'fr'
          ? 'Les honoraires forfaitaires peuvent également donner lieu à un honoraire de résultat en fonction de l\'intérêt du dossier et de la contribution apportée par le Cabinet à son succès.'
          : 'Fixed fees can also lead to result-based fees depending on the file\'s interest and the contribution made by the firm to its success.'}
      </p>
           <button className="btn" onClick={() => navigate('/contact')}>{selectedLanguage === 'ar' ? 'اتصل' : selectedLanguage === 'fr' ? 'CONTACT' : 'CONTACT'}</button>
</div>
<div className="col-4">
  <img src="https://i.pinimg.com/736x/64/3c/e4/643ce4997d801fd7b882b07cf04c4873.jpg" style={{width:"200px",height:"200px"}} />
      </div>
</div>
<div className="row"  style={{border:"solid gray", padding:"25px",marginBottom:"15px"}}>
<div className="col-4">
  <img src="https://i.pinimg.com/564x/26/51/3a/26513ad441150ed259aa7690d93ee39b.jpg" style={{width:"200px",height:"200px"}} />
      </div>
      <div className="col-8" >
      <p>
        {selectedLanguage === 'ar'
          ? 'وفقًا لاتفاقية مساعدة سنوية'
          : selectedLanguage === 'fr'
          ? 'Selon une convention d’assistance annuelle'
          : 'According to an annual assistance agreement'}
      </p>
      <p>
        {selectedLanguage === 'ar'
          ? 'تكمن فائدة هذا النهج في تطوير علاقة دائمة واكتساب معرفة حقيقية بالشركة في الحياة اليومية. يمكن للعميل بالتالي الاستفادة من الخدمات المقدمة دون القلق بشأن الرسوم التي يجب دعمها.'
          : selectedLanguage === 'fr'
          ? 'L’intérêt de cette approche réside dans le développement d’une relation durable et dans l’acquisition d’une réelle connaissance de l’Entreprise au quotidien. Le client pourra ainsi faire appel aux services mis en place sans se soucier des honoraires devant être supportés.'
          : 'The benefit of this approach lies in developing a lasting relationship and gaining a real understanding of the company in daily life. The client can, therefore, benefit from the services provided without worrying about the fees to be incurred.'}
      </p>
           <button className="btn" onClick={() => navigate('/contact')}>{selectedLanguage === 'ar' ? 'اتصل' : selectedLanguage === 'fr' ? 'CONTACT' : 'CONTACT'}</button>
</div>

</div>
    </div>
  );
};

export default HonorairesPolitiqueComponent;
