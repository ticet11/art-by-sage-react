import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

const GalleryEditor = (props) => {
    const [galleryItem, setGalleryItem] = useState({
        title: "",
        category: "",
        imageLocation: "",
        description: "",
    });
    const { register, handleSubmit } = useForm();

    const onChange = (event) => {
        event.preventDefault();
        setGalleryItem({
            ...galleryItem,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        debugger;
        console.log(galleryItem);
        fetch("http://localhost:3000/gallery", {
            method: "POST",
            body: JSON.stringify(galleryItem),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error("add gallery item error", error);
            });
        event.target.reset();
    };

    return (
        <div>
            <form onSubmit={onSubmit} className="form-container">
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    onChange={onChange}
                    ref={register({
                        required: "What's the title?",
                    })}
                />
                <input
                    type="text"
                    name="category"
                    placeholder="category"
                    onChange={onChange}
                    ref={register({
                        required: "What's the category?",
                    })}
                />
                <input
                    type="text"
                    name="imageLocation"
                    placeholder="image location"
                    onChange={onChange}
                    ref={register({
                        required: "What URL is your image hosted at?",
                    })}
                />
                <textarea
                    type="text"
                    name="description"
                    placeholder="description"
                    onChange={onChange}
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
