export default function DropMenuContainer({ children }) {
  return (
    <ul className="flex flex-1 justify-center gap-x-6 ">
      {children}
    </ul>
  );
}
