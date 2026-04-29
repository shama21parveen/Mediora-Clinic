const clinicDetails = [
  {
    label: "Address:",
    value: "Nand Vihar Dwarka, New Delhi, Delhi 220150",
  },
  {
    label: "Phone No.:",
    value: "+91 9874563210",
  },
  {
    label: "Email:",
    value: "info.medioraclinic@gmail.com",
  },
  {
    label: "Hours:",
    value: "Mon-Sat | 10 AM - 8 PM",
  },
];

function ContactSection() {
  return (
    <section id="contact" className="bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-0">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-8 lg:grid-cols-[479px_600px] lg:gap-[89px]">
        <div>
          <h2 className="mx-auto h-auto w-full max-w-[222px] text-center text-[26px] font-semibold leading-[1.15] tracking-normal text-[#208BFB] sm:h-[45px] sm:text-[30px] sm:leading-none lg:mx-0 lg:text-left">
            Visit Our Clinic
          </h2>

          <dl className="mt-[19px] flex w-full max-w-[479px] flex-col gap-4 sm:gap-[19px]">
            {clinicDetails.map((item) => (
              <div
                key={item.label}
                className="grid min-h-[33px] grid-cols-[92px_1fr] items-start gap-3 text-[15px] font-medium leading-[1.35] tracking-normal text-black sm:grid-cols-[116px_1fr] sm:text-[22px] sm:leading-none"
              >
                <dt>{item.label}</dt>
                <dd className="break-words">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <img
          src="/map.png"
          alt="Clinic location map"
          className="h-auto w-full max-w-[600px] justify-self-center object-cover lg:h-[402px]"
        />
      </div>
    </section>
  );
}

export default ContactSection;
