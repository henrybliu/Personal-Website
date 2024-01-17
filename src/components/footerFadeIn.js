import React, { useEffect, useState, useRef } from "react";
import "../style/footerFadeIn.css";

function FooterFadeInSection(props) {
  const [visibleItems, setVisibleItems] = useState([]);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !visibleItems.includes(props.id)) {
          setVisibleItems((prevVisibleItems) => [
            ...prevVisibleItems,
            props.id,
          ]);
        }
      });
    });

    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, [visibleItems, props.id]);

  const shouldFadeIn = visibleItems.includes(props.id);

  return (
    <div
      className={`footer-fade-in-section ${shouldFadeIn ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FooterFadeInSection;
