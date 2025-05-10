import React from 'react';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-6">

        {/* WhatsApp Info */}
        <div className="text-center md:text-left">
  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
    <a href="https://wa.me/923023155306" target="_blank" rel="noopener noreferrer" title="WhatsApp">
      <FaWhatsapp className="text-green-400 text-2xl hover:text-green-500 transition" />
    </a>
    <p className="font-semibold text-lg">Contact us on WhatsApp:</p>
  </div>
  <a
    href="https://wa.me/923023155306"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-400 font-bold underline"
  >
    +92 302 3155306
  </a>
</div>


        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
         
          <a href="#" title="Facebook">
            <FaFacebookF className="hover:text-blue-500 transition" />
          </a>
          <a href="#" title="TikTok">
            <SiTiktok className="hover:text-pink-500 transition" />
          </a>
          <a href="#" title="Twitter">
            <FaTwitter className="hover:text-sky-400 transition" />
          </a>
          <a href="#" title="Instagram">
            <FaInstagram className="hover:text-pink-300 transition" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Pak Tyre and Rubber Factory. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
