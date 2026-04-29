import { Activity, BriefcaseMedical, ClipboardPlus, Droplet } from "lucide-react";

const trustCards = [
  { title: "Modern & Hygienic Environment", Icon: Droplet, textLeft: 25 },
  { title: "Trusted by Hundreds of Patients", Icon: BriefcaseMedical, textLeft: 27 },
  { title: "Quick & Hassle-Free Appointments", Icon: ClipboardPlus, textLeft: 27 },
  { title: "Personalized Patient Care", Icon: Activity, textLeft: 33 },
];

function TrustSection() {
  return (
    <section className="bg-white px-3 py-10 sm:px-0 sm:py-12">
      <h2 className="mx-auto h-auto w-full max-w-[725px] text-center text-[26px] font-semibold leading-[1.15] tracking-normal text-[#208BFB] sm:h-[45px] sm:text-[30px] sm:leading-none">
        Trusted by Patients, Recommended by Families
      </h2>

      <div className="mx-auto mt-[27px] grid w-full max-w-[1190px] grid-cols-1 justify-items-center gap-[30px] sm:grid-cols-2 xl:grid-cols-4">
        {trustCards.map(({ title, Icon, textLeft }) => (
          <article
            key={title}
            className="relative h-[231px] w-[275px] overflow-hidden rounded-[10px_10px_150px_150px] bg-white shadow-[0_0_16px_rgba(0,0,0,0.25)]"
          >
            <Icon
              className="absolute top-[24px] h-[70px] w-[70px] text-black"
              style={{ left: title === "Modern & Hygienic Environment" ? 101 : 103 }}
              strokeWidth={1.25}
            />
            <p
              className="absolute top-[109px] flex h-[60px] items-center justify-center text-center text-[20px] font-medium leading-none tracking-normal text-black"
              style={{
                left: textLeft,
                width: title === "Modern & Hygienic Environment" ? 226 : title === "Quick & Hassle-Free Appointments" ? 221 : title === "Personalized Patient Care" ? 223 : 224,
              }}
            >
              {title}
            </p>
            <span className="absolute left-[73px] top-[189px] h-[130px] w-[130px] rounded-full bg-[#208BFB]" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default TrustSection;
