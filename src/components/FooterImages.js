import React from "react";
import { Card } from "react-bootstrap";

const OffersCards = () => {
  const offerCardsData = [
    {
      id: 1,
      imageSrc:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applecare-202309?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1692730497948",
    },
    {
      id: 2,
      imageSrc:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-homekit-202309?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1692730632477",
    },
    {
      id: 3,
      imageSrc:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202303?wid=480&hei=500&fmt=jpeg&qlt=95&.v=1677655420359",
    },
    {
      id: 4,
      imageSrc:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626375546000",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {offerCardsData.map((card) => (
        <Card
          key={card.id}
          style={{
            width: "550px",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
          className="m-2"
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
          <Card.Img
            variant="top"
            src={card.imageSrc}
            alt={`Offer ${card.id}`}
          />
        </Card>
      ))}
    </div>
  );
};

export default OffersCards;
