import React from "react";
import "./about-us.css";
import Image from "next/image";
import Rocket from "../../../public/rocket.svg";

interface MiniComp{
    num:string,
    text:string
}

const TestObj:MiniComp[]=[
    {
        num:"750+",
        text:"participants"
    },
    {
        num:"750+",
        text:"participants"
    },
    {
        num:"750+",
        text:"Community Partners"
    },{
        num:"750+",
        text:"participants"
    },
    {
        num:"750+",
        text:"participants"
    }
]

export default function AboutUs(){

    return(
        <div className=" w-screen h-screen gradient" >
            <div className="w-fit h-fit font-mokoto text-[#FBCE1F] top-[10.5625rem] left-[8.87rem] tracking-[0.45rem] relative text-[3.75rem]" style={{textTransform:"uppercase"}}>
                About Apertre 2.0
            </div>
            <div className="w-full h-[26.5rem]  flex relative top-[29%]  items-center pl-[15.47rem]">
                <MainCard/>
            </div>

        </div>
    )
}

function MainCard(){
    return(
        <>
            <div className="w-[83rem] flex justify-between p-[0.75rem] h-full">

                    <div className="flex flex-col  justify-between">
                                <div className="w-[45.75rem] h-[15rem] text-[1.5rem] font-medium leading-[2.5rem] tracking-[0.02rem] text-white ">
                                    <p>We are back with the season 2 of <span className="text-[#FBCE1F]">Apertre</span> - the open
                                    </p>
                                    <p>source contribution event. Organized by
                                        Resourcio</p>
                                    <p> Community and Google Developer Group On Campus</p>
                                    <p>Academy Of Technology, it aims on
                                        enhancing your</p>
                                    <p> technical skills. Noob or Pro, all are welcomed. Join us to</p>
                                    <p>sky rocket your
                                        experience, portfolio and career.
                                    </p>
                                </div>
                        <div className="mt-[1.25rem] flex flex-col justify-center items-start w-[45.75rem] h-[6.25rem] dotted-border-fade text-[1.2rem] font-bold text-white font-medium leading-[1.25rem] ">
                                        <p>“When we have welcoming communities of contributors, open source </p>
                                        <p>
                                        software gets better and more useful to everyone.” - <span className="text-[#FBCE1F] capitalize font-mokoto" style={{textTransform:"uppercase"}}>Limor Fried</span>
                                        </p>

                        </div>
                    </div>
                <div className="text-white">
                    <SideCard/>
                </div>
            </div>
            
        </>
    )
}

 const SideCard=()=> {
    return (
        <div className="w-[27.52rem] relative h-[23.86rem] flex flex-col  p-[0.77rem] border-[#FBCE1F] border rounded-[0.6rem] border-solid bg-[#1D1A1A] "
        >
            <div
                className="absolute top-0 left-0 w-[100%] h-[80%] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Rocket.src})`, // Set background image
                    opacity:"20%", // Apply blur effect to background image
                    transform:"rotate(-55deg)",  
                    objectFit: 'cover',

                }}
            />
            <div className="relative flex items-center justify-around">
             {
               TestObj.slice(0,2).map((testobj,idx:number)=>(
                   <MiniComponent key={idx} num={testobj.num} text={testobj.text}/>
               ))
             }
            </div>
            <div className=" relative w-full flex justify-center  h-fit">
                <div className="w-[50%] h-fit ">
                <MiniComponent num={TestObj[2].num} text={TestObj[2].text}/>
                </div>
            </div>
            <div className="relative flex items-center justify-around gap-[3.87rem]"> {
                TestObj.slice(3).map((testobj,idx:number)=>(
                     <MiniComponent key={idx} num={testobj.num} text={testobj.text}/>
                 ))
               }</div>          
        </div>
    )
}

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
    )
  }

const MiniComponent: React.FC<MiniComp> = ({ num, text }) => {
    return (
        <div className="flex flex-col font-bold">
            <div className="text-center h-[3.8rem] w-full  font-mokoto text-[3.1rem] text-[#FBCE1F]">{num}</div>
            <div className="text-center uppercase text-[1.55rem]">{text}</div>
        </div>
    );
};