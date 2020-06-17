import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Gallery() {
    const [gallery, setGallery] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/gallery')
        .then(res => {
            setGallery(res.data)
        })
        .then(console.log(gallery))
        .catch(error => console.error('gallery fetch error', error))
        return;
    }, [])



    return (
        <div>
            Gallery
        </div>
    )
}
