import { useEffect, useRef, useState } from "react";

const useTranslateXImage = () => {
    const [scrollDirection, setScrollDirection] = useState(null);

    const [translateXPosition, setTranslateXPosition] = useState(80);

    const [scrollPosition, setScrollPosition] = useState(0);

    const previousScrollPosition = useRef(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDirection("down");
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDirection("up");
        }
        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;

        setScrollPosition(currentScrollPosition);
    };

    const handleTranslateX = () => {
        if (scrollDirection === "down" && scrollPosition >= 2600) {
            console.log("down");

            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 10
            );
        } else if (scrollDirection === "up") {
            console.log("up");

            setTranslateXPosition(
                translateXPosition >= 80 ? 80 : translateXPosition + 10
            );
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollTracking);
        return () => window.removeEventListener("scroll", scrollTracking);
    }, []);
    return {
        translateXPosition,
        handleTranslateX,
        scrollPosition
    };
};

export default useTranslateXImage;
