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
    value: "Mon–Sat | 10 AM – 8 PM",
  },
];

function ContactSection() {
  return (
    <section id="contact" className="bg-white px-6 py-16 lg:px-0">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 lg:grid-cols-[479px_600px] lg:gap-[89px]">
        <div>
          <h2 className="h-[45px] w-[222px] text-[30px] font-semibold leading-none tracking-normal text-[#208BFB]">
            Visit Our Clinic
          </h2>

          <dl className="mt-[19px] flex w-full max-w-[479px] flex-col gap-[19px]">
            {clinicDetails.map((item) => (
              <div
                key={item.label}
                className="grid min-h-[33px] grid-cols-[116px_1fr] items-start gap-4 text-[22px] font-medium leading-none tracking-normal text-black"
              >
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <img
          src="/map.png"
          alt="Clinic location map"
          className="h-auto w-full max-w-[600px] object-cover lg:h-[402px]"
        />
      </div>
    </section>
  );
}

export default ContactSection;
