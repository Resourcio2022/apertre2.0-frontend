'use client'
import dynamic from "next/dynamic";
import { TimelineEvent } from "./events";

const StatusToggle = ({ status }: { status: "DONE" | "ONGOING" | "UPCOMING" }) => {
    const bgColor = status === "DONE" ? "#4CAF50" :
        status === "ONGOING" ? "#FBCE1F" :
            "#828F9B";

    const dotPosition = status === "UPCOMING" ? "left-2" : "right-2";

    return (
        <div className="relative inline-block">
            <div
                className="w-28 h-14 left-4 rounded-full transition-colors duration-300"
                style={{ backgroundColor: bgColor }}
            >
                <div
                    className={`absolute ${dotPosition} top-2 w-8 h-8 rounded-full bg-black border-${bgColor} transition-all duration-300`}
                />
            </div>
        </div>
    );
};

function getOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return 'TH';
    switch (day % 10) {
        case 1: return 'ST';
        case 2: return 'ND';
        case 3: return 'RD';
        default: return 'TH';
    }
}

function formatDate(isoDate: string) {
    const date = new Date(isoDate);
    const day = date.getDate();
    const ordinal = getOrdinalSuffix(day);
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();

    return `${day}${ordinal} ${month} ${year}`;
}

function SvgTimelineCardComponent({ title, date, status, size, position }: Omit<TimelineEvent, 'id' | 'description'>) {
    let xPos;
    if (size === 1040) xPos = 1020;
    else if (size === 1016) xPos = 980;
    else if (size === 1000) xPos = 950;
    else xPos = 1000;

    const borderColor = status === "DONE" ? "#4CAF50" : status === "UPCOMING" ? "#828F9B" : "#FBCE1F";
    const textColor = status === "DONE" ? "#4CAF50" : status === "UPCOMING" ? "#828F9B" : "#FBCE1F";

    return (
        <div
            className={`timeline-card relative w-full md:w-[45%] ${position === "left"
                ? "md:mr-auto md:pr-12 px-4"
                : "md:ml-auto md:pl-12 px-4"
                }`}
            data-position={position}
        >
            <svg
                viewBox="0 0 1320 698"
                className="w-full h-auto"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
            >
                <mask id="c" fill="#fff">
                    <path
                        fillRule="evenodd"
                        d="M70 0C31.34 0 0 31.34 0 70v558c0 38.66 31.34 70 70 70h724c30.376 0 55-24.624 55-55V404c0-30.376 24.624-55 55-55h361c30.38 0 55-24.624 55-55V70c0-38.66-31.34-70-70-70H70Z"
                        clipRule="evenodd"
                    />
                </mask>
                <path
                    fill="url(#a)"
                    fillRule="evenodd"
                    d="M70 0C31.34 0 0 31.34 0 70v558c0 38.66 31.34 70 70 70h724c30.376 0 55-24.624 55-55V404c0-30.376 24.624-55 55-55h361c30.38 0 55-24.624 55-55V70c0-38.66-31.34-70-70-70z"
                    clipRule="evenodd"
                />
                <text
                    x="90"
                    y="140"
                    fill="white"
                    className="text-5xl md:text-6xl font-bold"
                    fontFamily="Poppins"
                >
                    {title}
                </text>
                <path
                    fill="url(#b)"
                    d="M13 70c0-31.48 25.52-57 57-57v-26c-45.84 0-83 37.16-83 83h26Zm0 558V70h-26v558h26Zm57 57c-31.48 0-57-25.52-57-57h-26c0 45.84 37.16 83 83 83v-26Zm724 0H70v26h724v-26Zm68-42V404h-26v239h26Zm42-281h361v-26H904v26Zm403-292v224h26V70h-26Zm-57-57c31.48 0 57 25.52 57 57h26c0-45.84-37.16-83-83-83v26ZM70 13h1180v-26H70v26Zm1195 349c37.56 0 68-30.445 68-68h-26c0 23.196-18.8 42-42 42v26Zm-403 42c0-23.196 18.804-42 42-42v-26c-37.555 0-68 30.445-68 68h26Zm-68 307c37.555 0 68-30.445 68-68h-26c0 23.196-18.804-42-42 42v26Z"
                    mask="url(#c)"
                />
                <rect
                    width={428}
                    height={306}
                    x={885.5}
                    y={385.5}
                    fill="url(#d)"
                    stroke={borderColor} // Border color based on status
                    strokeWidth={13}
                    rx={48.5}
                />
                <text
                    x="100"
                    y="540"
                    fill="#FBCE1F"
                    className="text-5xl md:text-6xl font-bold font-mokoto"
                    fontFamily="Arial"
                >
                    {formatDate(date)}
                </text>
                <text
                    x={xPos}
                    y="500"
                    fill={textColor}
                    className="text-3xl md:text-6xl"
                    fontFamily="Poppins"
                >
                    {status}
                </text>
                <foreignObject x="1060" y="600" width="140" height="80">
                    <StatusToggle status={status} />
                </foreignObject>
                <defs>
                    <linearGradient
                        id="a"
                        x1={434.271}
                        x2={841.241}
                        y1={35.51}
                        y2={752.223}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.123} stopColor="#0B0A0A" />
                        <stop offset={1} stopColor="#272323" />
                    </linearGradient>
                    <linearGradient
                        id="b"
                        x1={62}
                        x2={828.5}
                        y1={0}
                        y2={718}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.17} stopColor="#C29F18" />
                        <stop offset={0.305} stopColor="#957A12" />
                        <stop offset={1} stopColor="#0B0B0A" />
                    </linearGradient>
                    <linearGradient
                        id="d"
                        x1={1024.09}
                        x2={1233.94}
                        y1={395.229}
                        y2={665.39}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.123} stopColor="#0B0A0A" />
                        <stop offset={1} stopColor="#272323" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

const SvgTimelineCard = dynamic(() => Promise.resolve(SvgTimelineCardComponent), { ssr: false });
export default SvgTimelineCard;
