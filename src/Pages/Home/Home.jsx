import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import slide1 from "../../assets/pexels-rahulp9800-1251265.jpg";
import slide2 from "../../assets/pexels-thatguycraig000-1767016.jpg";
import slide3 from "../../assets/pexels-nietjuh-697673.jpg";
import img from "../../assets/images.jpg";
import PaintingCard from "../../Components/PaintingCard/PaintingCard";

import { useTypewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Correct import path for modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import additional styles if needed
import "swiper/css/pagination";

const Home = () => {
  const loadedPaintings = useLoaderData();
  const [paintings] = useState(loadedPaintings);

  const { text } = useTypewriter({
    words: ["Landscape", "Comic", "Portrait", "Oil Painting"],
    loop: true,
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);
    const themeChangeHandler = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      document.body.classList.replace(savedTheme, newTheme);
      localStorage.setItem("theme", newTheme);
    };

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeQuery.addEventListener("change", themeChangeHandler);

    return () =>
      darkModeQuery.removeEventListener("change", themeChangeHandler);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Slider Section */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="w-full h-[400px] md:h-[600px]"
        >
          {[slide1, slide2, slide3].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6 bg-black bg-opacity-50">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    ArtisanHaven: "Where Creativity Blossoms"
                  </h1>
                  <p className="text-xl md:text-3xl mb-6 max-w-2xl">
                    {
                      [
                        "Dive into the world of Painting and Drawing.",
                        "Immerse Yourself in Creativity.",
                        "Explore Painting and Drawing Galore.",
                      ][index]
                    }
                  </p>
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white py-2 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* About Us Section */}
      {/* About Us Section */}
      {/* About Us Section */}
      <section className="mt-16">
        <Fade>
          <div className="relative   rounded-lg shadow-lg p-8 md:p-16">
            <h2 className="text-center text-4xl font-bold mb-8">About Us</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Images Section */}
              <div className="relative md:w-1/2">
                {/* Background Decorative Shapes */}
                <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full opacity-50 blur-md"></div>
                <div className="absolute top-10 -right-6 w-32 h-32 rounded-full opacity-50 blur-md"></div>
                {/* Images */}
                <div className="relative">
                  <img
                    src="https://i.ibb.co.com/5jr05VM/ARVA34-Hero.jpg"
                    alt="About Us 1"
                    className="rounded-lg shadow-lg transform transition-all hover:scale-105 duration-300"
                  />
                  {/* <img
                    src="https://i.ibb.co.com/C1gqQKr/images.jpg"
                    alt="About Us 2"
                    className="rounded-lg shadow-lg transform transition-all hover:scale-105 duration-300 absolute top-10 left-10 border-4 border-white"
                  /> */}
                </div>
              </div>
              {/* Text Section */}
              <div className="md:w-1/2 text-center md:text-left space-y-4">
                <p className="text-lg md:text-xl leading-relaxed">
                  At{" "}
                  <span className="font-bold text-purple-600">
                    ArtisanHaven
                  </span>
                  , we believe art is not just an expression but a way of life.
                  Our mission is to create a platform that nurtures creativity,
                  connects artists with art enthusiasts, and celebrates the
                  beauty of artistic expression.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Whether you're an experienced artist or starting your journey,
                  we welcome you to explore, learn, and grow with us. Together,
                  let's bring colors to life and inspire the world with every
                  stroke of imagination.
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      {/* <section className="mt-16">
        <Fade>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg p-8 md:p-16">
            <h2 className="text-center text-4xl font-bold mb-8">About Us</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Images */}

      {/* Painting Section */}
      <section className="mt-16">
        <Fade>
          <h2 className="text-center text-4xl font-bold mb-6">
            ArtisticHaven: Every Stroke Tells a Story
          </h2>
          <p className="text-center text-xl mb-10">
            Step into our gallery and embark on a journey of art and beauty.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintings.slice(0, 6).map((painting) => (
              <PaintingCard key={painting._id} painting={painting} />
            ))}
          </div>
        </Fade>
      </section>

      {/* Upcoming Events Section */}
      <section className="mt-16 py-16  rounded-lg shadow-lg p-6">
        <Fade>
          <h2 className="text-center text-4xl font-bold mb-6">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Art Expo 2025",
                date: "January 20, 2025",
                venue: "Dhaka",
              },
              {
                name: "Painting Workshop",
                date: "February 10, 2025",
                venue: "Chittagong",
              },
              {
                name: "Artisans Meetup",
                date: "March 5, 2025",
                venue: "Sylhet",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
              >
                <h3 className="text-2xl font-bold">{event.name}</h3>
                <p className="mt-2">{event.date}</p>
                <p>{event.venue}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* Artists Section */}
      {/* Artists Section */}
      <section className="mt-16 py-16  rounded-lg shadow-lg p-6">
        <Fade>
          <h2 className="text-center text-4xl font-bold mb-6">Our Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                expertise: "Oil Painting",
                image: "https://i.ibb.co/SR1Nzbk/pexels-cottonbro-4098273.jpg",
              },
              {
                name: "Jane Smith",
                expertise: "Portraits",
                image: "https://i.ibb.co/vqFdyJB/pexels-cottonbro-4100672.jpg",
              },
              {
                name: "Emily Carter",
                expertise: "Abstract Art",
                image: "https://i.ibb.co/vY4nGj7/pexels-cottonbro-4101136.jpg",
              },
            ].map((artist, index) => (
              <div
                key={index}
                className="p-6 bg-white text-black shadow-md rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative mb-4">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-64 object-cover rounded-lg border-4 border-white shadow-xl"
                  />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                    <h3 className="text-2xl font-bold">{artist.name}</h3>
                  </div>
                </div>
                <p className="text-xl">{artist.expertise}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* Customer Feedback Section */}
      <section className="mt-16 py-16  rounded-lg shadow-lg p-6">
        <Fade>
          <h2 className="text-center text-4xl font-bold mb-6">
            Customer Feedback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alice", feedback: "Absolutely loved the collection!" },
              { name: "Bob", feedback: "A true haven for art enthusiasts." },
              {
                name: "Charlie",
                feedback: "Incredible experience and amazing artworks.",
              },
            ].map((customer, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
              >
                <p className="italic">"{customer.feedback}"</p>
                <p className="mt-2 text-right">- {customer.name}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-16 py-16 rounded-lg shadow-2xl">
        <Fade>
          <h2 className="text-center text-4xl font-bold  mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
            {/* Left side - Contact Information */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-semibold mb-6">
                We'd Love to Hear from You!
              </h3>
              <p className="text-lg  mb-6">
                Whether you have a question, need more information, or want to
                collaborate, we're here to help.
              </p>
              <div className="space-y-4">
                <p className="flex items-center text-lg ">
                  <span className="mr-3">📍</span> Dhanmondi, Dhaka
                </p>
                <p className="flex items-center text-lg ">
                  <span className="mr-3">📞</span> 123-456-789
                </p>
                <p className="flex items-center text-lg ">
                  <span className="mr-3">✉️</span> email@example.com
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center items-center">
              <img
                src={img}
                alt="Contact Us"
                className="w-full md:w-96 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Optional: Contact Form Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form className="max-w-lg mx-auto space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Home;
