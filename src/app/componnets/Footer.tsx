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
    <div className="bg-footer w-full h-auto flex flex-col pt-10 pb-5 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 w-full text-center md:text-left mt-10">
        <div className="flex flex-col gap-5 items-center md:items-start">
          <Image src="/apertrelogo.svg" width={170} height={97} alt="Aperture Logo" />
          <div className="flex gap-4 text-white">
            <Link href="/" className="hover:text-yellow-500">
              <FaWhatsapp size={20} />
            </Link>
            <Link href="/" className="hover:text-yellow-500">
              <FaInstagram size={20} />
            </Link>
            <Link href="/" className="hover:text-yellow-500">
              <FaLinkedin size={20} />
            </Link>
            <Link href="/" className="hover:text-yellow-500">
              <FaFacebook size={20} />
            </Link>
            <Link href="/" className="hover:text-yellow-500">
              <FaTwitter size={20} />
            </Link>
          </div>
          <div className="relative inline-block mt-8">
            {isClient && (
              <span
                className={`relative inline-block text-white font-Poppins font-bold text-sm md:text-base group overflow-hidden`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span
                  className={`transition-opacity duration-500 ${
                    hovered ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Checkout our previous season
                </span>
                <Image
                  src="/rocket.svg"
                  width={50}
                  height={50}
                  alt="Rocket"
                  className={`absolute top-1/2 left-0 transform -translate-y-1/2 transition-transform duration-[3000ms] ${
                    hovered ? "translate-x-[300px] opacity-100" : "-translate-x-full opacity-0"
                  }`}
                />
                <span
                  className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ${
                    hovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="border-b-2 border-yellow-500">Season 1</span>
                </span>
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 md:gap-10 mt-5">
          <div className="flex flex-col gap-3">
            <Link href="" className="text-white font-Poppins font-normal text-sm md:text-base hover:text-yellow-500">
              Brand Assets
            </Link>
            <Link href="" className="text-white font-Poppins font-normal text-sm md:text-base hover:text-yellow-500">
              Rules and Guidelines
            </Link>
            <Link href="" className="text-white font-Poppins font-normal text-sm md:text-base hover:text-yellow-500">
              Code of Conduct
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="" className="text-white font-Poppins font-normal text-sm md:text-base hover:text-yellow-500">
              Support
            </Link>
            <Link href="" className="text-white font-Poppins font-normal text-sm md:text-base hover:text-yellow-500">
              Privacy Policy
            </Link>
            <Link href="" className="text-white font-Poppins font-normal text-sm md:text-base hover:text-yellow-500">
              Terms of Use
            </Link>
            <Link href="" className="text-white font-Poppins font-normal text-sm md:text-base hover:text-yellow-500">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center md:items-end">
          <div className="flex flex-col gap-3 items-center md:items-end">
            <Image src="/Resourcio_Logo.png" width={200} height={119} alt="Resourcio Logo" />
            <div className="flex gap-4 text-white">
              <Link href="/" className="hover:text-yellow-500">
                <FaWhatsapp size={20} />
              </Link>
              <Link href="/" className="hover:text-yellow-500">
                <FaInstagram size={20} />
              </Link>
              <Link href="/" className="hover:text-yellow-500">
                <FaLinkedin size={20} />
              </Link>
              <Link href="/" className="hover:text-yellow-500">
                <FaFacebook size={20} />
              </Link>
              <Link href="/" className="hover:text-yellow-500">
                <FaTwitter size={20} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center md:items-end">
            <Image src="/gdglogo.svg" width={232} height={96} alt="GDG Logo" />
            <div className="flex gap-4 text-white">
              <Link href="/" className="hover:text-yellow-500">
                <FaWhatsapp size={20} />
              </Link>
              <Link href="/" className="hover:text-yellow-500">
                <FaInstagram size={20} />
              </Link>
              <Link href="/" className="hover:text-yellow-500">
                <FaLinkedin size={20} />
              </Link>
              <Link href="/" className="hover:text-yellow-500">
                <FaFacebook size={20} />
              </Link>
              <Link href="/" className="hover:text-yellow-500">
                <FaTwitter size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <span className="text-white font-Poppins font-normal text-sm md:text-base ">
          © All Rights Reserved Apretre 2.0
        </span>
      </div>
    </div>
  );
};

export default Footer;