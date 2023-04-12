import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [data, setData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ name: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>聯絡我們</h1>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="怎麼稱呼你？"
          onChange={handleChange}
          value={data.name}
        />
        <textarea
          type="text"
          name="message"
          cols="20"
          rows="10"
          placeholder="想對我們說什麼？"
          onChange={handleChange}
          value={data.message}
        />
        <button type="submit">確認</button>
      </form>
    </div>
  );
};

export default ContactForm;
