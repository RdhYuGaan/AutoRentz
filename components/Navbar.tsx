import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className='max-w-[1440px] mx-auto flex justify-between sm:px-16 px-6 py-4'>
        <Link href="/" className="flex justify-center  items-center">
          <Image 
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18} 
            className="object-contain"
          />
        </Link>

        <CustomButton 
          title="Sign In" 
          btnType="button" 
          containerStyles="text-primary-black font-bold rounded-full  min-w-[130px] shadow-md hover:bg-gray-100 transition ease-in-out duration-200"
        />
      </nav>
    </header>
  );
}

export default Navbar;
