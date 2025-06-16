export default function SortButtons({
  name = "",
  active = false,
  onChooseHeader,
}) {
  return (
    <button
      onClick={() => onChooseHeader(name)}
      className={`border px-2 py-px uppercase ${active === true && 'bg-black text-white'} cursor-pointer border-black/50 duration-200 hover:border-black`}
    >
      {name}
    </button>
  );
}
