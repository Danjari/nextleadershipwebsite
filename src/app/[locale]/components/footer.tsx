// File: app/components/Footer.tsx

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#001A40] rounded-lg shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://next-leadership.org/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Next Leadership</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#accueil" className="hover:underline me-4 md:me-6">Accueil</a>
            </li>
            <li>
              <a href="#programmes" className="hover:underline me-4 md:me-6">Programmes</a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline me-4 md:me-6">Blog</a>
            </li> */}
            <li>
              <a href="#apropos" className="hover:underline">A propos</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[#FFC72C] sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center">© 2024 <a href="https://next-leadership.org/" className="hover:underline text-[#FFC72C]">Next Leadership</a>. Tous droits réservés.</span>
      </div>
    </footer>
  );
};

export default Footer;