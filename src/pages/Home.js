import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import FeaturedProduct from "../components/FeaturedProduct";
// import CourseCard from '../components/CourseCard';

export default function Error() {
  const data = {
    title: "GadgetCo.",
    content: "Bringing Innovation to Your Fingertips",
    destination: "/products",
    label: "Gadgets On Sale",
  };

  return (
    <>
      <Banner data={data} />
      <FeaturedProduct />
      <Highlights />
    </>
  );
}
