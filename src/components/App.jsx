import React from "react";
import Header from "./Header";
import WoolProducts from "./WoolProducts";
import Portfolio from "./Portfolio";
import About from "./About";
import WinterCollection from "./WinterCollection";
import SummerCollection from "./SummerCollection";
import Reviews from "./Reviews";
import Blog from "./Blog";
import OrderProcess from "./OrderProcess";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <Header />
      <WoolProducts />
      <Portfolio />
      <About />
      <WinterCollection />
      <SummerCollection />
      <Reviews />
      <Blog />
      <OrderProcess />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
