import AllProductCard from "../../components/ProductCard/AllProductCard";
import { Helmet } from 'react-helmet';

const ProductPage = () => {
  return (
    <>
      <Helmet>
        <title>Product | E-Shop BD</title>
      </Helmet>
      <AllProductCard></AllProductCard>
    </>
  );
};

export default ProductPage;
