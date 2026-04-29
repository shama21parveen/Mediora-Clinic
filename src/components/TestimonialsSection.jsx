const testimonials = [
  {
    name: "Ramesh Kumar",
    nameWidth: 195,
    quote:
      "“Dr. Ajay explains everything clearly and makes you feel comfortable.”",
  },
  {
    name: "Ashutosh Kumar",
    nameWidth: 210,
    quote: "“Professional service with excellent care and attention.”",
  },
  {
    name: "Harshit Kaushal",
    nameWidth: 199,
    quote: "“Highly satisfied with the treatment and overall experience.”",
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white px-6 py-12 lg:px-0">
      <h2 className="mx-auto h-[45px] w-full max-w-[299px] text-center text-[30px] font-semibold leading-none tracking-normal text-[#208BFB]">
        Patient Experiences
      </h2>

      <div className="relative mx-auto mt-[30px] w-full max-w-[1164px]">
        <button
          type="button"
          aria-label="Previous patient experience"
          className="absolute left-[-24px] top-1/2 z-10 hidden h-[45px] w-[45px] -translate-y-1/2 items-center justify-center rounded-full bg-[#208BFB] text-[34px] font-normal leading-none text-white lg:flex"
        >
          <span className="-mt-1">‹</span>
        </button>

        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="relative mx-auto h-[232px] w-full max-w-[368px] rounded-[10px] bg-white text-center shadow-[0_0_16px_rgba(0,0,0,0.25)]"
            >
              <h3
                className="absolute left-1/2 top-[47px] flex h-[38px] -translate-x-1/2 items-center justify-center whitespace-nowrap text-center text-[25px] font-medium leading-none tracking-normal text-black"
                style={{ width: `${item.nameWidth}px` }}
              >
                {item.name}
              </h3>

              <div className="absolute left-1/2 top-[85px] flex h-[25px] w-[125px] -translate-x-1/2 items-center justify-center text-center text-[25px] font-medium leading-none tracking-normal text-[#FFC928]">
                ★★★★★
              </div>

              <p className="absolute left-1/2 top-[121px] flex h-[81px] w-[315px] -translate-x-1/2 items-start justify-center text-center text-[18px] font-normal leading-none tracking-normal text-black">
                {item.quote}
              </p>
            </article>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next patient experience"
          className="absolute right-[-24px] top-1/2 z-10 hidden h-[45px] w-[45px] -translate-y-1/2 items-center justify-center rounded-full bg-[#208BFB] text-[34px] font-normal leading-none text-white lg:flex"
        >
          <span className="-mt-1">›</span>
        </button>
      </div>
    </section>
  );
}

export default TestimonialsSection;
