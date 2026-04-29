function SectionHeader({ title, subtitle, align = "center" }) {
  const isLeft = align === "left";

  return (
    <div className={isLeft ? "text-left" : "text-center"}>
      <div
        className={`inline-flex h-1.5 w-20 rounded-full bg-primary ${
          isLeft ? "" : "justify-center"
        }`}
      />
      <h2 className="mt-4 text-2xl font-bold text-primaryDark sm:text-[30px]">
        {title}
      </h2>
      <p
        className={`mt-3 text-sm leading-7 text-slate-500 ${
          isLeft ? "max-w-2xl" : "mx-auto max-w-3xl"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default SectionHeader;
