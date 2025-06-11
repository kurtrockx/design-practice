export default function DropMenuItem({ name, className = "" }) {
  return (
    <li
      className={`flex h-full items-end text-sm decoration-3 cursor-default underline-offset-10 hover:underline ${className}`}
    >
      <p>{name}</p>
    </li>
  );
}
