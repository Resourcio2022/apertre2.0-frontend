"use client";
import { Role } from "@/app/(registration)/_utils/apiCalls";
import { rgbDataURL } from "@/lib/blurryImage";
import { DownloadIcon } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";

interface TicketProps {
  name: string;
  github: string;
  role: Extract<Role, "mentee" | "project admin" | "mentor">;
}

export default function Ticket({ name, github, role }: TicketProps) {
  const [img, setImg] = useState("");
  const [socials, setSocials] = useState({
    linkedin: "",
  });

  useEffect(() => {
    function handleTicketGenerate() {
      const ticketUrl = `/api/ticket?name=${encodeURIComponent(name)}&github=${encodeURIComponent(github)}&role=${encodeURIComponent(role)}`;
      setImg(ticketUrl);
    }
    handleTicketGenerate();
  }, [name, github, role]);

  useEffect(() => {
    if (window) {
      const socialLinks = {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          process.env.NEXT_PUBLIC_FRONTEND_URL + img
        )}`
      };
      setSocials(socialLinks);
    }
  }, [img]);

  return (
    <div className="flex">
      <Head>
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_FRONTEND_URL}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Apertre2.0" />
        <meta property="og:description" content="Apertre2.0 Ticket" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/ticket?name=${name}&github=${github}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <div className="flex flex-col items-startlg:items-end text-white">
        <h1 className="text-2xl font-mokoto text-customYellow">Your Ticket : </h1>
        {img && (
          <Image
            src={img}
            alt="Generated Ticket"
            width={900}
            height={491}
            className="my-4 rounded-xl w-[400px]"
            loading="lazy"
            blurDataURL={rgbDataURL(128, 128, 128)}
          />
        )}

        <h2>Share your ticket:</h2>
        <div className="flex items-end w-full justify-between">
          <div className="flex gap-2 items-center">
            <Link href={socials.linkedin} target="_blank" className="flex gap-2 items-center">
              <BsLinkedin /> LinkedIn
            </Link>{" "}
          </div>
          <Link href={img} download={"ticket.png"} target="_blank" className="text-customYellow">
            <DownloadIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
