function StatsSection() {
  return (
    <section className="bg-white px-4 py-10 text-center sm:px-6 sm:py-[70px]">
      <h2 className="mx-auto h-auto w-full max-w-[493px] text-[26px] font-semibold leading-[1.15] tracking-normal text-[#208BFB] sm:h-[45px] sm:text-[30px] sm:leading-none">
        Start Your Health Journey Today
      </h2>

      <p className="mx-auto mt-3 h-auto w-full max-w-[1067px] text-center text-[16px] font-normal leading-[1.45] tracking-normal text-black sm:mt-0 sm:text-[22px] sm:leading-none">
        Don't wait for symptoms to grow. Take the first step toward better
        health with expert consultation.
      </p>

      <div className="mx-auto mt-5 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-[14px] sm:w-fit sm:gap-[21px]">
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
