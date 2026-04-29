function StorySection() {
  return (
    <section className="bg-white px-6 py-12 lg:px-0">
      <div className="mx-auto w-full max-w-[1022px]">
        <h2 className="mx-auto h-[45px] w-full max-w-[250px] text-center text-[30px] font-semibold leading-none tracking-normal text-[#208BFB]">
          Watch Our Story
        </h2>

        <div className="relative mt-[24px] h-[510px] w-full overflow-hidden rounded-[10px]">
          <img
            src="/clinicy.jpg"
            alt="Clinic reception"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 rounded-[10px] bg-black/60" />
          <button
            type="button"
            aria-label="Play clinic video"
            className="absolute left-1/2 top-1/2 flex h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[10px]"
          >
            <img
              src="/youtube.png"
              alt=""
              aria-hidden="true"
              className="h-[140px] w-[140px] object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
