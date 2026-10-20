import "./IconButton.css";

export default function IconButton({
  label,
  children,
  className = "",
  ...rest
}) {
  return (
    <button
      type="button"
      className={`icon-button ${className}`.trim()}
      aria-label={label}
      {...rest}
    >
      {children}
    </button>
  );
}
