import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className='w-full  absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/vin-check-online-logo.svg'
            alt='logo'
            width={200}
            height={0}
            className='object-contain'
          />
        </Link>
        <Link
          type="button"
          className="custom-btn text-center bg-gradient-to-r from-[#4C68D9] to-[#A96AB6] rounded-full text-white shadow-sm shadow-amber-50 min-w-[130px]"
          href="/blogs"
        >
          <span className={`flex-1`}>Blogs</span>
        </Link>
      </nav>
    </header>
  )
};

export default Navbar;
