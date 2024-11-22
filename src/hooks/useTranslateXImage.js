import useScrollHandling from "@/hooks/useScrollHanding";
import { useEffect, useState } from "react";
const useTranslateXImage = () => {
    const { scrollDirection, scrollPosition } = useScrollHandling();
    const [translateXPosition, setTranslateXPosition] = useState(80);

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
        handleTranslateX();
    }, [scrollPosition]);

    return {
        translateXPosition
    };
};

export default useTranslateXImage;
