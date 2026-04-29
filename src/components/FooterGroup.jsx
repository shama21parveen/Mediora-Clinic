function FooterGroup({ title, items }) {
  return (
    <div>
      <p className="text-sm font-semibold text-primaryDark">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-slate-500">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterGroup;
