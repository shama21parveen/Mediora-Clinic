const journeySteps = [
  {
    title: "Book Appointment",
    description: "Choose your preferred date & time",
  },
  {
    title: "Consultation",
    description: "Discuss your health concerns",
  },
  {
    title: "Diagnosis",
    description: "Accurate evaluation & testing",
  },
  {
    title: "Treatment",
    description: "Personalized care plan",
  },
  {
    title: "Follow-up",
    description: "Continuous support & recovery",
  },
];

function JourneySection() {
  return (
    <section className="bg-white px-6 py-12 lg:px-0">
      <h2 className="mx-auto h-[45px] w-full max-w-[447px] text-center text-[30px] font-semibold leading-none tracking-normal text-[#208BFB]">
        Your Journey to Better Health
      </h2>

      <div className="mx-auto mt-[30px] grid w-full max-w-[1195px] grid-cols-1 justify-items-center gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {journeySteps.map((step, index) => (
          <article
            key={step.title}
            className="relative h-[232px] w-[215px] overflow-hidden rounded-[10px] bg-white text-center shadow-[0_0_16px_rgba(0,0,0,0.25)]"
          >
            <span className="absolute left-[-27px] top-[-27px] h-[63px] w-[63px] rounded-full bg-[#208BFB]" />
            <span className="absolute left-[183px] top-[-27px] h-[63px] w-[63px] rounded-full bg-[#208BFB]" />

            <div className="absolute left-[75.68px] top-[17.68px] flex h-[45px] w-[45px] rotate-[44deg] items-center justify-center rounded-[14px_45px_45px_45px] bg-[#208BFB]">
              <span className="-rotate-[44deg] text-[25px] font-bold leading-none text-white">
                {index + 1}
              </span>
            </div>

            <h3 className="absolute left-[14px] top-[86px] flex h-[30px] w-[188px] items-center justify-center text-center text-[20px] font-medium leading-none tracking-normal text-black">
              {step.title}
            </h3>

            <p className="absolute left-[14px] top-[118px] flex h-[81px] w-[188px] items-start justify-center text-center text-[18px] font-normal leading-none tracking-normal text-black">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default JourneySection;
