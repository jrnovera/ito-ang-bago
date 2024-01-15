import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const RandomGadgetCarousel = () => {
  // Example gadget images
  const gadgetImages = [
    "https://cdn.wccftech.com/wp-content/uploads/2023/01/Apple-Trade-In.jpg",
    "https://www.apple.com/v/macbook-air/q/images/meta/macbook-air_overview__fugeevgwjuie_og.png?202312121840",
    "https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_apple-watch-telas.jpg?quality=70&strip=info&w=920",
    "https://static.toiimg.com/thumb/msid-102403522,width-800,resizemode-4,imgsize-8022/share.jpg",
    // Add more image URLs as needed
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="my-carousel">
      {gadgetImages.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Gadget ${idx + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default RandomGadgetCarousel;
