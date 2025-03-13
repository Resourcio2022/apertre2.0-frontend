interface TimelineEvent {
    id: number;
    title: string;
    description: string;
    date: string;
    size: number;
    status: "UPCOMING" | "ONGOING" | "DONE";
    position: "left" | "right";
}

async function fetchEvents(): Promise<TimelineEvent[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/timeline`, {
        next: {
            revalidate: 21600
        }
    });

    if (!res.ok) {
        return [];
    }
    const data = await res.json();

    return data as TimelineEvent[];
}

const TimelineDot = ({ active, position }: { active: boolean; position: "left" | "right"; }) => {

    const getRotation = () => {
        // Keep index for animation but combine with position
        if (position === "left") {
            return '180deg';
        } else if (position === "right") {
            return '0deg';
        }
    };

    return (
        <div className="absolute left-1/2 -translate-x-1/2 transform">
            <svg
                width="60"
                height="60"
                viewBox="0 0 346 346"
                fill="none"
                className={`transform transition-all duration-500 hover:scale-125 ${active ? "scale-110" : "scale-100"}`}
                style={{
                    transform: `rotate(${getRotation()})`,
                    transition: 'transform 0.5s ease-in-out'
                }}
            >
                <rect
                    x="345.652"
                    y="0"
                    width="345.652"
                    height="345.652"
                    rx="172.826"
                    transform="rotate(90 345.652 0)"
                    fill="#221F1F"
                    className="transition-all duration-500"
                />
                <path
                    d="M117.55 105.115C105.38 100.277 93.2 112.14 97.43 124.727L103.43 142.629L106.65 141.512C113.01 139.3 120.09 138.329 125.46 143.933L132.9 151.687C153.6 148.797 173.78 155.604 183.74 165.985L190.44 172.982L183.74 179.98C173.78 190.362 153.6 197.169 132.9 194.279L125.46 202.033C120.09 207.636 113.01 206.666 106.65 204.454L103.43 203.337L97.43 221.238C93.2 233.826 105.38 245.688 117.55 240.85L242.58 191.184C258.87 184.711 258.87 161.255 242.58 154.782L117.55 105.115Z"
                    fill="#FBCE1F"  // Remove conditional and always use yellow
                    className="transition-all duration-500"
                />
                <path
                    d="M111.46 165.717H106.82C100.11 165.717 90.57 172.979 90.57 172.979C90.57 172.979 99.37 180.241 106.82 180.241H111.46V165.717Z"
                    fill="#FBCE1F"  // Remove conditional and always use yellow
                    className="transition-all duration-500"
                />
                <path
                    d="M139.53 172.938C139.53 179.413 144.69 184.662 151.06 184.662C157.42 184.662 162.58 179.413 162.58 172.938C162.58 166.464 157.42 161.215 151.06 161.215C144.69 161.215 139.53 166.464 139.53 172.938Z"
                    fill="#FBCE1F"  // Remove conditional and always use yellow
                    className="transition-all duration-500"
                />
            </svg>
        </div>
    );
};

const SvgTimelineCard = ({ title, date, status, size, position }: Omit<TimelineEvent, 'id' | 'description'>) => {
    let xPos;
    if (size === 1040) xPos = 1020;
    else if (size === 1016) xPos = 980;
    else if (size === 1000) xPos = 950;
    else xPos = 1000;

    // Determine border and text color based on status
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
                    {date}
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

export async function Events() {
    const events = await fetchEvents();

    return (
        events.map((event, idx) => (
            <div key={idx} className="relative">
                <TimelineDot
                    active={event.status === "DONE" || event.status === "ONGOING"}
                    position={idx % 2 === 0 ? "left" : "right"}
                />
                <SvgTimelineCard
                    title={event.title}
                    date={formatDate(event.date)}
                    status={event.status}
                    size={event.size}
                    position={idx % 2 === 0 ? "left" : "right"}
                />
            </div>
        ))
    )
}
