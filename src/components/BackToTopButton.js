import { useEffect, useState } from "react";
import "../styles/BackToTopButton.css";

const BackToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  const handleScrollButtonVisibility = () => {
    window.pageYOffset > 300 ? setBackToTop(true) : setBackToTop(false);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <button className={`toTopBtn ${backToTop && "active"}`} onClick={scrollUp}>
      <svg
        className="logo"
        height="25px"
        width="25px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-40.94 -40.94 593.62 593.62"
        xmlSpace="preserve"
        stroke="#000000"
        strokeWidth="30"
      >
        <path d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z" />{" "}
      </svg>
    </button>
  );
};

export default BackToTopButton;
