import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import AllProductCard from "../../components/ProductCard/AllProductCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllProductCard></AllProductCard>
      <Contact />
    </div>
  );
};

export default Home;
