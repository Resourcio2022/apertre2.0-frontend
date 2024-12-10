"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TypewriterEffectSmooth } from "@/components/Typewriter";
import { FaDiscord, FaCopy } from "react-icons/fa";
import { useGitHub } from "@/hooks/useGithubUser";

const discordLink = "https://discord.com/invite/example?ref=abc123xyz";

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
    firstheading?: string;
    secondheading?: string;
}

const SignupForm: React.FC<LoginFormProps> = ({ words, inputGroups, additionalInputGroups, firstheading, secondheading }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const { githubUsername, loading, email, isSignedIn } = useGitHub();

    const schema = z.object({
        joinedDiscord: z.boolean().refine(val => val, { message: "You must join Discord." }),
        rules: z.boolean().refine(val => val, { message: "You must accept the rules." }),
        codeOfConduct: z.boolean().refine(val => val, { message: "You must accept the code of conduct." }),
        ...inputGroups.reduce((acc, group) => {
            group.fields.forEach(field => {
                acc[field.name] = field.required
                    ? z.string().nonempty(`${field.placeholder || "Field"} is required.`)
                    : z.string().optional();
            });
            return acc;
        }, {} as Record<string, z.ZodTypeAny>),
    });

    const { register, handleSubmit, formState: { errors }, } = useForm<Record<string, string>>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<Record<string, string>> = async (data) => {
        if (!isSignedIn) {
            alert("You need to be signed in to submit this form.");
            return;
        }

        if (!email && !githubUsername) {
            alert("Please login to continue");
            return;
        }

        if (loading) {
            return <p>Loading GitHub username...</p>;
        }

        const result = words.map(item => item.text).join(' ');
        switch (result) {
            case 'EVANGELIST':
                console.log("Evangelist -> ", data)
                break
            case 'COMMUNITY PARTNER':
                console.log("Community Partner -> ", data)
                break
            default:
                return
        }
    }

    return (
        <div className="relative w-full flex items-center justify-center py-7 px-5">
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
            <div className="absolute inset-0 z-20 bg-customtransparent h-full">
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
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 font-Poppins">
                                <span className="text-left font-Poppins text-white text-[18px]">{firstheading}</span>
                                {inputGroups.map((group, groupIndex) => (
                                    <div className="flex gap-7 w-full justify-between" key={groupIndex}>
                                        {group.fields.map((field, fieldIndex) => (
                                            <div key={fieldIndex}>
                                                <input
                                                    {...register(field.name)}
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    className={`bg-customtransparent bg-opacity-5 rounded-md border-2 border-textyellow px-4 py-3 placeholder:text-white text-[16px] focus:none ${field.classname}`}
                                                />
                                                {errors[field.name] && (
                                                    <p className="text-red-500 text-xs mt-1">{errors[field.name]?.message}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}

                                {secondheading && <span className="text-left font-Poppins text-white text-[18px]">{secondheading}</span>}
                                {additionalInputGroups &&
                                    additionalInputGroups.map((group, groupIndex) => (
                                        <div className="flex gap-7 w-full justify-between" key={groupIndex}>
                                            {group.fields.map((field, fieldIndex) => (
                                                <div key={fieldIndex}>
                                                    <input
                                                        {...register(field.name)}
                                                        type={field.type}
                                                        placeholder={field.placeholder}
                                                        className={`bg-customtransparent bg-opacity-5 rounded-md border-2 border-textyellow px-4 py-3 placeholder:text-white text-[16px] focus:none ${field.classname}`}
                                                    />
                                                    {errors[field.name] && (
                                                        <p className="text-red-500 text-xs mt-1">{errors[field.name]?.message}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}

                                <div className="flex justify-between gap-10">
                                    <div className="mt-4 w-full">
                                        <label className="text-sm font-medium mb-2 text-white">Your Discord Referral Link</label>
                                        <div className="flex gap-7 w-full px-3 py-2 bg-transparent text-white rounded-md border-2 border-black focus:outline-none focus:ring focus:ring-yellow-300 overflow-x-auto whitespace-nowrap">
                                            <input
                                                type="url"
                                                defaultValue={discordLink}
                                                readOnly
                                                className="w-full bg-transparent text-white placeholder-white placeholder-opacity-50 focus:outline-none whitespace-nowrap"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => navigator.clipboard.writeText(discordLink)}
                                            >
                                                <FaCopy className="text-white" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-10">
                                        <input
                                            type="checkbox"
                                            id="joinedDiscord"
                                            {...register("joinedDiscord")}
                                            className="w-4 h-4 text-textyellow bg-customtransparent opacity-90 rounded-full border border-textyellow appearance-none checked:bg-textyellow checked:border-textyellow"
                                        />
                                        <label htmlFor="joinedDiscord" className="text-sm text-white ml-1 text-nowrap">
                                            Joined Discord*
                                        </label>
                                        {errors.joinedDiscord && (
                                            <p className="text-red-500 text-xs mt-1">{errors.joinedDiscord?.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-between gap-10">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="rules"
                                            {...register("rules")}
                                            className="w-4 h-4 text-textyellow bg-customtransparent opacity-90 rounded-md border border-textyellow appearance-none checked:bg-textyellow checked:border-textyellow"
                                        />
                                        <label htmlFor="rules" className="text-sm text-white ml-1">
                                            I have read{" "}
                                            <Link href="#" className="text-textyellow">
                                                Rules and Guidelines*
                                            </Link>
                                        </label>
                                        {errors.rules && <p className="text-red-500 text-xs mt-1">{errors.rules?.message}</p>}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="codeOfConduct"
                                            {...register("codeOfConduct")}
                                            className="w-4 h-4 text-textyellow bg-customtransparent opacity-90 rounded-md border border-textyellow appearance-none checked:bg-textyellow checked:border-textyellow"
                                        />
                                        <label htmlFor="codeOfConduct" className="text-sm text-white ml-1">
                                            I have read{" "}
                                            <Link href="#" className="text-textyellow">
                                                Code of Conduct*
                                            </Link>
                                        </label>
                                        {errors.codeOfConduct && (
                                            <p className="text-red-500 text-xs mt-1">{errors.codeOfConduct?.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex w-full justify-center">
                                    <button
                                        type="submit"
                                        className="font-mokoto text-[24px] text-white bg-customgreen border-2 border-bordergreen rounded-md px-3 py-1 mt-5"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        )}
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

export default SignupForm;
