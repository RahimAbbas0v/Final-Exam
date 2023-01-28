import React from "react";
import { Helmet } from "react-helmet";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import Section3 from "../Section3/Section3";
import Customers from "../Customers/Customers";
import Solutions from "../Solutions/Solutions";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="icon" type="image/x-icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEEybzjp8yK_qgIBuTq_h-fiSOssdw-QqXQ&usqp=CAU" />
        
      </Helmet>
      <Header />
      <Cards />
      <Section3 />
      <Customers />
      <Solutions />
      <Footer />
    </>
  );
}

export default Home;
