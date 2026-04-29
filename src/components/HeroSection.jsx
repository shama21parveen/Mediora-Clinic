function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="relative h-[calc(100vh-92px)] min-h-[600px] w-full overflow-hidden">
        <img
          src="/doctors.jpg"
          alt="Medical team standing together"
          className="absolute inset-0 h-full w-full object-cover object-[center_32%]"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        <div className="relative flex h-full items-center justify-center px-6 text-center sm:px-10">
          <div className="flex max-w-[895px] -translate-y-1 flex-col items-center">
            <h1
              className="text-[32px] font-extrabold leading-[1.15] text-white sm:text-[42px] lg:text-[50px] lg:leading-[65px]"
              style={{
                textShadow: "0 4px 9.4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Advanced Care. Trusted Expertise.
            </h1>

            <p className="mt-3 max-w-[895px] text-balance text-[17px] font-normal leading-[1.5] text-white sm:text-[20px] lg:text-[25px] lg:leading-[34px]">
              Delivering personalized and modern healthcare solutions to help
              you live a healthier, better life.
            </p>

            <a
              href="#appointment"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-lg bg-[#2f8fff] px-6 text-sm font-medium text-white transition hover:bg-[#1d7ff0]"
            >
              Schedule Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
