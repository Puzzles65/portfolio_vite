import { useState } from "react";
import { sendCustomEmail } from "./Email";
import styles from "../style";

const Contact = () => {
  const [details, setDetails] = useState({
    from_name: "",
    subject: "",
    message: "",
    to_email: "",
  });

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSendEmail = () => {
    sendCustomEmail(details);
  };

  return (
    <section id="contact" className="flex flex-col w-full">
      <div className="flex flex-row">
        <div className="sm:w-1/2">
      <h1 className="text-gradient font-bold">CONTACT</h1>
      <h2 className="text-white">Get in Touch!</h2>
      <h2 className="text-white">
        Have a project in mind or just want to say hello? Feel free to drop me a
        message below! I'm always excited to connect and explore new
        opportunities. Looking forward to hearing from you!
      </h2>
      <span className="text-gradient font-bold">Write Me a Message</span>
      <div>
        <span className={`${styles.contactText}`}>Full Name:</span>
        <input
          className={`${styles.contactInput}`}
          name="from_name"
          value={details.from_name}
          onChange={handleDetailsChange}
          type="name"
          placeholder="Full Name"
        />
      </div>
      <div>
        <span className={`${styles.contactText}`}>Email:</span>
        <input
          className={`${styles.contactInput}`}
          name="to_email"
          value={details.to_email}
          onChange={handleDetailsChange}
          type="email"
          placeholder="Email"
        />
      </div>
      <div>
        <span className={`${styles.contactText}`}>Subject:</span>
        <input
          className={`${styles.contactInput}`}
          name="subject"
          value={details.subject}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Subject"
        />
      </div>
      <div>
        <span className={`${styles.contactText}`}>Message:</span>
        <textarea
          className="w-full max-h-100 min-h-100 p-2 outline-none border-2 border-gray-300 focus:border-sky-500 rounded-lg"
          name="message"
          value={details.message}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Message..."
        />
      </div>
      <button
        className="w-full mt-5 mb-8 px-6 py-3 cursor-pointer bg-cyan-500 text-white border-none disabled:opacity-50 rounded-lg"
        disabled={!details.to_email || !details.subject || !details.message}
        onClick={handleSendEmail}
      >
        <span>Send Email</span>
      </button>
      </div>
      <div>
      <img className="hidden sm:block ml-16 mt-16 w-full sm:w-[350px]" src="https://imgur.com/oeuBtsm.gif" />
      </div>
      </div>
    </section>
  );
};

export default Contact;
