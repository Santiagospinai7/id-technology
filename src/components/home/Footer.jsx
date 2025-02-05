import instagramLogo from "../../assets/img/Instagram.png";
import linkedinLogo from "../../assets/img/LinkedIn.png";
import footerLogo from "../../assets/img/Logo_footer.png";

const Footer = () => {
  return (
    <footer className="md:bg-white bg-white md:bg-footerImg bg-center bg-cover py-10">
      <div className="container max-w-6xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a href="/">
              <img src={footerLogo} alt="ID Technology Logo" className="w-32 mb-2" />
            </a>
                <span className="text-black text-sm">
                  <a href="/pqrsf">PQRSF</a>
                </span>
            <ul className="space-y-0">
              <li className="flex items-center space-x-3">
                <span className="text-black text-sm">Carrera 67 # 48 - 41, Medellin, Colombia</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-black text-sm">604 5377455</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-black text-sm">+57 315 9266621</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-black text-sm">info@idtsas.com</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com/idtechnology.sas" target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="Instagram" className="w-8 h-8 hover:opacity-80 transition-opacity duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/id-technology-sas" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;