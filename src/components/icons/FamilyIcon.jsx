function FamilyIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M17 21v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2" />
      <circle cx="11" cy="8" r="4" />
      <path d="M21 21v-2a3 3 0 0 0-2-2.83" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default FamilyIcon;
