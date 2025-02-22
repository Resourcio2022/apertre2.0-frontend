import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      className="w-full flex items-center justify-center p-10 md:p-20 text-white font-Poppins"
      style={{
        backgroundImage: 'url("/aboutus.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      id="about-us"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col gap-5 text-center md:text-left">
          <h2 className="text-2xl md:text-6xl font-mokoto text-textyellow">
            About Apertre 2.0
          </h2>
          <p className="text-white text-lg md:text-xl font-normal">
            We are back with the season 2 of{" "}
            <span className="text-textyellow">Apertre</span> - the open source
            contribution event. Organized by Resourcio Community it aims on
            enhancing your technical skills. Noob or Pro, all are welcomed. Join
            us to skyrocket your experience, portfolio, and career.
          </p>
          <div className="border-t-2 border-b-2 border-textyellow border-opacity-30 py-5 border-dashed">
            <p className="text-sm md:text-lg font-normaln italic">
              “When we have welcoming communities of contributors, open source
              software gets better and more useful to everyone.” -{" "}
              <span className="text-textyellow">Limor Fried</span>
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end md:flex-row flex-col">
          <div>
            <Image
              src="/about.svg"
              width={445}
              height={382}
              alt="Apertre Illustration"
              className="w-[400px] md:w-[400px] lg:w-[450px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
