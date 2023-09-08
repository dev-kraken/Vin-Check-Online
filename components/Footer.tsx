import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";
let date =  new Date().getFullYear();
const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-gray-100'>
    <div className='grid items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 justify-center sm:justify-between sm:flex'>
      <p>© {date} VinCheck. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/privacy-policy" className="text-gray-600">
          Privacy & Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;