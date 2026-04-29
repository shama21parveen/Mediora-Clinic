function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-12 lg:px-0 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1208px] flex-col items-center gap-6 lg:min-h-[485px] lg:flex-row lg:gap-4">
        <div className="w-full max-w-[735px] lg:pt-3">
          <h2 className="text-[30px] font-semibold leading-[100%] text-[#208BFB]">
            Meet Your Doctor
          </h2>

          <div className="mt-[12px] space-y-2 text-[18px] font-normal leading-[1.35] text-black lg:text-[18px]">
            <p>
              Dr. Ajay Verma, a renowned specialist in Skin and Hair is
              <br />
              committed to delivering exceptional healthcare with a
              patient-first
              <br />
              approach. With extensive clinical experience and a passion for
              <br />
              healing, Dr. Ajay combines advanced medical knowledge with
              <br />
              compassionate care to ensure the best outcomes for every
              <br />
              patient.
            </p>
            <p>
              Every consultation is focused on understanding your concerns,
              <br />
              providing clear guidance, and delivering effective treatment.
            </p>
          </div>
        </div>

        <div className="relative h-[485px] w-full max-w-[457px] shrink-0">
          <div className="absolute right-[14px] top-[2px] z-10 h-[100px] w-[100px] overflow-hidden rounded-full bg-[#208BFB]">
            <div className="absolute bottom-0 left-0 h-[30px] w-[30px] bg-white" />
          </div>

          <div className="absolute left-[18px] top-[20px] h-[430px] w-[394px]">
            <div
              className="absolute left-[18px] top-[308px] h-[112px] w-[160px] bg-[#FF3D00]"
              style={{
                clipPath: "polygon(6% 0, 0 100%, 100% 92%)",
              }}
            />

            <img
              src="/doctor.jpg"
              alt="Dr. Ajay Verma portrait"
              className="absolute left-[62px] top-[48px] z-20 h-[364px] w-[286px] object-cover object-[center_top]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
