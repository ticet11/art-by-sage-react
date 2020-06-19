import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="contact-form-container">
            <form
                className="contact-form"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                <button>Send</button>
            </form>
        </div>
    );
}
