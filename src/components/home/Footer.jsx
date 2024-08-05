import instagramLogo from "../../assets/img/Instagram.png";
import linkedinLogo from "../../assets/img/LinkedIn.png";
import footerLogo from "../../assets/img/Logo_footer.png";

const Footer = () => {
  let content

  content = (
    <footer className="bg-footerImg bg-center bg-cover">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="footer-col">
            <h4 className="text-green-medium text-2xl font-semibold mb-8">
              <img src={footerLogo} alt="logo_id" />
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <img src={instagramLogo} alt="locationIcon" className="w-6 h-6" />
                <p className="text-black text-lg font-medium">
                  Carrera 67 # 48 - 41. Medellin, Colombia
                </p>
              </li> 
              <li className="flex items-center space-x-2">
                <img src={instagramLogo} alt="telephoneIcon" className="w-6 h-6" />
                <p className="text-black text-lg font-medium">
                  (604)4445616
                </p>
              </li> 
              <li className="flex items-center space-x-2">
                <img src={instagramLogo} alt="whatsAppIcon" className="w-6 h-6" />
                <p className="text-black text-lg font-medium">
                  +57 315 9266621
                </p>
              </li> 
              <li className="flex items-center space-x-2">
                <img src={instagramLogo} alt="emailIcon" className="w-6 h-6" />
                <p className="text-black text-lg font-medium">
                  info@idtsas.com
                </p>
              </li> 
            </ul>
            <div className="social-links flex space-x-5 mt-5">
              <a href="/"><img src={instagramLogo} alt="instagram_icon" /></a>
              <a href="/"><img src={linkedinLogo} alt="linkedin_icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

  return content
}

export default Footer
