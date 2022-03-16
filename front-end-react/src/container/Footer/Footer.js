import { useRef } from 'react';
import emailjs from 'emailjs-com';

import { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import  { SocialMediaButton } from '../../components';
import './Footer.scss';

const Footer = () => {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

 const [enviado, setEnviado] = useState("");

  // const { username, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   // const contact = {
  //   //   _type: 'contact',
  //   //   name: formData.username,
  //   //   email: formData.email,
  //   //   message: formData.message,
  //   // };
  // }

  



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_59bbf3n', 'template_ns87cgo', form.current, '5z1mRB_K2jrqDmT8G')
      .then((result) => {
          console.log(result.text);
          setEnviado("Enviado! Gracias!")
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

  //   client.create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <h2 className="head-text">Contáctame</h2>
      < SocialMediaButton/>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.correo} alt="email" />
          <a href="mailto:tellourakaterin@gmail.com" className="p-text">tellourakaterin@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.wtspIcon} alt="phone" />
          <a href="https://api.whatssap.com/send?phone=+51972198713" target="_blank" className="p-text" rel="noreferrer">+51 972-198-713</a>
        </div>
      </div>
      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Nombre" name="username" value={username} onChange={handleChangeInput} required />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} required/>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Mensaje"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Enviar Mensaje' : 'Cargando...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )} */}
        <form className="app__footer-form app__flex" ref={form} onSubmit={sendEmail} >
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Nombre" name="name" required />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Email" name="email" required/>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Mensaje"
              name="message"
            />
          </div>
          <button type="submit" className="p-text"> Enviar Mensaje</button>
        </form>
        <div>
          <h3 className="head-text">
            {enviado}
          </h3>
        </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'Contáctame',
  'app__whitebg',
);