import { useState, useEffect,useRef } from "react";

import "./style.-Slideshow.css";

const SlideShow = () => {
    const images = ["1.png", "2.png", "3.png", "4.png"];
    const colors = ["#4F637541", "#4E756E4D", "#5C4C2A44","#9C303E2F", "#B8996B36", "#4E2A5C4F"];
    const [index, setIndex] = useState(0);
    const [isrun, setisrun] = useState(0);
    const delay = 5000;
    const timeoutRef = useRef(null);
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }


    useEffect(() => {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
 return () => {
      resetTimeout();
    };
      
    }, [index]);

    return (
        <>
            <div className="slideshow">
                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {colors.map((backgroundColor, index) => (
                  
                            <div  className="slide" key={index} style={{ backgroundColor }} />
                     
                    ))}
                </div>
                <div className="slideshowDots">
                    {colors.map((_, idx) => (
                        <div key={idx} 
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                          setIndex(idx);
                        }}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SlideShow;
