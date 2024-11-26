"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="bg-footer w-full h-auto flex flex-col pt-20 pb-10 px-20">
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <Image src="/apertrelogo.svg" width={170} height={97} alt="" />
          <div className="flex gap-7 size-6 text-white">
            <Link href="/">
              <FaWhatsapp />
            </Link>
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaLinkedin />
            </Link>
            <Link href="/">
              <FaFacebook />
            </Link>
            <Link href="/">
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="" className="text-white font-Poppins font-normal text-lg">
            Brand Assets
          </Link>
          <Link href="" className="text-white font-Poppins font-normal text-lg">
            Rules and Guidelines
          </Link>
          <Link href="" className="text-white font-Poppins font-normal text-lg">
            Code of Conduct
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <Link href="" className="text-white font-Poppins font-normal text-lg">
            Support
          </Link>
          <Link href="" className="text-white font-Poppins font-normal text-lg">
            Privacy Poilcy
          </Link>
          <Link href="" className="text-white font-Poppins font-normal text-lg">
            Terms of Use
          </Link>
          <Link href="" className="text-white font-Poppins font-normal text-lg">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Image src="/Resourcio_Logo.png" width={200} height={119} alt="" className="pl-7" />
            <div className="flex justify-center gap-7 text-white">
              <Link href="/">
                <FaWhatsapp />
              </Link>
              <Link href="/">
                <FaInstagram />
              </Link>
              <Link href="/">
                <FaLinkedin />
              </Link>
              <Link href="/">
                <FaFacebook />
              </Link>
              <Link href="/">
                <FaTwitter />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Image src="/gdglogo.svg" width={232} height={96} alt="" />
            <div className="flex justify-center gap-7 text-white">
              <Link href="/">
                <FaWhatsapp />
              </Link>
              <Link href="/">
                <FaInstagram />
              </Link>
              <Link href="/">
                <FaLinkedin />
              </Link>
              <Link href="/">
                <FaFacebook />
              </Link>
              <Link href="/">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-52'>
      <div className='relative inline-block'>
          {isClient && (
            <span 
              className={`w-[250px] relative inline-block text-white font-Poppins font-bold text-lg overflow-hidden group`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span className={`text-[16px] transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100 delay-[900ms]'}`}>
                Checkout our previous season
              </span>
              <Image 
                src='/rocket.svg' 
                width={50}
                height={50}
                alt='Plane' 
                className={`absolute top-1/2 left-0 transform -translate-y-1/2 transition-transform duration-[2000ms] ease-in ${hovered ? 'translate-x-[300px] opacity-100' : '-translate-x-full opacity-0'}`}
              />
              <span className={`absolute top-0 left-0 w-full h-full text-white flex items-center justify-center font-Poppins font-bold text-lg transition-opacity duration-75 ${hovered ? 'opacity-100' : 'opacity-0'} delay-1000`}>
                <span className="border-b-[5px] border-yellow-500">Season 1</span>
              </span>
            </span>
          )}
        </div>
        <span className='text-white font-Poppins font-normal text-lg'>© All Rights Reserved Apretre2.0</span>
      </div>
    </div>
  );
};

export default Footer;
