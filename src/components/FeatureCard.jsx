function FeatureCard({ title, Icon }) {
  return (
    <article className="rounded-[24px] border border-line bg-slate-50 px-5 py-6 text-center transition hover:-translate-y-1 hover:shadow-panel">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-7 w-7" />
      </div>
      <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">
        {title}
      </p>
    </article>
  );
}

export default FeatureCard;
