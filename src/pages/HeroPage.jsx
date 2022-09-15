import React from "react";

const HeroPage = () => {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-brandColor md:text-xl">
              Hello there! I'm
              <span className="block font-bold text-darkColor text-4xl mt-1 lg:text-5xl">Danang Ipul Basrin</span>
            </h1>
            <h2 className="font-medium text-midColor text-lg pt-2 mb-5 lg:text-2xl">Backend Developer | Mobile Developer</h2>
            <p className="font-medium text-midColor mb-10 leading-relaxed">
              An informatics management graduated from AMIK Harapan Bangsa Surakarta with a GPA of 3.86. Experienced
              accounting with 4 years of experience completing all assigned tasks accurately and efficiently. Eager to learn
              new things and up to any challenges. Equally good in individual and teamwork to solve a problem. Enthusiastic
              about Web Development, Software Development, Accounting, Finance, and Public Relations.
            </p>
            <a
              href=""
              className="text-base font-semibold text-lightColor bg-brandColor hover:shadow-lg hover:bg-opacity-90 py-3 px-8 rounded-full transition duration-300 ease-in-out"
            >
              Contact me!
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10 relative lg:mt-9 lg:right-0">
              <img src="./images/profile/profile-picture.png" alt="Danang Ipul Basrin" className="max-w-full mx-auto" />
              <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-100">
                <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#fb6012"
                    d="M45.4,-70.4C59.4,-70.5,71.6,-59.5,75.5,-45.9C79.3,-32.3,74.8,-16.2,74.6,-0.1C74.5,16,78.8,32,74.1,44.2C69.5,56.4,55.8,64.7,42,71.2C28.1,77.7,14.1,82.3,-1.1,84.2C-16.2,86,-32.4,85.1,-42.2,76.3C-52,67.4,-55.5,50.7,-58.5,36.7C-61.5,22.7,-64,11.4,-68.3,-2.5C-72.5,-16.3,-78.6,-32.6,-71.8,-40C-65,-47.4,-45.4,-46.1,-31.3,-45.9C-17.2,-45.7,-8.6,-46.8,3.5,-53C15.7,-59.1,31.4,-70.3,45.4,-70.4Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
