const serviceCards = [
  "Primary Care & Consultation",
  "Lifestyle & Preventive Care",
  "Diagnostic Services",
  "Personalized Treatment Plans",
];

function ServicesSection() {
  return (
    <section id="services" className="bg-white px-3 py-10 sm:px-0 sm:py-12">
      <h2 className="mx-auto h-auto w-full max-w-[556px] text-center text-[26px] font-semibold leading-[1.15] tracking-normal text-[#208BFB] sm:h-[45px] sm:text-[30px] sm:leading-none">
        Comprehensive Healthcare Services
      </h2>

      <div className="relative mx-auto mt-[30px] flex w-full max-w-[1190px] items-center justify-center">
        <button
          type="button"
          aria-label="Previous services"
          className="absolute left-0 z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-[#208BFB] text-[30px] font-normal leading-none text-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] sm:flex xl:left-[-14px]"
        >
          <span className="-mt-1">&#8249;</span>
        </button>

        <div className="grid w-full grid-cols-1 justify-items-center gap-[30px] sm:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((title) => (
            <article
              key={title}
              className="relative flex h-[232px] w-[275px] items-center justify-center overflow-hidden rounded-[50px] bg-white shadow-[0_0_16px_rgba(0,0,0,0.25)]"
            >
              <span className="absolute left-[73px] top-[-83px] h-[130px] w-[130px] rounded-full bg-[#208BFB]" />
              <p className="relative z-[1] flex h-[76px] w-[234px] items-center justify-center text-center text-[25px] font-medium leading-none tracking-normal text-black">
                {title}
              </p>
              <span className="absolute left-[73px] top-[189px] h-[130px] w-[130px] rounded-full bg-[#208BFB]" />
            </article>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next services"
          className="absolute right-0 z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-[#208BFB] text-[30px] font-normal leading-none text-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] sm:flex xl:right-[-14px]"
        >
          <span className="-mt-1">&#8250;</span>
        </button>
      </div>
    </section>
  );
}

export default ServicesSection;
