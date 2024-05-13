import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import AllProductCard from "../../components/ProductCard/AllProductCard";

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Home | E-Shop BD</title>
      </Helmet>
      <Banner />
      <AllProductCard></AllProductCard>
      <Contact />
    </>
  );
};

export default Home;
