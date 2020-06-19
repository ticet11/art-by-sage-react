import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Gallery() {
    const [gallery, setGallery] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:3000/gallery")
            .then((res) => {
                setGallery(res.data);
                console.log(res.data);
                setIsLoading(false);
            })
            .catch((error) =>
                console.error("gallery fetch error", error)
            );
        return;
    }, []);

    return (
        <div className="gallery-container">
            {isLoading ? (
                <div>
                    <FontAwesomeIcon spin icon="circle-notch" />
                    Loading...
                </div>
            ) : (
                gallery.map((galleryItem) => {
                    return (
                        <div
                            className="gallery-item"
                            key={galleryItem._id}
                        >
                            <img
                                src={galleryItem.imageLocation}
                                alt=""
                            />
                            <p>{galleryItem.title}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
}
