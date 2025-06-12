export default function DropMenuItem({ name, className = "" }) {
  return (
    <li
      className={`flex h-full items-end pb-1 text-[.9rem] decoration-3 cursor-default underline-offset-14 hover:underline ${className}`}
    >
      <p>{name}</p>
    </li>
  );
}
