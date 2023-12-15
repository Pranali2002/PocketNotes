import { useState, useEffect } from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    const checkIsMobile = () => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 768);
    };

    useEffect(() => {
        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);
    return isMobile;
};

export default useIsMobile;