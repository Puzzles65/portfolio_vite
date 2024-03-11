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
    <section id="contact" className="flex flex-col w-full sm:w-[500px]">
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
        className="mt-5 mb-8 px-6 py-3 cursor-pointer bg-indigo-900 text-white border-none disabled:opacity-50 rounded-lg"
        disabled={!details.to_email || !details.subject || !details.message}
        onClick={handleSendEmail}
      >
        <span>Send Email</span>
      </button>
    </section>
  );
};

export default Contact;
