import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  


  return (
    <>
      <div>
        <section id="hero" className="hero-section bg-gray-100 py-16 text-center">
          <h1 className="text-4xl font-bold">Welcome to Karate School</h1>
          <p className="mt-4">
            Learn discipline, self-defense, and achieve physical fitness.
          </p>
          <Link
            to={"/signup"}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-6 rounded inline-block"
          >
            Join Now
          </Link>
        </section>
        <section id="about" className="about-section bg-white py-16 text-center">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-4">
            Karate School is dedicated to providing high-quality martial arts
            training for students of all ages. We offer a supportive and
            disciplined environment where individuals can learn and grow both
            physically and mentally.
          </p>
        </section>
        <section id="classes" className="classes-section bg-gray-100 py-16 text-center">
          <h2 className="text-2xl font-bold">Classes</h2>
          <p className="mt-4">
            We offer a variety of karate classes for different age groups and
            skill levels. Whether you are a beginner or an advanced
            practitioner, our experienced instructors will guide you on your
            martial arts journey.
          </p>
          <ul className="mt-6">
            <li>Kids Karate</li>
            <li>Teen Karate</li>
            <li>Adult Karate</li>
          </ul>
        </section>
        <section id="instructors" className="instructors-section bg-white py-16 text-center">
          <h2 className="text-2xl font-bold">Instructors</h2>
          <p className="mt-4">
            Our instructors are highly trained and dedicated to helping students
            reach their full potential. They have years of experience and are
            passionate about teaching martial arts.
          </p>
          <ul className="mt-6">
            <li>John Smith - 5th Dan Black Belt</li>
            <li>Jane Doe - 4th Dan Black Belt</li>
            <li>Mike Johnson - 3rd Dan Black Belt</li>
          </ul>
        </section>
        <section id="contact" className="contact-section bg-gray-100 py-16 text-center">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-4">
            If you have any questions or would like to inquire about our
            classes, feel free to contact us using the information below.
          </p>
          <p className="mt-4">Phone: (123) 456-7890</p>
          <p>Email: info@karateschool.com</p>
        </section>
      </div>
    </>
  );
};

export default Home;
