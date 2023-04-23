// import helper functions from helper.js

import { validateEmail, checkMessage, checkName } from "./helpers";

import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";

import "./Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    //  Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email  is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not blank. If so, users are notified.
    }
    if (!checkMessage(Message)) {
      setErrorMessage(`message cannot be empty`);
      return;
    }
    // Then we check to see if the name is not blank. If so, users are notified.
    if (!checkName(Name)) {
      setErrorMessage(`name cannot be empty`);
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
    alert(`Your message submited successfully `);
  };

  return (
    <>
      <div className="widthBox">
        <div class="ui inverted segment">
          <div class="ui inverted form">
            <div class="field">
              <label>Name</label>
              <input
                name="Name"
                value={Name}
                placeholder="Name"
                type="text"
                onChange={handleInputChange}
              />
            </div>
            <div class="field">
              <label>Email</label>
              <input
                value={email}
                name="email"
                placeholder="abc@company.com"
                type="text"
                onChange={handleInputChange}
              />
            </div>

            <div class="field">
              <label>Message</label>
              <textarea
                name="Message"
                value={Message}
                placeholder="message"
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div class="ui submit button" onClick={handleFormSubmit}>
              Submit
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
