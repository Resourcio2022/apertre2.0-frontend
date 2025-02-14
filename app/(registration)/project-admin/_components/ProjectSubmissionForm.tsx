"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TypewriterEffectSmooth } from "@/components/Typewriter";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { TechStacks } from "./techstack-combo-box";
import { useGitHub } from "@/hooks/useGithubUser";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { projectAdminSignup, Role } from "../../_utils/apiCalls";
import { ProjectDomain } from "./projectdomain-combo-box";

const projectSchema = z.object({
  repoName: z.string().min(1, "Repository name is required"),
  projectDomain: z.string().min(1, "Project domain is required"),
  repoURL: z.string().url("Invalid URL"),
  description: z.string().min(1, "Project description is required"),
  techstack: z.array(z.string()).min(1, "Tech stack is required"),
});

type Project = z.infer<typeof projectSchema>;

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  discordUsername: z.string().min(1, "Discord username is required"),
  address: z.string().min(1, "Address is required"),
  linkedinUrl: z.string().url("Invalid URL"),
  twitterUsername: z.string().optional(),
  projects: z.array(projectSchema).min(1).max(3),
  joinedDiscord: z.boolean().refine((val) => val, "You must join Discord"),
  rulesAccepted: z.boolean().refine((val) => val, "You must accept the rules"),
  codeAccepted: z
    .boolean()
    .refine((val) => val, "You must accept the code of conduct"),
  loftlabs: z
    .boolean()
    .refine((val) => val, "You must agree to participate in the giveaway."),
});
type FormData = z.infer<typeof formSchema>;

const words = [{ text: "PROJECT" }, { text: "ADMIN" }];
const DISCORD_LINK = "https://discord.gg/EpSAYF4czs";

export default function RegistrationForm() {
  const { clerk_userId, email, githubUsername, isSignedIn } = useGitHub();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { projects: [{}] as Project[] },
  });

  const { fields, append, remove } = useFieldArray({
    name: "projects",
    control,
  });

  const onSubmit = async (data: FormData) => {
    const role = words.map((item) => item.text.toLowerCase()).join(" ") as Role;
    if (
      clerk_userId &&
      email &&
      githubUsername &&
      isSignedIn &&
      data.firstName &&
      data.lastName &&
      data.phoneNumber &&
      data.discordUsername &&
      data.address &&
      data.linkedinUrl &&
      data.projects &&
      data.joinedDiscord &&
      data.rulesAccepted &&
      data.codeAccepted &&
      data.loftlabs &&
      data.twitterUsername
    ) {
      try {
        const response = await projectAdminSignup(
          clerk_userId,
          role,
          email,
          githubUsername,
          data.firstName.trim() + " " + data.lastName.trim(),
          data.address.trim(),
          data.phoneNumber.trim(),
          data.discordUsername.trim(),
          data.linkedinUrl.trim(),
          data.twitterUsername?.trim(),
          data.projects
        );

        toast.success(response);

        setTimeout(() => {
          reset();
          router.push("/");
        }, 1500);
      }
      catch (err: any) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="relative w-full flex justify-center py-5 px-2 sm:px-5 min-h-[90vh]">
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

      {/* Form */}

      <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 bg-customtransparent rounded-lg shadow-md px-4 sm:px-6 lg:px-10 py-5 lg:py-7 z-50 w-full max-w-7xl">
        <div className="flex flex-col justify-between gap-10">
          {/* HEADER */}
          <div className="font-mokoto text-xl sm:text-2xl lg:text-3xl flex flex-wrap lg:flex-nowrap text-textyellow">
            <span>&gt;_&nbsp;.&nbsp;.&nbsp;LOGIN AS A&nbsp;</span>
            <TypewriterEffectSmooth words={words} />
          </div>
          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto space-y-6 p-6 shadow-md rounded-lg flex flex-col gap-3 font-Poppins md:min-w-[38rem]"
          >
            <div>
              <h1 className="text-white text-lg font-semibold">
                Personal Details
              </h1>
              <div
                id="personal-details"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative"
              >
                <div className="relative">
                  <input
                    {...register("firstName")}
                    placeholder={
                      errors.firstName ? errors.firstName.message : "First Name"
                    }
                    className={`input-field bg-customtransparent bg-opacity-5 rounded-md border-2 outline-none px-4 py-2.5 placeholder:text-white text-textyellow w-full ${errors.firstName ? "border-red-500 placeholder:text-red-500" : "border-textyellow"
                      }`}
                  />
                </div>
                <div className="relative">
                  <input
                    {...register("lastName")}
                    placeholder={
                      errors.lastName ? errors.lastName.message : "Last Name"
                    }
                    className={`input- bg-customtransparent bg-opacity-5 rounded-md border-2 outline-none px-4 py-2.5 placeholder:text-white text-textyellow w-full ${errors.lastName ? "border-red-500 placeholder:text-red-500" : "border-textyellow"
                      }`}
                  />
                </div>
                <div className="relative">
                  <input
                    {...register("phoneNumber")}
                    placeholder={
                      errors.phoneNumber
                        ? errors.phoneNumber.message
                        : "Phone Number"
                    }
                    className={`input- bg-customtransparent bg-opacity-5 rounded-md border-2 outline-none px-4 py-2.5 placeholder:text-white text-textyellow w-full ${errors.phoneNumber
                        ? "border-red-500 placeholder:text-red-500"
                        : "border-textyellow"
                      }`}
                  />
                </div>
                <div className="relative">
                  <input
                    {...register("discordUsername")}
                    placeholder={
                      errors.discordUsername
                        ? errors.discordUsername.message
                        : "Discord Username"
                    }
                    className={`input- bg-customtransparent bg-opacity-5 rounded-md border-2 outline-none px-4 py-2.5 placeholder:text-white text-textyellow w-full ${errors.discordUsername
                        ? "border-red-500 placeholder:text-red-500"
                        : "border-textyellow"
                      }`}
                  />
                </div>
                <div className="relative">
                  <input
                    {...register("linkedinUrl")}
                    placeholder={
                      errors.linkedinUrl
                        ? errors.linkedinUrl.message
                        : "LinkedIn Profile URL"
                    }
                    className={`input- bg-customtransparent bg-opacity-5 rounded-md border-2 outline-none px-4 py-2.5 placeholder:text-white text-textyellow w-full ${errors.linkedinUrl
                        ? "border-red-500 placeholder:text-red-500"
                        : "border-textyellow"
                      }`}
                  />
                </div>
                <div className="relative">
                  <input
                    {...register("twitterUsername")}
                    placeholder={
                      errors.twitterUsername
                        ? errors.twitterUsername.message
                        : "Twitter Username"
                    }
                    className={`input- bg-customtransparent bg-opacity-5 rounded-md border-2 outline-none px-4 py-2.5 placeholder:text-white text-textyellow w-full ${errors.twitterUsername
                        ? "border-red-500 placeholder:text-red-500"
                        : "border-textyellow"
                      }`}
                  />
                </div>
                <div className="relative sm:col-span-2">
                  <input
                    {...register("address")}
                    placeholder={
                      errors.address ? errors.address.message : "Address"
                    }
                    className={`input- bg-customtransparent bg-opacity-5 rounded-md border-2 outline-none px-4 py-2.5 placeholder:text-white text-textyellow w-full ${errors.address ? "border-red-500 placeholder:text-red-500" : "border-textyellow"
                      }`}
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-white text-lg font-semibold">
                Project Details
              </h1>
              {fields.map((item, index) => (
                <div
                  key={item.id}
                  className="border border-textyellow/50 p-4 rounded-lg space-y-2 relative"
                >
                  <h1 className="text-white">Project {index + 1}</h1>
                  <div className="relative">
                    <input
                      {...register(`projects.${index}.repoName`)}
                      placeholder={
                        errors.projects?.[index]?.repoName
                          ? errors.projects[index].repoName.message
                          : "Repository Name"
                      }
                      className={`input- bg-customtransparent bg-opacity-5 rounded-md border-2 outline-none px-4 py-2.5 placeholder:text-white text-textyellow w-full ${errors.projects?.[index]?.repoName
                          ? "border-red-500 placeholder:text-red-500"
                          : "border-textyellow"
                        }`}
                    />
                  </div>
                  <div className="relative">
                    <ProjectDomain
                      onChange={(value: string) => {
                        const projects = watch("projects");
                        projects[index].projectDomain = value;
                        setValue("projects", projects);
                      }}
                      placeholder={
                        errors.projects?.[index]?.projectDomain?.message
                          ? errors.projects[index].projectDomain.message
                          : "Select Project Domain"
                      }
                      value={watch("projects")[index]?.projectDomain}
                    />
                  </div>
                  <div className="relative">
                    <input
                      {...register(`projects.${index}.repoURL`)}
                      placeholder={
                        errors.projects?.[index]?.repoURL
                          ? errors.projects[index].repoURL.message
                          : "Repository URL"
                      }
                      className={`input- bg-customtransparent bg-opacity-5 rounded-md border-2 outline-none px-4 py-2.5 placeholder:text-white text-textyellow w-full ${errors.projects?.[index]?.repoURL
                          ? "border-red-500 placeholder:text-red-500"
                          : "border-textyellow"
                        }`}
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      {...register(`projects.${index}.description`)}
                      placeholder={
                        errors.projects?.[index]?.description
                          ? errors.projects[index].description.message
                          : "Project Description"
                      }
                      className={`input- bg-customtransparent bg-opacity-5 rounded-md border-2 outline-none px-4 py-2.5 placeholder:text-white text-textyellow w-full ${errors.projects?.[index]?.description
                          ? "border-red-500 placeholder:text-red-500"
                          : "border-textyellow"
                        }`}
                    />
                  </div>
                  <div className="relative">
                    <TechStacks
                      placeholder={
                        errors.projects?.[index]?.techstack?.message
                          ? errors.projects[index].techstack.message
                          : "Select Techstacks"
                      }
                      value={watch("projects")[index]?.techstack?.join(" ")}
                      onChange={(value: string) => {
                        const projects = watch("projects");
                        projects[index].techstack = value.split(" ");
                        setValue("projects", projects);
                      }}
                    />
                  </div>
                  {fields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
            {fields.length < 3 && (
              <button
                type="button"
                onClick={() => append({} as Project)}
                className="text-white flex items-center gap-2"
              >
                <p className="flex justify-center items-center rounded-full bg-[#850E0E] w-[38px] h-[38px] border border-[#F95656] text-3xl">
                  +
                </p>{" "}
                Add Project
              </button>
            )}

            <div className="flex flex-col gap-4 text-white">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="loftlabs"
                    {...register("loftlabs", {
                      required:
                        "You must agree to participate in the giveaway.",
                    })}
                    className="w-4 h-4 text-textyellow bg-customtransparent opacity-90 rounded-full border border-red-500 appearance-none checked:bg-green-500 flex-shrink-0"
                  />
                  <Link
                    href="https://forms.gle/813SNhCg1biXQmKD8"
                    className="text-red-700 font-bold underline"
                    target="_blank"
                  >
                    Fill this form
                  </Link>
                  <span className="text-white">to get the acceptance mail</span>
                </div>
                {errors.loftlabs && (
                  <p className="text-red-500 animate-pulse">{errors.loftlabs.message}</p>
                )}
                <p className="text-gray-300 text-sm italic ml-5">
                  (Mandatory to get acceptance mail)
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("joinedDiscord", { required: "You must join Discord" })}
                    className="w-4 h-4"
                  />{" "}
                  Joined Discord*
                </label>
                {errors.joinedDiscord && (
                  <p className="text-red-500">{errors.joinedDiscord.message}</p>
                )}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("rulesAccepted", { required: "You must accept the rules" })}
                    className="w-4 h-4"
                  />{" "}
                  Read Rules
                </label>
                {errors.rulesAccepted && (
                  <p className="text-red-500">{errors.rulesAccepted.message}</p>
                )}
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("codeAccepted", { required: "You must accept the code of conduct" })}
                    className="w-4 h-4"
                  />{" "}
                  Read Code of Conduct
                </label>
                {errors.codeAccepted && (
                  <p className="text-red-500">{errors.codeAccepted.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <Image
          src="/line.svg"
          width={1}
          height={524}
          alt=""
          className="opacity-100 hidden lg:block"
        />

        {/* QR Code Section */}
        <div className="flex flex-col items-center gap-6 lg:gap-10 mt-6 lg:mt-0 w-full lg:pt-20">
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
