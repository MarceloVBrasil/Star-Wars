import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [errorMessageStatus, setErrorMessageStatus] = useState(false);
  const errorMessage = "Please, fill in all the fields.";
  return (
    <div className="contact--container">
      <form onSubmit={sendEmail} className="contact--form">
        <label>subject</label>
        <input
          type="text"
          name="subject"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>email</label>
        <input
          type="text"
          name="email"
          onChange={(e) => setSubject(e.target.value)}
        />

        <label>message</label>
        <textarea name="message" onChange={(e) => setMessage(e.target.value)} />

        <button>Send Email</button>

        {errorMessageStatus && <p>{errorMessage}</p>}
      </form>
    </div>
  );

  function sendEmail(e) {
    e.preventDefault();
    if (!subject || !email || !message) {
      setErrorMessageStatus(true);
      return;
    }

    emailjs
      .sendForm(
        "service_bkzho1f",
        "template_7ju7c2r",
        e.target,
        "llyxjjxd3sefpX2X0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setErrorMessageStatus(false);
    e.target.reset();
  }
}
