import React from "react";

const PortfolioPage = () => {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-darkColor">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-brandColor mb-2">Portfolio</h4>
            <h2 className="font-bold text-lightColor text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Terbaru</h2>
            <p className="font-medium text-md text-midColor md:text-lg">
              There’s usually more than one way to code a thing in React. And while it’s possible to create the same thing
              different ways, there may be one or two approaches that technically work “better” than others. I actually run
              into plenty of examples where the code used to build a React component is technically “correct” but opens up
              issues that are totally avoidable.
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="./images/portfolio/project1.png" alt="Project 1" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-lightColor mt-5 mb-3">Project 1</h3>
            <p className="font-medium text-base text-midColor">
              There’s usually more than one way to code a thing in React. And while it’s possible to create the same thing
              different ways, there may be one or{" "}
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="./images/portfolio/project2.png" alt="Project 2" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-lightColor mt-5 mb-3">Project 2</h3>
            <p className="font-medium text-base text-midColor">
              There’s usually more than one way to code a thing in React. And while it’s possible to create the same thing
              different ways, there may be one or{" "}
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="./images/portfolio/project3.png" alt="Project 3" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-lightColor mt-5 mb-3">Project 3</h3>
            <p className="font-medium text-base text-midColor">
              There’s usually more than one way to code a thing in React. And while it’s possible to create the same thing
              different ways, there may be one or{" "}
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="./images/portfolio/project1.png" alt="Project 4" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-lightColor mt-5 mb-3">Project 4</h3>
            <p className="font-medium text-base text-midColor">
              There’s usually more than one way to code a thing in React. And while it’s possible to create the same thing
              different ways, there may be one or{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
