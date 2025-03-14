import { headers } from "next/headers";
import SvgTimelineCard from "./time-card";

export interface TimelineEvent {
    id: number;
    title: string;
    description: string;
    date: string;
    size: number;
    status: "UPCOMING" | "ONGOING" | "DONE";
    position: "left" | "right";
}

async function fetchEvents(): Promise<TimelineEvent[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/timeline`);

    if (!res.ok) {
        return [];
    }
    const data = await res.json();

    return data as TimelineEvent[];
}

const TimelineDot = ({ active, position }: { active: boolean; position: "left" | "right"; }) => {

    const getRotation = () => {
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

export async function Events() {
    headers();
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
                    date={event.date}
                    status={event.status}
                    size={event.size}
                    position={idx % 2 === 0 ? "left" : "right"}
                />
            </div>
        ))
    )
}
