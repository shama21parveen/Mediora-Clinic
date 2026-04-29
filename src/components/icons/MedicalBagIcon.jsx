function MedicalBagIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      <path d="M9 13h6" />
      <path d="M12 10v6" />
    </svg>
  );
}

export default MedicalBagIcon;
