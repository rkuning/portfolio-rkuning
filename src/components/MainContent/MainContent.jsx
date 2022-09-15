import React from "react";
import { AboutPage, BlogPage, ClientPage, ContactPage, HeroPage, PortfolioPage } from "../../pages";

const MainContent = () => {
  return (
    <>
      <HeroPage />
      <AboutPage />
      <PortfolioPage />
      <ClientPage />
      <BlogPage />
      <ContactPage />
    </>
  );
};

export default MainContent;
