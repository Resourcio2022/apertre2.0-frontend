'use client'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TicketProps {
    name: string;
    github: string;
}

export default function Ticket({ name, github }: TicketProps) {
    const [img, setImg] = useState("");
    const [socials, setSocials] = useState({
        twitter: "",
        facebook: "",
        linkedin: "",
        whatsapp: "",
        telegram: "",
    });

    useEffect(() => {
        function handleTicketGenerate() {
            const ticketUrl = `/api/ticket?name=${encodeURIComponent(name)}&github=${encodeURIComponent(github)}}`;
            setImg(ticketUrl);
        }

        handleTicketGenerate();
    }, []);

    useEffect(() => {
        if (window) {
            const socialLinks = {
                twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_FRONTEND_URL + img
                )}&text=Check out my ticket!`,
                facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_FRONTEND_URL + img
                )}`,
                linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_FRONTEND_URL + img
                )}`,
                whatsapp: `https://api.whatsapp.com/send?text=Check out my ticket! ${encodeURIComponent(
                    process.env.NEXT_PUBLIC_FRONTEND_URL + img
                )}`,
                telegram: `https://t.me/share/url?url=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_FRONTEND_URL + img
                )}&text=Check out my ticket!`,
            };
            setSocials(socialLinks);
        }
    }, [img]);

    return (
        <>
            <Head>
                <meta
                    property="og:url"
                    content={process.env.NEXT_PUBLIC_FRONTEND_URL}
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Apertre2.0" />
                <meta property="og:description" content="Apertre2.0 Ticket" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image"
                    content={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/ticket?name=${name}&github=${github}`}
                />
            </Head>
            <div className="flex flex-col items-center text-white">
                {img && (
                    <Image
                        src={img}
                        alt="Generated Ticket"
                        width={400}
                        height={200}
                        className="my-4 rounded-lg border"
                    />
                )}

                <h2>Share your ticket:</h2>
                <div className="flex gap-2 items-center">
                    <Link href={socials.twitter} target="_blank">
                        🐦 Twitter
                    </Link>{" "}
                    |
                    <Link href={socials.facebook} target="_blank">
                        📘 Facebook
                    </Link>{" "}
                    |
                    <Link href={socials.linkedin} target="_blank">
                        💼 LinkedIn
                    </Link>{" "}
                    |
                    <Link href={socials.whatsapp} target="_blank">
                        📲 WhatsApp
                    </Link>{" "}
                    |
                    <Link href={socials.telegram} target="_blank">
                        📢 Telegram
                    </Link>
                </div>
            </div>
        </>
    )
}
