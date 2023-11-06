import React, { ChangeEvent, useContext, useState } from "react";

import styles from "./contact.module.css";
import Slider from "../Slider/Slider";
import AppContext from "@/app/AppContext";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const appContext = useContext(AppContext);

  const [formData, setFormData] = useState(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    appContext.handleLoading();
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    appContext.handleLoading();

    alert("Received Your Message, Will back to You shortly. Thanks!!!.");
    setFormData(initialState);
  };

  return (
    <Slider type="zoom-in">
      <div className={styles.container}>
        <h3>Have a question or doubt?</h3>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            value={formData.phone}
            required
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Type your doubt or question..."
            onChange={handleChange}
            value={formData.message}
            required
          ></textarea>
          <button type="submit" className="noBorderBtn viewLink">
            SUBMIT
          </button>
        </form>
      </div>
    </Slider>
  );
};

export default Contact;
