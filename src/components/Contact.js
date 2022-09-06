import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('fastsmtpemail', 'template_ccrojbc', form.current, 'gx0Xd6N-0pxCKsneY')
    .then((result) => {
        console.log(result.text);
        alert('Mensagem enviada')
        document.location.reload(true)
    }, (error) => {
        console.log(error.text);
    }); 
};


  return (
    <div className="container contact">
      <h2 className="main-title text-center">CONTATO</h2>
      <form ref={form} onSubmit={sendEmail}>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 mb-1">
          <input type="text" name="user_name" required placeholder="Nome" className="contact-input" />
          </div>

          <div className="col-md-4 mb-1">
          <input type="email" name="user_email" required placeholder="Email" className="contact-input" />
          </div>
          <div className="col-md-4 mb-1">
            <input
              name="subject"
              placeholder="Assunto"
              className="contact-input"
              required
            />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
            name="message"
            placeholder="Mensagem"
            className="contact-textarea"
            required
          />
          
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <input className="form-btn" type="submit" value="Enviar" />
        </div>
      </div>
      </form>
    </div>
  );
}
export default Contact;
