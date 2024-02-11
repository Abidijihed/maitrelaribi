import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SocialMediaIcons from './components/SocialMediaIcons.js';
import Flags from './services/Services.js';
import Maps from './components/Maps.js';
import About from './components/About.js'
import Formation from './components/Formation.js'
import ConsultationComponent from './services/Consultation.js';
import HonorairesPolitiqueComponent from './services/HonorairePolitique.js';
import Test from './services/Test.js'
const Home = ({selectedLanguage}) => {
  const carouselImages = [
    'https://www.griffith.ie/sites/default/files/styles/blog_header/public/storage/law%20blog%20header.jpg.webp?itok=baj9oljR',
    'https://www.sharda.ac.in/blog/attachments/blog_images/4-Main-Types-of-Law-Which-One-Is-the-Best-For-You-1170x614-min.jpg',
    'https://esplinweight.com/wp-content/uploads/2020/01/89770471_m.jpg',
    'https://images.shiksha.com/mediadata/images/articles/1652105078phpaUJONK.jpeg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ position: 'relative', maxWidth: '100%', overflow: 'hidden' }}>
      <SocialMediaIcons />
      <About selectedLanguage={selectedLanguage}/>
      <Flags selectedLanguage={selectedLanguage} />
      {/* <Test /> */}
      {/* <Formation selectedLanguage={selectedLanguage}/> */}
      <ConsultationComponent selectedLanguage={selectedLanguage} />
      {/* <HonorairesPolitiqueComponent  selectedLanguage={selectedLanguage}/> */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <h2>
    {selectedLanguage === 'ar'
      ? 'العثور علينا'
      : selectedLanguage === 'fr'
      ? 'Trouvez-nous'
      : 'Find Us'}
  </h2>
</div>
<div style={{ display: 'flex', justifyContent: 'center'}}>
  <Maps />
</div>
</div>
  );
};

export default Home;
