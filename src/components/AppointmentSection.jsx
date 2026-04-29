const fields = [
  { label: "Name", type: "text" },
  { label: "Email", type: "email" },
  { label: "Phone number", type: "tel" },
];

function AppointmentSection() {
  return (
    <section id="appointment" className="bg-white px-6 py-12 lg:px-0">
      <h2 className="mx-auto h-[45px] w-full max-w-[190px] text-center text-[30px] font-semibold leading-none tracking-normal text-[#208BFB]">
        Get in Touch
      </h2>

      <p className="mx-auto mt-0 h-auto w-full max-w-[855px] text-center text-[22px] font-normal leading-[33px] tracking-[0.01em] text-black">
        Whether you need medical help, want to book an appointment, or have any
        questions — we’re here to assist you.
      </p>

      <form className="mx-auto mt-[18px] flex w-full max-w-[855px] flex-col gap-[18px]">
        {fields.map((field) => (
          <input
            key={field.label}
            type={field.type}
            placeholder={field.label}
            className="h-[40px] w-full rounded-[10px] border border-[#E0E0E0] bg-white px-5 py-3 text-[15px] font-normal leading-6 tracking-[0.01em] text-black outline-none placeholder:text-[#828282] focus:border-[#208BFB]"
          />
        ))}

        <textarea
          placeholder="Message"
          className="h-[109px] w-full resize-none rounded-[10px] border border-[#E0E0E0] bg-white px-5 py-[10px] text-[15px] font-normal leading-6 tracking-[0.01em] text-black outline-none placeholder:text-[#828282] focus:border-[#208BFB]"
        />

        <button
          type="submit"
          className="h-[40px] w-full rounded-[10px] bg-[#208BFB] px-6 py-3 text-center font-['Montserrat',sans-serif] text-[16px] font-bold uppercase leading-none tracking-normal text-white"
        >
          send
        </button>
      </form>
    </section>
  );
}

export default AppointmentSection;
