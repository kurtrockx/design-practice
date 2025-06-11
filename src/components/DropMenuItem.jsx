export default function DropMenuItem({ name, className = '' }) {
  return <li className={`hover:underline text-sm ${className}`}>{name}</li>;
}
