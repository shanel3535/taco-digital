
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-taco-dark text-white py-12">
      <div className="container-padded">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-heading font-bold text-2xl">
              טאקו <span className="text-taco-orange">דיגיטל</span>
            </a>
            <p className="mt-2 text-gray-300">
              פתרונות דיגיטליים מתקדמים
            </p>
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
