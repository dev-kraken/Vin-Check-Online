import Link from "next/link";
let date =  new Date().getFullYear();
const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-gray-100'>
    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@{date} VinCheck. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/privacy-policy" className="text-gray-500">
          Privacy & Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;