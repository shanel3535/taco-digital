
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "takodigital35@gmail.com";
  
  return (
    <footer className="bg-taco-dark text-white py-12">
      <div className="container-padded">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/9070e2b0-d3d1-48b5-b734-585d705c1c22.png" 
                alt="טאקו דיגיטל"
                className="h-12 w-auto mb-2"
              />
            </a>
            <p className="mt-2 text-gray-300">
              פתרונות דיגיטליים מתקדמים
            </p>
            <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors mt-1 block">
              {email}
            </a>
          </div>
          
          <div>
            <ul className="flex flex-wrap justify-center gap-8">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  בית
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  שירותים
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">
                  יתרונות
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  צור קשר
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 my-8"></div>
        
        <div className="text-center text-gray-400">
          <p>© {currentYear} טאקו דיגיטל. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
