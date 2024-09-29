import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        <div className="pr-4 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">RADIKLE</h1>
          <p className="mt-2 text-sm">
            We&apos;re here to assist you with your needs. 
            <br />
            Reach out to us for any inquiries or support!
          </p>
        </div>
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a href="mailto:rickshare.radikle@gmail.com" className="text-sm hover:underline">
              rickshare.radikle@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <a href="tel:+9892943905" className="text-sm hover:underline">
              9892943905
            </a>
          </div>
        </div>
        <div className="text-sm text-center md:text-left">
          <p>© 2024 RADIKLE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
