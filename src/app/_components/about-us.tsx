import React from "react";
import "./about-us.css";
import Image from "next/image";
import Rocket from "../../../public/rocket.svg";

interface MiniComp {
    num: string,
    text: string
}

const TestObj: MiniComp[] = [
    {
        num: "750+",
        text: "participants"
    },
    {
        num: "35+",
        text: "projects"
    },
    {
        num: "20+",
        text: "Community Partners"
    },
    {
        num: "45+",
        text: "mentors"
    },
    {
        num: "400+",
        text: "merged pr's"
    }
];

export default function AboutUs() {
    return (
        <div className="w-full xl:pl-[4rem] min-h-screen gradient px-4 md:px-8 lg:px-16 py-8 md:py-12  overflow-x-hidden">
            <div className="xl:w-fit sm:p-[3rem] md:p-0 md:text-center iphone:w-full font-mokoto text-[#FBCE1F] text-2xl md:text-4xl iphone:text-center lg:text-[3.75rem] md:[4.27rem] tracking-[0.2rem] md:tracking-[0.45rem] mb-8 md:mb-16 lg:mb-24 relative xl:top-[8rem] 2xl:text-[3.75rem] 2xl:left-[8.87rem] "
                style={{ textTransform: "uppercase" }}>
                About Apertre 2.0
            </div>
            <div className=" iphone:text-center md:text-center 2xl:left-[13.47rem] lg:w-fit flex justify-center lg:justify-start lg:pl-0  xl:relative xl:top-[8rem] xl:left-[2rem]">
                <MainCard />
            </div>
        </div>
    );
}

function MainCard() {
    return (
        <div className=" w-[81rem] md:w-fit  flex flex-col lg:flex-row  p-4 gap-8 lg:gap-16">
            <div className="flex  lg:w-full flex-col xl:w-[45.75rem] gap-6 lg:gap-8">
                {/* Main text content */}
                <div className="w-full lg:w-full text-base md:text-lg md:relative md:left-0 lg:text-[1rem] xl:text-[1.25rem]  lg:text-center xl:text-start font-medium leading-relaxed md:leading-[2.5rem] tracking-[0.02rem] text-white">
                    <p className="mb-2 ">We are back with the season 2 of <span className="text-[#FBCE1F]">Apertre</span> - the open source contribution event.</p>
                    <p className="mb-2">Organized by Resourcio Community and Google Developer Group On Campus</p>
                    <p className="mb-2">Academy Of Technology, it aims on enhancing your technical skills.</p>
                    <p className="mb-2">Noob or Pro, all are welcomed. Join us to sky rocket your experience, portfolio and career.</p>
                </div>

                {/* Quote section */}
                <div className="w-full lg:w-full xl:text-start 2xl:text-[1.25rem] p-4 xl:p-0 dotted-border-fade text-sm md:text-base lg:text-[1.2rem] xl:text-[1.25rem] lg:pt-[28rem] xl:pt-4 xl:pb-4 font-bold text-white leading-relaxed md:leading-[1.25rem]">
                    <p className="mb-2">&#34;When we have welcoming communities of contributors, open source software gets better and more useful to everyone.&#34;</p>
                    <p className="text-[#FBCE1F] font-mokoto" style={{ textTransform: "uppercase" }}>- Limor Fried</p>
                </div>
            </div>

            {/* Stats Card */}
            <div className="text-white flex xl:items-end w-full lg:w-auto md:justify-center  lg:absolute xl:relative lg:top-[30rem] lg:left-[30%] xl:top-0 xl:left-0">
                <SideCard />
            </div>
        </div>
    );
}

const SideCard = () => {
    return (
        <div className="w-full xl:h-full md:w-[27.52rem] relative min-h-[23.86rem] iphone:h-[20rem] flex flex-col  p-4 border-[#FBCE1F] border rounded-lg border-solid bg-[#1D1A1A]">
            {/* Background Rocket */}
            <div
                className="absolute top-0 left-0 md:w-full md:h-4/5 w-full h-4/5 sm:h-3/4 sm:w-3/4 md:m-0 sm:ml-[4rem]  iphone:h-3/4 bg-cover bg-center opacity-20 "
                style={{
                    backgroundImage: `url(${Rocket.src})`,
                    transform: "rotate(-55deg)"
                }}
            />

            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 gap-6 md:gap-8 h-full">
                {/* Top Row */}
                <div className="col-span-2 flex justify-around">
                    <MiniComponent num={TestObj[0].num} text={TestObj[0].text} />
                    <MiniComponent num={TestObj[1].num} text={TestObj[1].text} />
                </div>

                {/* Middle */}
                <div className="col-span-2 flex justify-center">
                    <MiniComponent num={TestObj[2].num} text={TestObj[2].text} />
                </div>

                {/* Bottom Row */}
                <div className="col-span-2 flex justify-around">
                    <MiniComponent num={TestObj[3].num} text={TestObj[3].text} />
                    <MiniComponent num={TestObj[4].num} text={TestObj[4].text} />
                </div>
            </div>
        </div>
    );
};

const MiniComponent: React.FC<MiniComp> = ({ num, text }) => {
    return (
        <div className="flex flex-col items-center font-bold">
            <div className="text-center h-auto md:h-[3.8rem] font-mokoto text-2xl md:text-3xl lg:text-[3.1rem] text-[#FBCE1F]">
                {num}
            </div>
            <div className="text-center uppercase text-sm md:text-lg lg:text-[1.55rem] max-w-[120px] md:max-w-none">
                {text}
            </div>
        </div>
    );
};

export function Background() {
    return (
        <Image
            alt="Rocket"
            src={Rocket}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
                objectFit: 'cover',
                opacity: 0.1,
            }}
        />
    );
}