import React from 'react';
// import logo from "@public/images/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const Page = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      {/* Logo Section */}
      <Image className="pb-5 "  src={"/vector.png"} width={60} height={50} alt="Logo" />

      {/* Title Section */}
      <h2 className="uppercase text-center font-bold pb-5 text-lg md:text-xl">
        BECOME A NIKE MEMBER
      </h2>

      {/* Description Section */}
      <p className='w-80 text-center text-text-secondary-gray pb-5 text-sm md:text-base'>
        Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
      </p>

      {/* Form Section */}
      <form action="" className="flex flex-col w-full md:w-96">
        {/* Email Input */}
        <input
          className="w-full md:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Email Address"
        />

        {/* Password Input */}
        <input
          className="w-full md:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="password"
          placeholder="Password"
        />

        {/* First Name Input */}
        <input
          className="w-full md:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="First Name"
        />

        {/* Last Name Input */}
        <input
          className="w-full md:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Last Name"
        />

        {/* Date of Birth Input */}
        <input
          className="w-full md:w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Date of Birth"
        />

        {/* Birthday Reward Section */}
        <p className='pb-3 text-text-secondary-gray text-sm text-center'>
          Get a Nike Member Reward every year on your Birthday.
        </p>

        {/* Country Dropdown */}
        <select className="w-full md:w-96 border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray">
          <option className='text-text-secondary-gray' value="">India</option>
          <option className='text-text-secondary-gray' value="">United States</option>
          <option className='text-text-secondary-gray' value="">United Kingdom</option>
          <option className='text-text-secondary-gray' value="">Pakistan</option>
          <option className='text-text-secondary-gray' value="">Canada</option>
        </select>

        {/* Gender Selection */}
        <div className='flex flex-col md:flex-row gap-5 mt-1'>
          <div className='border-[#E5E5E5] rounded-md py-4 border-[2px] w-full md:w-2/4 text-center text-text-secondary-gray'>Male</div>
          <div className='border-[#E5E5E5] rounded-md py-4 border-[2px] w-full md:w-2/4 text-center text-text-secondary-gray'>Female</div>
        </div>

        {/* Email Sign-Up Checkbox */}
        <div className="flex justify-between items-center py-7">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 pl-2 cursor-pointer text-text-secondary-gray" htmlFor="remember">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits
            </label>
          </div>
        </div>

        {/* Privacy Policy Agreement */}
        <p className="text-text-secondary-gray text-center pb-6 text-sm md:text-base">
          By creating an account, you agree to Nike's{" "}
          <Link className="underline" href="#">Privacy Policy</Link> and{" "}
          <Link className="underline" href="#">Terms of Use</Link>.
        </p>

        {/* Join Us Button */}
        <Button text="JOIN US" classNames="rounded-sm py-3" />

        {/* Already a Member Section */}
        <p className="text-center">
          <span className="text-text-secondary-gray">Already a Member? </span>
          <span className="underline">Join Us.</span>
        </p>
      </form>
    </div>
  );
};

export default Page;
