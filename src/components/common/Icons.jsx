function Icon({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
    </Icon>
  );
}

export function BagIcon(props) {
  return (
    <Icon {...props}>
      <path d="M5 8h14v12H5z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </Icon>
  );
}
