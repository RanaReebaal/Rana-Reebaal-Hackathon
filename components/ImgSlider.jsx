import React, { useState, useEffect, useRef } from 'react'
import { runFireworks } from '../lib/utils'

const ImgSlider = () => {
    const image = ["banner_1.png", "banner_2.png", "banner_3.png", "banner_4.png", "banner_5.png"]
    const delay = 4000
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === image.length - 1 ? 0 : prevIndex + 1), delay)
        return () => { resetTimeout() }
    }, [index]);

    return (
        <>
            <div className="slideshow">
                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {image.map((img, index) => (
                        <img className="slide" key={index} src={"/img/" + img} onClick={() => runFireworks()} />
                    ))}
                </div>

                <div className="slideshowDots">
                    {image.map((_, idx) => (
                        <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => { setIndex(idx) }}></div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ImgSlider
