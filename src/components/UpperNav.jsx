import downIcon from "../assets/down.svg";
export default function UpperNav() {
  return (
    <div className="flex items-center justify-center gap-2 bg-black py-3 text-xs font-bold text-white uppercase">
      <p>free shipping for adiclub members and all orders in app</p>
      <img src={downIcon} alt="down arrow" className="h-4" />
    </div>
  );
}
