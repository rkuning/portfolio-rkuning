import React from "react";

const ContactPage = () => {
  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-brandColor mb-2">Contact</h4>
            <h2 className="font-bold text-darkColor text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Saya</h2>
            <p className="font-medium text-md text-midColor md:text-lg">
              There’s usually more than one way to code a thing in React. And while it’s possible to create the same thing
              different ways, there may be one or two approaches that technically work “better” than others. I actually run
              into plenty.
            </p>
          </div>
        </div>
        <form>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label htmlFor="name" className="text-base font-bold text-brandColor">
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-midColor text-darkColor rounded-md p-3 focus:outline-none focus:ring-brandColor focus:ring-1 focus:border-brandColor"
              ></input>
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="email" className="text-base font-bold text-brandColor">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-midColor text-darkColor rounded-md p-3 focus:outline-none focus:ring-brandColor focus:ring-1 focus:border-brandColor"
              ></input>
            </div>
            <div className="w-full px-4 mb-8">
              <label htmlFor="message" className="text-base font-bold text-brandColor">
                Pesan
              </label>
              <textarea
                type="text"
                id="message"
                className="w-full bg-midColor text-darkColor rounded-md p-3 focus:outline-none focus:ring-brandColor focus:ring-1 focus:border-brandColor h-32"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="text-base font-semibold text-lightColor bg-brandColor py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
