import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Gallery() {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/gallery")
            .then((res) => {
                setGallery(res.data);
                console.log(res.data);
            })
            .catch((error) =>
                console.error("gallery fetch error", error)
            );
        return;
    }, []);

    return (
        <div className="gallery-container">
            {gallery.map((galleryItem) => {
                return (
                    <div
                        className="gallery-item"
                        key={galleryItem._id}
                    >
                        <h2>{galleryItem.title}</h2>
                        <img src={galleryItem.imageLocation} alt="" />
                    </div>
                );
            })}
        </div>
    );
}
