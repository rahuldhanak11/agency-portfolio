import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ServiceCard = ({ icon, title }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:-translate-y-2 transition-all duration-300"
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 text-4xl">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-lg font-semibold text-center">{title}</h3>
    </motion.div>
  );
};

export default ServiceCard;
