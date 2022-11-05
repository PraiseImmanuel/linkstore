import "../styles/Contact.css";
import { useState } from "react";

const Contact = () => {
    const [firstNameText, setFirstNameText] = useState("");
    const [lastNameText, setLastNameText] = useState("");
    const [email, setEmail] = useState("");

    const renderInput = (label, placeHolder, id, value, onChange) => {
        return (
            <div className="input">
                <label htmlFor={id} className="label">
                    {label}
                </label>
                <input
                    type="text"
                    name=""
                    placeholder={placeHolder}
                    id={id}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    required
                />
            </div>
        );
    };

    return (
        <div className="contact-wrapper">
            <h1 className="contact-me">Contact Me</h1>
            <p>Hello there 👋, share anything you have in mind with me here.</p>
            <form action="#">
                <div className="row-container">
                    {renderInput(
                        "First name",
                        "Enter your first name",
                        "first_name",
                        firstNameText,
                        setFirstNameText
                    )}
                    {renderInput(
                        "Last name",
                        "Enter your last name",
                        "last_name",
                        lastNameText,
                        setLastNameText
                    )}
                </div>
                {renderInput(
                    "Email",
                    "yourname@email.com",
                    "email",
                    email,
                    setEmail
                )}

                <div className="textarea input">
                    <label htmlFor="message" className="label">
                        Message
                    </label>
                    <textarea
                        required
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        id="message"
                    />
                    <div className="error-message">Please enter a message</div>
                </div>
                <div className="checkbox">
                    <input type="checkbox" className="box" />
                    <label>
                        Do you agree to provide the data I can reach you with?
                    </label>
                </div>
                <button id="btn_submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
