function InputField({ label, type, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-primaryDark">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-[20px] border border-line bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white"
      />
    </label>
  );
}

export default InputField;
