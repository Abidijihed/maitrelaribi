import React from "react";
import "./Presentation.css"; // Import the corresponding CSS file
import image from "./fouzi.jpg";

const PhotoSection = ({ selectedLanguage }) => {
  return (
    <section className="photo-section">
      <div className="content-container">
        <div className="photo-container">
          <img
            src={image} // Replace with the URL of your photo
            alt="Professional Presentation"
            className="presentation-photo"
          />
        </div>
        <div className="presentation-container">
          <h2 className="presentation-title">
            {selectedLanguage === 'ar' ? 'تقديم' : (selectedLanguage === 'fr' ? 'Présentation' : 'Presentation')}
          </h2>
          <p className="presentation-text" style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
            {selectedLanguage === 'fr' ? (
              <>
                Le Cabinet d’Avocat LAARIBI LAW FIRM se distingue en tant que leader dans le domaine du{" "}
                <a href="/">droit des affaires en Tunisie</a>. Avec de nombreuses années d’expérience à notre actif, notre cabinet s’est spécialisé
                dans divers domaines, y compris les droits des Tunisiens à l’étranger, les expatriés en Tunisie et les investissements dans le pays. Notre engagement envers nos clients va au-delà du simple
                conseil juridique. Nous nous efforçons également de les représenter de manière vigoureuse devant les tribunaux, protégeant ainsi activement leurs intérêts. Chez LAARIBI LAW FIRM, nous mettons
                tout en œuvre pour accompagner nos clients tout au long de leur parcours juridique. Notre équipe d’avocats expérimentés s’engage à fournir un service juridique exceptionnel, offrant des solutions sur mesure et adaptées à chaque situation. Que vous soyez un tunisien à l’étranger
                cherchant à protéger vos droits, un expatrié ayant besoin
                d’assistance en Tunisie ou un investisseur envisageant des
                opportunités dans le pays, notre cabinet est là pour vous offrir un
                soutien professionnel et compétent pour naviguer dans le monde
                complexe du droit des affaires en Tunisie.
              </>
            ) : (selectedLanguage === 'ar' ? (
              <>
                يتميز مكتب المحاماة لعريبي لور فيرم كقائد في مجال قانون الأعمال في تونس.
                مع سنوات عديدة من الخبرة في مجالنا، اختصص مكتبنا في مجالات متنوعة، بما في
                ذلك حقوق التونسيين في الخارج، والمغتربين في تونس، والاستثمارات في
                البلاد. التزامنا تجاه عملائنا يتجاوز المشورة القانونية البسيطة. نحن نسعى
                أيضًا لتمثيلهم بقوة أمام المحاكم، وحماية مصالحهم بنشاط. في مكتب لعريبي
                لور فيرم، نبذل قصارى جهدنا لمرافقة عملائنا طوال رحلتهم القانونية. يلتزم
                فريقنا من المحامين ذوي الخبرة بتقديم خدمة قانونية استثنائية، وتقديم حلول
                مخصصة ومناسبة لكل حالة. سواء كنت تونسيًا في الخارج تسعى لحماية حقوقك، أو
                مغتربًا بحاجة إلى مساعدة في تونس، أو مستثمرًا ينوي استغلال الفرص في البلاد،
                فإن مكتبنا هنا لتقديم الدعم المهني والكفء للتنقل في عالم قانون الأعمال
                المعقد في تونس.
              </>
            ) : (
              <>
                The law firm LAARIBI LAW FIRM stands out as a leader in the field of{" "}
                <a href="/">business law in Tunisia</a>. With many years of experience, our firm has specialized
                in various areas, including the rights of Tunisians abroad, expatriates in Tunisia, and investments in the country. Our commitment to our clients goes beyond simple
                legal advice. We also strive to represent them vigorously in court, actively protecting their interests. At LAARIBI LAW FIRM, we make every effort to accompany our clients throughout their legal journey. Our team of experienced lawyers is committed to providing exceptional legal services, offering tailored solutions for each situation. Whether you are a Tunisian abroad
                seeking to protect your rights, an expatriate in need of
                assistance in Tunisia, or an investor considering
                opportunities in the country, our firm is here to offer you
                professional and competent support to navigate the complex
                world of business law in Tunisia.
              </>
            ))}
          </p>
        </div>
      </div>

      <div className="about-us-container">
        <h2>
          {selectedLanguage === 'ar' ? 'من نحن ؟' : (selectedLanguage === 'fr' ? 'Qui sommes-nous ?' : 'Who Are We?')}
        </h2>
        <ul>
          <li>
            {selectedLanguage === 'fr' ? (
              'Diplôme de troisième cycle en droit des contrats et des investissements (DEA).'
            ) : (selectedLanguage === 'ar' ? (
              'شهادة في القانون العقاري والاستثمار (DEA).'
            ) : (
              'Postgraduate degree in contract and investment law (DEA).'
            ))}
          </li>
          <li>
            {selectedLanguage === 'fr' ? (
              'Avocat au Barreau de Tunis depuis 1999.'
            ) : (selectedLanguage === 'ar' ? (
              'محام في نقابة تونس منذ عام 1999.'
            ) : (
              'Lawyer at the Bar of Tunis since 1999.'
            ))}
          </li>
          <li>
            {selectedLanguage === 'fr' ? (
              'Mastère en sciences criminelles.'
            ) : (selectedLanguage === 'ar' ? (
              'ماجستير في العلوم الجنائية.'
            ) : (
              'Master\'s degree in criminal sciences.'
            ))}
          </li>
        </ul>
      </div>

      <div className="values-container">
        <h2>{selectedLanguage === 'ar' ? 'قيمنا' : (selectedLanguage === 'fr' ? 'Nos Valeurs' : 'Our Values')}</h2>
        <ul>
          <li>{selectedLanguage === 'fr' ? (
            "Travail d'équipe."
          ) : (selectedLanguage === 'ar' ? (
            'العمل الجماعي.'
          ) : (
            'Teamwork.'
          ))}</li>
          <li>{selectedLanguage === 'fr' ? (
            'Focus sur les objectifs futurs.'
          ) : (selectedLanguage === 'ar' ? (
            'التركيز على الأهداف المستقبلية.'
          ) : (
            'Focus on future goals.'
          ))}</li>
          <li>{selectedLanguage === 'fr' ? (
            'Prenez challenge à toutes les difficultés.'
          ) : (selectedLanguage === 'ar' ? (
            'تحديد جميع التحديات.'
          ) : (
            'Take on challenges and overcome difficulties.'
          ))}</li>
          <li>{selectedLanguage === 'fr' ? (
            'Guidé par une longue expérience.'
          ) : (selectedLanguage === 'ar' ? (
            'موجه من خلال خبرة طويلة.'
          ) : (
            'Guided by extensive experience.'
          ))}</li>
          <li>{selectedLanguage === 'fr' ? (
            'Qualité & Excellence.'
          ) : (selectedLanguage === 'ar' ? (
            'الجودة والتميز.'
          ) : (
            'Quality & Excellence.'
          ))}</li>
          <li>{selectedLanguage === 'fr' ? (
            'La Satisfaction du client est Prioritaire.'
          ) : (selectedLanguage === 'ar' ? (
            'رضا العميل هو الأولوية.'
          ) : (
            'Customer satisfaction is a priority.'
          ))}</li>
        </ul>
      </div>

      <div className="perspective-container">
        <h2>{selectedLanguage === 'ar' ? 'روؤيتنا العالمية' : (selectedLanguage === 'fr' ? 'Perspective Globale' : 'Global Perspective')}</h2>
        <p>
          {selectedLanguage === 'fr' ? (
            'À ce jour, LAARIBI LAW FIRM s’appuie sur un réseau d’alliances stratégiques soigneusement sélectionnées, garantissant des conseils d’experts et des solutions juridiques aux clients privés et aux particuliers de toutes tailles et nationalités.'
          ) : (selectedLanguage === 'ar' ? (
            'حتى الآن ، يعتمد مكتب LAARIBI LAW FIRM على شبكة من التحالفات الاستراتيجية المختارة بعناية ، مما يضمن تقديم خدمات استشارية وحلول قانونية للعملاء الخاصين والأفراد من جميع الأحجام والجنسيات.'
          ) : (
            'To date, LAARIBI LAW FIRM relies on a network of carefully selected strategic alliances, ensuring expert advice and legal solutions for private clients and individuals of all sizes and nationalities.'
          ))}
        </p>
      </div>
    </section>
  );
};

export default PhotoSection;
