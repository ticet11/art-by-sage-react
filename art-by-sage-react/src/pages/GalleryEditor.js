import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { AuthContext } from "../context/AuthContext";

const GalleryEditor = (props) => {
    const { register, handleSubmit } = useForm();
    const { isAuthenticated } = useContext(AuthContext);
    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(data);
        axios
            .post({
                url: "http://localhost:3000/gallery",
                data: data,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error("add gallery item error", error);
            });
        // event.target.reset();
    };

    return (
        <div>
            <form className="form-container">
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    ref={register({
                        required: "What's the title?",
                    })}
                />
                <input
                    type="text"
                    name="category"
                    placeholder="category"
                    ref={register({
                        required: "What's the category?",
                    })}
                />
                <input
                    type="text"
                    name="imageLocation"
                    placeholder="image location"
                    ref={register({
                        required: "What URL is your image hosted at?",
                    })}
                />
                <textarea
                    type="text"
                    name="description"
                    placeholder="description"
                    ref={register({
                        required: "Tell me about this piece.",
                    })}
                />
                <button onSubmit={handleSubmit(onSubmit)}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default GalleryEditor;
