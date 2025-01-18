import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
// import logo from "@public/images/logo/logo.svg";

const Page = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      {/* Logo Section */}
      <Image className="pb-5" src={"/vector.png"} width={60} height={35} alt="Logo" />

      {/* Title Section */}
      <h2 className="uppercase w-full text-center font-bold pb-5 text-lg md:text-xl">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h2>

      {/* Form Section */}
      <form action="" className="flex flex-col w-full md:w-96">
        {/* Email Input */}
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Email Address"
        />

        {/* Password Input */}
        <input
          className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
          type="text"
          placeholder="Password"
        />

        {/* Checkbox Section */}
        <div className="flex justify-between items-center py-5">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 pl-2 cursor-pointer text-text-secondary-gray" htmlFor="remember">
              Keep me signed in
            </label>
          </div>
          <div>
            <span>
              <a href="#" className="text-[#BCBCBC] text-sm md:text-base">Forgotten your password?</a>
            </span>
          </div>
        </div>

        {/* Privacy Policy */}
        <p className="text-text-secondary-gray text-center pb-6 text-sm md:text-base">
          By logging in, you agree to Nike's{" "}
          <Link className="underline" href="#">Privacy Policy</Link> and{" "}
          <Link className="underline" href="#">Terms of Use</Link>.
        </p>

        {/* Sign In Button */}
        <Button text="SIGN IN" classNames="rounded-sm py-3" />

        {/* Join Us Section */}
        <p className="text-center text-sm md:text-base">
          <span className="text-text-secondary-gray">Not a Member? </span>
          <span className="underline">Join Us.</span>
        </p>
      </form>
    </div>
  );
};

export default Page;
