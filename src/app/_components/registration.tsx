import React from "react";
import Astro from "../../../public/astro.svg";
interface Data {
    title: string;
    content: string;
}
const Data: Data[] = [
    {
        title: "Mentor",
        content: "Register as a mentor. Guide enthusiast contributors through your expertise and help them become technically strong."
    }, {
        title: "Evangelist",
        content: "Sign up as an evangelist! Share your expertise, showcase your creativity, and enhance your tech skills while making an impact."
    }, {
        title: "Project Admin",
        content: "Register as a project admin. Showcase your projects to the contributors for enhancement and bug fixture."
    }
]


const Registration = () => {
    return (
        <div style={{ background: "linear-gradient(135deg, #0F0F0F, #262222, #0F0F0F)" }} className="relative h-fit w-full flex justify-center items-center">
            <div className="  w-[91.5rem] h-[45.2825rem] flex flex-col justify-between ">
                <div>
                    <header className="font-mokoto iphone:p-4 text-[3.75rem] iphone:text-[2rem] md:text-[3.5rem] xl:text-start iphone:text-center  text-[#FBCE1F]">
                        Registration
                    </header>
                </div>
                <div className="flex xl:flex-row iphone:flex-col iphone:text-center scroll-m-0 xl:gap-4 gap-12">
                    {Data.map((data, index) => (
                        <Card key={index} {...data} />
                    ))}
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="w-[55%] ">
                        <div
                            className="w-full lg:w-full xl:text-start 2xl:text-[1.25rem] p-4 xl:p-0 dotted-border-fade text-sm md:text-base lg:text-[1.2rem] xl:text-[1.25rem]  xl:pt-4 xl:pb-4 font-bold text-white leading-relaxed md:leading-[1.25rem]">
                            <p className="mb-2 text-center">&quot;In open source, we feel strongly that to really do something well, you
                                have to get a lot of people involved.&quot; <span
                                    className="text-[#FBCE1F] font-mokoto" style={{ textTransform: "uppercase" }}>- Linus Torvalds</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;


const Card = ({ title, content }: { title: string, content: string }) => {
    return (
        <div className="relative w-[29.125rem] h-[17.7rem] iphone:w-[90%] iphone:ml-4 md:ml-8 xl:ml-4 iphone:h-[19rem]  rounded-[0.5rem] text-textyellow font-normal border-textyellow border border-solid ">
            <div
                style={{
                    backgroundImage: `url(${Astro.src})`,
                    backgroundSize: '50%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.1,
                }}
                className="absolute inset-0"
            ></div>
            <div className="relative z-10 w-full h-[4.81rem] text-[1.6rem] pl-4 pt-6 capitalize font-mokoto">
                Apply as
            </div>
            <div className="relative z-10 w-full h-[4.5rem] font-mokoto text-[2.70rem] md:text-[2.9rem] capitalize pl-4">
                {title}
            </div>
            <div className="w-full h-fit  md:flex md:justify-center">
            <div className="relative z-10 pl-4 w-[95%] md:w-[85%] text-white h-[4.5rem]">
                {content}
            </div>
            </div>
            <div className="w-full h-fit flex xl:ml-0 md:ml-4 justify-center ">
                <div className=" pl-4 pt-2 iphone:pt-8 xl:mt-4 md:pt-2  iphone:pl-0">
                    <Button />
                </div>
            </div>
        </div>
    )
}

const Button = () => {
    return (
        <div className="w-[9.1rem] border-solid border border-textyellow flex justify-center items-center h-[2.4rem] bg-[#F01DD41A] p-4 rounded-[0.75rem] capitalize font-mokoto text-textyellow">
            Register
        </div>
    )
}