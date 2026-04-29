function StorySection() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-0">
      <div className="mx-auto w-full max-w-[1022px]">
        <h2 className="mx-auto h-auto w-full max-w-[250px] text-center text-[26px] font-semibold leading-[1.15] tracking-normal text-[#208BFB] sm:h-[45px] sm:text-[30px] sm:leading-none">
          Watch Our Story
        </h2>

        <div className="relative mt-[24px] aspect-video w-full overflow-hidden rounded-[10px] sm:h-[360px] sm:aspect-auto lg:h-[510px]">
          <img
            src="/clinicy.jpg"
            alt="Clinic reception"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 rounded-[10px] bg-black/60" />
          <button
            type="button"
            aria-label="Play clinic video"
            className="absolute left-1/2 top-1/2 flex h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[10px] sm:h-[110px] sm:w-[110px] lg:h-[140px] lg:w-[140px]"
          >
            <img
              src="/youtube.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
