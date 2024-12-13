"use client";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaDiscord } from "react-icons/fa";
import { TypewriterEffectSmooth } from "@/components/Typewriter";
import { useGitHub } from "@/hooks/useGithubUser";
import { communityPartnerSignup, evangelistSignup, Role } from "../_utils/apiCalls";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DISCORD_LINK = "https://discord.gg/VKKJzgnrzm";

export interface InputField {
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  classname?: string;
}

interface InputGroup {
  fields: InputField[];
}

interface SignupFormProps {
  words: { text: string }[];
  inputGroups: InputGroup[];
  additionalInputGroups?: InputGroup[];
  firstheading?: string;
  secondheading?: string;
}

export default function SignupForm({
  words,
  inputGroups,
  additionalInputGroups,
  firstheading,
  secondheading,
}: SignupFormProps) {
  const router = useRouter();
  const { clerk_userId, email, githubUsername, isSignedIn } = useGitHub();

  const schema = z.object({
    joinedDiscord: z.boolean().refine((val) => val, {
      message: "You must join Discord",
    }),
    rules: z.boolean().refine((val) => val, {
      message: "You must accept the rules",
    }),
    codeOfConduct: z.boolean().refine((val) => val, {
      message: "You must accept the code of conduct",
    }),
    ...inputGroups.reduce((acc, group) => {
      group.fields.forEach((field) => {
        acc[field.name] = field.required
          ? z.string().nonempty(`${field.placeholder || "Field"} is required`)
          : z.string().optional();
      });
      return acc;
    }, {} as Record<string, z.ZodTypeAny>),
    ...(additionalInputGroups || []).reduce((acc, group) => {
      group.fields.forEach((field) => {
        acc[field.name] = field.required
          ? z.string().nonempty(`${field.placeholder || "Field"} is required`)
          : z.string().optional();
      });
      return acc;
    }, {} as Record<string, z.ZodTypeAny>),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Record<string, string>>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Record<string, string>> = async (data) => {
    if (!isSignedIn) {
      toast("You need to Sign in first");
      return;
    }

    if (!clerk_userId || !email || !githubUsername) {
      toast.message("Github", {
        description: "Github username or primary email does not exist",
      });
      return;
    }

    const fullname = `${data.firstName.trim()} ${data.lastName.trim()}`;
    const role = words.map((item) => item.text.toLowerCase()).join(" ") as Role;

    switch (role) {
      case "evangelist": {
        try {
          const response = await evangelistSignup(
            clerk_userId,
            role,
            email,
            githubUsername,
            fullname,
            data.address.trim(),
            data.phoneNumber.trim(),
            data.linkedinUrl.trim(),
            data.instagramUsername.trim(),
            data.discordUsername.trim(),
            data.twitterUsername.trim(),
            data.collegeName.trim()
          );

          toast.success(response);

          setTimeout(() => {
            reset();
            router.push("/");
          }, 1500);
        } catch (err: any) {
          toast.error(err.message);
        }
        break;
      }
      case "community partner": {
        try {
          const response = await communityPartnerSignup(
            clerk_userId,
            role,
            email,
            githubUsername,
            fullname,
            data.address.trim(),
            data.phoneNumber.trim(),
            data.linkedinUrl.trim(),
            data.instagramUsername.trim(),
            data.discordUsername.trim(),
            data.twitterUsername.trim(),
            data.communityName.trim(),
            data.communityUrl.trim(),
            parseInt(data.communityStrength.trim())
          );

          toast.success(response);

          setTimeout(() => {
            reset();
            router.push("/");
          }, 1500);
        } catch (err: any) {
          toast.error(err.message);
        }
        break;
      }
      default:
        return;
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center py-5 px-2 sm:px-5">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 z-10 w-full h-full object-cover transform rotate-180"
      >
        <source src="/login_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Image */}
      <Image
        src="/login.png"
        width={1728}
        height={2000}
        alt="Background Image"
        className="absolute inset-0 z-20 bg-customtransparent bg-cover h-full"
      />

      {/* Main Form Container */}
      <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 bg-customtransparent rounded-lg shadow-md px-4 sm:px-6 lg:px-10 py-5 lg:py-7 z-50 w-full max-w-7xl">
        <div className="flex flex-col justify-between gap-10">
          {/* HEADER */}
          <div className="font-mokoto text-xl sm:text-2xl lg:text-3xl flex flex-wrap lg:flex-nowrap text-textyellow">
            <span>&gt;_&nbsp;.&nbsp;.&nbsp;LOGIN AS A&nbsp;</span>
            <TypewriterEffectSmooth words={words} />
          </div>
          {/* Form Section */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 font-Poppins"
          >
            {/* Primary Fields */}

            {firstheading && (
              <span className="text-left font-Poppins text-xl text-gray-400">
                {firstheading}
              </span>
            )}

            {inputGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="flex flex-col sm:flex-row gap-4 sm:gap-7 w-full justify-between"
              >
                {group.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex} className={`${field.classname ?? ""}`}>
                    {field.name === "address" && (
                      <div className="w-full">
                        <input
                          {...register(field.name)}
                          type={field.type}
                          placeholder={field.placeholder}
                          className={`w-full bg-customtransparent bg-opacity-5 rounded-md border-2 border-textyellow outline-none px-4 py-2.5 placeholder:text-white focus:none text-textyellow`}
                        />
                        {errors[field.name] && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors[field.name]?.message}
                          </p>
                        )}
                      </div>
                    )}
                    {field.name === "linkedinUrl" && (
                      <div className="w-full">
                        <input
                          {...register(field.name)}
                          type={field.type}
                          placeholder={field.placeholder}
                          className={`w-full bg-customtransparent bg-opacity-5 rounded-md border-2 border-textyellow outline-none px-4 py-2.5 placeholder:text-white focus:none text-textyellow`}
                        />
                        {errors[field.name] && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors[field.name]?.message}
                          </p>
                        )}
                      </div>
                    )}
                    {field.name !== "address" && field.name !== "linkedinUrl" && (
                      <input
                        {...register(field.name)}
                        type={field.type}
                        placeholder={field.placeholder}
                        className={`w-full sm:w-auto bg-customtransparent bg-opacity-5 rounded-md border-2 border-textyellow outline-none px-4 py-2.5 placeholder:text-white focus:none ${field.classname ?? ""} text-textyellow`}
                      />
                    )}
                    
                  </div>
                ))}
              </div>
            ))}

            {/* Additional Fields */}
            {secondheading && (
              <span className="text-left font-Poppins text-xl text-gray-400 mt-3">
                {secondheading}
              </span>
            )}

            {additionalInputGroups &&
              additionalInputGroups.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-7 w-full justify-between"
                >
                  {group.fields.map((field, fieldIndex) => (
                    <div
                      key={fieldIndex}
                      className={`${field.classname ?? ""}`}
                    >
                      <input
                        {...register(field.name)}
                        type={field.type}
                        placeholder={field.placeholder}
                        className={`w-full sm:w-auto bg-customtransparent bg-opacity-5 rounded-md border-2 border-textyellow px-4 py-2.5 placeholder:text-white focus:none ${field.classname ?? ""
                          } outline-none text-textyellow`}
                      />
                      {errors[field.name] && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors[field.name]?.message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ))}

            {/* Discord Section */}
            <div className="flex flex-col mt-10">
              <div className="flex gap-1.5">
                <input
                  type="checkbox"
                  id="joinedDiscord"
                  {...register("joinedDiscord")}
                  className="w-4 h-4 text-textyellow bg-customtransparent opacity-90 rounded-full border border-textyellow appearance-none checked:bg-textyellow"
                />
                <label
                  htmlFor="joinedDiscord"
                  className="text-sm text-white text-nowrap"
                >
                  Joined Discord*
                </label>
              </div>
              {errors.joinedDiscord && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.joinedDiscord?.message}
                </p>
              )}
            </div>

            {/* Terms Section */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex flex-col">
                <div className="flex gap-1.5">
                  <input
                    type="checkbox"
                    id="rules"
                    {...register("rules")}
                    className="w-4 h-4 text-textyellow bg-customtransparent opacity-90 rounded-md border border-textyellow appearance-none checked:bg-textyellow"
                  />
                  <label htmlFor="rules" className="text-sm text-white">
                    I have read{" "}
                    <Link
                      href="https://season-argon-ef5.notion.site/Open-Source-Event-Rules-and-Guidelines-12cff86c36f480bcb293faaba5c40a5e"
                      className="text-textyellow"
                      target="_blank"
                    >
                      Rules and Guidelines*
                    </Link>
                  </label>
                </div>
                {errors.rules && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.rules?.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex gap-1.5">
                  <input
                    type="checkbox"
                    id="codeOfConduct"
                    {...register("codeOfConduct")}
                    className="w-4 h-4 text-textyellow bg-customtransparent opacity-90 rounded-md border border-textyellow appearance-none checked:bg-textyellow"
                  />
                  <label htmlFor="codeOfConduct" className="text-sm text-white">
                    I have read{" "}
                    <Link
                      href="https://season-argon-ef5.notion.site/Code-of-Conduct-12cff86c36f4803c9ed6c7fbb88c89d3"
                      className="text-textyellow"
                      target="_blank"
                    >
                      Code of Conduct*
                    </Link>
                  </label>
                </div>
                {errors.codeOfConduct && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.codeOfConduct?.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex w-full justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-mokoto text-[24px] text-white bg-customgreen border-2 border-bordergreen rounded-md px-3 py-1 mt-5"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <Image
          src="/line.svg"
          width={1}
          height={524}
          alt=""
          className="opacity-100 hidden lg:block"
        />

        {/* QR Code Section */}
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 mt-6 lg:mt-0">
          <Image src="/apertrebiglogo.svg" width={218} height={6} alt="logo" />
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/discordQR.png"
              width={150}
              height={150}
              alt="apertre"
              className="rounded-lg w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
            />
            <span className="font-Poppins text-white text-center font-bold">
              Scan QR to join the Discord server
            </span>
            <span className="text-white py-2">Or</span>
            <Link
              href={DISCORD_LINK}
              target="_blank"
              className="flex items-center bg-customviolet rounded-lg text-white w-fit px-4 py-2 font-bold gap-2"
            >
              Click Me
              <FaDiscord />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

