import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/system";

function FadeInSection(props) {
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
    <FadeInContainer
      slide={props.slide}
      className={shouldFadeIn ? "is-visible" : ""}
      ref={domRef}
    >
      {props.children}
    </FadeInContainer>
  );
}

const FadeInContainer = styled("div")(({ slide }) => ({
  height: "auto",
  opacity: 0,
  transform: slide ? "translateY(20vh)" : "none",
  visibility: "hidden",
  transition:
    "opacity 900ms ease-out, transform 400ms ease-out, visibility 900ms ease-out",
  willChange: "opacity, transform, visibility",

  "&.is-visible": {
    opacity: 1,
    transform: slide ? "none" : "none",
    visibility: "visible",
  },
}));

export default FadeInSection;
