function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-10 sm:px-6 lg:px-0 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1208px] flex-col items-center gap-6 lg:min-h-[485px] lg:flex-row lg:gap-4">
        <div className="w-full max-w-[735px] lg:pt-3">
          <h2 className="text-center text-[26px] font-semibold leading-[1.15] text-[#208BFB] sm:text-[30px] lg:text-left lg:leading-[100%]">
            Meet Your Doctor
          </h2>

          <div className="mt-[12px] space-y-3 text-center text-[15px] font-normal leading-[1.55] text-black sm:text-[17px] lg:text-left lg:text-[18px] lg:leading-[1.35]">
            <p>
              Dr. Ajay Verma, a renowned specialist in Skin and Hair is
              <br className="hidden lg:block" />
              committed to delivering exceptional healthcare with a
              patient-first
              <br className="hidden lg:block" />
              approach. With extensive clinical experience and a passion for
              <br className="hidden lg:block" />
              healing, Dr. Ajay combines advanced medical knowledge with
              <br className="hidden lg:block" />
              compassionate care to ensure the best outcomes for every
              <br className="hidden lg:block" />
              patient.
            </p>
            <p>
              Every consultation is focused on understanding your concerns,
              <br className="hidden lg:block" />
              providing clear guidance, and delivering effective treatment.
            </p>
          </div>
        </div>

        <div className="relative h-[330px] w-full max-w-[300px] shrink-0 sm:h-[420px] sm:max-w-[390px] lg:h-[485px] lg:max-w-[457px]">
          <div className="absolute right-[8px] top-[2px] z-10 h-[72px] w-[72px] overflow-hidden rounded-full bg-[#208BFB] sm:h-[90px] sm:w-[90px] lg:right-[14px] lg:h-[100px] lg:w-[100px]">
            <div className="absolute bottom-0 left-0 h-[22px] w-[22px] bg-white sm:h-[28px] sm:w-[28px] lg:h-[30px] lg:w-[30px]" />
          </div>

          <div className="absolute left-0 top-[20px] h-[300px] w-[270px] sm:left-[10px] sm:h-[380px] sm:w-[340px] lg:left-[18px] lg:h-[430px] lg:w-[394px]">
            <div
              className="absolute left-[18px] top-[222px] h-[78px] w-[112px] bg-[#FF3D00] sm:top-[280px] sm:h-[98px] sm:w-[140px] lg:top-[308px] lg:h-[112px] lg:w-[160px]"
              style={{
                clipPath: "polygon(6% 0, 0 100%, 100% 92%)",
              }}
            />

            <img
              src="/doctor.jpg"
              alt="Dr. Ajay Verma portrait"
              className="absolute left-[48px] top-[36px] z-20 h-[255px] w-[200px] object-cover object-[center_top] sm:left-[58px] sm:top-[44px] sm:h-[322px] sm:w-[253px] lg:left-[62px] lg:top-[48px] lg:h-[364px] lg:w-[286px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
