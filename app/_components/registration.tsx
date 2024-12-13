import { Card, Carousel } from "@/components/Registrationcarousel";
import { data } from "@/constants/registration-constant";

export default function Registration() {
  const cards = data.map((card, idx) => <Card key={idx} card={card} />);

  return (
    <section
      className="w-full h-full p-10 md:p-20 bg-custom-gradient scroll-smooth"
      id="register"
      style={{
        background:
          "linear-gradient(132.96deg, #0B0A0A 27.52%, #272323 84.97%)",
      }}
    >
      <h2 className="text-textyellow mx-auto font-normal text-2xl md:text-6xl font-mokoto text-center md:text-left">
        Registrations
      </h2>
      <Carousel items={cards} />
      <div className="flex w-full justify-center items-center">
        <div className="border-t-2 border-b-2 border-textyellow border-opacity-30 py-7 border-dashed">
          <span className="text-white text-base md:text-lg font-normal font-Poppins text-center flex flex-col italic">
            “In open source, we feel strongly that to really do something well,
            you{" "}
            <span className="flex w-full justify-center text-center">
              have to get a lot of people involved.” -{" "}
              <span className="text-textyellow">Linus torvalds</span>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
