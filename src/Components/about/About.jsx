import React from "react";
import './about.css'

export const About = () => {
  return (
    <>
      <h2 style={{ fontSize: '48px', color: '#333333', textAlign: 'center' }}>About Ambula</h2>
      <p style={{ paddingLeft: '200px', paddingRight: '200px', color: '#212529', fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
        Ambula is an App based on UHI(Unified Health Interface) popularly known as 'Ayushman Bharat Digital Mission' envisioned by our honourable Prime Minister which connects patients live with the unified health network across India for all healthcare needs. Ambula is committed to bridge all the communication gaps prevalent in healthcare delivery and Ambula will impart it's contribution to this Noble Vision.
        We are always available there for you if you find any discomfort of health. Your trust empowers us to serve you more.
      </p>
    </>
  );
};
