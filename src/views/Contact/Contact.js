import React from 'react';
import ContactImg from '../../assets/contact.jpg';

const Contact = () => {
  return (
    <div style={{ display: 'block' }}>
      <div>
        <h1>Contact Us</h1>
        <p>
          For any more queries. Please reach out to us at +1234567890 <br /> or
          email us at <a href='#'>support@unifund.com</a>
        </p>
      </div>
      <img src={ContactImg} alt='contact us' width='50%' />
      <div style={{height: 300}}/>
    </div>
  );
};

export default Contact;
