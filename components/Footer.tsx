import { footerLinks, supportLinks } from "@/constants/footer-constant";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface socialLink {
  [key: string]: {
    icon: React.ReactNode;
    href: string;
  }[];
}

const socialLinks = {
  apertre: [
    { icon: <FaInstagram />, href: " https://www.instagram.com/apertre25/" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/showcase/apertre25/posts/?feedView=all", },
    { icon: <FaTwitter />, href: "https://x.com/apertre25" },
    { icon: <FaDiscord />, href: "https://discord.gg/A9QpVUazNC" },
  ],
  resourcio: [
    { icon: <FaDiscord />, href: "https://discord.gg/4Jvs7vusND" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/resourcio_/" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/company/resourcioc/posts/?feedView=all",
    },
    { icon: <FaFacebook />, href: "https://www.facebook.com/resourcio/" },
    { icon: <FaTwitter />, href: "https://x.com/resourcio_" },
  ]
} as socialLink;

export default function Footer() {
  return (
    <div className="w-[100vw] flex flex-col py-10 px-5 md:px-20 bottom-0 relative z-40
    bg-[#1a1a1a] shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
      <div className="flex lg:flex-row flex-col md:flex-col md:gap-10">
        <div className="flex flex-col lg:flex-row justify-around xl:gap-60 w-full lg:w-4/6">
          <div className="flex flex-col gap-5 items-center">
            <Image
              src="/apertrelogo.svg"
              width={170}
              height={97}
              alt="Apertre Logo"
            />
            <div className="flex gap-7 text-white">
              {socialLinks.apertre.map((social, index) => (
                <Link
                  href={social.href}
                  target="_blank"
                  key={index}
                  className="transition-all duration-300 hover:text-yellow-500 hover:animate-bounce"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div className="text-white flex gap-3 text-md">
              <span>Checkout</span>
              <Link href="https://s1.apertre.resourcio.in" target="_blank" className="flex gap-2 border-b-[3px] border-white text-textyellow hover:text-white hover:border-yellow-500 transition-colors duration-300">
                Season 1
              </Link>
            </div>
          </div>

          <div className="flex gap-7 md:gap-16 justify-center font-mokoto flex-col md:flex-row mt-6">
            {[footerLinks, supportLinks].map((links, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 text-nowrap text-xs md:text-lg md:text-left text-center"
              >
                {links.map((link, index) => (
                  <Link
                    href={link.href}
                    target="_blank"
                    key={index}
                    className="text-white font-Poppins font-normal text-sm md:text-lg transition-all duration-300 hover:text-yellow-500 hover:underline hover:underline-offset-4 hover:scale-[1.03]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center justify-center w-full lg:w-2/6 mt-10 lg:mt-0">
          {[
            { src: "/resourciologo.svg", socials: socialLinks.resourcio }
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
                  <Link
                    href={social.href}
                    key={index}
                    className="transition-all duration-300 hover:text-yellow-500 hover:animate-bounce"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center">
        <span className="text-white font-Poppins font-normal text-xs md:text-lg text-nowrap mt-7 md:mt-10">
          © All Rights Reserved Apertre2.0
        </span>
      </div>
    </div>
  );
};
