"use client"
import { useState,useEffect } from "react";
import { TypewriterEffectSmooth } from "@/components/Typewriter";
import React from "react";
import Image from "next/image";
import { FaDiscord, FaCopy } from "react-icons/fa";
import Link from "next/link";

interface InputField {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  classname?: string;
}

interface InputGroup {
  fields: InputField[];

}

interface LoginFormProps {
  words: { text: string }[];
  inputGroups: InputGroup[];
  additionalInputGroups?: InputGroup[];
  discordLink: string;
  onSubmit: (formData: Record<string, string>) => void;
  firstheading?: string;
  secondheading?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ words, inputGroups, discordLink, onSubmit,additionalInputGroups,firstheading,secondheading }) => {
    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Array.from(new FormData(e.currentTarget).entries()).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {}
    );
    onSubmit(formData);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-7 px-5">
      
      <div className="absolute inset-0 z-10">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover transform rotate-180"
        >
          <source src="/login_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 z-20 bg-customtransparent h-full ">
        <Image src="/login.png" width={1728} height={2000} alt="Background Image 2" className="bg-cover h-full" />
      </div>

      
      <div className="relative z-50 bg-customtransparent rounded-lg shadow-md px-10 py-7 flex flex-col items-center justify-center text-textyellow">
        <div className="flex justify-between w-full mb-2">
          <span className="font-mokoto text-[28px] justify-start mr-auto flex gap-2 text-nowrap">
            ..LOGIN AS A <TypewriterEffectSmooth words={words} />
          </span>
          <Image src="/apertrebiglogo.svg" width={218} height={6} alt="logo" className="justify-end ml-auto" />
        </div>

        <div className="flex justify-between gap-10">
          <div className="flex flex-col gap-5">
          {isClient && (
            <form className="flex flex-col gap-5 font-Poppins " >
              <span className="text-left font-Poppins text-white text-[18px]">{firstheading}</span>
{inputGroups.map((group, groupIndex) => (
  <div className="flex gap-7 w-full justify-between" key={groupIndex}>
    {group.fields.map((field, fieldIndex) => (
      <input
        key={fieldIndex}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        required={field.required}
        className={`bg-customtransparent bg-opacity-5 rounded-md border-2 border-textyellow px-4 py-3 placeholder:text-white text-[16px] focus:none ${field.classname} `}
      />
    ))}
  </div>
))}

<span className="text-left font-Poppins text-white text-[18px]">{secondheading}</span>
{additionalInputGroups && additionalInputGroups.map((group, groupIndex) => (
  <div className="flex gap-7 w-full justify-between" key={groupIndex}>
    {group.fields.map((field, fieldIndex) => (
      <input
        key={fieldIndex}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        required={field.required}
        className={`bg-customtransparent bg-opacity-5 rounded-md border-2 border-textyellow px-4 py-3 placeholder:text-white text-[16px] focus:none ${field.classname} `}
      />
    ))}
  </div>
))}
              

<div className="flex justify-between gap-10">
        <div className="mt-4 w-full">
          <label className=" text-sm font-medium mb-2">Your Discord Referral Link</label>
          <div className="flex gap-7 w-full px-3 py-2 bg-transparent text-white rounded-md border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 overflow-x-auto whitespace-nowrap ">
  <input
    type="url"
    defaultValue="https://discord.com/invite/example?ref=abc123xyz"
    readOnly
    className="w-full bg-transparent text-white placeholder-white placeholder-opacity-50 focus:outline-none whitespace-nowrap"
  />
  <button
    type="button"
    onClick={() => navigator.clipboard.writeText("https://discord.com/invite/example?ref=abc123xyz")}
  >
    <FaCopy className='text-white'/>
  </button>
</div>
        </div>
        <div className="flex items-center mt-10">
          <input
  type="checkbox"
  id="rules"
  className="w-4 h-4 text-textyellow bg-customtransparent opacity-90 rounded-full border border-textyellow appearance-none checked:bg-textyellow checked:border-textyellow"
  required
/>
            <label htmlFor="rules" className="text-sm text-white ml-1 text-nowrap ">
              Joined Discord*
            </label>
          </div>
        </div>

              
              <div className="flex justify-between gap-10">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rules"
                    className="w-4 h-4 text-textyellow bg-customtransparent opacity-90 rounded-md border border-textyellow appearance-none checked:bg-textyellow checked:border-textyellow"
                    required
                  />
                  <label htmlFor="rules" className="text-sm text-white ml-1">
                    I have read{" "}
                    <Link href="#" className="text-textyellow">
                      Rules and Guidelines*
                    </Link>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="code-of-conduct"
                    className="w-4 h-4 text-textyellow bg-customtransparent opacity-90 rounded-md border border-textyellow appearance-none checked:bg-textyellow checked:border-textyellow"
                    required
                  />
                  <label htmlFor="code-of-conduct" className="text-sm text-white ml-1">
                    I have read{" "}
                    <Link href="#" className="text-textyellow">
                      Code of Conduct*
                    </Link>
                  </label>
                </div>
              </div>

              
              <div className="flex w-full justify-center">
                <button className="font-mokoto text-[24px] text-white bg-customgreen border-2 border-bordergreen rounded-md px-3 py-1 mt-5">
                  SUBMIT
                </button>
              </div>
            </form>)}
          </div>

          
          <Image src="/line.svg" width={1} height={524} alt="" className="opacity-100" />
          <div className="flex flex-col justify-center h-full items-center gap-3 ml-5 mt-20">
            <Image src="/qr.svg" width={200} height={200} alt="" />
            <span className="font-Poppins text-white font-bold text-[16px]">
              Scan QR to join the Discord server
            </span>
            <span className="text-white my-3">Or</span>
            <button className="flex bg-customviolet rounded-lg text-white justify-between w-fit px-2 py-2 font-bold gap-1 text-[16px]">
              Click Me <FaDiscord className="mt-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
