"use client"
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { signIn } from "next-auth/react";

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

        <button
          type="button"
          className="custom-btn text-primary-blue rounded-full bg-white min-w-[130px]"
          onClick={() => signIn()}
        >Sign In</button>
      </nav>
    </header>
  )
};

export default Navbar;
