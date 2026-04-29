function StatsSection() {
  return (
    <section className="bg-white px-6 py-[70px] text-center">
      <h2 className="mx-auto h-[45px] w-full max-w-[493px] text-[30px] font-semibold leading-none tracking-normal text-[#208BFB]">
        Start Your Health Journey Today
      </h2>

      <p className="mx-auto mt-0 h-auto w-full max-w-[1067px] text-center text-[22px] font-normal leading-none tracking-normal text-black">
        Don’t wait for symptoms to grow. Take the first step toward better
        health with expert consultation.
      </p>

      <div className="mx-auto mt-[14px] flex w-fit flex-wrap items-center justify-center gap-[21px]">
        <a
          href="#appointment"
          className="flex h-[45px] min-w-[152px] items-center justify-center rounded-[10px] bg-[#208BFB] px-8 text-[18px] font-normal leading-none tracking-normal text-white"
        >
          Book Now
        </a>
        <a
          href="#contact"
          className="flex h-[45px] min-w-[154px] items-center justify-center rounded-[10px] border-2 border-[#208BFB] bg-white px-8 text-[18px] font-normal leading-none tracking-normal text-[#208BFB]"
        >
          Call Clinic
        </a>
      </div>
    </section>
  );
}

export default StatsSection;
