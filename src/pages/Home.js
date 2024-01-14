import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import FeaturedProduct from "../components/FeaturedProduct";


export default function Error() {
  const data = {
    title: "GadgetCo.",
    content: "Bringing Innovation to Your Fingertips",
    destination: "/products",
    label: "Buy Now!",
  };

  return (
    <>
      <Banner data={data} />
      <FeaturedProduct />
      <Highlights />
    </>
  );
}
