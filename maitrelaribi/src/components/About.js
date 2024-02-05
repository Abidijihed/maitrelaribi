import React from "react";
import "./Presentation.css"; // Import the corresponding CSS file

const PhotoSection = ({ selectedLanguage }) => {
  const textDirection = selectedLanguage === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="photo-section">
      <div className="content-container">
        <div className="presentation-container" style={{ textAlign: 'justify', direction: textDirection }}>
          <h2 className="presentation-title" style={{ color: '#333', fontSize: '36px', marginBottom: '20px' }}>
            {selectedLanguage === 'fr' ? 'Présentation' : (selectedLanguage === 'en' ? 'Presentation' : 'تقديم')}
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
            ) : (selectedLanguage === 'en' ? (
              <>
                LAARIBI LAW FIRM distinguishes itself as a leader in the field of{" "}
                <a href="/">business law in Tunisia</a>. With numerous years of experience, our firm has specialized
                in various areas, including the rights of Tunisians abroad, expatriates in Tunisia, and investments in the country. Our commitment to clients goes beyond simple
                legal advice. We also strive to vigorously represent them in courts, actively protecting their interests. At LAARIBI LAW FIRM, we make every effort to accompany our clients throughout their legal journey. Our team of experienced lawyers is committed to providing exceptional legal services, offering tailored solutions adapted to each situation. Whether you are a Tunisian abroad
                seeking to protect your rights, an expatriate in need of
                assistance in Tunisia, or an investor considering
                opportunities in the country, our firm is here to provide
                professional and competent support to navigate the complex
                world of business law in Tunisia.
              </>
            ) : (
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
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
