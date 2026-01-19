import { useEffect, useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-2 sm:p-3 rounded-full bg-rabbit text-white 
            shadow-lg hover:bg-rabbit-dark transition"
            aria-label="Scroll to top"
        >
            <HiOutlineArrowUp className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
    );
};

export default ScrollToTopButton;
