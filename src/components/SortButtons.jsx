export default function SortButtons({ name = "", active = false }) {
  return <button className={`border px-2 py-px uppercase ${active}`}>{name}</button>;
}
