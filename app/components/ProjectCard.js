import Image from 'next/image';

const ProjectCard = ({ imageSrc, title, subtitle }) => {
  return (
    <div>
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={200}
        className="object-cover rounded-md mb-4"
      />
    </div>
    <div className='justify-center items-center flex flex-col'>
    <h3 className="text-xl font-semibold mb-2 mt-4 text-black">{title}</h3>
      <p className="text-gray-600 items text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
