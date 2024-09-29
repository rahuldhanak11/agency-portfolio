"use client";

import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard"; 
import ServiceCard from "./components/ServiceCard"; 
import { faCode, faMobileAlt, faPaintBrush, faClipboard } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeamMemberCard from "./components/MemberCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-screen bg-gray-100 pt-48 px-4">
        <motion.h1
          className="text-5xl md:text-9xl font-bold text-black leading-none text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          RADIKLE<sup className="text-xl md:text-4xl">TM</sup>
        </motion.h1>

        <div className="flex justify-center space-x-4 mt-2 text-base font-medium text-black">
          <span>Development</span>
          <span>&bull;</span>
          <span>Design</span>
          <span>&bull;</span>
          <span>Branding</span>
        </div>

        <div className="absolute bottom-32 w-full flex justify-between px-10">
          <p className="text-lg text-gray-700 max-w-md text-center">
            We are a development agency specializing in building modern, robust, and scalable applications for businesses of all sizes.
          </p>
        </div>
      </div>

      <section className="bg-white py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-4">
          Deployed Projects
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Here are some of our latest projects we&apos;ve successfully delivered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-10">
          <ProjectCard
            imageSrc="/assets/rsec.png" 
            title="Ricoche SEC"
            subtitle="Vulnerable Website, originally designed as a Cybersecurity Knowledge Platform "
          />
          <ProjectCard
            imageSrc="/assets/gg.png" 
            title="Gadget Galaxy"
            subtitle="Responsive and fully functional e-commerce website with Stripe Payment Gateway and Delivery Tracking"
          />
          {/* <ProjectCard
            imageSrc="/project3.jpg" 
            title="Manasatarang"
            subtitle="A mental health support platform designed specifically for students and working professionals"
          /> */}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-4">
          Services Provided
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          We offer a variety of services to meet your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 px-10">
          <ServiceCard icon={faCode} title="Web Development" />
          <ServiceCard icon={faMobileAlt} title="App Development" />
          <ServiceCard icon={faPaintBrush} title="UI/UX Designing" />
          <ServiceCard icon={faClipboard} title="Graphic Designing" />
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          A group of passionate individuals working together to deliver excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-10">
          <TeamMemberCard
            photo="/assets/rahul.jpg" // Replace with your image path
            name="Rahul Dhanak"
            roles={["Frontend Developer", "Flutter Developer", "UI/UX Designer", "Graphic Designer"]}
            linkedin="https://www.linkedin.com/in/rahul-dhanak//"
            github="https://github.com/rahuldhanak11"
            instagram="https://instagram.com/rahuldhanak11"
          />
          <TeamMemberCard
            photo="/assets/durgeshdp.jpeg" // Replace with your image path
            name="Durgesh Dubey"
            roles={["Backend Developer", "Cloud Developer", "Public Relations"]}
            linkedin="https://www.linkedin.com/in/durgesh-dubey18/"
            github="https://github.com/Durgesh-05"
            instagram="https://instagram.com/wsr_durgesh"
          />
          <TeamMemberCard
            photo="/assets/" // Replace with your image path
            name="Arya Gami"
            roles={["Frontend Developer", "Flutter Developer", "UI/UX Designer", "Graphic Designer"]}
            linkedin="https://www.linkedin.com/in/"
            github="https://github.com/michaeljohnson"
            instagram="https://www.instagram.com/arya_14_3"
          />
          <TeamMemberCard
            photo="/assets/khush.jpg"
            name="Khush Chheda"
            roles={["Cloud Developer", "Public Relations"]}
            linkedin="https://www.linkedin.com/in/"
            github="https://github.com/michaeljohnson"
            instagram="https://www.instagram.com/arya_14_3"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
