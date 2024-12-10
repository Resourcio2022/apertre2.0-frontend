import { Carousel, Card } from "@/components/registrationcarouselcard";
import { data } from "@/constants/registration-constant";

export default function Registration() {
  const cards = data.map((card, idx) => (
    <Card key={idx} card={card} />
  ));

  return (
    <div className="w-full h-full p-10 md:p-20 bg-custom-gradient"
      style={{
        background: "linear-gradient(132.96deg, #0B0A0A 27.52%, #272323 84.97%)",
      }}>{/*sorry for using inline css here, but it was necessary to make the gradient work sorry duhhh you can change if you have any other option :)*/}
      <h2 className=" text-textyellow pl-4 mx-auto font-normal text-2xl md:text-6xl  font-mokoto">
        Registrations
      </h2>
      <Carousel items={cards} />
      <div className="flex w-full justify-center items-center">
        <div className="border-t-2 border-b-2 border-textyellow border-opacity-30 py-7 border-dashed">
          <span className="text-white text-base md:text-lg font-normal font-Poppins text-center flex flex-col">
            “In open source, we feel strongly that to really do something well, you <span className="flex w-full justify-center text-center">have to get a lot of people involved.” -{" "}
              <span className="text-textyellow">Linus torvalds</span></span>
          </span>
        </div>
      </div>
    </div>
  );
}
