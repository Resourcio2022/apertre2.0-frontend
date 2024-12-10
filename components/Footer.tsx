"use client";
import { footerLinks, supportLinks } from "@/constants/footer-constant";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

interface socialLink {
    [key: string]: {
        icon: React.ReactNode;
        href: string;
    }[]
}

const Footer = () => {
    const [hovered, setHovered] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const socialLinks = {
        apertre: [
            { icon: <FaWhatsapp />, href: "" },
            { icon: <FaInstagram />, href: "" },
            { icon: <FaLinkedin />, href: "" },
            { icon: <FaFacebook />, href: "" },
            { icon: <FaTwitter />, href: "" },
        ],
        resourcio: [
            { icon: <FaWhatsapp />, href: "/" },
            { icon: <FaInstagram />, href: "/" },
            { icon: <FaLinkedin />, href: "/" },
            { icon: <FaFacebook />, href: "/" },
            { icon: <FaTwitter />, href: "/" },
        ],
        gdg: [
            { icon: <FaWhatsapp />, href: "/" },
            { icon: <FaInstagram />, href: "/" },
            { icon: <FaLinkedin />, href: "/" },
            { icon: <FaFacebook />, href: "/" },
            { icon: <FaTwitter />, href: "/" },
        ],
    } as socialLink;

    return (
        <div className="bg-footer w-full h-fit flex flex-col pt-20 pb-10 px-5 md:px-20 bottom-0">
            <div className="flex flex-col md:flex-row justify-between gap-7">

                <div className="flex flex-col gap-5 items-center">
                    <Image
                        src="/apertrelogo.svg"
                        width={170}
                        height={97}
                        alt="Apertre Logo"
                    />
                    <div className="flex gap-7 text-white">
                        {socialLinks.apertre.map((social, index) => (
                            <Link href={social.href} key={index}>
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                    <div className="relative inline-block mt-7">
                        {isClient && (
                            <span
                                className="w-[250px] relative inline-block text-white font-Poppins font-bold text-lg overflow-hidden group"
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                <span
                                    className={`text-[16px] transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100 delay-[900ms]"
                                        }`}
                                >
                                    Checkout our previous season
                                </span>
                                <Image
                                    src="/rocket.svg"
                                    width={50}
                                    height={50}
                                    alt="Rocket"
                                    className={`absolute top-1/2 left-0 transform -translate-y-1/2 transition-transform duration-[2000ms] ease-in ${hovered
                                        ? "translate-x-[300px] opacity-100"
                                        : "-translate-x-full opacity-0"
                                        }`}
                                />
                                <span
                                    className={`absolute top-0 left-0 w-full h-full text-white flex items-center justify-center font-Poppins font-bold text-lg transition-opacity duration-75 ${hovered ? "opacity-100" : "opacity-0"
                                        } delay-1000`}
                                >
                                    <span className="border-b-[5px] border-yellow-500">
                                        Season 1
                                    </span>
                                </span>
                            </span>
                        )}
                    </div>
                </div>


                <div className="flex gap-7 md:gap-16 justify-center">
                    {[footerLinks, supportLinks].map((links, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col gap-3 text-nowrap text-xs md:text-lg text-left"
                        >
                            {links.map((link, index) => (
                                <Link
                                    href={link.href}
                                    key={index}
                                    className="text-white font-Poppins font-normal text-sm md:text-lg"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>


                <div className="flex flex-col gap-10 items-center">
                    {[
                        { src: "/Resourcio_Logo.png", socials: socialLinks.resourcio },
                        { src: "/gdglogo.svg", socials: socialLinks.gdg },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-3">
                            <Image
                                src={item.src}
                                width={200}
                                height={119}
                                alt={`Logo ${idx}`}
                            />
                            <div className="flex justify-center gap-7 text-white">
                                {item.socials.map((social, index) => (
                                    <Link href={social.href} key={index}>
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex w-full justify-center">
                <span className="text-white font-Poppins font-normal text-xs md:text-lg text-nowrap mt-7 md:mt-0">
                    © All Rights Reserved Apretre2.0
                </span>
            </div>
        </div>
    );
};

export default Footer;
