// src/SlideInImage.js
import React, { useEffect, useRef, useState } from "react";

const SlideInImage = ({ src, alt }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);
    const imageRefs = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
            const slideInAt = window.scrollY + window.innerHeight - imageRef.current.height / 2;
            const imageBottom = imageRef.current.offsetTop + imageRef.current.height;
            const isHalfShown = slideInAt > imageRef.current.offsetTop;
            const isNotScrolledPast = window.scrollY < imageBottom;

            if (isHalfShown && isNotScrolledPast) {
                setIsVisible(true);
            }else{
                setIsVisible(false);

            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (<>
    <img src={src} alt={alt} ref={imageRef} className={`slide-in-image ${isVisible ? "visible" : ""}`} />;
    <img src={src} alt={alt} ref={imageRef} className={`slide-in-image ${isVisible ? "visible" : ""}`} />;
    </>)
};

export default SlideInImage;
