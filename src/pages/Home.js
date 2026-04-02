import React from 'react';
import heroImg from '../assets/hero.png';

/**
 * Landing page showcasing the mission and vision of NeZha Academy.
 * Includes a hero banner and a short overview of who we are and our core values.
 */
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <img
          src={heroImg}
          alt="Children performing on stage"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">NeZha Academy</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Nurturing imagination and critical thinking through drama and transpersonal psychology.
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="/programs"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Our Programs
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 py-2 px-4 rounded"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About / Values Section */}
      <section className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Who We Are</h2>
        <p className="text-lg mb-8 text-center">
          NeZha Academy is a non‑profit drama club in Silicon Valley dedicated to inspiring young minds through drama in transpersonal psychology. Our unique programs help children explore narrative thinking, develop empathy, and nurture independent thought.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p>
              We aim to revolutionize how children think and learn by integrating drama in transpersonal psychology, enhancing their understanding of complex social and ecological issues.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p>
              We envision a world where every child has access to innovative learning experiences that promote personal growth, using creative arts as a bridge to knowledge, empathy, and empowerment.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">Core Values</h3>
            <p>
              Creativity, empathy, independent thinking, community collaboration, and holistic development guide everything we do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;