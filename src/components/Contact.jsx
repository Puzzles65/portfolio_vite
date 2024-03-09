import { useState } from "react";
import { sendCustomEmail } from "./Email";

const Contact = () => {
  const [details, setDetails] = useState({
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
    <div className="main">
      <div>
        <span className="text-white">Email:</span>
        <input
          name="to_email"
          value={details.to_email}
          onChange={handleDetailsChange}
          type="email"
          placeholder="required"
        />
      </div>
      <div>
        <span className="text-white">Subject:</span>
        <input
          name="subject"
          value={details.subject}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Required"
        />
      </div>
      <div>
        <span className="text-white">Message</span>
        <textarea
          name="message"
          value={details.message}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Required.."
        />
      </div>
      <button disabled={!details.to_email || !details.subject || !details.message} onClick={handleSendEmail}>
        <span className="text-white">Send Email</span>
      </button>
    </div>
  );
};

export default Contact;
