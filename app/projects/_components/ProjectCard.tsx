interface ProjectCardProps {
  projectName: string;
  projectURL: string;
  projectDescription: string;
  projectDomain: string;
  tags: string[];
  maintainerUsername: string;
  maintainerfFullname: string;
};

export default function ProjectCard({
  projectName,
  projectURL,
  projectDescription,
  projectDomain,
  tags,
  maintainerUsername,
  maintainerfFullname,
}: ProjectCardProps) {
  return (
    <div
      className="bg-gray-900 text-white p-6 rounded-xl border-2 border-yellow-500 relative max-w-md"
      style={{
        background:
          "linear-gradient(132.96deg, #0B0A0A 27.52%, #272323 84.97%)",
      }}
    >
      <h2 className="text-yellow-400 text-xl font-bold text-center font-mokoto">
        {projectName}
      </h2>
      <p className="text-center text-gray-300">by</p>
      <h3 className="text-center text-lg font-semibold">{maintainerUsername}</h3>

      <div className="flex flex-wrap justify-center gap-2 my-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm border border-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        className="w-full text-yellow-400 py-2 rounded-lg font-semibold font-mokoto border-2 border-yellow-500"
        style={{
          background:
            "linear-gradient(132.96deg, #0B0A0A 27.52%, #272323 84.97%)",
        }}
      >
        DETAILS
      </button>

      {/* <div className="absolute -right-6 top-10 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center border-1 border-gray-900">
        <Image
          src={profilePic}
          alt="GitHub Profile"
          width={64}
          height={64}
          className="rounded-full border-2 border-white"
        />
      </div> */}
    </div>
  );
};
