import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectCard = ({ imageSrc, title, subtitle,url }) => {
  return (
    <motion.div onClick={() => window.open(url, '_blank')} onViewportEnter=''>
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 aspect-video">
      <Image
        src={imageSrc}
        alt={title}
        width={900}
        height={700}
        className="object-cover rounded-md mb-4 w-full h-full"
      />
    </div>
    <div className='justify-center items-center flex flex-col'>
    <h3 className="text-xl font-semibold mb-2 mt-4 text-black">{title}</h3>
      <p className="text-gray-600 items text-center">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
