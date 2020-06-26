import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function Contact() {
    const { register, handleSubmit, errors, reset } = useForm();
    const [sent, setSent] = useState(false);

    const onSubmit = (data, event) => {
        axios
            .post("https://art-by-sage-database.herokuapp.com/mail/send", data)
            .then((res) => {
                setSent(true);
            })
            .catch((error) => {
                console.error("contact submit error", error);
            });
        event.target.reset();
    };
    return (
        <div className="contact-form-wrapper form-wrapper">
            <form
                className="form-container"
                onSubmit={handleSubmit(onSubmit)}
                >
                <h3>Contact</h3>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    ref={register({ required: "What's your name?!" })}
                />
                {errors.name && (
                    <p className="error-message">
                        {
                            <FontAwesomeIcon icon="exclamation-triangle" />
                        }
                        {errors.name.message}
                    </p>
                )}
                <input
                    type="email"
                    placeholder="E-Mail"
                    name="email"
                    ref={register({
                        required:
                            "I need your e-mail so I can respond!",
                    })}
                />
                {errors.email && (
                    <p className="error-message">
                        {
                            <FontAwesomeIcon icon="exclamation-triangle" />
                        }
                        {errors.email.message}
                    </p>
                )}
                <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    ref={register({
                        required:
                            "Let me know what this is all about!",
                    })}
                />
                {errors.subject && (
                    <p className="error-message">
                        {
                            <FontAwesomeIcon icon="exclamation-triangle" />
                        }
                        {errors.subject.message}
                    </p>
                )}
                <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="How can I help you?"
                    ref={register({
                        required: "What do you need to tell me?",
                    })}
                ></textarea>
                {errors.message && (
                    <p className="error-message">
                        {
                            <FontAwesomeIcon icon="exclamation-triangle" />
                        }
                        {errors.message.message}
                    </p>
                )}
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
