import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0); // Initialize with the first slide
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);
//per me u ndrru vet kodi
  useEffect(() => {
    const interval = setInterval(() => {
      // setInterval()->is a JavaScript function that repeatedly calls a provided function at a specified time interval 
      // Calculate the next slide index
      const nextSlideIndex = (goToSlide + 1) % cards.length;
      setGoToSlide(nextSlideIndex);
    }, 4000); // Change slide every 3 seconds (adjust this value as needed)

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(interval);
    };
  }, [goToSlide, cards.length]);
//per me u ndrru vet kodi
  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
