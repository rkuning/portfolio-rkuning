import React from "react";

const ClientPage = () => {
  return (
    <section id="client" className="pt-36 pb-32 bg-lightColor">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-brandColor mb-2">Clients</h4>
            <h2 className="font-bold text-darkColor text-3xl mb-4 sm:text-4xl lg:text-5xl">Yang pernah bekerja sama</h2>
            <p className="font-medium text-md text-darkColor md:text-lg">
              There’s usually more than one way to code a thing in React. And while it’s possible to create the same thing
              different ways.
            </p>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a
              href=""
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src="./images/clients/google.svg" alt="Google" />
            </a>
            <a
              href=""
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src="./images/clients/google.svg" alt="Google" />
            </a>
            <a
              href=""
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src="./images/clients/google.svg" alt="Google" />
            </a>
            <a
              href=""
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src="./images/clients/google.svg" alt="Google" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPage;
