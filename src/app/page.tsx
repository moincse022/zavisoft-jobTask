import Banner from "@/components/banner/Banner";
import CategorySlider from "@/components/categorys/Category";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";

import Product from "@/components/products/Product";
import ProductReviews from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Product />
      {/* <RelatedProducts /> */}
      <CategorySlider />
      <ProductReviews />
      <Footer />
    </>
  );
}
