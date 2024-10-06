import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function ImageLazy({src, className, onClick, refer}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        if (!isLoading) return
        image.src = src;
        image.onload = () => {
            setIsLoading(false);
        };
        image.onerror = () => {
            setIsLoading(true);
        };

        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, [src, isLoading]);

    return (
        <img
            style={isLoading?{filter:"blur(10px)", clipPath:"inset(0)"}:{filter:"blur(0px)"}}
            className={className}
            onClick={onClick}
            src={src}
            ref={refer}
            loading="lazy"
        />
    )
}

ImageLazy.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func || undefined,
    refer: PropTypes.func
}