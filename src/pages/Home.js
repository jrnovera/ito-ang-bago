import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import FeaturedProduct from "../components/FeaturedProduct";
// import CourseCard from '../components/CourseCard';

export default function Error() {
  const data = {
    title: "Zuitt Coding Bootcamp",
    content: "Opportunies for everyone everwhere",
    destination: "/products",
    label: "Enroll now!",
  };

  return (
    <>
      <Banner data={data} />
      <FeaturedProduct />
      <Highlights />
    </>
  );
}
