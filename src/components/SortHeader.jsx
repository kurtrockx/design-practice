export default function SortHeader({ children, link }) {
  return (
    <div className="flex gap-3 px-4 py-6 justify-between items-center">
      <div className="flex gap-3">{children}</div>
      <a href="#" className="font-semibold underline decoration-2 underline-offset-6">{link}</a>
    </div>
  );
}
