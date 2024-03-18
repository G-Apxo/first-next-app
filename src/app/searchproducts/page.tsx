import { PRODUCTS } from "@/src/data/products";
import ProductListing from "./client";
const getServersideProps = async () => {
  return {
    props: {
      products: PRODUCTS,
    },
  };
};
export default async function ProductsPage() {
  const products = await getServersideProps();
  console.log(products);
  return <ProductListing products={products} />;
}
