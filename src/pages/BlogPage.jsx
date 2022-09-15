import React from "react";

const BlogPage = () => {
  return (
    <section id="blog" className="pt-36 pb-32 bg-darkColor">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-brandColor mb-2">Blog</h4>
            <h2 className="font-bold text-lightColor text-3xl mb-4 sm:text-4xl lg:text-5xl">Tulisan Terkini</h2>
            <p className="font-medium text-md text-midColor md:text-lg">
              Where the code used to build a React component is technically “correct” but opens up issues that are totally
              avoidable.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-lightColor rounded-xl overflow-hidden shadow-lg mb-10">
              <img src="https://source.unsplash.com/360x200?programming" alt="Programming" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <a href="#" className="block mb-3 font-semibold text-xl text-darkColor hover:text-brandColor truncate">
                    Tips belajar programming
                  </a>
                </h3>
                <p className="font-medium text-midColor text-base mb-6">
                  Where the code used to build a React component is technically “correct” but opens up issues that are
                  totally avoidable.
                </p>
                <a
                  href="#"
                  className="font-medium text-sm text-lightColor bg-brandColor py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Baca selengkapnya...
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-lightColor rounded-xl overflow-hidden shadow-lg mb-10">
              <img src="https://source.unsplash.com/360x200?health" alt="Health" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <a href="#" className="block mb-3 font-semibold text-xl text-darkColor hover:text-brandColor truncate">
                    Tips menjaga kesehatan mata
                  </a>
                </h3>
                <p className="font-medium text-midColor text-base mb-6">
                  Where the code used to build a React component is technically “correct” but opens up issues that are
                  totally avoidable.
                </p>
                <a
                  href="#"
                  className="font-medium text-sm text-lightColor bg-brandColor py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Baca selengkapnya...
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-lightColor rounded-xl overflow-hidden shadow-lg mb-10">
              <img src="https://source.unsplash.com/360x200?Religi" alt="Religi" className="w-full" />
              <div className="py-8 px-6">
                <h3>
                  <a href="#" className="block mb-3 font-semibold text-xl text-darkColor hover:text-brandColor truncate">
                    Tips berpuasa
                  </a>
                </h3>
                <p className="font-medium text-midColor text-base mb-6">
                  Where the code used to build a React component is technically “correct” but opens up issues that are
                  totally avoidable.
                </p>
                <a
                  href="#"
                  className="font-medium text-sm text-lightColor bg-brandColor py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Baca selengkapnya...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
