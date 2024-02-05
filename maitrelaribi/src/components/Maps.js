import React from 'react';

const Maps = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d798.6815031746128!2d10.165453769626946!3d36.801119072114574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd338b9541419b%3A0xda249182190fc488!2s44%20Bd%20Bab%20Benet%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1707063553101!5m2!1sfr!2stn"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;