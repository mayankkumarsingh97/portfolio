import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import HeadingCard from "../shared/HeadingCard";
import ExpertizeContainer from "../components/ExpertizeContainer";
import ApplicationContainer from "../components/ApplicationContainer";
import ListCardContainer from "../components/ListCardContainer";
import BlogCardContainer from "../shared/BlogCardContainer";
import Hero from "../shared/Hero";
import Faq from "../components/Faq";
import Marquee from "../components/Marquee";
import STAR from "../assets/icons/Star.png";
import "./index.css";
//
const MainLayout = () => {
  //
  return (
    <div className="grid-container">
      <Header />
      <main className="hero">
        <Hero />
        {/*  */}
        <HeadingCard heading="Expertise" className="mt-20" />
        <ExpertizeContainer />
        <HeadingCard heading="Works" isViewAll={true} className="mt-20" />
        {/* // */}
        <ApplicationContainer />
        <HeadingCard heading="Experience" className="mt-20" />
        {/* // */}
        <div className="list-card">
          <ListCardContainer />
        </div>
        <div className="mt-20">
          <HeadingCard heading="Blog" isViewAll={true} className="mt-20" />

          <BlogCardContainer />
        </div>
        <HeadingCard heading="Frequently asked questions" className="mt-20" />
        <Faq />
        <Marquee imageSrc={STAR} text="FIGMA" />
      </main>
      <section>
        <h2
          style={{
            color: "#000",
            textAlign: "center",
            padding: "20px",
            background: "#fff",
          }}
        >
          I am on feat/dev-user-auth Branch
        </h2>
      </section>
      <footer className="footer">
        <Footer />
      </footer>
      
    </div>
  );
};

export default MainLayout;
