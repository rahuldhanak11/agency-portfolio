// components/TeamMemberCard.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const TeamMemberCard = ({ photo, name, roles, linkedin, github, instagram }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg hover:-translate-y-2 transition-all duration-300"
      transition={{ duration: 0.3 }}
    >
      <img src={photo} alt={name} className="w-32 h-32 rounded-full mb-4 object-cover" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex space-x-4 mt-2 static">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-xl" />
        </a>
      </div>
      <div className="relative">
        <p className="text-gray-600 text-center mt-2 static">
          <Typewriter
            words={roles} 
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delay={1500}
          />
        </p>
      </div>
      
    </motion.div>
  );
};

export default TeamMemberCard;
