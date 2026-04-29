function ClockIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  );
}

export default ClockIcon;
