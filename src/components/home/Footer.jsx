// import footerImg from "../../assets/img/Logo_footer.png";
import footerLogo from "../../assets/img/Logo_footer.png";

const Footer = () => {
  let content

  content = (
    <footer className="bg-footerImg bg-center bg-cover py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="footer-col">
            <h4 className="text-green-medium text-2xl font-semibold mb-8">
              <img src={footerLogo} alt="logo_id" />
            </h4>
            <ul>
              <li><a href="/" className="text-black text-lg font-medium">Carrera 67 # 48 - 41. Medellin, Colombia</a></li>
              <li><a href="/" className="text-black text-lg font-medium">(604)4445616</a></li>
              <li><a href="/" className="text-black text-lg font-medium">+57 315 9266621</a></li>
              <li><a href="/" className="text-black text-lg font-medium">info@idtsas.com</a></li>
            </ul>
            <div className="social-links flex space-x-4">
              <a href="/"><img src="" alt="instagram_icon" /></a>
              <a href="/"><img src="" alt="linkedin_icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

  return content
}

export default Footer
